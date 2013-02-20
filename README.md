# grunt-bem [![Build Status](https://travis-ci.org/eprev/grunt-bem.png)](https://travis-ci.org/eprev/grunt-bem)

> Run [`bem make`](https://github.com/bem/bem-tools) using BEM API.

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bem --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bem');
```

## The "bem" task

### Overview

In your project's Gruntfile, add a section named `bem` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    bem: {
        options: {
            // Task-specific options go here.
        },
        target: {
            // Target-specific options go here.
        }
    }
})
```

### Options

#### options.require

Type: `String`
Default value: `bem`

Path to require BEM library.

#### options.root

Type: `String`
Default value: `.`

Project root (cwd by default).

#### options.method

Type: `String`
Default value: `make`

Method to run.

#### options.workers

Type: `Integer`
Default value: `10`

Run number of workers.

#### options.force

Type: `Boolean`
Default value: `False`

Force rebuild.

#### options.verbosity

Type: `String`
Default value: `info`

Verbosity level (silly, verbose, info, warn, debug, error).

### Usage Examples

#### Default Options

In this example, the default options are used to do build target `all` in the level `bem-project`. BEM is installed as a global package.

```js
grunt.initConfig({
    bem: {
        all: {
            root: 'bem-project'
        }
    }
})
```

#### Custom Options

In this example, custom options are used to do build targets `desktop.bundles` and `touch.bundles`. BEM is installed as a local package.

```js
grunt.initConfig({
    bem: {
        options: {
            require: 'bem-project/node_modules/bem',
            root: 'bem-project'
        },
        'desktop.bundles touch.bundles': {
            verbosity: 'warn'
        },
    }
})
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2013-02-20  v0.1.0 First official release.
