$(window).scroll(function () {
    $(window).scrollTop() > 50 ?
        $('.main-nav').addClass('fixed') :
        $('.main-nav').removeClass('fixed');

});

$(document).ready(function () {
    $(document).on('click', function () {
        $('.custom-collapse').removeClass('show');
    });
});