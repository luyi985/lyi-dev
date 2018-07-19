const path = require('path');
const webpack = require('webpack');

const config = (env, argv) => {
    return {
        mode: argv.mode,
        context: path.resolve(__dirname, 'src/client'),
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, "public"),
            filename: "bundle.js",
            publicPath: '/'
        }
    }
}

module.exports = config;