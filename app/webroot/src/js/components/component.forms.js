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
