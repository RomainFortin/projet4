const gulp = require('gulp');
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');


function style () {
        return gulp.src('css_source/**/*.css')
            .pipe(purgecss({
                content: ['**/*.html']
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('./'))
}


exports.style = style;