$(document).ready(function(){
    $('#welcome').click(function(){
        $('video').stop();
        $(this).animate({
            opacity:0,
        },500,()=>{
            $(this).text("Hello, Stranger");
            $(this).animate({
                opacity:1,
            },1000,function(){
                $('.content').animate({
                    left:'-100vw',
                },1500,()=>{
                    $(this).css('left','-100vw');
                });
                $('.video-frame').animate({
                    opacity:0,
                },1000,()=>{
                    $(this).css('opacity',0);
                    
                });
                $('.tags').animate({
                    opacity:1,
                },2000,function(){
                    $(this).css('opacity',1);
                });
            });
        });
        
        
    });
});