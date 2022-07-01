const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    proxy: 'http://127.0.0.1:8000'
});
mix.js('resources/js/fnapp.js', 'public/js')
.js('resources/js/baapp.js', 'public/js')
.styles([
    'resources/css/default.css',
    'resources/css/fndefault.css',
],'public/css/fnapp.css')
.styles([
    'resources/css/default.css',
    'resources/css/badefault.css',
],'public/css/baapp.css');
