<script setup lang="ts">
import Card from "./Card.vue";

interface Props {
    status: Status;
}

defineProps<Props>();
</script>

<template>
    <Card
        v-if="status !== 'IDLE'"
        class="status-card"
    >
        <div class="status-card__content">
            <div
                v-if="status === 'LOADING'"
                class="spinner"
            />

            <div
                v-else-if="status === 'ERROR'"
                class="status-card__error"
            >
                <slot name="error" />
            </div>

            <div
                v-else-if="status === 'SUCCESS'"
                class="status-card__success"
            >
                <slot name="success" />
            </div>
        </div>
    </Card>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.status-card {
    width: 50%;
    margin: 0 auto;

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 8rem;
    }

    &__success {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: $distances-m;
    }
}

.spinner {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.15);
    border-top-color: rgba(0, 0, 0, 0.75);
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
