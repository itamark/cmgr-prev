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
