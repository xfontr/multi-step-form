<script lang="ts" setup>
import useGroupStore from "~~/layers/analytics/app/stores/group";
import useUsageStore from "~~/layers/analytics/app/stores/usage";
import { FLOW_TOTAL_STEPS } from "~~/layers/steps/app/configs/constants";

const usage = useUsageStore();
const { group } = useGroupStore();

onMounted(() => {
    usage.init(FLOW_TOTAL_STEPS - (group.stepsSkip?.length ?? 0));
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
