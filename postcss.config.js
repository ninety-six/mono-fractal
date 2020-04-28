'use strict';

module.exports = {
    map: {
        inline: false,
        annotation: true,
        sourcesContent: true
    },
    plugins: {
        'postcss-discard-comments': {},
        autoprefixer: {
            cascade: false,
            grid: 'autoplace'
        }
    }
}