<script lang="ts" setup>
import useUsageStore from "~~/layers/analytics/app/stores/usage";

const usage = useUsageStore();

onMounted(() => {
    usage.init();
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
