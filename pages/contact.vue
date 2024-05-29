<template>
  <Title>Contact - Limousine Transport</Title>
  <h1>Contact</h1>
  <hr>
  <table>
      <thead>
          <tr>
              <th>Call Centre</th>
              <th>Contact Number</th>
              <th>Email Address</th>
              <th colspan='2'>Operating Hours</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>Singapore</td>
            <td>
              <a href="tel:+6565353534" title="Call us at">+65 6535 3534</a>
            </td>
            <td rowspan="7">
              <a href="mailto:booking@limousinetransport.com" title="Email us at">booking@limousinetransport.com</a>
            </td>
            <td rowspan="7">
              <div class="operation-container">
                <span>6am-11pm (GMT+8)<br>Monday to Sunday</span>
                <button class="book-btn"  title="Book now">
                  <span>Book Now</span>
                  <Icon name="material-symbols:arrow-right-rounded" class="arrow-icon"/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Malaysia</td>
            <td>
              <a href="tel:+60326308400" title="Call us at">+6 03 2630 8400</a>
            </td>
          </tr>
          <tr>
            <td>Hong Kong</td>
            <td>
              <a href="tel:+85230519350" title="Call us at">+852 3051 9350</a>
            </td>
          </tr>
          <tr>
            <td>Indonesia</td>
            <td>
              <a href="tel:+622127899707" title="Call us at">+62 212 789 9707</a>
            </td>
          </tr>
          <tr>
            <td>Australia</td>
            <td>
              <a href="tel:+61290984321" title="Call us at">+61 2 9098 4321</a>
            </td>
          </tr>
          <tr>
            <td>United States</td>
            <td>
              <a href="tel:+16466935999" title="Call us at">+1 646 693 5999</a>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="height: 37px;"></td>
          </tr>
          <tr>
            <td>Lost & Found (With booking number)</td>
            <td>
              <a href="tel:+6565353534" title="Call us at">+65 6535 3534</a>
            </td>
            <td colspan='2'>6am-11pm (GMT+8)<br>Monday to Sunday</td>
          </tr>
          <tr>
            <td>Lost & Found (No booking number)</td>
            <td>
              <a href="tel:+6562255582" title="Call us at">+65 6225 5582</a>
            </td>
            <td colspan='2'>24 Hrs Daily</td>
          </tr>
      </tbody>
  </table>

</template>

<script setup>
  definePageMeta({
      layout: 'default',
      auth: false,
  })
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

  table {
    width: 100%;
    margin: 40px 0;
  }

  table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table, td {
    border-collapse: collapse;
  }

  thead {
    color: white;
    background-color: #cc181e;
  }

  thead th {
    padding: 8px 0px;
    font-size: 14px;
  }

  tbody tr td {
    padding: 10px;
  }

  tbody tr td {
    border: solid 1px #f2f2f2;
    font-size: 13px;
  }

  tbody tr td:nth-child(1) {
    width: 200px;
    font-weight: bold;
  }

  tbody tr td:nth-child(2) {
    width: 180px;
  }

  /* tbody tr td:nth-child(3) {
    width: 200px;
  } */

  tbody tr td:nth-child(2), tbody tr td:nth-child(3) {
    text-align: center;
  }

  tbody tr td a {
    color: #333333;
    text-decoration: none;
  }

  tbody tr td a {
    color: #333333;
    text-decoration: none;
  }

  tbody tr td a:hover {
    border-bottom: 1px dotted #990000;
    color: #990000;
  }


  .operation-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .book-btn {
    padding: 8px 10px;
    border-radius: 5px;
    color: white;
    background-color:#cc181e;
    font-size: 12px;
    font-weight: bold;
    transition: linear 0.2s
  }

  .arrow-icon {
    position: relative;
    color: white;
    font-size: 18px;
  }

  .book-btn:hover {
    background-color: #990000;
    scale: 1.1;

    .arrow-icon {
      left: 3px;
    }
  }
</style>