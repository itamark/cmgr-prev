$(function() {


    // setTimeout(function() {
    //     $('body').addClass('animate');
    // }, 200);

    $('html').removeClass('no-js');

    var $page = $('body');
   
   if($page.find('form')){
    Component.Forms.init($page, {});
   }

   if($page.find('a.comments')){
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

    


