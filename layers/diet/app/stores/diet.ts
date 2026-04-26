const useDietStore = defineStore(
    "diet",
    () => {
        const diet = reactive<Diet>({
            breed: "",
            name: "",
            gender: "",
            age: undefined,
            weight: undefined,
            exercise: 0,
            pathology: undefined,
        });

        return { diet };
    },
    { persist: true },
);

export default useDietStore;
