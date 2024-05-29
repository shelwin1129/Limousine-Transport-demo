<template>
  <div v-if="isDialogOpen" class="modal-overlay" @click="closeDialog">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h2>Permenant Deletion</h2>
        <button class="close-button" @click="closeDialog">✖</button>
      </div>
      <p>This action is irrevisible and cannot be undone.</p>
      <div class="modal-footer">
        <button @click="closeDialog">Cancel</button>
        <button @click="confirmDeletion">Ok</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits('delete');

  const isDialogOpen = ref(false);

  const openDialog = () => {
    isDialogOpen.value = true;
  };

  defineExpose({ openDialog });

  const closeDialog = () => {
    isDialogOpen.value = false;
  };

  const confirmDeletion = () => {
    emit('delete'); 
    closeDialog();
  };
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    width: 420px;
    margin-top: 3%;
    padding: 15px 25px;
    border-radius: 5px;
    background-color: white;
  }

  .modal-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .close-button {
    margin-left: auto;
    font-size: 16px;
    opacity: 0.6;
  }

  .close-button:hover {
    opacity: 1;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }

  .modal-footer button {
    height: 30px;
    margin-top: 15px;
    padding: 0 20px;
    border-radius: 5px;
    font-size: 14px;
    transition: ease-in-out 0.2s;
  }

  .modal-footer button:nth-child(1) {
    border: 1px solid #e8e8eb;
    color: #747475;
  }

  .modal-footer button:nth-child(1):hover {
    border: 1px solid #e8e8eb;
    background-color: #ECF5FF;
    color: #66B1FF;
  }

  .modal-footer button:nth-child(2) {
    margin-left: 10px;
    background-color: #66B1FF;
    color: white;
  }

  .modal-footer button:nth-child(2):hover {
    background-color: #3d95f3;
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    text-align: justify;
    line-height: 1.5;
  }
</style>