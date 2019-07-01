var gulp = require('gulp');
var babel = require('gulp-babel');

const paths = {
    babel: {
        src: './renderer/*.jsx',
        dest: './build',
    },
};

function transpileByBabel() {
    return gulp.src(paths.babel.src) //view/以下の.jsを変換対象に
        .pipe(babel({
            presets: ['@babel/env', '@babel/react'],
        }))
        .pipe(gulp.dest(paths.babel.dest)); //build/に出力
}

function watch() {
    gulp.watch(paths.babel.src, transpileByBabel);
}

exports.babel = transpileByBabel;
exports.watch = watch;
exports.default = transpileByBabel;