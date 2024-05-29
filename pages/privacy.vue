<template>
  <Title>Privacy Policy - Limousine Transport</Title>
  <h1>Privacy Policy</h1>
  <hr>
  <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. <br><br>Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
  
  <div class="privacy-policies-accordion">
    <Accordion 
      v-for="(policy, index) in privacy_policies" 
      :key="index" 
      :index="index"
      :item="policy"
      :expand="policy.expand"
      @toggleExpand="toggleExpand"
    />
  </div>
  
</template>

<script setup>
  definePageMeta({
    layout: 'default',
    auth: false,
  });

  const toggleExpand = (index) => {
    privacy_policies.value = privacy_policies.value.map((policy, i) => {
      if (index === i) {
        policy.expand = !policy.expand;
      } 
      return policy;
    });
  }

  const privacy_policies = ref([
    {
      label: "What personal information do we collect from the people that visit our blog, website or app?",
      content: "We do not collect information from visitors of our site.",
      expand: true,
    },
    {
      label: "When do we collect information?",
      content: "We collect information from you when you place an order or enter information on our site.",
      expand: true,
    },
    {
      label: "How do we use your information?",
      content: "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br>• To quickly process your transactions.",
      expand: true,
    },
    {
      label: "How do we protect visitor information?",
      content: "Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.<br><br>\
                We do not use Malware Scanning.<br><br>\
                Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.<br><br>\
                We implement a variety of security measures when a user places an order to maintain the safety of your personal information.<br><br>\
                All transactions are processed through a gateway provider and are not stored or processed on our servers.",
      expand: true,
    },
    {
      label: "Do we use 'cookies'?",
      content: "We do not use cookies for tracking purposes<br><br> \
      You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.<br><br>\
      If you disable cookies off, some features will be disabled that make your site experience more efficient and some of our services will not function properly.<br><br>\
      However, you can still place orders.",
      expand: true,
    },
    {
      label: "Third-party disclosure",
      content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.",
      expand: true,
    },
    {
      label: "Third-party links",
      content: "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
      expand: true,
    },
    {
      label: "Google",
      content: "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href='https://support.google.com/adwordspolicy/answer/1316548?hl=en' target='_blank' style='color: #990000;'>https://support.google.com/adwordspolicy/answer/1316548?hl=en</a><br><br>\
                We use Google AdSense Advertising on our website.<br><br>\
                Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.<br><br>\
                <b>We have implemented the following:</b><br>\
                • Demographics and Interests Reporting<br><br>\
                We along with third-party vendors, such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.<br><br>\
                <b>Opting out:</b><br>\
                Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising initiative opt out page or permanently using the Google Analytics Opt Out Browser add on.",
      expand: true,
    },
    {
      label: "How does our site handle do not track signals?",
      content: "We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.",
      expand: true,
    },
    {
      label: "Does our site allow third-party behavioral tracking?",
      content: "It's also important to note that we do not allow third-party behavioral tracking<br><br>\
      <b>COPPA (Children Online Privacy Protection Act)</b><br>\
      When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.<br><br>\
      We do not specifically market to children under 13.",
      expand: true,
    },
    {
      label: "Fair Information Practices",
      content: "The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.<br><br>\
      In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:<br><br>\
      We will notify the users via email • Within 7 business days<br><br>\
      We will notify users via phone call • Within 7 business days<br><br>\
      We also agree to the Individual Redress Principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.",
      expand: true,
    },
  ])
</script>

<style scoped>
  hr {
    width: 220px;
    border-top: 1px dotted #C8C7C7;
    margin: 20px auto;
  }

  h1 {
    margin-top: 30px;
    font-size: 32px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }

  p {
    margin-top: 20px;
    color: #333333;
    font-size: 13px;
    line-height: 1.5;
  }

  .privacy-policies-accordion {
    padding: 0;
    margin: 30px 0;
  }
</style>