/*global MAKE:true */

'use strict';


MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/

});


MAKE.decl('BundleNode', {

    getOptimizerTechs: function () {
        return [];
    },

    getTechs: function() {
        return [
            'bemdecl.js',
            'deps.js',
            'css'
        ];
    }

});