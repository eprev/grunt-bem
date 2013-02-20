'use strict';

var grunt = require('grunt');

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/

exports.bem = {
    setUp: function (done) {
        done();
    },
    'foo.bundles': function (test) {

        ['deps.js', 'css'].forEach(function (tech) {
            var actual = grunt.file.read('test/fixtures/foo/foo.bundles/qux/qux.' + tech);
            var expected = grunt.file.read('test/expected/foo/foo.bundles/qux/qux.' + tech);
            test.equal(actual, expected);
        });
        test.done();

    },
    'bar.bundles': function (test) {

        ['deps.js', 'css'].forEach(function (tech) {
            var actual = grunt.file.read('test/fixtures/bar/bar.bundles/qux/qux.' + tech);
            var expected = grunt.file.read('test/expected/bar/bar.bundles/qux/qux.' + tech);
            test.equal(actual, expected);
        });
        test.done();

    }
};
