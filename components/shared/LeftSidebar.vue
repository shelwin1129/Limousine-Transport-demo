<template>
    <aside :class=" { expanded: isExpand}">
      <div v-if="isExpand" class="nav-header">
        <h4 @click="" class="logo">Limousine Transport</h4>
        <span @click="toggleExpand" class="wrap-sidebar"><Icon name="material-symbols:chevron-left-rounded" /></span>
      </div>
      <hr v-if="isExpand">
      <div v-if="!isExpand" class= "toggle-button">
        <span @click="toggleExpand">&#8801;</span>
      </div>
      <div class="menu">
        <NuxtLink to="/admin/dashboard" :class="{ 'menu-button': menuStore.activeMenu !== 'dashboard', 'active': menuStore.activeMenu === 'dashboard' }" @click="menuStore.setActiveMenu('dashboard')" title="Dashboard" >
          <Icon name='material-symbols:house-rounded' class="nav-icon"/>
          <span v-if="isExpand" class="menu-text">Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/admin/pages" :class="{ 'menu-button': menuStore.activeMenu !== 'Pages', 'active': menuStore.activeMenu === 'Pages' }" @click="menuStore.setActiveMenu('Pages')" title="Pages">
          <Icon name='material-symbols:article-outline' class="nav-icon"/>
          <span v-if="isExpand" class="menu-text">Pages</span>
        </NuxtLink>
        <NuxtLink to="/admin/adminProfile" :class="{ 'menu-button': menuStore.activeMenu !== 'adminProfile', 'active': menuStore.activeMenu === 'adminProfile' }" @click="menuStore.setActiveMenu('adminProfile')" title="Admin Profile">
          <Icon name='material-symbols:admin-panel-settings-outline' class="nav-icon"/>
          <span v-if="isExpand" class="menu-text">Admin Profile</span>
        </NuxtLink>
        <NuxtLink @click="handleLogout" class="menu-button" title="Log out">
          <Icon name='material-symbols:power-settings-new' class="nav-icon"/>
          <span v-if="isExpand" class="menu-text">Log out</span>
        </NuxtLink>
      </div>
    </aside>
</template>

<script setup>
  const menuStore = useMenuStore();

  const toggleExpand = () => {
    isExpand.value = !isExpand.value;
  }

  const isExpand = ref(window.innerWidth >= 1400);
  
  onMounted(() => {
    const handleResize = () => {
      isExpand.value = window.innerWidth >= 1400;
    }

    window.addEventListener('resize', handleResize);

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
  });

  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  }
</script>

<style scoped>
  hr {
    margin: 0 4rem 1rem 1rem;
  }

  aside {
    min-width: calc(2rem + 32px);
    min-height: 100vh; 
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: #4277F3;
    transition: 0.15s ease-out;
    align-items: center;  
    white-space: nowrap;
  }

  aside.expanded {
    min-width: 220px;
    align-items: normal;
    
    .menu {
      padding: 0 1rem;
    }
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    text-align: left;
  }

  .logo {
    width: 100px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  }

  .nav-icon {
    font-size: 24px;
  }
  
  .toggle-button {
    margin-bottom: 20px;
    padding: 0.3rem;
    border-radius: 5px;
    font-size: 28px; 
    cursor: pointer;
  }

  .wrap-sidebar {
    color: white;
    font-size: 24px;
    opacity: 0.7;
    cursor: pointer; 
  }

  .wrap-sidebar:hover {
    opacity: 1;
  }

  .menu-button .menu-text {
    transition: 0.3s ease-out;
  }

  .menu {
    margin: 0 -1rem; 
  }

  .menu-button {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s ease-in-out;
    margin: 0.2rem 0.5rem;
    padding: 0.4rem 0.6rem;
    border-radius: 5px;
    color: white;
    opacity: 0.6;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }

  .active {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s ease-in-out;
    margin: 0.2rem 0.5rem;
    padding: 0.4rem 0.6rem;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  
  .logo h4:hover, .toggle-button:hover {
    color: white;
    /* transition: ease 0.5s; */
  } 
  
   .menu-button:hover {
    background-color: rgba(27, 147, 245, 0.1);
    opacity: 1;
  }


</style>
