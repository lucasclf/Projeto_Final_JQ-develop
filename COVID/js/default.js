$(document).ready(function () {
    tam = $(window).width();
    if (tam >= 1024) {
        $("#menu").removeClass('menu_hamburguer');
        $("#menu").addClass('menu_principal');

    } else {
        $("#menu").removeClass('menu_principal');
        $("#menu").addClass('menu_hamburguer');

    }
 
    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam >= 1024) {
            $("#menu").removeClass('menu_hamburguer');
            $("#menu").addClass('menu_principal');

        } else {
            $("#menu").removeClass('menu_principal');
            $("#menu").addClass('menu_hamburguer');

        }
    });


});


   
    // $("#botao_hamburguer").on({
    //     mouseover: function(){
    //         $('#menu').slideDown();
    //     },
    //     mouseout: function(){
    //         $('#menu').slideUp();
    //     }