window.addEventListener('load', function(){


    // кнопка Энгельс
    $('#link_engels').on('click', function(e){
        e.preventDefault()
        $('.footer_eng, .logo__stih_eng, .setings, #link_engels_str').fadeIn()
        $('.footer_sar').fadeOut()
        $('.region__popup').fadeOut()
        $('#commisars').addClass('com_engels')
        $('#experts').addClass('exp_engels')
        $('.logo__stih_eng').addClass('animate__animated animate__zoomIn animate__repeat-3')

    })

    // кнопка Саратов

    $('#link_saratov').on('click', function(e){
        e.preventDefault()
        $('.footer_sar, .logo__stih_eng, .setings, #link_saratov_str').fadeIn()
        $('.region__popup, .footer_eng').fadeOut()
        $('#commisars').addClass('com_saratov')
        $('#experts').addClass('exp_saratov')
        $('.logo__stih_eng').addClass('animate__animated animate__zoomIn animate__repeat-3')
    })

    // кнопка Сочи
    $('#link_sochi').on('click', function(e){
        e.preventDefault()
        $('#link_sochi_str, .setings, .logo_stih_sochi').fadeIn()
        $('.footer_eng, .region__popup, .footer_sar').fadeOut()
        $('#commisars').addClass('com_sochi')
        $('#experts').addClass('exp_sochi')
        $('.logo_stih_sochi').addClass('animate__animated animate__zoomIn animate__repeat-3')
    })

    // кнопка настройки города (шестирёнка)
    $('.setings').on('click', function(e){
        e.preventDefault()
        $(this).fadeOut()
        $('.region__popup').fadeOut()
        $('#link_engels_str, #link_saratov_str, #link_sochi_str').fadeOut()
        $('.region__popup').fadeIn()
        $('.footer_sar, .footer_eng, .logo_stih_sochi, .logo__stih_eng').fadeOut()
        $('#commisars').removeClass('com_sochi com_saratov com_engels')
        $('#experts').removeClass('exp_sochi exp_saratov exp_engels')
        $('.logo_stih_sochi, .logo__stih_eng').removeClass('animate__animated animate__zoomIn animate__repeat-3')
    })

    // иконка коммисар
    $('.main__list').on('click','.com_sochi' ,function(e){
        e.preventDefault()
        $('#com_sochi_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#com_sochi_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });


    $(document).mouseup(function (e) {
        var container = $("#com_engels_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });

    $('.main__list').on('click','.com_engels, .com_saratov' ,function(e){
        e.preventDefault()
        $('#com_engels_popup').fadeIn()
    })

    // иконка эксперт

    $('.main__list').on('click','.exp_sochi' ,function(e){
        e.preventDefault()
        $('#exp_sochi_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#exp_sochi_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });


    $('.main__list').on('click','.exp_saratov, .exp_engels' ,function(e){
        e.preventDefault()
        $('#exp_engels_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#exp_engels_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });


    /* юристы */

    $('#jurist').on('click', function(e){
        e.preventDefault()
        $('.jurist__popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $(".jurist__popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });



})