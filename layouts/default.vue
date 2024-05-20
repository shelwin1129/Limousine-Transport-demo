<template>
  <TopNavbar/>
  <div class="slot">
    <slot></slot>
  </div>
  <Footer></Footer>
</template>

<script setup>

</script>

<style>
  .slot {
    width: 980px;
    margin: auto;
  }
</style>