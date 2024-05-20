<template>
  <div @click="navigate(article)" class="post-container">
    <div class="content-container">
      <h2>{{ article.title }}</h2>
      <small style="margin-right:10px;"><span class="user-icon">&#128100;</span>{{ article.author }}</small>
      <small>{{ formatDate(article.createdAt) }}</small>
      <!-- <p v-html="article.short_summary"></p> -->
    </div>
    <button class="read-button" @click="navigate(article)">Read More</button>
  </div>
</template>

<script setup>
  const { article } = defineProps({
    article: {
      type: Object,
    }
  })

  const router = useRouter()
  const navigate = (article) => router.push(`/article/${article.article_id}`)  //Navigate to the article accordingly

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long', // This can display the full month name
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
</script>

<style scoped>
.post-container {
  height: 200px;
  display: flex;
  flex-direction: row;
  position: relative;
}

.image {
  max-width: 300px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and crop if necessary */
}

.content-container {
  padding: 2rem;
}

small:nth-child(1) {
  margin-right:10px;
}

p {
  margin-top: 1rem;
}

.read-button {
  width: 100px;
  height: 40px;
  margin: 0 15px 10px 0;
  position: absolute;
  right:0;
  bottom: 0;
  border: 1px solid #0186B6;
  color: #0186B6;
  right: 0;
}
</style>
