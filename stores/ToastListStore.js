export const useToastListStore = defineStore('ToastList', () => {
  const toastItems = ref([]);
  let idCounter = 0; 

  const addToast = (message, type) => {
    const id = idCounter++;
    toastItems.value.unshift({ id, message, type});
    setTimeout(() => removeToast(id), 4000);
  } 

  const removeToast = (id) => {
    toastItems.value = toastItems.value.filter(toast => toast.id !== id);
  };

  return {
    toastItems,
    addToast,
    removeToast
  }
})