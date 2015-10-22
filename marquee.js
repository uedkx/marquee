(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.marquee = factory(root);
    }
})(this, function (root) {

    'use strict';

    var marquee = {};

    var translate, items, that, span, current;

    var defaults = {
        duration: 3000
    };

    var util = {
        extend: function() {
            var newObj = {};
            for (var i = 0; i < arguments.length; i++) {
                var obj = arguments[i];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        newObj[key] = obj[key];
                    }
                }
            }
            return newObj;
        },
        isString: function(obj) {
            return Object.prototype.toString.call(obj) == "[object String]"
        }
    };

    marquee.init = function(elem, opts) {
        if (opts) {
            defaults = util.extend(defaults, opts);
        }

        that = util.isString(elem) ? document.getElementById(elem) : elem;
        translate = that.children[0].offsetHeight;
        items = that.children.length;
        that.style.webkitTransition = "-webkit-transform 0.5s";
        that.style.webkitTransform = "translateY(0%)";
        span = 100 / items;
        current = 0;

        marquee.start();
    };

    marquee.start = function() {
        setInterval(function() {
            marquee.next();
        }, defaults.duration);
    }

    marquee.next = function() {
        var spacing = (current - span) === -100 ? 0 : current - span;
        that.style.webkitTransform = "translateY(" + spacing + "%)";
        current = spacing;
    };


  return marquee;

});