/**
 * Created by Administrator on 2017/9/4.
 */
$(window).ready(function () {
    //轮播图的实现
    var lastClone = $('.banner-pic li')[0].cloneNode(true);
    $('.banner-pic').append(lastClone);
    var index = 0;
    var liLength = $('.banner-pic li').length;
    var timer = setInterval(autoPlay,3000);
    function autoPlay() {
        index ++;
        if(index > liLength-1){
            index = 1;
            $('.banner-pic').css({left:0});
        }
        $('.banner-pic').animate({left:-(index*100)+'%'});
        if(index == 4){
            $('.banner-circle li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('.banner-circle li').eq(index).addClass('active').siblings().removeClass('active');
    }

    $('.banner-circle li').mouseover(function () {
       $(this).addClass('active').siblings().removeClass('active');
       var i = $(this).index();
        // console.log(i);
        $('.banner-pic').animate({left:-(i*100)+'%'});
    });

    $('.banner-pic').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoPlay,2000);
    })

//    右侧栏显示
    $('.my-qq').hover(function () {
        $('.qq').fadeIn({'display':'block'},500);
        $('.qq-qq').fadeIn({'display':'block'},500);
    },function () {
        $('.qq').fadeOut({'display':'none'},500);
        $('.qq-qq').fadeOut({'display':'none'},500);
    });
    $('.my-phone').hover(function () {
        $('.phone').fadeIn({'display':'block'},500);
        $('.phone-phone').fadeIn({'display':'block'},500);
    },function () {
        $('.phone').fadeOut({'display':'none'},500);
        $('.phone-phone').fadeOut({'display':'none'},500);
    });
    $('.my-text').hover(function () {
        $('.text').fadeIn({'display':'block'},500);
        $('.text-text').fadeIn({'display':'block'},500);
    },function () {
        $('.text').fadeOut({'display':'none'},500);
        $('.text-text').fadeOut({'display':'none'},500);
    });
    $('.my-weixin').hover(function () {
        $('.weixin').fadeIn({'display':'block'},500);
    },function () {
        $('.weixin').fadeOut({'display':'none'},500);
    });

});