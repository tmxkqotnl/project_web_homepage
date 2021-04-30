$(document).ready(function () {
    var cur = 0;
    //start
    setTimeout(function () {
        $('.welcome').animate({
            opacity: 0,
        }, 700, function () {
            $('.welcome').css('visibility', 'hidden');
            $('.container').animate({
                top: 0,
            }, 300, () => {
                $('.container').css('top', 0);
                $('.container').animate({
                    opacity: 1,
                }, 1000);
                $('.vertical').css('opacity', 1);
            });
        });
        $('.black').animate({
            left: '110%',
        }, 500, function () {
            $('.black').css('left', '100%');
        });
    }, 1000);

    //button
    $('#up').click(function () {
        if (cur < 0) {
            cur += 100;
            $('.container').animate({
                top: `${cur}vh`,
            }, 1000, function () {
            });
        }
    });
    $('#down').click(function () {
        if (cur > -200) {
            cur -= 100;
            let temp = `${cur}vh`;
            $('.container').animate({
                top: temp,
            }, 1000, function () {
            });
        }
    });
});