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

    var translate, items, that, spacing, current;

    var defaults = {
        interval: 3000,
        duration: 400,
        easing: 'ease-in-out'
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
            return Object.prototype.toString.call(obj) === "[object String]"
        }
    };

    marquee.init = function(elem, opts) {
        if (opts) {
            defaults = util.extend(defaults, opts);
        }

        that = util.isString(elem) ? document.getElementById(elem) : elem;
        spacing = translate = -that.children[0].offsetHeight;
        

        console.log(that.querySelector('li'));
        that.appendChild(that.querySelector('li').cloneNode(true));
        items = that.children.length;

        that.style.webkitTransitionTimingFunction = defaults.easing;
        that.style.transitionTimingFunction = defaults.easing;
        that.style.webkitTransitionDuration = defaults.duration + 'ms';
        that.style.transitionDuration = defaults.duration + 'ms';
        that.style.webkitTransform = 'translate3d(0, 0, 0)';
        that.style.transform = 'translate3d(0, 0, 0)';

        marquee.start();
    };

    marquee.start = function() {
        setInterval(function() {
            marquee.next();


        }, defaults.interval);
    }

    marquee.next = function() {
        var _self = this;
        //到最后一项，跳回顶部实现无限滚动
        if (spacing === translate * items) {
            that.style.webkitTransitionDuration = '0ms';
            that.style.transitionDuration = '0ms';
            that.style.transform = "translate3d(0, 0, 0)";
            that.style.webkitTransform = "translate3d(0, 0, 0)";
            spacing = translate;
            setTimeout(function() {_self.next()}, 30);
            return;
        }
        
        that.style.transitionTimingFunction = defaults.easing;
        that.style.webkitTransitionDuration = defaults.duration + 'ms';
        that.style.transform = "translate3d(0, " + spacing + "px, 0)";
        that.style.webkitTransform = "translate3d(0, " + spacing + "px, 0)";
        spacing += translate;
        

    };


  return marquee;

});