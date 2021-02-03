$(function () {
    $('.menu__phone-btn').on('click', function () {
        $('.menu__user').toggleClass('active');
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list,.menu__btn').toggleClass('active');
    });


    $('.advantages-slider').slick({
        arrows: false,
        dots: true
    });

    $('.partners-slider').slick({
        arrows: false,
        autoplay: true
    });

    var mixer1 = mixitup('.products__items', {
        selectors: {
            control: '.js-products__filter-btn'
        }
    });

    var mixer2 = mixitup('.design__items', {
        selectors: {
            control: '.js-design__filter-btn'
        }
    });

})