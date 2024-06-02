import { fixupConfigRules } from '@eslint/compat'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Desativar a regra 'react/react-in-jsx-scope'
pluginReactConfig.rules = {
  ...pluginReactConfig.rules,
  'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  'no-undef': 'off',
  'react/no-unescaped-entities': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
}

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
]
