// main script

//header
if (matchMedia('screen and (max-width: 1023px)').matches) {
    $('.ham').click(function(){
        $('.gnb').toggleClass('view');
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
// main1 slide
// let smart_bn = new Swiper('.smart_bn', {
//     loop: true,
//     autoplay: {
//         //3초에 한 번 움직이기
//         delay: 3000
//     },
//     speed: 1000,
//     pagination: {
//         el: '.smart_bn .s_pager',
//         //페이저 숫자로
//         type: 'fraction'
//     },
// });

