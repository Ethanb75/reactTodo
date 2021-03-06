var webpack = require('webpack')
//built in node variable 'path'
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
    console.log(e);
}

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
            }),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    API_KEY: JSON.stringify(process.env.API_KEY),
                    AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                    DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                    STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
                }
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
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api',
        ],
        alias: {
            //main parent component
           app: 'app',
            //styles
            applicationStyle: 'app/styles/app.scss',
            actions: 'app/actions/actions.jsx',
            reducers: 'app/reducers/reducers.jsx',
            configureStore: 'app/store/configureStore.jsx'
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
                    presets: ['react','es2015','stage-0']
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
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}