<template>
    <div v-if="article">
        <form>
            <h2>Edit Article</h2>
            <div class="main-body">
                <div class="article-info">
                    <h4>Article Info</h4>
                    <hr>
                    <table class="info-table">
                        <tr>
                            <td>Article ID:</td>
                            <td>{{ article.article_id }}</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>{{article.published ? 'Published': 'Draft'}}</td>
                        </tr>
                        <tr>
                            <td>Created:</td>
                            <td>{{ formatDate(article.createdAt) }}</td>
                        </tr>
                        <tr>
                            <td>Modified:</td>
                            <td>{{ article.updatedAt != article.createdAt ? formatDate(article.updatedAt) : '-'}} </td>
                        </tr>
                    </table>
                </div>
                <div class="update-form">
                    <div class="basic-information">
                        <Collapse :id=0 :collapse="collapsePanels[0].isVisible" title="Basic Information" @toggle="toggleCollapse">
                            <template v-slot:collapseContent>
                                <label>Title</label>
                                <input type='text' placeholder="Title" v-model="ArticleData.title" required></input>

                                <label>Author</label>
                                <input type='text' placeholder="Author" v-model="ArticleData.author" required></input>
                            </template>
                        </Collapse>
                    </div>
                    <div class="body-component">
                        <Collapse :id=1 :collapse="collapsePanels[1].isVisible" title="Content Components" @toggle="toggleCollapse">
                            <template v-slot:collapseContent>
                                <table class="component-table">
                                    <thead>
                                        <tr><th>Added Components</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(component, index) in components" :key="index">
                                            <td>
                                            <span title="Delete component" @click="deleteComponent(index)">&times;</span>
                                            <TextWithImage
                                            :initialParagraph="component.paragraph"
                                            :initialImageFile="component.image"
                                            @update:textWithImage="updateComponentData(index, $event)"
                                            />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="addComponents">
                                    <div class="dropdown">
                                        <button class="dropbtn" @click.prevent="toggleDropdown">Add component <span class="material-symbols-outlined">keyboard_arrow_down</span></button>
                                        <div v-if="showDropdown" class="dropdown-content">
                                            <button @click.prevent="addComponent('textWithImage')">Add text: Text with Image</button>
                                        </div>
                                    </div>
                                    <span>to components table above</span>
                                </div>
                                <span style="font-size: 14px;">These components will make up your article page</span>
                            </template>
                        </Collapse>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <button @click.prevent="updateArticle()">Save</button>
            </div>
        </form>
    </div>
    <div v-else>
        <span>Loading...</span>
    </div>
    
</template>


<script setup>
    definePageMeta({
        layout: 'admin-layout',
    })
    const route = useRoute();
    const router = useRouter();
    const { data: article, error, pending } = await useFetch(`/api/post/${route.params.id}`)

    const components = ref([]); //An reactive array that stores components added and can changes can be reflected on the table


    const ArticleData = reactive({
        title: '',
        author: '',
        published: '',
        components: components, // This will store the data for text paragraphs and images
    })

    //assign fetched data to input fields
    if (article.value) {
        ArticleData.title = article.value.title;
        ArticleData.author = article.value.author;
        ArticleData.published = article.value.published;

        components.value = article.value.components.map((component) => {
            // Transform the component data as needed, for example:
            return {
                type: component.componentType,
                order: component.order,
                paragraph: component.paragraphs,
                image: component.image.imageInBinary,
            };
        });        
    }

    //convert to base64 string b4 saving it into database
    const convertToBLOB = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const updateArticle = async () => {
        // Resolve all promises in the components array
        const resolvedComponents = await Promise.all(ArticleData.components.map(async (component, index) => {
            if (component.type === 'textWithImage') {
                const imageDataUrl = await convertToBLOB(components[index].image);
                return {
                    ...component,
                    order: index,
                    paragraph: components[index].paragraph,
                    image: imageDataUrl,
                };
            }
        }));

        // Create the article data object with resolved components
        const articleData = {
            title: ArticleData.title,
            author: ArticleData.author,
            published: false,
            components: resolvedComponents,
        };

        const res = await useFetch('/api/post', {
            method: "PUT",
            body: articleData,
        });

        if (!res.data) {
            throw createError({ statusCode: 400, statusMessage: 'Oops, something went wrong' });
        }
        
        router.push('/pages')
    };

    const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return new Date(dateString).toLocaleString('en-MY', options);
    }

    const collapsePanels = ref([
        { id: 0, isVisible: true },
        { id: 1, isVisible: true },
    ]);

    const openCollapse = (id) => {
        collapsePanels.value.forEach((el, index) => {
            if (id === index) {
                el.isVisible = !el.isVisible;
            }
        });    
    };  
  
    const toggleCollapse = (id) => {
        openCollapse(id);
    }

    //Dropdown list
    const showDropdown = ref(false); //default false
    const toggleDropdown = (event) => {
        showDropdown.value = !showDropdown.value;
    }

    onMounted(() => {
        document.addEventListener('click', closeDropdown); //whenever a click occurs anywhere on the page, the closeDropdown function will be called.
    });

    onUnmounted(() => {
        document.removeEventListener('click', closeDropdown);  //removes the click event listener for cleanup and to prevent memory leaks.
    });

    const closeDropdown = (event) => {
        if (!event.target.closest('.dropdown')) {
            showDropdown.value = false;
        }
    };

    // Function to update component data based on emitted events
    const updateComponentData = (index, data) => {
        components[index] = { ...components[index], ...data };
    };

    const addComponent = (type) => {
        components.value.push({ type });
        showDropdown.value = false;
    };

    const deleteComponent = (index) => {
        components.value.splice(index, 1);
    };
