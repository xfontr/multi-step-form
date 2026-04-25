import antfu from "@antfu/eslint-config";

export default antfu({
    vue: true,
    typescript: true,
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
    },
    jsonc: false,
    yaml: false,
    rules: {
        "antfu/if-newline": "off",
        "style/arrow-parens": "off",
    },
});
