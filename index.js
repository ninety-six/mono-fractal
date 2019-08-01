// index.js
'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const subTheme = mandelbrot({
    nav: ['docs', 'components'],
    skin: 'white',
    styles: ['default', '/mono-theme/webui.min.css'],
    panels: ['view', 'context', 'html'],
    favicon: '/mono-theme/favicon.ico'
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + '/assets', '/mono-theme');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = subTheme;