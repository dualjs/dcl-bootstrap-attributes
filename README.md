dcl-bootstrap-attributes
========================

Mixins for Twitter Bootstrap common classes to be used with `dcl-widget`.

Installation
------------

    npm install dcl-bootstrap-attributes

Usage
-----

Let's say we want to define a widget class that should able to work as Bootstrap grid element.

```javascript
var BSAttrs = require('dcl-bootstrap-attributes');
var Widget = require('dcl-widget');
var MyWidget = Widget
    .extend(BSAttrs.grid)
    .extend({
        /*your widget definition*/
    });
```

Summing it up, we need call `.extend()` for each mixin we want to use.

Available mixins
----------------

#### grid

Adds the following attributes:

 * Columns size
     * `colExtraSmall`
     * `colSmall`
     * `colMedium`
     * `colLarge`
 * Columns ordering
     * `colExtraSmallPush`
     * `colSmallPush`
     * `colMediumPush`
     * `colLargePush`
     * `colExtraSmallPull`
     * `colSmallPull`
     * `colMediumPull`
     * `colLargePull`
 * Columns offsetting 
     * `offsetExtraSmall`
     * `offsetSmall`
     * `offsetMedium`
     * `offsetLarge`
 * Responsive utilities
     * `visibleExtraSmall`
     * `visibleSmall`
     * `visibleMedium`
     * `visibleLarge`
     * `hiddenExtraSmall`
     * `hiddenSmall`
     * `hiddenMedium`
     * `hiddenLarge`
 * `row`

#### utils

Adds the following attributes:

 * `hidden`
 * `clearfix`
