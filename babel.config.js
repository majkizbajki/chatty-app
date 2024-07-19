module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@context': './src/context',
                    '@hooks': './src/hooks',
                    '@i18n': './src/i18n',
                    '@navigation': './src/navigation',
                    '@schemas': './src/schemas',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@theme': './src/theme',
                    '@appTypes': './src/types',
                    '@utils': './src/utils'
                }
            }
        ]
    ]
};
