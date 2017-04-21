var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
    return gulp.src('less/**.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
    }))
              
})


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less'], function() {
    gulp.watch('less/*.less', ['less']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('less:watch', function(){
    gulp.watch('./project/**/*.less', ['less']);
});
