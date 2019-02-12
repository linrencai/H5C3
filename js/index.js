$(function () {
    var section2 = $('.section-2');
    var section3 = $('.section-3');
    var section8 = $('.section-8');
    // 调用插件
    $('#fullpage').fullpage({
        navigation: true,
        verticalCentered: false,
        scrollingSpeed: 1400,
        //当用户滚动屏幕的时候
        onLeave: function (index, nextIndex, direction) {
            $('.section *').attr('style','');
            //当用户滑到第三屏幕时候开始执行动画
            if (nextIndex == 3) {
                section2.find('.e7').css({
                    bottom: -$(window).height() + 240,
                    opacity: 1,
                    width: 207,
                    marginLeft: -257
                });
                section2.find('.mask').css('opacity', 1);
            };
            //当用户滑倒第四屏幕时候开始执行动画
            if (nextIndex == 4 ) {
                section2.find('.e7').hide();
                
                section3.find('#e5').show().animate({
                    bottom:-$(window).height() + 272,
                    marginLeft: -67
                    
                },800,function(){
                    $(this).hide();
                    $('.section-4 .main .e5').show();
                });
            };
            if(nextIndex == 6 && direction =='down') {
                $('.section-5').find('.cart .sofa').animate({
                    top:$(window).height()-160,
                    marginLeft: 200,
                    width:70
                },800,function(){
                    // $(this).hide();
                    $(this).css('width',0);
                  
                });
                $('.section-6').find('.e1').animate({
                    marginLeft: 440
                },800,function(){
                    $(this).animate({
                        bottom:45
                    },800,function(){
                        $(this).hide();
                        
                    })
                });
            };
            if(nextIndex == 8){
                $('.goon').hide();
            }else{
                $('.goon').show();
            };
        }
        
        
    });
    //当沙发文字过度完成的时候
    section2.find('.e4').on('webkitTransitionEnd', function () {
        $(this).parent().css('opacity',0);
        section2.find('.e5').css({
            opacity: 1,
            marginLeft: 126,
            bottom: 448,
            width: 152
        });
    });
    // 获取鼠标的位置
    section8.on('mousemove',function(e){
        var X= e.pageX;
        var Y = e.pageY;
        X=X-55;
        var height = $(window).height()/2;
        Y = Y < height ? height : Y;
        $('.hand').css('left',X);
        $('.hand').css('top',Y);
    });
    //下一页事件
    $('.goon').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    //再来一次
    $('.again').on('click',function(){
        //移动到第一屏
        $.fn.fullpage.moveTo(1);
        //清楚每屏的动画
        $('.section *').attr('style','');
    })
})