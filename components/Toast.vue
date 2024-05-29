<template>
  <div :class="['toast', type]">
    <div style="display:flex;">
      <div class="icon-circle"><span class="icon"> {{ icon }}</span></div>
      <div class="text-message">{{ message }}</div>    
    </div>
    <button class="close-btn" @click="emit('removeItem', id)">✖</button>
  </div>
</template>

<script setup>
  const props = defineProps({
    id: Number,
    type: String,
    message: String
  })

  const icons = {
    message: 'i',
    success: '✓',
    warning: '!',
    error: 'X', 
  };

  const icon = computed(() => icons[props.type] || '');
  
  const emit = defineEmits(['removeItem']);
</script>

<style scoped>
  .toast {
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* min-width: 380px; */
    width: 380px;
    min-height: 48px;
    padding: 10px 15px 10px 20px;
    margin-bottom: 12px;
    border-radius: 5px;
    font-size: 14px;
  }

  .message {
    border: 1px solid #e8e8eb;
    background-color: #EDF2FC;
    color: #969599;
  }

  .success {
    border: 1px solid rgba(103, 194, 58, 0.3);
    background-color: #F0F9EB;  
    color: #67C23A;

    .icon-circle {
      background-color: #67C23A;
    }
  }

  .warning {
    border: 1px solid #efe2ce;
    background-color: #FDF6EC;
    color: #E6A23C;

    .icon-circle {
      background-color: #E6A23C;
    }
  }

  .error {
    border: 1px solid rgb(253, 213, 213);
    background-color: #FEF0F0; 
    color: #FF4D4D; 

    .icon-circle {
      background-color: #FF4D4D;
    }
  }

  .icon-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: grey;
  }

  .icon {
    color: white;
    font-size: 10px;
  }

  .text-message {
    width: 280px;
    text-align: justify;
  }

  .close-btn {
    font-size: 14px;
    opacity: 0.4;
    transition: ease-in-out 0.2s;
  }

  .close-btn:hover {
    opacity: 1;
  }
</style>