<template>
  <Title>Singapore Limousine Transport</Title>
  <div class="main-image">
    <img src="/images/dashboard/singapore-limousine.jpg" @click="console.log('hi')">
    <h1>Travel in luxury & comfort</h1>
    <div class="booking-selection-box">
      <h2>Online Booking</h2>
      <div class="select-input">
        <select>
          <option value="0">- Select Service -</option>
          <option value="1">Arrival Transfer</option>
          <option value="2">Departure Transfer</option>
          <option value="3">Point-to-point transfer</option>
          <option value="3">Hourly Disposal</option>
        </select>
      </div>
      <button class="book-btn">Book Now</button><br>
      <button class="quote-btn">Get Quote</button>
    </div>
  </div>
  <div class="news-container">
    <h3>NEWS UPDATE</h3>
    <div v-for="(new_info, index) in news" :key="new_info.id" class="new-inner-container">
      <div> {{'0' + (index + 1) + ':' }}</div>
      <NuxtLink :to="new_info[2]" target="_blank" class='news-link'>
        <img src="/images/dashboard/link_external.png">
        {{ new_info[1] }}
      </NuxtLink>
    </div>
  </div>
  <div v-for="info in infomation" :key="info.id" class="country-summary">
    <img :src="info[3]" class="country-image">
    <div>
      <h3>{{ info[1] }}</h3>
      <p>{{ info[2] }}</p>
      <span class="explore" v-nuxt-html="info[4]"></span>
    </div>
  </div>
  <div class="trusted-brand-container">
    <div class="brand-statement">Trusted by the world's most respected brands.<br>
      The top choice for your limousine transportation needs.
    </div>
    <img src='/images/dashboard/logos-companies.png' class="logo-companies">


  </div> 
</template>


<script setup>
definePageMeta({
  layouts: 'default',
  auth: false,
})

const infomation = ref([
  ['1', 'Singapore', "Singapore, also known as the Lion City is an island city-state off southern Malaysia. Founded by Sir Thomas Stamford Raffles who was a British statesman, Lieutenant-Governor of British Java and Governor-General of Bencoolen. Since Singapore's independence in 1965, it has become one of the world's most prosperous country and busiest port. Singapore is a multicultural country and famous for delicious traditional food.", '/images/dashboard/singapore.jpg', 'Explore Singapore with our luxurious limousine vehicles <a href="/" class="text-link">here</a>'], 
  ['2', 'Kuala Lumpur', 'Kuala Lumpur, more commonly known as KL is the capital of Malaysia. It is one of the fastest growing metropolitan region in South East Asia. As the heart of Malaysia, KL has been seen blooming with skyscrapers and advancing science park. KL International Airport is the largest and busiest airport in Malaysia. With our limousine services, guest will be able to explore into Greater KL, Malacca, Genting Highlands, Cameron Highlands and other cities throughout West Malaysia.', '/images/dashboard/kl.jpg', 'Take a look at our limousine vehicles <a href="/" class="text-link">here</a> to bring you and your guest comfortably around Kuala Lumpur.'],
  ['3', 'Malacca', 'Malacca, is a living museum full of colours and wonders. If you love serenity and looking forward to living in history, Malacca is a place to visit with style. Located in the southern region of Peninsular Malaysia, it takes 3 hours by road from Singapore, and 3 hours from Kuala Lumpur. Take a walk at the Straits of Malacca during sunset with your loved ones, and indulge in ravishing food delight afterwards. Walk the history and visit as many museums as you can.', '/images/dashboard/malacca.jpg', 'Feel free to visit Malacca in style with our <a href="/" class="text-link">limo</a>.'],
  ['4', 'Johor', "Johor Darul Ta'zim is like a sister of Malacca. The royalties and the land itself have a very close history with Malacca makes it the best sequel of history ride. Modern and stylish, friendly Johorians will welcome you with smile and there are many to see. Johor is never too boring and always in tune for many kinds of excitement, be it history, shopping, wonderland (they have Legoland and Hello Kitty Land, to name a few!) and nature adventures.", '/images/dashboard/johor.jpg', 'Book a trip to Johor with us <a href="/" class="text-link">here</a>.']
])

