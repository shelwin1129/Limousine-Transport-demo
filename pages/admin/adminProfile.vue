<template>
  <div class="header">
    <span class="heading">Admin Profile</span>
    <button @click="openRegisterDialog" class="add-admin-btn">+ Add Admin Profile</button> 
  </div>
  <RegisterAdminDialog 
    ref="registerDialogRef" 
    @updated="refresh()"
  />
  
  <table>
    <thead>
      <tr>
        <th>ID </th>
        <th>Username </th>
        <th>Email </th>
        <th>Password</th>
        <th>Status</th>
        <th>Last login at</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="admin in admins" :key="admin.id">
        <td>{{ admin.id }}</td>
        <td>{{ admin.username }}</td>
        <td>{{ admin.email }}</td>
        <td>{{ admin.password }}</td>
        <td>
          <div :class="admin.status == 'ACTIVE' ? 'active-status': 'inactive-status'">
            {{ admin.status }}
          </div>
        </td>
        <td>{{ formatDate(admin.last_login) }}</td>
        <td>
          <div>
            <button @click="editPage(admin.id)"><span class="material-symbols-outlined" style="color: #EECA40" title="Edit page">edit</span></button>
            <button @click="openDeleteDialog(admin.id)"><span class="material-symbols-outlined" style="color: red" title="Delete page">delete</span></button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <DeleteDialog ref="deleteDialogRef" @delete="deleteAdmin"/>
</template>

<script setup>
  definePageMeta({
      layout: 'admin-layout',
  })
  const registerDialogRef = ref(null);
  const deleteDialogRef = ref(null);
  const adminIdToDelete = ref(null);

  const openRegisterDialog = (adminID) => {
    adminIdToDelete.value = adminID;
    registerDialogRef.value.openDialog();
  };

  const openDeleteDialog = (adminID) => {
    adminIdToDelete.value = adminID;
    deleteDialogRef.value.openDialog();
  };

  const { data: admins, refresh } = await useFetch('/api/admin/fetchAdmins');

  const deleteAdmin = async () => {
    const res = await useFetch(`/api/admin/${adminIdToDelete.value}`, {
      method: "DELETE",
    })
    if (!res.data) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    } else {
      await refresh();
      useToastListStore().addToast('Admin account successfully deleted.', 'success')
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 
  .heading {
    margin-right: 10px;
    color: #4277F3;
    font-size: 20px;
    font-weight: bold;
  }
  
  .add-admin-btn {
    height: 40px;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #4277F3;
    color: white;
    font-size: 18px
  }

  table {
    width: 100%;
    margin-top: 10px;
    border-collapse: collapse;
    border: 1px solid #ddd;
  }

  table th,
  table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  table td {
    position: relative;
    text-align: left;
  }

  td:nth-last-child(1) div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .active-status {
    padding: 5px;    
    border: 1px solid rgba(103, 194, 58, 0.3);
    border-radius: 6px;
    background-color: rgba(103, 194, 58, 0.2);  
    color: #67C23A;
    text-align: center;
  }

  .inactive-status {
    padding: 5px;
    border: 1px solid rgba(255, 77, 77, 0.3); /* Light red border */
    border-radius: 6px;
    background-color: rgba(255, 77, 77, 0.2); /* Light red background */
    color: #FF4D4D; /* Solid red text */
    text-align: center;
}
</style>