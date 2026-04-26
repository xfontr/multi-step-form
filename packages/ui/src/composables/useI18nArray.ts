type I18nArray = {
    loc: { source: string };
}[];

function useI18nArray() {
    const i18n = useI18n();
    const { env } = useRuntimeConfig().public;

    function productionTm(key: string, maxLength?: number) {
        const list = i18n.tm(key) ?? [];
        return maxLength ? list.slice(0, maxLength) : (list as string[]);
    }

    /**
     * @param key i18n key
     * @param maxLength Limits the length of the array. Recommended to prevent unexpected behaviour upon translation updates
     */
    function tm(key: string, maxLength?: number): string[] {
        if (env === "production") return productionTm(key, maxLength);

        const list = ((i18n.tm(key) as I18nArray) ?? []).map(
            ({ loc }) => loc?.source,
        );

        return maxLength ? list.slice(0, maxLength) : list;
    }

    return { tm };
}

export default useI18nArray;
