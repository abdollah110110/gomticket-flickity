//---------------------------------------------------------------------
//body onload 
function showMain() {
    setTimeout(function() {
        $('#bg-loader').fadeOut();
        $('#main').css({ 'opacity': '1' });
    }, 300);
}

$(document).ready(function() {


    //---------------------------------------------------------------------
    // Flickity Carousel
    $('#top-slider, #suggested-discounts, #pools-in-qom, #cinema, #recreational-collections, #weblog, #ticket').flickity({
        rightToLeft: true,
        cellAlign: 'right',
        groupCells: true,
        resize: false,
        pageDots: false,
        contain: true
    });

    //------------------------------------------------------------------------
    // Window resize
    $(window).resize(function(e) {
        $('#main').hide();
        setTimeout(function() {
            location.reload(false);
        });
    });

    //------------------------------------------------------------------------
    // کدهای آیکن قلب
    // Start Favorites 
    if (!$.cookie('datafavorites')) {
        var favorite = [];
    } else {
        var retrievedData = $.cookie("datafavorites");
        var favorite = JSON.parse(retrievedData);
        favorite.forEach(myFunction);

        function myFunction(value, index, array) {
            $(".favorite-box[data-id='" + value + "']").addClass("active");
        }
    };
    $('.favorite-box').click(function() {
        favval = $(this).closest(".favorite-box").data("id");
        if ($(this).closest(".favorite-box").is(".active")) {
            favorite = jQuery.grep(favorite, function(value) {
                return value != favval;
            });
            $.cookie("datafavorites", JSON.stringify(favorite), { path: '/' });
            $(this).closest(".favorite-box").removeClass("active");
            $(".mis_fav_alert").removeClass("show");
            setTimeout(function() {
                $(".mis_fav_alert").addClass("show");
            }, 0);
        } else {
            favorite.push(favval);
            $.cookie("datafavorites", JSON.stringify(favorite), { path: '/' });
            $(this).closest(".favorite-box").addClass("active");
            $(".fav_alert").removeClass("show");
            setTimeout(function() {
                $(".fav_alert").addClass("show");
            }, 0);
        }
    });
    $(".fav_alert .close_btn, .mis_fav_alert .close_btn").click(function(e) {
        e.preventDefault();
        $(".mis_fav_alert").removeClass("show");
        $(".fav_alert").removeClass("show");
    });
    // End Favorites


});