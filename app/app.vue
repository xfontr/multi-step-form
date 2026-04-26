<script lang="ts" setup>
import useUsageStore from "#layers/analytics/app/stores/usage";
import { FLOW_INITIAL_STEPS } from "./configs/constants";
import steps from "./steps";

const { init } = useUsageStore();

onMounted(() => init(steps.length + FLOW_INITIAL_STEPS));
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
