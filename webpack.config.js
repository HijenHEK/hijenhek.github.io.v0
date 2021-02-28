const path = require('path'); 
const MODE = process.env.MODE || 'development'
const FILE_NAME = process.env.FILE_NAME || 'index.js'

module.exports = {
    mode : MODE,
    module : {

        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    entry: './src/js/index.js',
    output: {
        filename: FILE_NAME,
        path: path.resolve(__dirname, 'dist'),
    },

}
  