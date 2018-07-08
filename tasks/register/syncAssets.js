/**
 * `tasks/register/syncAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/sync-assets.js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
    // 'vueify:build',
    'browserify:build',
    'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
