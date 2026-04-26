<script lang="ts" setup>
import { IftaLabel, InputText } from "primevue";

interface Props {
    id: string;
    placeholder?: string;
}

defineOptions({ inheritAttrs: false });

defineProps<Props>();

const model = defineModel<string>();
</script>

<template>
    <IftaLabel class="input-text">
        <InputText
            :id
            v-model="model"
            fluid
            :placeholder
            class="input-text__field"
        />
        <label :for="id"><slot /></label>
    </IftaLabel>
</template>
