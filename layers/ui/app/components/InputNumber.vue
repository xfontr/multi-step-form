<script lang="ts" setup>
import { IftaLabel, InputNumber } from "primevue";

interface Props {
    id: string;
    placeholder?: string;
}

defineOptions({ inheritAttrs: false });

defineProps<Props>();

const model = defineModel<number>();
</script>

<template>
    <IftaLabel class="input-number">
        <InputNumber
            :id
            v-model="model"
            :placeholder
            class="input-number__field"
        />
        <label :for="id"><slot /></label>
    </IftaLabel>
</template>

<style lang="scss" scoped>
.input-number__field {
    width: 100%;
}
</style>
