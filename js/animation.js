$(document).ready(function(){
    $(window).scroll(function(){
        $(".fade-up-down").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
                $(this).addClass("up-down");
            }
        });
    });
})


