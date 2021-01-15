$(document).ready(function () {

    // Variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');

    let flag = true;

    let cars = ['./assets/Img_06.png', './assets/Img_05.png'];

    // Key Events
    $(document).on('keypress', function (e) {
        if (e.which == 32) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    });

    // Headlights
    $(document).on('keypress', function (b) {
        if (b.which ==  119) {
            if (flag) {
                flag = false;
                $img.attr('src', cars[0]);
            }else {
                flag = true;
                $img.attr('src', cars[1]);
            }
        }
    });
});