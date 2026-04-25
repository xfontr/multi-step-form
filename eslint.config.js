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
        "antfu/consistent-list-newline": "off",
        "style/arrow-parens": "off",
        "import/consistent-type-specifier-style": "off",
        "style/operator-linebreak": "off",
        "style/indent": "off",
    },
});
