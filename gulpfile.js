var gulp = require('gulp')
var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/stylesheets/index.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("dist/stylesheets/index.css"))
});

gulp.task('default', ['stylesheets']);
