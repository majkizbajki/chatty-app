import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        plugins: {
            ['@typescript-eslint']: tseslint.plugin,
            ['react-hooks']: reactHooksPlugin,
            ['react']: reactPlugin,
            ['simple-import-sort']: simpleImportSortPlugin
        }
    },
    {
        ignores: ['**/build/**', '**/node_modules/**', '**/.yarn', '**/*.config.js', '**/index.js']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.es2020,
                ...globals.node
            },
            parser: tseslint.parser,
            parserOptions: {
                project: ['tsconfig.json']
            }
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        [
                            '^react',
                            '^@?\\w',
                            '^\\u0000',
                            '^src/(api|app|components|context|hooks|utils)(/.*|$)',
                            '^\\.',
                            '^\\.\\.(?!/?$)',
                            '^\\.\\./?$',
                            '^\\./(?=.*/)(?!/?$)',
                            '^\\.(?!/?$)',
                            '^\\./?$'
                        ]
                    ]
                }
            ],
            'arrow-body-style': 'off',
            curly: ['error', 'all'],
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            'jsx-quotes': ['error', 'prefer-single'],
            'max-len': ['warn', 140],
            'no-console': ['error', { allow: ['debug', 'error', 'info', 'warn'] }],
            'sort-imports': 'off',
            'no-confusing-arrow': 'off',
            eqeqeq: ['error', 'always'],
            'prefer-template': 'warn',
            'import/no-extraneous-dependencies': 'off',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'import/order': 'off',
            'react/button-has-type': 'warn',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-uses-react': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/function-component-definition': 'off',
            'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
            'react/jsx-no-useless-fragment': 'error',
            'react/require-default-props': ['warn', { ignoreFunctionalComponents: true }],
            'react/self-closing-comp': 'error',
            'react-hooks/rules-of-hooks': 'error',
            '@typescript-eslint/member-ordering': ['error', { default: ['field'] }],
            '@typescript-eslint/no-empty-interface': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/adjacent-overload-signatures': 'warn',
            '@typescript-eslint/restrict-plus-operands': 'error'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked]
    },
    eslintPluginPrettierRecommended
);
