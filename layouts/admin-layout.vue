<template>
  <div class="app" v-if="isMounted">
    <LeftSidebar ></LeftSidebar>
    <div class="content">
      <slot></slot>
      <ToastList/>
    </div>
  </div>
</template>

<script setup>
  //prevent rendering on both server side and client side
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

.content {
  flex-grow: 1; 
  padding: 41px 57px;
  background-color: rgba(0, 0, 0, 0.05);
}

body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; 
}

input,
textarea {
  font-size: 16px;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
}

</style>
