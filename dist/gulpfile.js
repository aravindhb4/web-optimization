var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('imageresize', function () {
  gulp.src('views-min/images/pizza.png')
    .pipe(imageResize({
      width : 75,
      height : 75,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('views-min/images'));
});

gulp.task('imagemin', () =>
    gulp.src('views-min/images/pizza.png')
        .pipe(imagemin())
        .pipe(gulp.dest('views-min/images'))
);

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('html'));
});