<template>
  <div class="accordion-section">
    <div class="accordion-header" @click="$emit('toggleExpand', index)">
      <h4>{{ item.label }}</h4>
      <Icon name="material-symbols:keyboard-arrow-down" style="font-size: 18px"/>
    </div>
    <div :class="expand ? 'accordion-content expand' : 'accordion-content'">
      <p v-html="item.content"></p>
    </div>
  </div>
</template>

<script setup>
  const { item, index, open } = defineProps({
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    expand: {
      type: Boolean,
      required: true,
    },
  }) 
</script>

<style scoped>
  .accordion-section {
    transition: height 4s;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px 14px 6px;
    border-top: 1px solid #C8C7C7;
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }

  .accordion-header:hover{
    background-color: #e1e1e1;
  }

  .accordion-header h4{
    font-size: 16px;
  }

  .accordion-content {
    display: none;
    padding: 8px 8px 14px 16px;
  }

  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    padding: 0 8px;
  }

  .expand {
    max-height: 1000px; /* Adjust as needed for your content */
    padding: 8px 8px 14px 16px;
  }

  p {
    color: #333333;
    font-size: 14px;
    line-height: 1.5;
  }

  .expand {
    display: block;
    height: auto;
  }

</style>