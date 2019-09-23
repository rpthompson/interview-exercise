const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del'); // signal async completion

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss') //gyulp.src creates a stream for reading all SCSS files
        .pipe(sass().on('error', sass.logError)) // pipe to pass the streamed data to the sass compiler
        .pipe(gulp.dest('./css/')); // dest = creates a stream for writing the data to the file system
});

gulp.task('clean', () => { // clean task deletes the generated CSS file
    return del([
        'css/styles.css',
    ]);
});


gulp.task('default', function(done){
  console.log('GULP');
  done(); // callback to notify async completion
})


gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});