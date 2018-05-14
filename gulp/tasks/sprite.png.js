'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    return $.gulp.src('./source/img/sprite-png/*.png')

    .pipe($.gp.debug({title: 'sprite:png'}))

      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        cssTemplate: './source/styles/scss/templates/handlebarsInheritance.scss.handlebars',
        padding: 30
      }))

      .pipe($.gp.debug({title: 'sprite:png'}))

      .pipe($.buffer())
      .pipe($.gp.imagemin())

      .pipe($.gp.debug({title: 'sprite:png'}))

      .pipe($.gp.if('*.scss', $.gulp.dest($.config.root), $.gulp.dest($.config.root + '/assets/css')))        
  })
};