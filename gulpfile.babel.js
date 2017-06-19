import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './popup/popup.config';
import eventWebpackConfig from './event/event.config';
import contentWebpackConfig from './content/content.config';

gulp.task('popup-js', ['clean'], (cb) => {
    webpack(popupWebpackConfig, (err, stats) => {
        if(err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('event-js', ['clean'], (cb) => {
    webpack(eventWebpackConfig, (err, stats) => {
        if(err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('content-js', ['clean'], (cb) => {
    webpack(contentWebpackConfig, (err, stats) => {
        if(err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('popup-html', ['clean'], () => {
    return gulp.src('popup/src/popup.html')
        .pipe(gulp.dest('./build'))
});

gulp.task('copy-manifest', ['clean'], () => {
    return gulp.src('manifest.json')
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
    rimraf('./build', cb);
});

gulp.task('icon-png', ['clean'], () => {
    return (
        gulp.src('assets/img/bbgeye128.png')
            .pipe(plugins.rename('bbgeye128.png'))
            .pipe(gulp.dest('./build')),
        gulp.src('assets/img/bbgeye48.png')
            .pipe(plugins.rename('bbgeye48.png'))
            .pipe(gulp.dest('./build'))),
        gulp.src('assets/img/bbgeye16.png')
            .pipe(plugins.rename('bbgeye16.png'))
            .pipe(gulp.dest('./build'))

});


gulp.task('background-css', ['clean'], () => {
    return gulp.src('styles/background.css')
        .pipe(gulp.dest('./build'));
});

gulp.task('popup-css', ['clean'], () => {
    return gulp.src('styles/popup.css')
        .pipe(gulp.dest('./build'));
});


gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'event-js', 'content-js', 'icon-png', 'background-css', 'popup-css']);

gulp.task('watch', ['default'], () => {
    gulp.watch('popup/**/*', ['build']);
    gulp.watch('content/**/*', ['build']);
    gulp.watch('event/**/*', ['build']);
});

gulp.task('default', ['build']);
