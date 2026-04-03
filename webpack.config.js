const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode } = { mode: 'production' }) => ({
    mode,
    entry: {
        main: ['./assets/js/main.js', './assets/scss/main.scss'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                resourceQuery: /shadow/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { exportType: 'css-style-sheet' },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: mode !== 'production' },
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: mode !== 'production' },
                    },
                ],
            },
        ],
    },
});
