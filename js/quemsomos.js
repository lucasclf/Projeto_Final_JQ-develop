$(document).ready(function(){
    // BOTÃO MOSTRA MAPA
    $('#espaco_mapa').hide(); // Efeito SlideToggle
    $('#local').click(function(){
        $('#espaco_mapa').slideToggle(800);
    });

    // DIMINUI TAMANHO DAS SESSOES
    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam >= 1024) {
            $('main section').width(939);
        } else {
            $('main section').width(300);
        }
    });

    // BOTAO NOTURNO
    var noturnoFlag = false;
    $("#btnNoturno").click(function () {
        if (noturnoFlag == false) {
            $("header").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgb(112, 170, 177)100%)")
            $("body").css("background-color", "rgba(54, 121, 125, 1)")
            $("nav").css("background-color", "rgba(54, 121, 125, 1)")
            $("body").css("color", "white")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(1)" })
            $("section").css({border: "black", color: "black"});
            noturnoFlag = true
        } else if (noturnoFlag == true) {
            $("header").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgba(228,252,255,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("body").css("background-color", "#E4FCFF")
            $("nav").css("background-color", "#E4FCFF")
            $("body").css("color", "black")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(0)" })
            noturnoFlag = false
            $("section").css({border: "black", color: "black"})
        }
    })
});