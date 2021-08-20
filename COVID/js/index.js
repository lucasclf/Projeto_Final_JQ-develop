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
        
    

})