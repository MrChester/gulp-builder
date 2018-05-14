'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/styles/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch(['./source/img/**/*.{png,jpg}', './source/styles/fonts/**/*.*'], $.gulp.series('copy:assets'));
    $.gulp.watch('./source/img/sprite-svg/**/*.svg', $.gulp.series('sprite:svg'));
  });
};
