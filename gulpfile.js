const gulp = require('gulp');
const rename =require("gulp-rename");
const { series } = require('gulp');
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');


function style () {
        return gulp.src(['css_source/**/*.css', '!css_source/css/bootstrap.css'])
            .pipe(purgecss({
                content: ['**/*.html']
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./'))
}

function bootstrap () {
        return gulp.src(['css_source/css/bootstrap.css'])
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./css'))
}

function watch() {
    gulp.watch('css_source/**/*.css', series(style, bootstrap));
};


exports.watch = watch;