<template>
  <Title>Frequently Asked Questions - Limousine Transport</Title>
  <h1>Frequently Asked Questions</h1>
  <p>Most frequently asked question are listed here. If got more enquires cannot be view here, please visit the 'contact' page</p>
  <hr>
  <div class="terms-and-conditions-container">
    <h2>1. Terms & Conditions</h2>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'guest-layout',
    auth: false,
  })
</script>

<style scoped>
  hr {
    width: 200px;
    border-top: 1px dotted #C8C7C7;
    margin: 20px auto;
  }

  h1 {
    margin-top: 20px;
    font-size: 28px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }
</style>