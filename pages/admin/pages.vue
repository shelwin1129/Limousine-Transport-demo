<template>
    <div class="header">
      <span class="heading">Pages</span>
      <NuxtLink to="/admin/create" class="create-page-btn">+ Add New Page</NuxtLink>
    </div>
    <table cellspacing="0">
      <thead>
        <tr>
          <th style="width: 30%">Title</th>
          <th>Author</th>
          <th>ID</th>
          <th>Date</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="pages" v-for="page in pages"  :key="page.article_id">
          <td class="title" @click="navigate(page)">{{ page.title }}</td>
          <td v-if="page.author">{{ page.author }}</td>
          <td v-else>Unknown Author</td>
          <td>{{ page.article_id }}</td>
          <td v-if="!page.published">
            Created at<br>
            {{ formatDate(page.updatedAt) }}
          </td>
          <td v-else-if="page.updatedAt != page.createdAt" style="line-height: 1.5;">
            Last Modified on <br>
            {{ formatDate(page.updatedAt) }}
          </td>

          <td v-else>
            Published on<br> 
            {{ formatDate(page.createdAt) }}
          </td>
          <td> {{ page.published ? 'Published' : 'Draft' }}</td>
          <td>
            <div>
              <button v-if="!page.published" @click="navigate(page)"><span class="material-symbols-outlined" title="Publish page">publish</span></button>
              <span v-else class="placeholder"></span>
              <button @click="editPage(page.article_id)"><span class="material-symbols-outlined" style="color: #EECA40" title="Edit page">edit</span></button>
              <button @click="openDeleteDialog(page.article_id)"><span class="material-symbols-outlined" style="color: red" title="Delete page">delete</span></button>
            </div>
          </td>
        </tr>
        <tr v-else>
          <td colspan="7">No page created</td>
        </tr>
      </tbody>
    </table>
  <DeleteDialog v-if="isDialogOpen" v-bind:pageID="pageIDToDelete" @updated="isDialogOpen.value = false" @deleted="refreshPage"/>
</template>

<script setup>
  definePageMeta({
    layout: 'admin',
  })

  const { data: pages, refresh} = await useFetch('/api/fetchArticles')

  const route = useRoute();
  const router = useRouter();
  
  const pageIDToDelete = ref(null);
  const isDialogOpen = ref(false);

  const openDeleteDialog = (pageID) => {
    pageIDToDelete.value = pageID;
    isDialogOpen.value = true;
  };

  const refreshPage = async () => {
    await refresh();
  }

  const editPage = (id) => {
    router.push(`article/edit/${id}`)
  }

  const navigate = (page) => router.push(`/article/${page.article_id}`)  //Navigate to the article accordingly
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    margin-right: 10px;
    color: #4277F3;
    font-size: 20px;
    font-weight: bold;
  }
  
  .create-page-btn {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #4277F3;
    color: white;
    font-size: 18px;
    text-decoration: none
  }

  table {
    width: 100%;
    margin-top: 10px;
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
    text-align: left;
  }

  table td span {
    color: red;
    font-size: 26px;
    cursor: pointer;
  }


  tbody tr:nth-child(odd) {
    background-color: #e8e7e7;
  }

  td:nth-child(4) {
    line-height: 1.5;
  }

  td:nth-last-child(1) div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .placeholder { 
    display: inline-block;
    width: 24px; 
    height: 24px; 
    visibility: hidden;
  }

  .title {
    line-height: 1.5;
    font-weight:600;
    color: #0ca4eb;
    cursor: pointer;
  }

  .material-symbols-outlined {
    color: #2B99F3;
  }
</style>