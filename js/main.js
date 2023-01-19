window.addEventListener('load', function(){


    // кнопка Энгельс
    $('#link_engels').on('click', function(e){
        e.preventDefault()
        $('#link_engels_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'visible')
        $('.region__popup').fadeOut()
        $('#commisars').find('.main__item_link').attr('id', 'com_engels')
        $('#experts').find('.main__item_link').attr('id', 'exp_engels')

    })

    // кнопка Саратов

    $('#link_saratov').on('click', function(e){
        e.preventDefault()
        $('#link_saratov_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'hidden')
        $('.region__popup').fadeOut()
        $('#commisars').find('.main__item_link').attr('id', 'com_saratov')
        $('#experts').find('.main__item_link').attr('id', 'exp_saratov')
    })

    // кнопка Сочи
    $('#link_sochi').on('click', function(e){
        e.preventDefault()
        $('#link_sochi_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'hidden')
        $('.region__popup').fadeOut()
        $('#commisars').find('.main__item_link').attr('id', 'com_sochi')
        $('#experts').find('.main__item_link').attr('id', 'exp_sochi')
    })

    // кнопка настройки города (шестирёнка)
    $('.setings').on('click', function(e){
        e.preventDefault()
        $(this).fadeOut()
        $('.region__popup').fadeOut()
        $('#link_engels_str, #link_saratov_str, #link_sochi_str').fadeOut()
        $('.region__popup').fadeIn()
        $('.footer').css('visibility', 'hidden')
        $('#commisars').find('.main__item_link').removeAttr('id')
        $('#experts').find('.main__item_link').removeAttr('id')
    })

    // иконка коммисар
    $('#commisars').on('click','#com_sochi' ,function(e){
        e.preventDefault()
        $('#com_sochi_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#com_sochi_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });

    $('#commisars').on('click','#com_engels' ,function(e){
        e.preventDefault()
        $('#com_engels_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#com_engels_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });

    $('#commisars').on('click','#com_engels , #com_saratov' ,function(e){
        e.preventDefault()
        $('#com_engels_popup').fadeIn()
    })

    // иконка эксперт

    $('#experts').on('click','#exp_sochi' ,function(e){
        e.preventDefault()
        $('#exp_sochi_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#exp_sochi_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });


    $('#experts').on('click','#exp_saratov' ,function(e){
        e.preventDefault()
        $('#exp_engels_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#exp_engels_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });

    $('#experts').on('click','#exp_engels' ,function(e){
        e.preventDefault()
        $('#exp_engels_popup').fadeIn()
    })

    $(document).mouseup(function (e) {
        var container = $("#exp_engels_popup");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });

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