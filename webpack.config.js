const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library-create-mmv.js',
        globalObject: 'this',
        library: {
            name: "library-create-mmv",
            type: "umd"
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
        ],
    },
    externals: {
        react: 'react'
    },
};