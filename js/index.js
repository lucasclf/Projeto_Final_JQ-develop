$(document).ready(function(){
    // Botão Noturno
    var noturnoFlag = false;
    $("#btnNoturno").click(function () {
        if (noturnoFlag == false) {
            $("#header").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgb(112, 170, 177)100%)")
            $("body").css("background-color", "rgba(54, 121, 125, 1)")
            $("nav").css("background-color", "rgba(54, 121, 125, 1)")
            $("body").css("color", "white")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(1)" })
            $("#tamanho").css("background-color", "rgba(54, 121, 125, 1)");
            noturnoFlag = true
        } else if (noturnoFlag == true) {
            $("#header").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgba(228,252,255,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("body").css("background-color", "#E4FCFF")
            $("nav").css("background-color", "#E4FCFF")
            $("body").css("color", "black")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(0)" })
            $("#tamanho").css({backgroundColor: "#e2eff5"});
            noturnoFlag = false
        }
    })

    
    // Carrossel
    $('.carrossel').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam >= 1024) {
            $(".carrossel img, .carrossel, #tamanho").show();
            $("#tamanho").height(510);
            $('#accordion').width(1000);
        } else {
            $(".carrossel img, .carrossel, #tamanho").hide();
            $('#accordion').width(450);
        }
    });

    // Acordeon
    $(function () {
        $("#accordion").accordion({
            collapsible: true
        });
    });
});

