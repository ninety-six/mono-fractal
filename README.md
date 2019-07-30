# Mono

A Fractal subtheme, built upon the default Mandelbrot theme.

## Installing

```Shell
npm install git+ssh://git@github.com/AccentDesign/Mono.git
```

## Setup

In the [setup file](https://fractal.build/guide/project-settings.html#the-fractal-js-file) for your project you can ```require``` and use the subtheme:

```Shell
// fractal.config.js
'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const webUITheme = require('mono');

// ... project setup and configuration

fractal.web.theme(webUITheme); // use the sub-classed theme
```
