'use strict';

var mixins = require('../lib/dcl-bootstrap-attributes');
var D = require('dual');
var Widget = D.Widget;

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

exports['dcl-bootstrap-attributes'] = {
    setUp: function(done) {
        // setup here
        done();
    },

    'your test name': function(test) {
        test.expect(1);

        var W = Widget
            .extend(mixins.grid)
            .extend(mixins.utils)
            .extend({
                initStructure : function() {
                    this.$ = D.fromJSON(['div']);
                }
            });

        var w = new W();

        w.setColMedium(5);
        w.setOffsetSmall(1);
        w.setColMediumPush(2);
        w.setHidden(true);
        w.setVisibleLarge(true);

        test.equals(w.stringify(), '<div class="col-md-5 offset-sm-1 col-md-push-2 hidden visible-lg"></div>');

        test.done();
    }
};