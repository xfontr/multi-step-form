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
            v-model="model"
            :input-id="id"
            fluid
            :placeholder
            class="input-number__field"
        />
        <label :for="id"><slot /></label>
    </IftaLabel>
</template>
