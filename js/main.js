// code for the hiiden navegation to open the burger menu
$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-navegation").addClass(".open-burger-menu");
        $(".full-navegation").css("visibility", "visible");
        $(".full-navegation").css("opacity", "1");
    });
    $(".close-nav").click(function(){
        $(".full-navegation").removeClass(".open-burger-menu");
        $(".full-navegation").css("visibility", "hidden");
        $(".full-navegation").css("opacity", "0");
    });
    // code for the styky nav bar
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if( sc > 100){
            $(".nav").addClass("sticky")
           
            
        }
        else{
            $(".nav").removeClass("sticky")
        }

    });
});

