<template>
  <div class="footer">
    <div class="footer-buttons">
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Suggestions</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Disclaimer</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Terms</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Privary</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Partners</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Contact</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Sitemap</span>
      </NuxtLink>
    </div>

    <div class='footer-copyright'>Copyright, brands and trademark belongs to their respective owners. <br><b>© 2018 Limousine Transport | All rights reserved.</b></div>
  </div>
</template>

<style scoped>
  .footer {
    width: 980px;
    margin: auto;
    padding: 10px 0;
    border-top: 1px dashed grey;
  }

  .footer .footer-copyright {
    width: 100%;
    text-align: center;
    line-height: 1.5;
  }

  .footer .footer-buttons {
    display:flex;
    justify-content: space-evenly;
    padding: 10px 15%;
    text-align: center;
  }

  .menu-button {
    color: black;
    opacity: 0.6;
    font-size: 18px;
    text-decoration: none;
  }

  .menu-button:hover {
    opacity: 1;
  }
</style>