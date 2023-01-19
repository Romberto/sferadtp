window.addEventListener('load', function(){


    // кнопка Энгельс
    $('#link_engels').on('click', function(e){
        e.preventDefault()
        $('#link_engels_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'visible')
        $('.region__popup').fadeOut()

    })

    // кнопка Саратов

    $('#link_saratov').on('click', function(e){
        e.preventDefault()
        $('#link_saratov_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'hidden')
        $('.region__popup').fadeOut()
    })

    // кнопка Сочи
    $('#link_sochi').on('click', function(e){
        e.preventDefault()
        $('#link_sochi_str').fadeIn()
        $('.setings').fadeIn()
        $('.footer').css('visibility', 'hidden')
        $('.region__popup').fadeOut()
    })

    // кнопка настройки города (шестирёнка)
    $('.setings').on('click', function(e){
        e.preventDefault()
        $(this).fadeOut()
        $('.region__popup').fadeOut()
        $('#link_engels_str, #link_saratov_str, #link_sochi_str').fadeOut()
        $('.region__popup').fadeIn()
        $('.footer').css('visibility', 'hidden')


    })
})