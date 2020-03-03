$(document).ready(function(){
    
    // Co wykona sie po kliknieciu w element, ktory ma klase .item
    $('.item').click(function(){
        // Pobieramy wartosc z atrybutu HTML o nazwie data-name - patrz html
        var name = $(this).attr('data-name');

        // Dodajemy klase active do calej listy
        $('ul').addClass('active');

        // Usuwamy klase .active z wszystkich elementow z klasa .item
        $('.item').removeClass('active');
        // Dodanie klasy active do kliknietego elemntu i tylko tego
        $(this).addClass('active');

        // Usuniecie klasy active z elementow, ktore posiadaja
        // klase .text lub klase .container lub obie
        $('.text, .container').removeClass('active');
        // Dodanie klasy .active do elementu, ktorego
        // klasa jest rowna wartosci pobranej za pomoca
        // zmiennej name, zdefiniowanej powyzej - linia 6
        $('.' + name).addClass('active');
    })

    $('.index').click(function(){
        // Sprawdzenie wszystkich wartosci, ktore posiada
        // klikniety element 
        // console.log($(this));

        // Pobieramy wartosc z atrybutu HTML o nazwie data-name - patrz html
        var name = $(this).attr('data-name');
        // console.log('name = ' + name);

        // Pobranie numeru indexu dla kliknietego elementu
        var index = $(this).index();
        // console.log('index = ' + index);

        // Usuniecie klasy .active z wszystkich elementow, ktore
        // posiadaja klase .index
        $('.index').removeClass('active');
        // Dodanie klasy acitve dla elementu, ktorego
        // index jest rowny pobranej wartosci - linia 35
        $('.index').eq(index).addClass("active");
    })

    $('.arrow__left').click(function() {
        var activeelement = $('.index.active');
        var activeindex = activeelement.index();   
        activeelement.removeClass('active');
        $('.index').eq( activeindex - 1 ).addClass('active');
    })

    $('.arrow__right').click(function() {
        var activeelement = $('.index.active');
        var activeindex = activeelement.index();   
        activeelement.removeClass('active');
        if( $('.index').eq( activeindex + 1 ).length == 0 ) { 
            $('.index').eq( 0 ).addClass('active');  
        } else {
            $('.index').eq( activeindex + 1 ).addClass('active');  
        }

    })

    $('.index').click(function(e) {
        // Stop the link being followed:
        e.preventDefault();
        // Get the div to be shown:
        var name = $(this).attr('data-name');
        // Remove any active classes:
        var activeelement = $('.index.active');
        activeelement.removeClass('active');
        // Add the 'active' class to this link:
        $(this).addClass('active');
        // Hide all the content:
        $('.name').hide();
        // Show the requested content:
        $('#' + name).show();
    });

})