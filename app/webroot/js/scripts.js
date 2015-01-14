var App    = window.App || {};

var Component = window.Component || {};
var Controller = window.Controller || {};

if (typeof console == "undefined") {
    this.console = {log: function() {}};
}
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

/**
Component.Template = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page, options) {
        config.page = page;
        config = App.Utils.extend(options, config);

    };

    var foobar = function() { };

    // PRIVATE.................................................................

    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init,
        foobar: foobar
    };

}();
*/
Component.Comments = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page, options) {
        config.page = page;
        config = App.Utils.extend(options, config);

        $('a.comments').click(function(e){
            e.preventDefault();
            // $('.overlaybackground').addClass('open');
            Component.Overlay.toggleOverlay();
            $('#commentcontainer').load($(this).attr('href'));
        });

        $('.overlaybackground').click(function(e){
            e.preventDefault();
            if(e.target.className == 'overlaybackground open'){
                Component.Overlay.toggleOverlay();
            $('#commentcontainer').remove('*:not(#commentcontainer)');
        }
            
        });

    };

    var expandComments = function(id){

    }

    // PRIVATE.................................................................

    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init
    };

}(jQuery);

Component.Forms = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page, options) {
        
        config.page = page;
        config = App.Utils.extend(options, config);
        config.form = config.page.find('form');
        config.form.submit(function(e){

            e.preventDefault();
            $.ajax({
                    type: config.form.attr('method'),
                    url: config.form.attr('action'),
                    data: config.form.serialize(),
                    dataType: "JSON",
                    success: function(response, textStatus, jqXHR) {
                        console.log('success');
                        switch (config.form.attr('id')) {
                            case 'ItemIndexForm':
                                postItem(response);
                                break;
                            case 'UserLoginForm':
                                loginForm();
                                break;
                        }
                        loginForm();
                    },
                    error: function(jqXHR, data, errorThrown) {
                        console.log(jqXHR);

                    }

                });
        });


    };

    var loginForm = function(){
        // window.location = '/';
    }
    var postItem = function(response){
        console.log(response);
        config.form.after('<div class="card"><div class="card-content"><span class="card-title grey-text">'+response.Item.description+'</span></div></div>');
        
    }


    var foobar = function() { };

    // PRIVATE.................................................................

    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init,
        foobar: foobar
    };

}(jQuery);

Component.Overlay = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page, options) {
        config.page = page;
        config = App.Utils.extend(options, config);
    };

    var toggleOverlay = function(){
        $('.overlaybackground').toggleClass('open');
    }

    // PRIVATE.................................................................

    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init,
        toggleOverlay:toggleOverlay
    };

}(jQuery);

/* Controller['name'] = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page) {
        config.page = page;
    };

    // PRIVATE.................................................................
    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init
    };

}(); */

 Controller['users_add'] = function($) {

    var config = {
        page: ""
    };

    // PUBLIC..................................................................
    var init = function(page) {
        config.page = page;
    };

    // PRIVATE.................................................................
    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init
    };

}(); 

$(function() {


    // setTimeout(function() {
    //     $('body').addClass('animate');
    // }, 200);

    $('html').removeClass('no-js');

  var $page = $('body');
   
   if($page.find('form').length > 0){
    Component.Forms.init($page, {});
   }

   if($page.find('.alert').length > 0){
    $page.find('.alert').hide();
    toast($page.find('.alert').text(), 4000);
   }

   if($page.find('a.comments').length > 0){
    Component.Comments.init($page, {});
   }

    // Global Components Init()
     // Component.Overlay.init($page, {});
    
if ($page.attr('data-controller') !== undefined) {
        var page_controller = $page.attr('data-controller');
        if (Controller[page_controller] !== undefined) {
            Controller[page_controller].init($page);

        }
    }

});

    


