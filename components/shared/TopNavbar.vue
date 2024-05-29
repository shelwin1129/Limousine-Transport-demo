<template>
  <div class="topNavbar">
    <NuxtLink to="/" class="logo">
      Limousine Transport
    </NuxtLink>
    <div class="menu">
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Home</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Singapore </span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Singapore ▾</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Singapore to Malaysia ▾</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Malaysia</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Events</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">FAQs</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Careers ▾</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="https://www.agoda.com/search?pcs=1&cid=1740416&hl=en&city=4064&checkIn=2024-05-25&checkOut=2024-05-26&adults=1&rooms=1&pslc=1" target="_blank" class="menu-button" title="">
        <span class="menu-text">Hotels</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/articles" class="menu-button">
        <span class="menu-text">Article ▾</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/contact" class="menu-button" >
        <span class="menu-text">Contact</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button" >
        <span class="menu-text">Customer Login</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button" title="Book now">
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
    display: block;
    padding: 10px 0;
    color: black;
    font-size: 28px;
    font-weight: bold;
    font-family:'Times New Roman', Times, serif;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
  }

  .topNavbar .dividing-line {
    width: 1px;
    height: 1rem;
    margin: auto 0;
    background-color: #C8C7C7;
  }

  .topNavbar .menu {
    display:flex;
    justify-content: space-evenly;
    padding: 6px 0;
    margin-bottom: 12px;
    border-top: 1px dotted #C8C7C7;
    border-bottom: 1px dotted #C8C7C7;
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

  /* Hotel button */
  .menu-button:nth-child(9):hover {
    background-color: grey;
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