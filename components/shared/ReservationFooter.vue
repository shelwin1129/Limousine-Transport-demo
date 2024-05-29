<template>
  <div class='reserve-footer'>
    <hr>
    <div class="reservation-details-container">
      <h2>Provide during Reservation</h2>
      <ol>
        <li><strong>Transfer details</strong> (date, time or no. of hours required, pick-up point, destination and address)</li>
        <li><strong>Flight details, if any </strong>(note that we will follow the actual flight time in case of any early or delayed flight arrivals)</li>
        <li><strong>Limousine Transport</strong> (vehicle type, no. of passengers)</li>
        <li><strong>Guest details</strong> (lead passenger's name, mobile no. with calling code)</li>
        <li><strong>Special remarks</strong></li>
      </ol>
      <p>Booking can be confirmed with a credit or debit card payment during reservation.<br><br>Don't forget to book your return trip!</p>
    </div>
    <hr>
    <div class="reservation-contact-container">
      <h2>Reservations</h2>
      <table style='width:100%;'>
        <tr>
          <td><Icon name='material-symbols:phone-enabled' class="icon"/></td>
          <td class="always-on-top">
            <span class="phone">+65 6535 3534 or visit <NuxtLink to="/contact" class="text-link" title="Visit contact page">here</NuxtLink></span>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <Icon name='material-symbols:mail-outline' class="icon"/>
          </td>
          <td class="always-on-top">
            <span class="email">
              <a href="mailto:booking@limousinetransport.com" title="Email us at">booking@limousinetransport.com</a></span>
          </td>
        </tr>
        <tr>
          <td class="always-on-top">
            <span>Please call us via our hot-line at +65 6535 3534 for transfer within 24 hours.</span>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <Icon name='mdi:information-slab-circle-outline' class="icon"/>
          </td>
          <td>
            <span>Booking and reservations are available 24 hours daily, Mon - Sun including Public Holidays.</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>There are no additional charges for booking and reservations made in advance.</span>
          </td>
        </tr>
        <tr>
          <button class="book-btn">
            <span>Book Now</span>
            <Icon name="material-symbols:arrow-right-rounded" class="arrow-icon"/>
          </button>
        </tr>
      </table>
    </div>
    <hr>
    <div class="social-media-container">
      <h2>Follow us at:</h2>
    </div>
  </div>
</template>

<style scoped>
  .reserve-footer {
    width: 980px;
    margin: auto;
  }

  hr {
    border-top: 1px dotted #C8C7C7;
  }
  
  .reservation-details-container {
    margin: 15px 0 30px;
  }

  h2 {
    margin: 10px 0 15px;
    font-size: 24px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  ol {
    margin-left: 30px;
    line-height: 1.8;
  }

  li {
    color: #333333;
    font-size: 15px;
  }

  p {
    margin-top: 15px;
    color: #333333;
    font-size: 14px;
  }
  
  .reservation-contact-container {
    margin: 15px 0 30px;
  }

  .icon {
    color: #990000;
    font-size: 22px;
  }

  table tr:nth-child(1) {
    height: 40px;
  }

  table tr:nth-child(3) {
    height: 40px;
  }

  /* td that contains icons */
  table tr td:nth-child(1) {
    vertical-align: top;
  }

  table tr td span {
    display: inline-block;
    margin: 3px 0 5px;
    color:#333333;
    font-size: 14px;
  }

  .always-on-top {
    vertical-align: top
  }

  .phone {
    color: black;
  }

  .email a, .text-link {
    color:#990000;
    text-decoration-style: dotted;
  }

  .email a:hover, .text-link:hover  {
    text-decoration: none;
  }

  .book-btn {
    padding: 8px 10px;
    margin-top: 15px;
    border-radius: 5px;
    color: white;
    background-color:#cc181e;
    font-size: 13px;
    font-weight: bold;
    transition: linear 0.2s
  }

  .arrow-icon {
    position: relative;
    color: white;
    font-size: 18px;
  }

  .book-btn:hover {
    background-color:#990000;
    scale: 1.1;

    .arrow-icon {
      left: 3px;
    }
  }

</style>