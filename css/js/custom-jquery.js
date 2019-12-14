$(document).ready(function () {
    // Show more Comments
    $('.more-comments-btn').click(function () {
        $(this).css('display', 'none');
        $('.more-comments').fadeIn(500);
    });
    // Colored Border for selected Bank
    $('.select-bank-box').on('click', function () {
        $('.select-bank-box').css('border-color', '#dcdcdc');
        $(this).css('border-color', '#007bff');
    });
    // Opacity for emoji
    $('.emoji').on('click', function () {
        $('.emoji').removeClass('active');
        $(this).addClass('active');
    });
    // Faqs Accordion
    $('.faq .faq-box h3').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).next().slideUp(300);
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.faq-answer-box').slideUp(300);
            $('.faq-box h3').removeClass('active');
            $('.faq-box').removeClass('active');
            $(this).next().slideDown(300);
            $(this).addClass('active');
            $(this).parent().addClass('active');
        }
    });
    // Check the check boxes on div click
    $('.select-bank-box').click(function () {
        if ($(this).find('input:radio[name=bankname]').is(":checked")) {
            $(this).find('input:radio[name=bankname]').attr("checked", false);
        }
        else {
            $(this).find('input:radio[name=bankname]').prop("checked", true);
        }
    });
    $('input[type=radio]').click(function (e) {
        e.stopPropagation();
    });
    //
    $('.emoji').click(function () {
        if ($(this).find('input:radio[name=emoji]').is(":checked")) {
            $(this).find('input:radio[name=emoji]').attr("checked", false);
        }
        else {
            $(this).find('input:radio[name=emoji]').prop("checked", true);
        }
    });
    // License Modal
    $('.license-box').on('click', function () {
        var src = $(this).find("img").attr("src");
        $('#license-page-modal').css('display', 'block');
        $('#license-page-modal').find('img').attr('src', src);
    });
    // Count Statistics
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString());
            }
        });
    });
});