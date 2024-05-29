<template>
  <Title>Partners - Limousine Transport</Title>
  <h1>Parterships</h1>
  <hr>
  <h2>Information Services</h2>
  <div class="cards-container">
    <div v-for="(it_service, index) in information_services" :key="index" class="card">
      <div class='logo-image-container'>
        <img :src='it_service.image_path' :alt='it_service.name'>
      </div>
      <h3 class="title">{{ it_service.name }}</h3>
      <p class="description" v-html="it_service.description"></p>
    </div>
  </div>
  <div v-for="(service,index) in services" :key="index" style="margin-bottom: 30px">
    <h2 style="margin: 30px 0 15px">{{ service.service }}</h2>
    <div v-for="info in service.infos">
      <h3 class="title">{{ info.name }}</h3>
      <p class="description">{{ info.description }}</p>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'guest-layout',
    auth: false,
  })

  const information_services = ref([
    {image_path:'/images/partners/changi-airport-group-logo.png', name: 'Changi Airport Group', description: 'Changi Airport Group, manager and operator of <a href="https://www.changiairport.com/" target="_blank">Singapore Changi Airport</a>, connecting over 200 destinations worldwide, with 5000 arrivals and departures a week by 80 international airlines.'},
    {image_path:'/images/partners/singapore_airline_logo.png', name: 'Singapore Airlines', description: 'Singapore Airlines <a href="https://www.singaporeair.com/flight-status" target="_blank">flight information status</a> for all connecting, arrivals and departure flight transfers. Singapore Airlines is the top 15 carriers worldwide in terms of revenue passenger kilometres, 11th largest airline in Asia and ranked 6th in the world for international passengers carried.'},
    {image_path:'/images/partners/singapore_cruise_centre.jpeg', name: 'Singapore Cruise Centre',description: 'Comprising the International Passenger Terminal (IPT) and the Regional Ferry Terminal (RFT), <a href="https://singaporecruise.com.sg/" target="_blank">Singapore Cruise Centre</a> handles a throughput of over 7 million cruise and ferry passengers a year, of which about 950,000 are cruise passengers.'}
  ])

  const services = ref([
    { service:'Limousine Services', 
      infos: [
        {name: 'ReserveLimo.com', description: 'Receive Multiple Instant Price Quotes for your next Wedding, Anniversary, Bachelor & Bachelorette, Concert, Prom & Homecoming, or big event on ReserveLimo.com your #1 rated resources.'},
        {name: 'Singapore Limousine', description: "Limousine Transport Service Private Limousines are available to take you to your hotel upon arrival or take you back to the airport when it's time for you to leave the country. A flat fee from S$50 onwards, depending on the type of limousine, is charged for one-way travel to or from the airport to your hotel."}
      ]
    },
    {
      service: 'Dive Travel',
      infos: [
      {name: 'Dive Sipadan', description: 'Receive Multiple Instant Price Quotes for your next Wedding, Anniversary, Bachelor & Bachelorette, Concert, Prom & Homecoming, or big event on ReserveLimo.com your #1 rated resources.'},
      {name: 'DIve Manado', description: 'Receive Multiple Instant Price Quotes for your next Wedding, Anniversary, Bachelor & Bachelorette, Concert, Prom & Homecoming, or big event on ReserveLimo.com your #1 rated resources.'},
      ]
    },
    {
      service: 'Relax & rejuvenate',
      infos: [
        {name: 'Scuba Diving', description: 'Receive Multiple Instant Price Quotes for your next Wedding, Anniversary, Bachelor & Bachelorette, Concert, Prom & Homecoming, or big event on ReserveLimo.com your #1 rated resources.'},
        {name: 'Swimming Lessons', description: 'Receive Multiple Instant Price Quotes for your next Wedding, Anniversary, Bachelor & Bachelorette, Concert, Prom & Homecoming, or big event on ReserveLimo.com your #1 rated resources.'},
      ]
    }
  ])
</script>

<style scoped>
  hr {
    width: 200px;
    border-top: 1px dotted #C8C7C7;
    margin: 20px auto;
  }

  h1 {
    margin-top: 30px;
    font-size: 32px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .partner-container {
    margin-bottom: 20px;
  }

  .cards-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .card {
    width: 280px;
    padding: 10px 20px 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .logo-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  .logo-image-container img {
    width: 200px;
    object-fit:cover;
  }

  .title {
    margin: 10px 0;  
    font-size: 16px;
    font-family: Georgia, 'Times New Roman', Times, serif
  }

  .description {
    color:#333333;
    font-size: 13px;
    line-height: 1.5;
    text-align: justify;
  }
</style>

<style>
  .cards-container .description a {
    color: #990000;
    text-decoration-style: dotted;
  }

  .cards-container .description a:hover {
    text-decoration: none;
  }
</style>