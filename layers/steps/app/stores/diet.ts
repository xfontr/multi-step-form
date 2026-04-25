const useDietStore = defineStore(
    "diet",
    () => {
        const diet = reactive({
            race: "",
            name: "",
        });

        return { diet };
    },
    { persist: true },
);

export default useDietStore;
