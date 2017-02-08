var webpack = require('webpack')
//built in node variable 'path'
var path = require('path');

module.exports = {
    // tells webpack where to start processing code
    entry: [
        //script! is a script loader function to load scripts not a part of webpack
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
        ],
        externals: {
            jquery: 'jQuery'
        },
        plugins: [
            //makes jquery available whenever a specific character is used
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
            })
        ],
    output: {
        // __dirname is a part of node.js
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        //where does this need to happen?
        //once again leads to the REACT testing folder
        root: __dirname,
        alias: {
            //main parent component
           
            //styles
            applicationStyle: 'app/styles/app.scss'
        },
        // find files with no extension , js, and jsx 
        extensions: ['','.js','.jsx']
    },
    // since webpack doesn't know what to do with our jsx files'
    // below is adding our babel loader into our modules
    module: {
        loaders: [
            {
                // get our files
                loader: 'babel-loader',
                query: {
                    //what does babel do with these files?
                    //this tells the babel loader to run the files through react and es2015 before loading
                    presets: ['react','es2015']
                },
                // below tells which files (.jsx) to apply compiling to
                test: /\.jsx?$/,
                // now we specify which files we don't want to include'
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        //defines an array of paths we want to include
        includePaths: [
            path.resolve(__dirname, "./node_modules/foundation-sites/scss")
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}