</script>

<style scoped>
  h2 {
      margin-bottom: 2rem;
  }

  .main-body {
    display: flex;
    flex-direction: row-reverse;
    gap: 30px;
  }

  .article-info {
    width: 380px;
    height: 170px;
    border: 1px dashed grey;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  .article-info h4 {
    padding: 12px 14px 6px;
    margin-bottom: 5px;
    font-size: 18px;
  }

  .info-table tr td {
    font-size: 16px;
  }

  .info-table tr td:nth-child(1) {
    width: 120px;
    padding: 4px 14px;
    font-weight: bold;
  }

  .update-form {
    flex: 1;
  }

  .basic-information, .body-components {
      width: 100%;
      background-color: white;
  }

  .basic-information {
      margin-bottom: 2rem;
  }

  .component-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #ddd;
  }

  .component-table th,
  .component-table td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
  }

  .component-table th {
      background-color: #f5f5f5;
      font-weight: bold;
  }

  .component-table td {
      position: relative;
      padding: 15px 20px 15px 20px; /* Remove any default padding */
      text-align: left; /* Align content to the left */
  }

  .component-table td span {
      position: absolute;
      top: 10px;
      right: 20px;
      color: red;
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
  }

  label {
      font-size: 16px;
      font-weight: 500;
  }

  label::after {
      content: " *";
      color: red;
  }

  input {
      width: 100%;
      margin: 10px 0;
      padding: 12px 8px;
      border: none;
      box-sizing: border-box;
      border-radius: 3px;
      background-color: #edeef0;
      font-size: 16px;
  }

  .addComponents {
      margin-top: 100px;
      display: flex;
      align-items: center;
      gap: 10px;
  }

  .addComponents span {
      font-size: 14px;
  }

  .dropdown .dropbtn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      padding: 6px 6px 6px 12px;
      border: 1px solid #a7b6c7;
      border-radius: 12px;
      background-color: #d7e5f5;
      box-shadow: inset 0 1px 0 0 white;
      color: #1a3e66;
      text-align: center;
      text-shadow: 0 1px 1px #fff;
  }

  .dropdown .dropbtn span {
      font-size: 20px;
      color: #1a3e66;
  }

  .dropdown .dropbtn:hover, .dropdown .dropbtn:focus {
      background-color: #ccd9e8;
      border: 1px solid #9caaba;
      color: #163659;
  }

  .dropdown-content {
      min-width: 160px;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      border: 1px solid #9caaba;
      border-radius: 10px;
      background-color: #f9f9f9; 
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .dropdown-content button {
      width: 100%;
      padding: 3px 18px;
      font-size: 16px;   
      text-align: left;
  }

  .dropdown-content button:hover {
      background-color: #ddd;
  }

  .button-container {
      margin-top: 1rem;
  }

  .button-container button {
      padding: 0.5rem 1.5rem;
      border-radius: 2px;
      font-size: 16px;
  }

  .button-container button:nth-child(1) {
      background: #0186B6;
      color: white;
      margin-right: 10px;
  }

  .button-container button:nth-child(2) {
      display: inline-block;
      color: #0186B6;
  }
</style>