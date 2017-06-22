var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:1337",
        "webpack/hot/dev-server",
        "./src/index.tsx"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/build/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
