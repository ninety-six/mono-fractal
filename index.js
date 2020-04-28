'use strict';

const mandelbrot = require('@frctl/mandelbrot');
const _ = require('lodash');

/*
 * Required config overrides incoming options
 * Note: styles array is merged
 */
const requiredConfig = {
    styles: [
        'default',
        '/mono-theme/webui.min.css'
    ],
    scripts: ['default']
};

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = function(options) {
    /*
     * Configure the theme
     */
    const styles = _.union(requiredConfig.styles, options.styles || []);
    const scripts = _.union(requiredConfig.scripts, options.scripts || []);

    const config = _.defaultsDeep({
        skin: 'white',
        styles: styles,
        scripts: scripts
    }, _.clone(options || {}));

    config.panels = config.panels || ['view', 'context', 'html'];
    config.nav = config.nav || ['search', 'docs', 'components', 'assets', 'information'];
    config.favicon = config.favicon || '/mono-theme/favicon.ico';

    const subTheme = mandelbrot(config);

    /*
     * Specify a template directory to override any view templates
     */
    subTheme.addLoadPath(__dirname + '/webui-overrides');

    /*
     * Specify the static assets directory that contains the custom stylesheet.
     */
    subTheme.addStatic(__dirname + '/assets', '/mono-theme');

    /*
     * Provide for further configuration
     */
    return subTheme;
};