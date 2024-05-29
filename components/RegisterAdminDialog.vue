<template>
  <div v-if="isDialogOpen" @click="closeDialog" class="dialog-container">
    <div class="dialog" @click.stop>
      <div class="dialog-head">
        <h3>Add Admin Data</h3>
        <button class="close-btn" @click="closeDialog">✖</button>
      </div>
      <div>
        <label for="username">Username:</label><br>
        <input type="text" id="username" v-model="form.username" placeholder="Username" autocomplete="off" required>
      </div>
      <div>
        <label for="password">Password:</label><br>
        <input type="password" id="password" v-model="form.password" placeholder="Password" autocomplete="new-password" required>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label><br>
        <input type="password" id="confirmPwd" v-model="form.confirmPwd" placeholder="Confirm password" autocomplete="off" required>
      </div>
      <div>
        <label for="status">Status:</label><br>
        <div class="status-option-container">
          <input type="radio" name="select" id="option-1" value="ACTIVE" v-model="form.status" checked>
          <input type="radio" name="select" id="option-2" value="INACTIVE" v-model="form.status">
            <label for="option-1" class="option option-1">
              <div class="dot"></div>
              <span>Active</span>
            </label>
            <label for="option-2" class="option option-2">
              <div class="dot"></div>
              <span>Inactive</span>
            </label>
        </div>
      </div>
      <div>
        <label for="email">Office Email:</label><br>
        <input type="email" id="email" v-model="form.email" placeholder="Office email" autocomplete='off' required>
      </div>
      <div class="dialog-footer">
        <button class="close-button" @click="closeDialog">Close</button>
        <button class="submit-btn" @click.prevent="register()">Register</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const form = ref({
    username: 'James',
    password: '123',
    confirmPwd: '123',
    status: 'ACTIVE',
    email: 'testing@gmail.com',
    role: 'ADMIN',
  });

  const emit = defineEmits('updated')
  const isDialogOpen = ref(false);

  const openDialog = () => {
    isDialogOpen.value = true;
  };

  defineExpose({ openDialog });

  const closeDialog = () => {
    form.value = {
      username: 'James',
      password: '123',
      confirmPwd: '123',
      status: 'ACTIVE',
      email: 'testing@gmail.com',
      role: 'ADMIN',
    };
    isDialogOpen.value = false;
  };

  const register = async () => {
    if(!form.value.username || !form.value.password || !form.value.confirmPwd || !form.value.email) {
      useToastListStore().addToast('Please complete the form.', 'message');
      return;
    }
    if (!doPasswordsMatch(form.value.password, form.value.confirmPwd)) {
      useToastListStore().addToast('The passwords did not match.', 'message');
      return;
    }
    if (!isValidEmail(form.value.email)) {
      useToastListStore().addToast('The email format is not valid.', 'message');
      return;
    }

    try {
      const { error } = await useFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(form.value)
      });

      if (error.value) {
        useToastListStore().addToast('Username already exists. Please try use another one.', 'error');
      } 
      else {
        emit('updated');
        useToastListStore().addToast('New admin is successfully registered.', 'success');
        closeDialog();
        return;
      }
    } catch (e) {
      console.log('Error during registration:', e);
      useToastListStore().addToast('Registration failed. Please try again.', 'error');
    }
  }
</script>

<style scoped>
  .dialog-container {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .dialog {
    width: 500px;
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
  }

  .dialog-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .close-btn {
    color: black;
    font-size: 18px;
    opacity: 0.6;
    padding:0;
  }

  .close-btn:hover {
    opacity: 1;
    transition: linear 0.3s;
  }

  label {
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px 15px;
    margin: 5px 0 10px;
    border: 1px solid;
    border-radius: 5px;
    box-sizing:inherit;
    color: #5E6D82;
    outline: none;
  }

  input:focus {
    border:1px solid #4277F3;
    transition: ease 0.3s;
  }

  .dialog-footer {
    display:flex;
    justify-content: flex-end;
    margin-top: 15px;
  }

  button {
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    color: white;
    font-size: 16px;
  }

  .close-button {
    margin-right: 10px;
    background-color: #7B7D8B;
  }

  .submit-btn {
    background-color: #4277F3;
  }

  .status-option-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin: 10px 0;
  }

  .status-option-container .option{
    background: #fff;
    height: 100%;
    width: 100%;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    border: 1px solid lightgrey;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .status-option-container .option .dot{
    height: 10px;
    width: 10px;
    background: #d9d9d9;
    border-radius: 50%;
    position: relative;
  }

  .status-option-container .option .dot::before{
    position: absolute;
    content: "";
    top: 2px;
    left: 2px;
    width: 6px;
    height: 6px;
    background: #0069d9;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1.5);
    transition: all 0.3s ease;
  }

  input[type="radio"]{
    display: none;
  }

  #option-1:checked:checked ~ .option-1,
  #option-2:checked:checked ~ .option-2{
    border-color: #0069d9;
    background: #0069d9;
  }
  #option-1:checked:checked ~ .option-1 .dot,
  #option-2:checked:checked ~ .option-2 .dot{
    background: #fff;
  }
  #option-1:checked:checked ~ .option-1 .dot::before,
  #option-2:checked:checked ~ .option-2 .dot::before{
    opacity: 1;
    transform: scale(1);
  }

  .status-option-container .option span{
    font-size: 16px;
    color: #808080;
  }

  #option-1:checked:checked ~ .option-1 span,
  #option-2:checked:checked ~ .option-2 span{
    color: #fff;
  }
</style>