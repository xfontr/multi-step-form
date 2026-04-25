import type { Diet } from "../types/Diet";

const useDietStore = defineStore(
    "diet",
    () => {
        const diet = reactive<Diet>({
            race: "",
            name: "",
            gender: "",
            age: undefined,
            weight: undefined,
            exercise: 0,
            pathology: "",
        });

        return { diet };
    },
    { persist: true },
);

export default useDietStore;
