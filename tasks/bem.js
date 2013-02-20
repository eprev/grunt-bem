/*
 * grunt-bem
 * https://github.com/eprev/grunt-bem
 *
 * Copyright (c) 2013 Anton Eprev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var resolve = require('path').resolve.bind(process.cwd()),
        requireResolve = function (module) {
            var start = module.substr(0, 2);
            return (start !== './' && start !== '..') ? module : resolve(module);
        },
        extend = grunt.util._.extend;

    grunt.registerMultiTask('bem', 'bem make', function () {

        var options = extend({
                require: 'bem',
                targets: this.target
            }, this.options(), this.data),
            done = this.async();

        var BEM = require(requireResolve(options.require)),
            Q = BEM.require('q');

        Q.when(BEM.api.make(options), done, function (err) {
            grunt.log.error(err);
            done(false);
        });

    });

};
