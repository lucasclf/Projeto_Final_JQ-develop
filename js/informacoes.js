$(document).ready(function () {

    //função do modo noturno
    var flag = 0;
    $("#btnNoturno").click(function(){
        if(flag == 0){ /* Elementos alterados para o modo noturno */
            $("header").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)");
            $("h1, h3, #fonte_link, .contador").css({color:"#e4fbff"});
            $("body").css({background:"rgba(54,121,125,1)"});
            $(".navegacao_principal").css({background:"none"});
            $("main").css({background: "linear-gradient(to bottom, rgba(54,121,125,1), rgba(54,121,125,1))"});
            $("#linkSp").css({color: "#e4fbff"});
            $("footer").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgb(112, 170, 177)100%)");
            $("#informacoes, #rodape_links, #data_hora").css({color:"#e4fbff"});
            $("#rodape_links section a img, #data_hora a img").css({filter: "invert(1)"});
            flag = 1;    
        } else { /* Elementos originais (alterações revertidas) */
            $("header").css({background:"linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgba(228,252,255,1) 100%)"});
            $("h1, h3, #fonte_link, .contador").css({color:"inherit"});
            $("body").css({background:"#e4fbff"});
            $(".navegacao_principal").css({backgroundcolor:"#e4fbff"});
            $("main").css({background: "radial-gradient(60% 50% at center, #c3e4e7 20%, #e4fbff 95%)"});
            $("#linkSp").css({color: "inherit"});
            $("footer").css({background:"linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1) 100%)"});
            $("#informacoes, #rodape_links, #data_hora").css({color:"inherit"});
            $("#rodape_links section a img, #data_hora a img").css({filter: "invert(0)"});
            flag = 0;
        }
    })

    //função que reajusta o conteudo do main para janela menor que 1024px e acomoda o menu lateral.
    $(window).resize(function(){
        var wWidth = $(window).width();
        if(wWidth < 1024){
            $("#main-section").css({width: "auto", margin:"0 5% 0 115px"})
        } else {
            $("#main-section").css({width: "90%", margin:"30px auto"})
        }
    })

    //função que indica a porcentagem de ocupação de leitos de UTI abaixo da barra
    $("#myRange").mouseup(function () {
        var valor = $("#myRange").val();
        $("#contador").text(valor + " %");
    })
    $("#myRange, #myRange2").mouseup(function () {
        //função que muda as cores e o conteudo da box de acordo com o valor dos range sliders:
        var valor = $("#myRange").val();
        var valor2 = $("#myRange2").val();

        $("#contador2").text(valor2);
        console.log(valor2);
        var fase5 = $("#fase5").html(), fase4 = $("#fase4").html(), fase3 = $("#fase3").html(), fase2 = $("#fase2").html(), fase1 = $("#fase1").html();

        if ((valor < 40) && (valor2 > 7)) { /*-- Aqui foi usado SLIDEUP e SLIDEDOWN para mostrar e esconder as tabelas --*/
            $("#fases-box").css({ backgroundColor: "CornFlowerBlue"});
            $("#fases-box").slideUp("fast").html(fase5).slideDown("slow");
        } else if ((valor < 60) && (valor2 > 5)) {
            $("#fases-box").css({ backgroundColor: "lightgreen" });
            $("#fases-box").slideUp("fast").html(fase4).slideDown("slow");
        } else if ((valor < 70) && (valor2 > 5)) {
            $("#fases-box").css({ backgroundColor: "#f5f675" });
            $("#fases-box").slideUp("fast").html(fase3).slideDown("slow");
        } else if ((valor < 80) && (valor2 > 3)) {
            $("#fases-box").css({ backgroundColor: "#f5d4a1" });
            $("#fases-box").slideUp("fast").html(fase2).slideDown("slow");
        } else if ((valor >= 80) && (valor2 <= 3)) {
            $("#fases-box").css({ backgroundColor: "lightcoral" });
            $("#fases-box").slideUp("fast").html(fase1).slideDown("slow");
        }
        $(".tabela-setores tr td:contains('Fechado')").css({ backgroundColor: "red" });
        $(".tabela-setores tr td:contains('Aberto')").css({ backgroundColor: "green" });
        $(".tabela-setores tr td:contains('Aberto com restrições')").css({ backgroundColor: "yellow" });
        $(".tabela-setores tr td:contains('A Definir')").css({ backgroundColor: "LightSteelBlue" });
    })
})