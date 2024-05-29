export const useMenuStore = defineStore('menu', () => {
    const activeMenu = ref('dashboard');

    function setActiveMenu(menu) {
        activeMenu.value = menu;
    }

    //Export them, making it can be access globally
    return {
        activeMenu,
        setActiveMenu
    };
},
{
    persist: true
});