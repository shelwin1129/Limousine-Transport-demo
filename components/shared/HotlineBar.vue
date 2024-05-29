<template>
  <div class="hotlinebar">
    <div class="hotlinebar-item">
      <span><Icon name="tabler:phone-call" style="margin-right: 5px;font-size: 16px;"/><NuxtLink to="/contact" style="font-weight: bold">Customer Service Hotline</NuxtLink>: <a href="tel:+6565353534">+65 6535 3534 </a>(SG) <a href="tel:+60326308400">+6 03 2630 8400</a> (MY) <a href="tel:+61290984321">+61 2 9098 4321</a>(AU)  <a href="tel:+85230519350">+852 3051 9350</a> (HK) <a href="tel:+16466935999">+1 646 693 5999</a> (US)</span>
      <NuxtLink to="/faq">Driver Join Us</NuxtLink>
    </div> 
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .hotlinebar {
    width: 100%;
    height: 30px;
    background-color: #cc181e;
  }

  .hotlinebar-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 980px;
    height: 100%;
    margin:auto;
    color: white;
    font-size: 10px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .hotlinebar-item a {
    color: white;
    font-weight: 100;
    text-decoration: none;
  }

  .hotlinebar-item a:hover {
    border-bottom: 1px dotted white; 
  }

</style>