<template>
  <div class="page">
    <h1>Drafts</h1>
    <main>
      <p v-if="pending">
        <span class="loading"></span>
      </p>
      <p v-else-if="error">Error while fetching drafts 💔</p>
      <div v-else>
        <Post class="article-box" v-for="draft in drafts" :key="draft.article_Id" :article="draft" />
      </div>
    </main>
  </div>
</template>

<script setup>
  const { data: drafts, error, pending } = await useFetch('/api/drafts')
</script>

<style>
  .article-box {
    background: white;
    transition: box-shadow 0.1s ease-in;
  }

  .article-box:hover {
    box-shadow: 1px 1px 3px #aaa;
  }

  .article-box+.article-box {
    margin-top: 2rem;
  }
</style>
