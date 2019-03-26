const path = require('path');
const ImageWebpackLoader = require('image-webpack-loader');

//module.exports is a node thing (Expose an object to another file)
module.exports = {

    //Where is the entry point?
    entry: './src/app.js',

    //Where to output the bundle file
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                //css-loader, style-loader (npm package)
                // loader: yarn add sass-loader node-sass
                test: /\.s?css$/,
                use:['style-loader', 'css-loader', 'sass-loader']

            },{
                test:/\.(gif|png|jpe?g|svg)$/i,
                include : path.join(__dirname, 'src/images'),
                use:[
                    "file-loader",

                    {
                        loader: "image-webpack-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                            publicPath: 'img/',
                            gifsicle:{
                                interlaced: false
                            },
                            optipng:{
                                optimizationLevel: 7
                            },
                            pngquant:{
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg:{
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }]
        },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //allows client side routing
        
    }
};

