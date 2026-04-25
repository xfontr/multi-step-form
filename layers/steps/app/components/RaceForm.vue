<!--
[DEV-COMMENT]

This form could have received its option list through props, but this is not a shared UI: we intentionally
want this to be part of the steps domain, which DOES have access to the i18n data, etc. So there was no
point in receiving th races as props.
-->

<script lang="ts" setup>
import Button from "#layers/ui/app/components/Button.vue";
import Select from "#layers/ui/app/components/Select.vue";

interface Props {
    initialValue?: string;
}

const props = withDefaults(defineProps<Props>(), { initialValue: "" });

const emit = defineEmits<{ submit: [string] }>();

const race = ref<string>(props.initialValue);

const { tm } = useI18nArray();

function onSubmit(): void {
    emit("submit", race.value);
}
</script>

<template>
    <form
        class="race-form"
        @submit.prevent="onSubmit"
    >
        <Select
            v-model="race"
            :options="tm('data.breeds')"
            :placeholder="$t('register.race.placeholder')"
        />

        <Button type="submit">
            {{ $t("register.race.submit") }}
        </Button>
    </form>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.race-form {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
}
</style>
