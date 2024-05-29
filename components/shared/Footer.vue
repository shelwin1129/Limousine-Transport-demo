<template>
  <div class="footer">
    <div class="footer-buttons">
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Suggestions</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Disclaimer</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/terms" class="menu-button">
        <span class="menu-text">Terms</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/privacy" class="menu-button">
        <span class="menu-text">Privacy</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/partners" class="menu-button">
        <span class="menu-text">Partners</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/contact" class="menu-button">
        <span class="menu-text">Contact</span>
      </NuxtLink>
      <span class="dividing-line"></span>
      <NuxtLink to="/" class="menu-button">
        <span class="menu-text">Sitemap</span>
      </NuxtLink>
    </div>
    <div class='footer-copyright'>Copyright, brands and trademark belongs to their respective owners. <br><b>© 2024 Limousine Transport | All rights reserved.</b></div>
    <div class="creditcards">
      <img src="/images/creditcards/mastercard.png" alt="mastercard">
      <img src="/images/creditcards/verified_visa.jpg" alt="visa">
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
    margin-top: 5px;
    font-size: 11px;
    text-align: center;
    line-height: 1.5;
  }

  .footer .footer-buttons {
    display:flex;
    justify-content: space-evenly;
    padding: 10px 20%;
    text-align: center;
  }

  .menu-button {
    color: black;
    opacity: 0.5;
    font-size: 12px;
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
  }

  img:nth-child(1) {    
    width: 170px;
    scale: 0.75;
  }

  img:nth-child(2) {
    scale: 0.6
  }

  .dividing-line {
    border-left: 1px solid #C8C7C7;
  }
 
</style>