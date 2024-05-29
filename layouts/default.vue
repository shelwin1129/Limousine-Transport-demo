<template>
  <div v-if="isMounted">
    <HotlineBar/>
    <TopNavbar/>
    <div class="slot">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
  const isMounted = ref(false);
  onMounted(()=> {
    isMounted.value = true;
  });
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  
  body {
    font-family: Arial, Helvetica, sans-serif
  }
  
  .slot {
    width: 980px;
    margin: auto;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  a {
    cursor: pointer;
  }
</style>