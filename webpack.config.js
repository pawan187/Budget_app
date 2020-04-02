const path = require("path")
console.log(path.resolve(__dirname,"src","app.js"))
module.exports = {
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
            use:[ 'style-loader', 'css-loader' ,'sass-loader']
        }
    ]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer :{
        host : "0.0.0.0",
        port : 8080,
        contentBase : path.join(__dirname,"public"),
        historyApiFallback : true
    }
}