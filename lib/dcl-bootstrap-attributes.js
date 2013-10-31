/*
 * dcl-bootstrap-attributes
 * https://github.com/dualjs/dcl-bootstrap-attributes
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

function makeGridClasses(prefix) {
    var map = {};
    for (var i = 1; i <= 12; i++) {
        map[i] = prefix + i;
    }
    return map;
}

exports.grid = {
    ATTRS: {
        //----Columns size

        colExtraSmall: {
            cssClass: makeGridClasses('col-xs-')
        },
        colSmall: {
            cssClass: makeGridClasses('col-sm-')
        },
        colMedium: {
            cssClass: makeGridClasses('col-md-')
        },
        colLarge: {
            cssClass: makeGridClasses('col-lg-')
        },

        //----Columns ordering

        colExtraSmallPush: {
            cssClass: makeGridClasses('col-xs-push-')
        },
        colSmallPush: {
            cssClass: makeGridClasses('col-sm-push-')
        },
        colMediumPush: {
            cssClass: makeGridClasses('col-md-push-')
        },
        colLargePush: {
            cssClass: makeGridClasses('col-lg-push-')
        },

        colExtraSmallPull: {
            cssClass: makeGridClasses('col-xs-pull-')
        },
        colSmallPull: {
            cssClass: makeGridClasses('col-sm-pull-')
        },
        colMediumPull: {
            cssClass: makeGridClasses('col-md-pull-')
        },
        colLargePull: {
            cssClass: makeGridClasses('col-lg-pull-')
        },

        //----Columns offsetting 

        offsetExtraSmall: {
            cssClass: makeGridClasses('offset-xs-')
        },
        offsetSmall: {
            cssClass: makeGridClasses('offset-sm-')
        },
        offsetMedium: {
            cssClass: makeGridClasses('offset-md-')
        },
        offsetLarge: {
            cssClass: makeGridClasses('offset-lg-')
        },

        //----Responsive utilities

        visibleExtraSmall: {
            cssClass: 'visible-xs'
        },
        visibleSmall: {
            cssClass: 'visible-sm'
        },
        visibleMedium: {
            cssClass: 'visible-md'
        },
        visibleLarge: {
            cssClass: 'visible-lg'
        },

        hiddenExtraSmall: {
            cssClass: 'hidden-xs'
        },
        hiddenSmall: {
            cssClass: 'hidden-sm'
        },
        hiddenMedium: {
            cssClass: 'hidden-md'
        },
        hiddenLarge: {
            cssClass: 'hidden-lg'
        },

        //----Row

        row: {
            cssClass: 'row'
        }
    }
};

exports.utils = {
    ATTRS: {
        hidden: {
            cssClass: 'hidden'
        },
        clearfix: {
            cssClass: 'clearfix'
        },
        centerBlock: {
            cssClass: 'clearfix'
        },
        pull: {
            cssClass: {
                right: 'pull-right',
                left: 'pull-left'
            }
        }
    }
};