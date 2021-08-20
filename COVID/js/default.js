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

    var fontSize = parseInt($("body").css("font-size"));
    var auxFont = 0
    
        $("#btnFontMaior").click(function() {
            if (auxFont < 3){
                fontSize = fontSize + 1
                auxFont++
                $("body").css({"font-size": fontSize});
            }
        })
    
    
    $("#btnFontMenor").click(function() {
        if (auxFont > 0) {
            fontSize = fontSize - 1
            auxFont--
            $("body").css({"font-size": fontSize});
        }
    })

});


   
    // $("#botao_hamburguer").on({
    //     mouseover: function(){
    //         $('#menu').slideDown();
    //     },
    //     mouseout: function(){
    //         $('#menu').slideUp();
    //     }