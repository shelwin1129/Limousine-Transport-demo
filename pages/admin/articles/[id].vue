<template>
    <article v-if="article">
      <header>
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <small>By {{ article.author }}</small> <span class="separator">|</span> <small>{{ formatDate(article.createdAt) }}</small>
        </div>
        <hr>
      </header>
      
      <!-- Article content-->
      <div v-for="component in sortedComponents" :key="component.component_id" class="content-section">
        <div v-if="isOdd(component.order)" class="content-container odd">
          <div class="content-text" v-html="formatParagraphs(component.paragraphs)"></div>
          <img :src="component.image.imageInBinary" class="content-image">
        </div>
        <div v-else class="content-container even">
          <img :src="component.image.imageInBinary" class="content-image">
          <div class="content-text" v-html="formatParagraphs(component.paragraphs)"></div>
        </div>
      </div>
    </article>
</template>
  
<script setup>
  const route = useRoute();
  const { data: article, error, pending } = await useFetch(`/api/post/${route.params.id}`)

  //sort the components by the order attribute
  const sortedComponents = computed(() => {
    return article.value.components.sort((a, b) => a.order - b.order);
  });

  const formatParagraphs = (text) => {
    return text.replace(/\n/g, '<br>');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-MY', options)
  }
  
  const isOdd = (num) => num % 2 !== 0
</script>
  
<style scoped>
  header {
    width: 1000px;
    margin: auto;
  }

  header h1 {
    font-size: 32px;
    text-align: justify,
  }

  header hr {
    margin-bottom: 30px; 
  }

  .article-meta {
    margin: 5px 0 30px 0;
  }

  .article-meta small {
    color: grey;
    font-size: 16px;
    font-weight: 500;
  }

  .article-meta span {
    margin: 0 10px;
    color: grey;
  }

  .content-section {
    width: 1000px;
    margin: auto;
  }

  .content-container {
    display: flex;
    margin-top: 20px; 
  }

  .content-container .odd {
    flex-direction: row-reverse;
  }

  /* when it's odd number, gap between image and text increased */
  .content-container.odd, .content-container.even {
    gap: 35px;
  }

  .content-container .even {
    flex-direction: row;
  }

  .content-image {
    width: 480px;
    height: 317px;
    object-fit: cover;
  }

  .content-text {
    flex: 1;

    text-align: justify;
  }
</style>