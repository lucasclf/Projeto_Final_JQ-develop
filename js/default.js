
$(document).ready(function () {
    // Menu padrão
    tam = $(window).width();
    if (tam >= 1024) {
        $("#menu").removeClass('menu_hamburguer');
        $("#menu").addClass('menu_principal');

    } else {
        $("#menu").removeClass('menu_principal');
        $("#menu").addClass('menu_hamburguer');

    }
    
    // Menu lateral
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

    // Botoes da fonte
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

    // VOLTAR AO TOPO
    $("#voltar").hide()
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 20){
            $("#voltar").show();
        } else {
            $("#voltar").hide();
        }
    });
});


// function dataFormatada(d) {
//     var data = new Date(d),
//         dia  = data.getDate(),
//         mes  = data.getMonth() + 1,
//         ano  = data.getFullYear();
//     return [dia, mes, ano].join('/');
// }

// Data e HORA INICIO
function mostrarDataHora(hora, dia, mes, ano){
    retorno = "" + hora + "<br>"
    retorno += "" + " " + dia + "/" + mes + "/" + ano;
    document.getElementById("funcao_data_hora").innerHTML = retorno;
}

// função DATA E HORA
function DataHora(){
    var zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    var interval = setInterval(() => {
        var atual = new Date();

        var dataHora = zeroFill(atual.getUTCDate()) + '/' + zeroFill((atual.getMonth() + 1)) + '/' + atual.getFullYear() + ' ' + zeroFill(atual.getHours()) + ':' + zeroFill(atual.getMinutes()) + ':' + zeroFill(atual.getSeconds());

        document.getElementById('funcao_data_hora').innerHTML = dataHora;
    }, 1000);
};
// Data e HORA FIM
DataHora();
