var config ={
    context: __dirname + '/src',
    entry: "./index",
    output: {
        path: __dirname + '/www',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'mustache',
        },],
    },
} 

module.exports = config;
