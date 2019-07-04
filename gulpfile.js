const gulp = require('gulp');
const babel = require('gulp-babel');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const electron = require('electron-connect').server.create();

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

const paths = {
    babel: {
        src: './renderer/**/*.jsx',
        dest: './build',
    },
    main: {
        src: 'main/**/*.js',
    },
    renderer: {
        srcjsx: 'renderer/**/*.jsx',
        srchtml: 'renderer/**/*.html',
    },
};

// 以前のもの
function transpileByBabel() {
    return gulp.src(paths.babel.src) //view/以下の.jsを変換対象に
        .pipe(babel({
            presets: ['@babel/env', '@babel/react'],
        }))
        .pipe(gulp.dest(paths.babel.dest)); //build/に出力
}

function transpileViaWebpack() {
    // webpackStreamの第2引数にwebpackを渡す
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
}

function runElectron() {
    electron.start();
}

function watch() {
    gulp.watch(paths.main.src, electron.restart);
    gulp.watch(paths.renderer.srcjsx, (callback) => {
        transpileViaWebpack();
        electron.reload();
        callback();
    });
    gulp.watch(paths.renderer.srchtml, (callback) => {
        electron.reload();
        callback();
    });
}

exports.babel = transpileByBabel;
exports.watch = watch;
exports.webpack = transpileViaWebpack;
exports.run = gulp.series(transpileViaWebpack, gulp.parallel(runElectron, watch));
exports.default = transpileViaWebpack;