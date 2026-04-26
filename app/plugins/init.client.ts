import useUsageStore from "#layers/analytics/app/stores/usage";
import { FLOW_INITIAL_STEPS } from "~/configs/constants";
import steps from "~/steps";

export default defineNuxtPlugin(({ hooks }) => {
    const usage = useUsageStore();

    hooks.hook("app:mounted", () => {
        usage.init(steps.length + FLOW_INITIAL_STEPS);
    });
});
