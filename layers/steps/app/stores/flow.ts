const useFlowStore = defineStore(
    "flow",
    () => {
        const index = ref<number>(0);

        function update(newIndex: number): void {
            index.value = newIndex;
        }

        function up(): void {
            update(index.value + 1);
        }

        function down(): void {
            if (!index.value) return;
            update(index.value - 1);
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
