<template>
  <Title>Terms & Conditions - Limousine Transport</Title>
  <h1>Terms</h1>
  <hr>
  <div class="terms-and-conditions-container">
    <h2>1. Terms & Conditions</h2>
    <ol>
      <li v-for="(term, index) in terms" :key="index">{{ formatNumber(1, index + 1) +  ' ' + term }}</li>
    </ol>
    <p class="feedback-text">For any feedbacks towards our limousine service, clients are advisable to contact our client service representative at <a href="tel:+6565353534" title="Call us at">+65 65353534</a> or <a href="mailto:booking@limousinetransport.com" title="Email us at">booking@limousinetransport.com.</a></p>
  </div>
  <div class='refund-policy-container'>
    <h2>2. Refund Policy</h2>
    <ol>
      <li v-for="(policy, index) in refund_policy" :key="index">{{ formatNumber(2, index + 1) + ' ' + policy }}</li>
    </ol>
  </div>
</template>

<script setup>
  definePageMeta({
    title: 'Terms & Conditions',
    layout: 'default',
    auth: false,
  })

  const formatNumber = (section, index) => {
    return `${section}.${index}`;
  };

const terms = ref([
  'Clients will be held liable and bear full financial liability for any vandalism, negligence or damages made to the limousine caused during the duration of the rental.',
  'Drug use is strictly prohibited by law.',
  'Underage drinking is strictly prohibited during the course of rental of limousine service.',
  'Limousine Transport is not held for any delays in travel time due to unforeseen weather, traffic , road conditions or delays beyond our control.',
  'Limousine Transport is not held responsible for any valuable items left in the limousine, during the course of rental of limousine. Clients are advisable to safeguard their valuable items with care.',
  'Vehicles cannot be loaded beyond allowed seating capacity. Driver reserves the right to not pick up the additional passenger or item not stated during reservation.',
])

const refund_policy = ref([
  'Limousine Transport is not held responsible for any cancellation or delay due to mechanical problems. We reserve the right to substitute a similar vehicle of equivalent rental value.',
  'For airport, cruise terminal and point to point transfers, all "no shows" by clients are non refundable.',
  'Any reservation for our Limousine Cabs or Private Limousines including Malaysia Transfers limousine services that is cancelled within 24 hours of the scheduled pick up time will be subjected to a full charge of the transfer or hourly rate that was agreed upon the the time of booking made. By making a reservation with Limousine Transport, clients are held responsible to agree with the cancellation policy.',
  'A full refund of the affected transfer is only made possible if Limousine Transport did not deliver the service paid. Else, all refunds requested by client will be charge S$5.00 processing fee.',
])
</script>

<style scoped>
  hr {
    width: 200px;
    border-top: 1px dotted #C8C7C7;
    margin: 20px auto;
  }

  h1 {
    margin-top: 20px;
    font-size: 28px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }


  .refund-policy-container {
    margin: 40px 0;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-family: Georgia, 'Times New Roman', Times, serif
  }

  ol {
    padding-left: 10px;
    margin-left: 25px;
    text-indent: -25px;
    list-style: none;
  }

  li {
    margin-bottom: 15px;
    font-size: 14px;
    text-align: justify;
    line-height: 1.5;
  }

  .feedback-text {
    font-size: 16px;
    font-weight: bold;
    text-align: justify; 
    line-height: 1.5; 
  }

  .feedback-text a {
    color: #990000;
    text-decoration: none;
  }

  .feedback-text a:hover {
    border-bottom: 1px dotted #990000;
  }

</style>