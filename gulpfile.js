var bower = require('bower');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./www/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('./www/scss/all.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('init', function() {
  console.log('Installing latest stable release of Ionic from bower');
  return bower.commands.install();
});

gulp.task('default', ['sass']);
