import type { Diet } from "../types/Diet";

const useDietStore = defineStore(
    "diet",
    () => {
        const diet = reactive<Diet>({
            race: "",
            name: "",
            genre: "",
            age: undefined,
        });

        return { diet };
    },
    { persist: true },
);

export default useDietStore;
