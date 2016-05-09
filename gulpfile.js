	var gulp = require('gulp'),
		connect = require('gulp-connect'),
		opn = require('opn');

	gulp.task('connect', function() {
	  connect.server({
	    root: 'app',
	    livereload: true,
	    port: '9999'
	  });
	  opn('http://learning.loc')
	});

	gulp.task('php', function () {
	  gulp.src('./app/*.php')
	    .pipe(connect.reload());
	});

	gulp.task('css', function () {
	  gulp.src('./app/css/*.css')
	    .pipe(connect.reload());
	});

	gulp.task('js', function () {
	  gulp.src('./app/js/*.js')
	    .pipe(connect.reload());
	});

	gulp.task('watch', function () {
	   gulp.watch(['./app/*.php'], ['php']);
	   gulp.watch(['./app/css/*.css'], ['css']);
	   gulp.watch(['./app/js/*.js'], ['js']);
	});

	gulp.task('default', ['connect', 'watch']);