$(window).resize(function () {
    let width = $(window).width();
    let height = $(window).height();
    if (width / height < (2 / 2)) {
        $('#contact-header').css('display', 'none');
        $('.info-group').css('flex-direction', 'column');
        $('.info-group').css('margin-left', 'auto');
        $('.info-group').css('margin-right', 'auto');
        $('.jobs').css('max-width', '80%');
        $('.jobs').css('margin-right', 'auto');
        $('.jobs').css('margin-left', 'auto');
    }
    else {
        $('#contact-header').css('display', 'block');
        $('.info-group').css('flex-direction', 'row');
        $('.jobs').css('max-width', '40%');
    }

    if (width / height < (1.8 / 2)) {
        $('#header-text').css('display', 'none');
        $('#header-nav').css('margin-left', 'auto');
        $('#header-nav').css('margin-right', 'auto');
        $('.background-skills').css('flex-direction', 'column')
        $('.background').css('max-width', '80vw')
        $('.background').css('padding-bottom', '2vh')
        $('.skills').css('max-width', '80vw')
    }
    else {
        $('#header-text').css('display', 'block');
        $('#header-nav').css('margin', '0');
        $('.background-skills').css('flex-direction', 'row')
        $('.background').css('max-width', '33vw')
        $('.skills').css('max-width', '33vw')
    }

    if (width / height < (12 / 20)){
        $('#resume').css('display', 'none');
    }
    else {
        $('#resume').css('display', 'inline');
    }
});