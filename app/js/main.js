$(function () {
    $('.advantages__slider').slick({
        arrows: false,
        dots: true
    });

    var mixer1 = mixitup('.products__items', {
        selectors: {
            control: '.products__filter-btn'
        }
    });

    var mixer2 = mixitup('.design__items', {
        selectors: {
            control: '.design__filter-btn'
        }
    });

})

