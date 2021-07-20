var gulp = require('gulp'), sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('./public/assets/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./public/assets/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass'));