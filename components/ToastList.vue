<template>
  <TransitionGroup tag="div" class="message-wrapper" name="toast">
    <Toast 
      v-for="item in toastListStore.toastItems" 
      :key="item.id"
      :id="item.id"
      :type="item.type"
      :message="item.message"
      @removeItem="removeItem(item.id)"
    />
  </TransitionGroup>
</template>

<script setup>
  const toastListStore = useToastListStore();

  const removeItem = (id) => {
    toastListStore.removeToast(id);
  };
</script>

<style>
  .message-wrapper {
    position: fixed;
    top: 20px;
    left:  50%;
    transform: translateX(-50%);
    z-index: 999;
  }

  .toast-enter-active, .toast-leave-active {
    transition: all 0.5s ease;
  }

  /* initial state before entering/after leaving  */
  .toast-enter-from, .toast-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }

  /* default position & opacity when appear */
  .toast-enter-to, .toast-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  .toast-move {
    transition: transform 0.5s ease;
  }
</style>