<template>
  <div class="footer">
    <div class="footer-buttons">
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Suggestions</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Disclaimer</span>
      </NuxtLink>
      <NuxtLink to="/terms" class="menu-button">
        <span class="menu-text">Terms</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Privary</span>
      </NuxtLink>
      <NuxtLink to="/partners" class="menu-button">
        <span class="menu-text">Partners</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Contact</span>
      </NuxtLink>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Sitemap</span>
      </NuxtLink>
    </div>
    <div class='footer-copyright'>Copyright, brands and trademark belongs to their respective owners. <br><b>© 2024 Limousine Transport | All rights reserved.</b></div>
    <div class="creditcards">
      <img src="/images/creditcards/mastercard.png" alt="mastercard.ong">
      <img src="/images/creditcards/verified_visa.jpg" alt="verified_visa.jpg">
    </div>
  </div>
</template>

<style scoped>
  .footer {
    width: 980px;
    margin: auto;
    padding: 10px 0;
    border-top: 1px dotted #C8C7C7;
  }

  .footer .footer-copyright {
    width: 100%;
    margin-top: 10px;
    font-size: 12px;
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
    opacity: 0.5;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    transition: ease-in-out 0.2s;
  }

  .menu-button:hover {
    opacity: 1;
  }

  .creditcards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  img:nth-child(1) {    
    width: 150px;
    height: 72.8px;
    scale: 0.75;
  }

  img:nth-child(2) {
    scale: 0.7
  }
 
</style>