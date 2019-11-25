'use strict';

const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const { series, src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function compile() {
    return src('./src/components/*.scss')
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                browsers: ['ie > 9', 'last 2 versions'],
                cascade: false,
            })
        )
        .pipe(cssmin())
        .pipe(dest('./lib'));
}

function copyfont() {
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
