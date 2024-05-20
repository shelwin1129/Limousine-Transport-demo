<template>
  <div class="modal-overlay" @click="closeDialog">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h2>Delete Page?</h2>
        <button class="close-button" @click="closeDialog"><span class="material-symbols-outlined">close</span></button>
      </div>
      <p>Are you sure you want to permenantly delete this page?</p>
      <div class="modal-footer">
        <button @click="closeDialog">Cancel</button>
        <button @click="deletePage(pageID)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { pageID } = defineProps({
    pageID: {
      type: Number,
    }
  })

  const emit = defineEmits(['updated', 'deleted']);

  const closeDialog = () => {
    emit('updated');
  };

  const deletePage = async (pageID) => {
    const res = await useFetch(`/api/post/${pageID}`, {
      method: "DELETE",
    })

    if (!res.data) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    } else {
      emit('deleted'); //refresh page after deleting   
      closeDialog();
    }
  }

</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    width: 450px;
    height: 250px;
    margin-top: 3%;
    padding: 25px 40px;
    border-radius: 25px;
    background-color: white;
  }

  .modal-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .close-button {
    margin-left: auto;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }

  .modal-footer button {
    width: 100px;
    height: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 16px;
    margin-top: 50px;
    background-color: #f44336;
  }

  .modal-footer button:nth-child(1) {
    background-color: #2B99F3;
  }

  .modal-footer button:nth-child(2) {
    margin-left: 10px;
    background-color: #f44336;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
  }

  p {
    width: 90%;
    font-size: 16px;
    line-height: 1.5;
  }
</style>