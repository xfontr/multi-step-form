// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

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
        "vue/html-indent": "off",
        "vue/operator-linebreak": "off",
    },
});