const news = ref([
  ['1', 'Heavy traffic is expected at land checkpoints starting Friday, 17 Nov 2017 ', 'http://str.sg/4vgG'],
  ['2', 'Thumbprint scanning to be extended to car travellers at Tuas, Woodlands checkpoints, 25 Sep 2017', 'https://www.todayonline.com/singapore/entering-or-leaving-spore-car-thumbprint-scans-will-now-be-required-tuas-woodlands-checkpoints']
])

</script>

<style scoped>
  .main-image {
    position: relative;
    width: 100%;
    height: 330px;
    padding: 1px;
    border: 1px solid rgb(202, 197, 197);
    box-sizing: border-box;
    cursor: pointer;
  }

  .main-image:hover {
    border: 1px solid black;
  }

  .main-image img {
    width: 100%;
    height: 100%;
  }

  .main-image h1 {
    position: absolute;
    top: 75%;
    right: 50px;
    color: white;
    font-size: 40px;
    font-weight: 100;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-shadow: 1px 2px 3px #000;
    user-select: none;
  }

  /* Selection box section */
  .booking-selection-box {
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 25px 45px;
    background-color: rgba(219, 216, 216, 0.6);
    border-radius: 10px; 
    text-align: center;
    cursor:default;
  }

  .booking-selection-box h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 100;
  }

  .select-input {
    width: 100%;
    margin: 15px 0 30px;
    border-radius: 5px;
    border: 1px solid transparent;
    box-sizing: border-box;
  }

  .select-input:hover {
    border: 1px solid grey;
  }

  select {
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  button {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 5px;
    color: white;
  }

  .book-btn {
    margin-bottom: 20px;
    background-color: #cc181e;
    font-size: 17px;
    transition: ease-in-out 0.2s;
  }

  .book-btn:hover {
    background-color:#990000;
  }

  .quote-btn {
    background-color: #333333;
    font-size: 14px;
  }

  /* News Section */
  .news-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px 15px 0;
    margin: 10px 0;
    border-top: 1px dotted #C8C7C7;
    border-bottom: 1px dotted #C8C7C7;
  }

  .news-container h3 {
    color: #990000;
    font-size: 11px;
    font-weight: bold;
  }

  .news-container .new-inner-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .news-container .new-inner-container div {
    padding: 1px;
    background-color: #990000;
    color: white;
    font-size: 11px;
    font-weight: bold;
  }

  .news-container .news-link {
    display: flex;
    gap: 5px;
    color: #990000;
    font-size: 11px;
    font-family: 'Times New Roman', Times, serif;
  }

  .news-container .news-link:hover {
    color: #164E78;
  }

  /* Summary Section */
  .country-summary {
    display:flex;
    gap: 20px;
    padding: 0 0 20px;
    margin-top: 20px;
    border-bottom: 1px dotted #C8C7C7;
  }


  .country-summary .country-image {
    width: 485px;
    height: 130px;
  }

  .country-summary h3 {
    margin: 0 0 10px;
    font-size: 24px;
    font-weight: 500;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .country-summary p {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 1.5;
    text-align: justify;
  }

  .country-summary .explore {
    font-size: 12px;
  }

  /* Brand section */
  .trusted-brand-container {
    padding: 35px 0 30px 0;
    text-align: center;
  }

  .trusted-brand-container .brand-statement {
    font-size: 28px;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    line-height: 1.5;
  }

  .trusted-brand-container .logo-companies {
    margin: 30px 0 10px;
  }
</style>

<!-- For v-html to detect -->
<style>
  .country-summary .explore .text-link {
    color: #990000;
    text-decoration:underline;
    text-decoration-style: dotted;
  }

  .country-summary .explore .text-link:hover {
    color: #164E78;
    text-decoration: none;
  }
</style>