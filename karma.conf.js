/// <reference path="./typings/jasmine/jasmine.d.ts" />

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // paths loaded directly by Karma
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/http.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'karma.entry.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'target/**/*.js', included: false, watched: false},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see `proxies` section below)
      {pattern: 'target/**/*.html', included: false, watched: true},
      {pattern: 'target/**/*.css', included: false, watched: true}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/components/': '/base/target/components/'
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
  });
};
