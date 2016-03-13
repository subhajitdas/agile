'use strict';

let gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
    nodemon({
        script: './dist/app.js',
        ext: 'js html',
        ignore: [
            './src',
            './node_modules',
            './.vscode',
            './typings'
        ]
    }).on('restart', function () {
        console.log('Server restarted!');
    });
});
