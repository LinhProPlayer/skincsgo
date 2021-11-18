// let searchitem = document.querySelector('.overlay-search');

// document.querySelector('#search-item').onclick = () =>{
//     searchitem.classList.toggle('active');
// }


var couter =1;
setInterval(function(){
    document.getElementById('radio'+ couter).checked = true;
    couter++;
    if(couter>4){
        couter = 1;
    }
},3000);

// var index = 1;
// changeImage = function(){
//     var imgs = ["./image/slide show/slide-1.jpg","./image/slide show/slide-2.jpg","./image/slide show/slide-3.jpg"];
//     document.getElementById('img').src = imgs[index];
//     index++;
//     if(index==3){
//         index = 0;
//     }
// }
// setInterval(changeImage,2000);
// slide show
$(document).ready(function() {
    var stt = 0;
    startItem = $(".banner-img-item:first").attr("stt");
    endItem = $(".banner-img-item:last").attr("stt");
    $(".banner-img-item").each(function() {
        if($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $(".icon-next").click(function() {
        if(stt == endItem) {
            stt = -1;

        }
        next = ++stt;
        $(".banner-img-item").hide();
        $(".banner-img-item").eq(next) .show();
    });
    $(".icon-prev").click(function() {
        if(stt == 0){
            stt = endItem;
            prev = stt++;
        }
        prev = --stt;
        $(".banner-img-item").hide();
        $(".banner-img-item").eq(prev) .show();
    });
    setInterval(function() {
        $(".icon-next").click();
    },2000)
});