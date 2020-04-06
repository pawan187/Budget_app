const path = require("path");
const webpack = require('webpack');
// console.log(path.resolve(__dirname,"src","app.js"))
const ExtractTextPlugin = require("extract-text-webpack-plugin");  
process.env.NODE_ENV = process.env.NODE_ENV ||'development'; 

if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path : '.env.dev'})
}else if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path : '.env.dev'})
}
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID' : JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.envFIREBASE_MEASUREMENT_ID' : JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)       
            })
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