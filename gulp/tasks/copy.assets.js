'use strict';

module.exports = function() {
  $.gulp.task('copy:assets', function() {
    return $.gulp.src('./source/styles/fonts/**/*.*', { since: $.gulp.lastRun('copy:assets')})

    .pipe($.gp.debug({title: 'Our assets'}))

      .pipe($.gulp.dest($.config.root + '/assets/css/fonts'));
  });
};
