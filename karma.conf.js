var webpackConfig = require("./webpack.config.js");
module.exports = function(config){
    config.set({
        //which browsers to test in
        browsers: ['Chrome','ChromeCanary'],
        singleRun: true,
        //use the mocha framework for reading the tests
        frameworks: ['mocha'],
        //below are test files we wish to run, use globs, we take files from any folder inside tests, and file with the correct ending
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/foundation-sites/dist/js/foundation.min.js',
            'app/tests/**/*.test.jsx'
            ],
        // what we want to do with our test files
        preprocessors: {
            //for the test files, run webpack to load components and sourcemap
            //so if errors they use the actual files instead of our bundle.js
            'app/tests/**/*.test.jsx': ['webpack','sourcemap']
        },
        reporters: ['mocha'],
        //if test never ends, have a timeout function run
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};