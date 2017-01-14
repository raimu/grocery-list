const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('typescript', function () {
  var tsProject = ts.createProject('tsconfig.json');
  return gulp.src('app/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('copy-app', function() {
  return gulp
    .src('app/**/*.html', {base: './app'})
    .pipe(gulp.dest('./dist/app'))
});

gulp.task('copy-root', function() {
  gulp.src(['index.html', 'systemjs*.config.js', 'styles.css'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-3rd-party', function() {
  return gulp
    .src([
      'node_modules/material-design-lite/material.min.css',
      'node_modules/material-design-lite/material.min.js',
      'node_modules/material-design-icons/iconfont/material-icons.css',
      'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2',
      'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff',
      'node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/@angular/**/*js',
      'node_modules/rxjs/**/*.js',
      'node_modules/pouchdb/dist/pouchdb.min.js'
      ], {base: './node_modules'})
    .pipe(gulp.dest('./dist/3rdparty'))
});

gulp.task('cordova', [ 'typescript', 'copy-app', 'copy-root', 'copy-3rd-party', 'cordova-copy-index'], function() {
  gulp.src(['dist/**', '!dist/index.html'], { base: './dist' })
    .pipe(gulp.dest('./cordova/www'));
  
});

gulp.task('cordova-copy-index', function() {
  return gulp.src('cordova-index/*', { base: 'cordova-index' })
    .pipe(gulp.dest('./cordova/www'))
})

gulp.task('default', ['typescript', 'copy-3rd-party', 'copy-app']);