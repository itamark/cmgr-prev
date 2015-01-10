/**
 * General utility functions that can be used in various places
 * througout a project
 * @class Utils
 * @namespace App 
 */
App.Utils = function($) {

    /**
     * helper function to append new properties onto an object
     * @public
     * @param  {Object} options - the new properties that need to be added
     * @param  {Object} config - the object the new props are being added to
     * @return {Object}         - the combined object
     */
    var extend = function(options, config) {
        if (typeof options !== "undefined") {
            for (prop in options) {
                if (options.hasOwnProperty(prop)) {
                    config[prop] = options[prop];
                }
            }
        }
        return config;
    };

    var getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

    var getHash = function(key) {
        var match = location.hash.match(new RegExp(key+'=([^&]*)'));
        if (match) {
            return match[1];
        } else {
            return false;
        }
    };

    /**
     * returns the RGB from a HEX
     * @public
     * @param  {String} hex - hexadecimal representation of a color
     * @return {Object}     - R, G and B integer values
     */
    var hex2rgb = function(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }:null;
    };


    var inViewport = function(el){
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
};

var anyInViewport = function(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

    /**
     * returns a random number
     * @public
     * @params Int min - minimum number
     * @params Int max - maximum number
     * @return Int - returns random interger
     */
    var randInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Returns the version of IE if on IE or false if not
     * @public
     * @return mixed - returns integer of version or false if not IE
     */
    var isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
// get position on page by id
    var getPositionOnPage=function(e){var t=document.getElementById(e);var n={y:0};while(t){n.y+=t.offsetTop;t=t.offsetParent}if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){n.y-=document.documentElement.scrollTop}else if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){n.y-=document.body.scrollTop}else if(window.pageXOffset||window.pageYOffset){n.y-=window.pageYOffset}return n.y}


    return {
        extend: extend,
        hex2rgb: hex2rgb,
        getHash: getHash,
        randInt: randInt,
        isIE: isIE,
        inViewport: inViewport,
        anyInViewport: anyInViewport,
        getParameterByName: getParameterByName,
        getPositionOnPage: getPositionOnPage
    };

}();
