const useFlowStore = defineStore(
    "flow",
    () => {
        const index = ref<number>(0);

        function up(): void {
            index.value += 1;
        }

        function down(): void {
            if (!index.value) return;
            index.value -= 1;
        }

        function update(newIndex: number): void {
            index.value = newIndex;
        }

        return {
            up,
            down,
            update,
            index,
        };
    },
    { persist: true },
);

export default useFlowStore;
