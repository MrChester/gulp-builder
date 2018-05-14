'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  buffer: require('vinyl-buffer'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp-*-*', 'gulp.*', '@*/gulp{-,.}*'], // the glob(s) to search for 
    overridePattern: true, // When true, overrides the built-in patterns. Otherwise, extends built-in patterns matcher list. 
    camelize: true, // if true, transforms hyphenated plugins names to camel case 
    lazy: true, // whether the plugins should be lazy loaded on demand 
  })
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite:png',
  'sprite:svg',
  'copy:image',
  'copy:assets',  
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'css:foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
