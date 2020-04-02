const path = require("path")
// console.log(path.resolve(__dirname,"src","app.js"))
const ExtractTextPlugin = require("extract-text-webpack-plugin");  
module.exports = (env)=>{
    const isProduction = env ==='production';
    console.log(isProduction)
    const CSSExtract  = new ExtractTextPlugin('styles.css');
    return {
        entry : path.resolve(__dirname,"src","app.js"), 
        output : {
            path : path.join(__dirname,"public"),
            filename:"bundle.js"
        },
        module:{
            rules : [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test : /\.s?css$/,
                // use:[ 'style-loader', 'css-loader' ,'sass-loader']
                use: CSSExtract.extract(
                    {use:[
                        // 'css-loader',
                        // 'sass-loader'
                        {
                            loader : 'css-loader',
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }
                    ]}
                )
                }
        ]
        },
        plugins:[
            CSSExtract
        ]
        ,
        devtool : isProduction ? 'source-map' :'cheap-module-eval-source-map',
        devServer :{
            host : "0.0.0.0",
            port : 8080,
            contentBase : path.join(__dirname,"public"),
            historyApiFallback : true
        }
    }
};