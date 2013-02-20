/*
 * grunt-bem
 * https://github.com/eprev/grunt-bem
 *
 * Copyright (c) 2013 Anton Eprev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('bem', 'bem make', function () {

        var options = grunt.util._.extend({
                require: 'bem',
                targets: this.target
            }, this.options(), this.data),
            done = this.async();

        var BEM = require(options.require),
            Q = BEM.require('q');

        Q.when(BEM.api.make(options), done, function (err) {
            grunt.log.error(err);
            done(false);
        });

    });

};
