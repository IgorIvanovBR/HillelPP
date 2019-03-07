let gulp = require('gulp'),
    // uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify-es').default,
    rename = require('gulp-rename');

gulp.task('do-it', function(done) {
         gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('jsMin.js'))
        .pipe(gulp.dest('dist'));
    done();
});
gulp.task('css', function(done){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'));
        done();
});