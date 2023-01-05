// main script

//header
if (matchMedia('screen and (max-width: 1023px)').matches) {
    $('.ham').click(function(){
        $('.gnb').toggleClass('view');
        $('.ham').toggleClass('close');
        return false;
    });
    $('.d1').click(function(){
        $(this).toggleClass('down');
        $(this).find($('.sub_mb')).toggleClass('show');
        return false;
    });
} else {
    $('.gnb').mouseover(function(){
        $('.sub_web').addClass('on');
        let h = $('.sub_web').height();
        $('.Bg').css({
            height: h,
            display: 'block',
            borderTop: '1px solid #ddd'
        });
    }).mouseout(function(){
        $('.sub_web').removeClass('on');
        $('.Bg').css({
            height: 0,
            display: 'none',
            borderTop: 0
        });
    })
};
// main2 writing
//tap 탭 메뉴
$('.w_tap .wBtn').click(function(){
    //순서값
    let i = $(this).index();

    //tap 버튼
    $('.w_tap .wBtn').removeClass('on');
    $(this).addClass('on');
    
    //보이는것 .w_content
    $('.w_content_wrap .w_content').removeClass('view');
    $('.w_content_wrap .w_content').eq(i).addClass('view');
    return false;
});
// main1 slide
let slider = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        //3초마다 한 번
        delay: 3000
    },
    speed: 1000,
    pagination: {
        el: '.main1 .pager',
        //페이저 동그라미로
        type: 'bullets',
        clickable: 'true'
    },
    navigation : {
		nextEl : '.slide_next', 
		prevEl : '.slide_prev', 
	},
});

