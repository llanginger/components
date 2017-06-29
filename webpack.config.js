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
        publicPath: "/build"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-maps",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // Babel integration
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    node: {
        console: true,
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
