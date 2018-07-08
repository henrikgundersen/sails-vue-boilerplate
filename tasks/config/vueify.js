/**
 * `tasks/config/vueify`
 *
 * ---------------------------------------------------------------
 *
 * Transpile >=ES6 code for broader browser compatibility.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/babel.js
 *
 */

const envify = require('envify/custom');

module.exports = function (grunt) {
  grunt.config.set('browserify', {
    build: {
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          'vueify',
          ['babelify',{'presets': ['es2015']}],
          [envify({NODE_ENV: process.env.NODE_ENV}), {global: true}]
        ],
      },
      files: {
        '.tmp/public/js/module.js': ['assets/js/main.js']
      },
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
