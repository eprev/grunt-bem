'use strict';

var BEM = require('bem');

exports.getTechs = function() {

    return {
        'bemdecl.js': 'bemdecl.js',
        'deps.js': 'deps.js',
        'css' : 'css'
    };

};

exports.getConfig = function () {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../foo.blocks'
        ])
    });

};