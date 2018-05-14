'use strict';

module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('./source/styles/scss/**/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass({ includePaths: ['build/'] })).on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            // .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};