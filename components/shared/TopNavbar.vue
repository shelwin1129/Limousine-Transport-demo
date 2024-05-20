<template>
  <div class="topNavbar">
    <div class="logo">
      Limousine Transport
    </div>
    <div class="menu">
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Home</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Singapore </span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Singapore ▾</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Singapore to Malaysia ▾</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Malaysia</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Events</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">FAQs</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Careers ▾</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Hotels</span>
      </NuxtLink>
      <NuxtLink to="/articles" class="menu-button" title="">
        <span class="menu-text">Article ▾</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Contact</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Customer Login</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="">
        <span class="menu-text">Book Now</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .topNavbar {
    width: 980px;
    margin: auto;
  }

  .topNavbar .logo {
    padding: 12px;
    font-size: 28px;
    font-weight: bold;
    font-family:'Times New Roman', Times, serif;
  }

  .topNavbar .menu {
    display:flex;
    justify-content: space-evenly;
    padding: 6px 0;
    margin-bottom: 12px;
    border-top: 1px dashed grey;
    border-bottom: 1px dashed grey;
  }

  .topNavbar .menu a {
    color: black;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  .menu-button {
    padding: 8px 8px;
  }


  .menu-button:nth-last-child(1) {
    border-radius: 4px;
    background-color: #CC181E; 

    .menu-text {
      color: white;
    }
  }
  
  .menu-button:nth-last-child(1):hover {
    background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
  }
</style>