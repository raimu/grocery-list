const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('typescript', function () {
  var tsProject = ts.createProject('tsconfig.json');
  return gulp.src('app/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('default', ['typescript']);