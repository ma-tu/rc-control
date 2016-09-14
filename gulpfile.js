var gulp = require('gulp');
var del = require('del');

gulp.task('init', ['init-vendors:jquery', 'init-vendors:bootstrap']);

gulp.task('init-vendors:jquery', () => {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./public/vendors/js'))
});

gulp.task('init-vendors:bootstrap', ['init-vendors:bootstrap:css', 'init-vendors:bootstrap:fonts', 'init-vendors:bootstrap:js']);

gulp.task('init-vendors:bootstrap:css', () => {
  return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(gulp.dest('./public/vendors/css'))
});

gulp.task('init-vendors:bootstrap:fonts', () => {
  return gulp.src(['./node_modules/bootstrap/dist/fonts/*'])
    .pipe(gulp.dest('./public/vendors/fonts'))
});

gulp.task('init-vendors:bootstrap:js', () => {
  return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.js'])
    .pipe(gulp.dest('./public/vendors/js'))
});

gulp.task('clean', ['clean:public:vendors', 'clean:public:app']);

gulp.task('clean:public:vendors', function () {
  return del("public/vendors");
});

gulp.task('clean:public:app', function () {
  return del("public/app");
});

gulp.task('build:clean', ['clean:public:app']);

gulp.task('build:deploy', ['build:client:js', 'build:client:css']);

gulp.task('build:client:js', () => {
  return gulp.src(['./src/client/js/*'])
    .pipe(gulp.dest('./public/app/js'))
});

gulp.task('build:client:css', () => {
  return gulp.src(['./src/client/css/*'])
    .pipe(gulp.dest('./public/app/css'))
});

