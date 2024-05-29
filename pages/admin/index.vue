<template>
  <div v-if="isMounted" class="background">
    <ToastList/>
    <div class="container">
      <div class='logo'>
        <span>Limousine Transport</span>
        <span>Administrator Login</span>
      </div>
      <hr>
      <div class="admin-login-form">
        <label>Username</label><br>
        <input type="text" v-model="loginForm.username" placeholder="Enter username" required /><br>

        <label>Password</label><br>
        <input type="password" v-model="loginForm.password" placeholder="Enter password" required /><br>

        <button @click.prevent="handlelogin" class="login-button">Log In</button>
        <button @click.prevent="toHomeSite" class="returnHome-button">Return to Home Page Site</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/admin/dashboard',
    }
  })

  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });

  const router = useRouter();
  const toHomeSite = () => {
    router.push('/');
  }

  const loginForm = ref({
    username: 'James',
    password: 'James123',
  })

  const { signIn } = useAuth();
  const handlelogin = async () => {
      let res = await signIn('credentials', { username: loginForm.value.username, password: loginForm.value.password, redirect: false })
      if (res.error) {
        useToastListStore().addToast('Invalid credentials or do not gain access to the administrator back-end', 'error'); 
      }
      else {
        useToastListStore().addToast('You have logged in successfully', 'success');
        router.push('/admin/dashboard');
      }
  }
</script>

<style scoped>
  .background {
    display:flex;
    height: 100vh;
    background-color: #F0F1F3;
  }

  .container {
    min-width: 400px;
    margin: auto;
    padding: 25px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .logo span:nth-child(1) {
    margin-top: 5px;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
  }

  .logo span:nth-child(2) {
    margin: 5px 0 20px;
    font-size: 18px;
    text-align: center;
  }

  .admin-login-form {
    margin-top: 20px;
  }

  .admin-login-form label {
    color: grey;
    font-size: 16px;
  }

  .admin-login-form input{
    width: 100%;
    margin: 10px 0;
    padding: 8px 10px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .login-button {
    width: 100%;
    margin-top: 15px;
    padding: 8px 6px;
    border: none;
    background-color: #0186B6;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  .login-button:hover {
    background-image: linear-gradient(rgb(0 0 0/10%) 0 0);
  }

  .returnHome-button {
    width: 100%;
    margin-top: 15px;
    border: none;
    background-color: transparent;
    opacity: 0.6;
    cursor: pointer;
  }

  .returnHome-button:hover {
    opacity: 1
  }

</style>