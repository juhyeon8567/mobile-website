$(document).ready(function(){
    $(".menu_icon").click(function(){
        let documentHeight = $(document).height();
        let windowHeight = $(window).height();
        $('.menu_bg').css('height',documentHeight);
        $("#gnb").css('height',windowHeight);
        $('.menu_bg').show();
        $("#gnb").animate({left:"0", opacity: "1"},"slow");
    });
    $(".close_btn, .menu_bg").click(function(){
        $('.menu_bg').hide();
        $("#gnb").animate({left:"-100%", opacity: "0"},"fast");
    });
  });