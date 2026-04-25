<script lang="ts" setup>
import { IftaLabel, InputText } from "primevue";

defineOptions({ inheritAttrs: false });

defineProps<{ id: string }>();

const model = defineModel<string>();
</script>

<template>
    <IftaLabel class="input">
        <InputText
            :id
            v-model="model"
            class="input__field"
        />
        <label :for="id"><slot /></label>
    </IftaLabel>
</template>

<style lang="scss" scoped>
.input__field {
    width: 100%;
}
</style>
