$(document).ready(function(){
    //Começo do carrossel de imagens
    $(function () {
        $('#slide img:eq(0)').addClass("ativo").show();
        setInterval(slide, 3000);
        function slide() {
            //Se a proxima imagem existir
            if ($('.ativo').next().length) {
                //Esconde a 1ª img, remove a classe ativo, mostra a proxima img e adiciona a classe ativo nela
                $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
            } else { //Se for a ultima img do carrosel
                //Dá fadeOut na img, remove a classe ativo
                $('.ativo').fadeOut().removeClass("ativo");
                //Mostra a 1ª img do carrosel
                $('#slide img:eq(0)').fadeIn().addClass("ativo");
            }
        }
    });
    //Fim do carrosssel de imagens
        
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

})