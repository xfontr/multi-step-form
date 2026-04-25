type I18nArray = {
    loc: { source: string };
}[];

function useI18nArray() {
    const i18n = useI18n();

    function tm(key: string): string[] {
        return (i18n.tm(key) as I18nArray).map(({ loc }) => loc.source);
    }

    return { tm };
}

export default useI18nArray;
