<template>
  <div>
    <h2>Recent Articles</h2>
    <main>
      <p v-if="pending">
        <span class="loading"></span>
      </p>
      <p v-else-if="error">Error while fetching pages 💔</p>
      <div v-else>
        <Post class="post" v-for="publishedArticle in publishedArticles" :key="publishedArticle.article_id" v-bind:article="publishedArticle" />
      </div>
    </main>
  </div>
</template>

<script setup>
  const { data: publishedArticles, error, pending } = await useFetch('/api/publishedArticles');
</script>

<style>
.post {
  background: white;
  transition: box-shadow 0.1s ease-in;
}

.post:hover {
  box-shadow: 1px 1px 3px #aaa;
}

.post,
.post {
  margin-top: 2rem;
}
</style>
