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
            console.log(config.form.attr('action'));
            e.preventDefault();
            $.ajax({
                    type: config.form.attr('method'),
                    url: config.form.attr('action'),
                    data: config.form.serialize(),
                    success: function(response, textStatus, jqXHR) {
                        console.log('success');
                        window.location = '/';
                    },
                    error: function(jqXHR, data, errorThrown) {
                        console.log(jqXHR);

                    }

                });
        });
    };


    var foobar = function() { };

    // PRIVATE.................................................................

    var dbug = function(enabled) {};

    // PUBLIC INTERFACE........................................................
    return {
        init: init,
        foobar: foobar
    };

}(jQuery);
