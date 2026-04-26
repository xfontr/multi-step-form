<script lang="ts" setup>
import useUsageStore from "~~/layers/analytics/app/stores/usage";

const { init } = useUsageStore();

onMounted(init);
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
