import repository from "../diet.repository";
import useDietStore from "../stores/diet";

function useDiet() {
    const { diet } = useDietStore();
    const status = ref<Status>("IDLE");

    async function signUp(): Promise<void> {
        status.value = "LOADING";

        try {
            const response = await repository.signUp(diet);

            if (response.success) status.value = "SUCCESS";
            // eslint-disable-next-line unused-imports/no-unused-vars
        } catch (_error: unknown) {
            status.value = "ERROR";
        }
    }

    return { signUp, status };
}

export default useDiet;
