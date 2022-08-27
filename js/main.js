$(function(){
    $('.open_btn').click(function(){
        $('.ham_menu').stop().fadeIn(300)
        $('.close_btn').css('display','block')
        $('.open_btn').css('display','none')
    })
    $('.close_btn').click(function(){
        $('.ham_menu').stop().fadeOut(300)
        $('.open_btn').css('display','block')
        $('.close_btn').css('display','none')
    }) // ham_btn


    $('.ham_menu li').click(function(){
        $('.ham_menu li').removeClass('on_ham')
        $(this).addClass('on_ham')
        $('.ham_menu ul').stop().fadeOut(500)
        $('.on_ham ul').stop().fadeIn(500)
    })
    $('.close_btn').click(function(){
        $('.ham_menu li').removeClass('on_ham')
        $('.sub_menu').css('display','none')
    }) // ham_menu

    $('.gnb>li').mouseover(function(){
        $(this).addClass('on_gnb')
        $('.on_gnb ul').stop().fadeIn(300)
    })
    $('.gnb>li').mouseout(function(){
        $(this).removeClass('on_gnb')
        $('.gnb ul').stop().fadeOut(300)
    }) // gnb_menu


    $(window).scroll(function(){
        if($(this).scrollTop() >= 400) {
            $('.fac01').stop().animate({top:0},500);
            $('.fac02').delay(500).animate({top:0},500);
            $('.fac03').delay(1000).animate({top:0},500);
            $('.fac04').delay(1500).animate({top:0},500);
        }
    }) // facilities scroll event


    $('.bxslider').bxSlider(); // service_slide

    $('.fun_open01').click(function(){
        $('.fun_open01').css('display','none')
        $('.fun_open02').css('display','block')
        $('.fun03_wrap').slideDown(500)
        $('.fun04_wrap').delay(300).slideDown(500)
    })
    $('.fun_open02').click(function(){
        $('.fun_open02').css('display','none')
        $('.fun_close').css('display','block')
        $('.fun05_wrap').slideDown(500)
        $('.fun06_wrap').delay(300).slideDown(500)
    })
    $('.fun_close').click(function(){
        $('.fun_open01').css('display','block')
        $('.fun_close').css('display','none')
        $('.fun03_wrap').delay(900).slideUp(500)
        $('.fun04_wrap').delay(600).slideUp(500)
        $('.fun05_wrap').delay(300).slideUp(500)
        $('.fun06_wrap').slideUp(500)
    }) // fun_more_btn
    $('.food_open01').click(function(){
        $('.food_open01').css('display','none')
        $('.food_open02').css('display','block')
        $('.food03_wrap').slideDown(500)
        $('.food04_wrap').delay(300).slideDown(500)
    })
    $('.food_open02').click(function(){
        $('.food_open02').css('display','none')
        $('.food_close').css('display','block')
        $('.food05_wrap').slideDown(500)
        $('.food06_wrap').delay(300).slideDown(500)
    })
    $('.food_close').click(function(){
        $('.food_open01').css('display','block')
        $('.food_close').css('display','none')
        $('.food03_wrap').delay(900).slideUp(500)
        $('.food04_wrap').delay(600).slideUp(500)
        $('.food05_wrap').delay(300).slideUp(500)
        $('.food06_wrap').slideUp(500)
    }) // food_more_btn
    $('.event_open01').click(function(){
        $('.event_open01').css('display','none')
        $('.event_open02').css('display','block')
        $('.event03_wrap').slideDown(500)
        $('.event04_wrap').delay(300).slideDown(500)
    })
    $('.event_open02').click(function(){
        $('.event_open02').css('display','none')
        $('.event_close').css('display','block')
        $('.event05_wrap').slideDown(500)
        $('.event06_wrap').delay(300).slideDown(500)
    })
    $('.event_close').click(function(){
        $('.event_open01').css('display','block')
        $('.event_close').css('display','none')
        $('.event03_wrap').delay(900).slideUp(500)
        $('.event04_wrap').delay(600).slideUp(500)
        $('.event05_wrap').delay(300).slideUp(500)
        $('.event06_wrap').slideUp(500)
    }) // event_more_btn

    $('.fun').mouseenter(function(){
        $(this).addClass('on_fun')
        $('.on_fun>.fun_txt_wrap').stop().fadeIn(300)
    })
    $('.fun').mouseleave(function(){
        $('.on_fun>.fun_txt_wrap').stop().fadeOut(300)
        $(this).removeClass('on_fun')
    }) // fun_contents
    $('.food').mouseenter(function(){
        $(this).addClass('on_food')
        $('.on_food>.food_txt_wrap').stop().fadeIn(300)
    })
    $('.food').mouseleave(function(){
        $('.on_food>.food_txt_wrap').stop().fadeOut(300)
        $(this).removeClass('on_food')
    }) // food_contents
    $('.event').mouseenter(function(){
        $(this).addClass('on_event')
        $('.on_event>.event_txt_wrap').stop().fadeIn(300)
    })
    $('.event').mouseleave(function(){
        $('.on_event>.event_txt_wrap').stop().fadeOut(300)
        $(this).removeClass('on_event')
    }) // event_contents


    $(window).scroll(function(){
        if($(this).scrollTop()>=90) {
            $('.inner_header').addClass('fixed')
        } else {
            $('.inner_header').removeClass('fixed')
        }
        if($(this).scrollTop()>=600) {
            $('.top_btn').fadeIn(300)
        } else {
            $('.top_btn').fadeOut(300)
        }
        $('.top_btn').click(function(e){
            e.preventDefault()
            $('html, body').stop().animate({scrollTop:0},1000)
        })
    }) // header_fixed, top_btn

})
