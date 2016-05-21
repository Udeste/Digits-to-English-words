var gulp = require('gulp');
var mocha = require('gulp-mocha');
var server = require('gulp-express');
 
gulp.task('server', function () {
     // Start the server at the beginning of the task 
    server.run(['server.js']);
});

gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'nyan' }))
});

gulp.task('default', ['server']);