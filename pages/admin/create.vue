<template>
    <div>
        <h2>Create Article</h2>        
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
                    <table>
                        <thead>
                            <tr>
                                <th>Added Components</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(component, index) in components" :key="index">
                                <td>
                                    <span title="Delete component" @click="deleteComponent(index)">&times;</span>
                                    <TextWithImage @update:textWithImage="updateComponentData(index, $event)"/>
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
        <div class="button-container">
            <button @click.prevent="saveArticle(true)">Publish</button>
            <button @click.prevent="saveArticle(false)">Save as Draft</button>
        </div>
    </div>
</template>


<script setup>
    definePageMeta({
        layout: 'admin',
    });
    
    const components = ref([]); //An reactive array that stores components added and can changes can be reflected on the table
    const ArticleData = reactive({
        title: 'asdasadsdas',
        author: 'asddasdsasda',
        published: false,
        components: components, // This will store the data for text paragraphs and images
    })
    
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

    const saveArticle = async (published) => {
        ArticleData.published = published;
        // Resolve all promises in the components array
        const resolvedComponents = await Promise.all(ArticleData.components.map(async (component, index) => {
            if (component.type === 'textWithImage') {
                return {
                    ...component,
                    order: index,
                    paragraph: components[index].paragraph,
                    image: components[index].image,
                };
            }
        }));

        // Create the article data object with resolved components
        const articleData = {
            title: ArticleData.title,
            author: ArticleData.author,
            published: ArticleData.published,
            components: resolvedComponents
        };

        const res = await useFetch('/api/post', {
            method: "POST",
            body: articleData,
        });

        if (!res.data) {
            throw createError({ statusCode: 400, statusMessage: 'Oops, something went wrong' });
        }
        
        const router = useRouter();
        router.push('/admin/pages')
    };


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

    .basic-information, .body-components {
        width: 100%;
        background-color: white;
    }

    .basic-information {
        margin-bottom: 2rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
    }

    table th,
    table td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    table th {
        background-color: #f5f5f5;
        font-weight: bold;
    }

    table td {
        position: relative;
        padding: 15px 20px 15px 20px; /* Remove any default padding */
        text-align: left; /* Align content to the left */
    }

    table td span {
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