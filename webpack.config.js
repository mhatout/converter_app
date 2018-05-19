var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './public/scripts/myScript.js',
    output: {
        path: path.resolve(__dirname,'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        extractPlugin,
        new CleanWebpackPlugin(['public/dist'])
    ]
};