var heroShinker = function() {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
        $(hero).parent().css('padding-top', heroHeight);
    
   // when clicking items , decreasing the height of hero
    $("#s2").click(function () {
        $(hero).css('height', (100));
    })
    $("#s3").click(function () {
        $(hero).css('height', (100));
    })
    $("#s4").click(function () {
        $(hero).css('height', (100));
    })

    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 215)) {
            hero.addClass('fixme');
        }
        else {
            hero.removeClass('fixme');
        };
    });
}

heroShinker();