$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

// header

    $('.logo').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.back-bird').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.fore-bird').css({
        'transform': 'translate(0px, -' + wScroll / 40 + '%)'
    });

// Model Grid

    if (wScroll > $('.clothes-title').offset().top - ($(window).height() / 1.2)) {
        $('.clothes-pics figure').each(function (i) {
            setTimeout(function () {
                $('.clothes-pics figure').eq(i).addClass('is-showing')
            }, 150 * (i + 1));

        })
    }

// large-window

    if (wScroll > $('.large-window').offset().top - $(window).height()) {
        $('.large-window').css({
            'background-position': "center " + (wScroll - $('.large-window').offset().top) + "px"
        });

        var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 7);

        $('.window-tint').css({
            'opacity': opacity
        })

    }

// blog-posts

    if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

        var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height()- 350);


        $('.post-1').css({
            'transform':'translate('+ offset +'px, ' + Math.abs(offset * 0.2) + 'px)'
        });

        $('.post-3').css({
            'transform':'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2)+'px)'
        });
    }

});