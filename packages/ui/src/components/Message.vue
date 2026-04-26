<script lang="ts" setup>
import Message, { type MessageProps } from "primevue/message";

interface Props {
    severity?: MessageProps["severity"];
}

defineProps<Props>();
</script>

<template>
    <Message :severity>
        <slot />
    </Message>
</template>
