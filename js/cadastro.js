$(document).ready(function () {
    var barraDeProgresso = []
    var cpf = 0
    var barra = 0
    var peso = 0
    var altura = 0
    var idade = 0
    var comorbidade = false
    var gestante = false
    var noturnoFlag = false

    $("#nome").blur(function () {
        if (isNaN($("#nome").val())) {
            $("#nome").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            barraDeProgresso[0] = true

        } else {
            $("#nome").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[0] = false
        }
        barradeprogresso()
    })

    $("#nasc").blur(function () {
        var dataAtual = new Date()
        var nascimento = $("#nasc").val().substring(0, 4)
        var mes = $("#nasc").val().substring(5, 7)
        var dia = $("#nasc").val().substring(8, 10)
        idade = parseInt(dataAtual.getFullYear()) - nascimento

        if (mes > dataAtual.getMonth() + 1) {
            idade--
        } else if (mes == dataAtual.getMonth() + 1 && dia > dataAtual.getDate()) {
            idade--
        }
        if (idade < 0 || idade > 130) {
            $("#nasc").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            idadeValida = false
            barraDeProgresso[1] = false
        } else {
            $("#nasc").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            idadeValida = true
            barraDeProgresso[1] = true
            console.log("0", barraDeProgresso[0], "1", barraDeProgresso[1])
        }
        barradeprogresso()
    })

    $("#genero").change(function () {
        var genero = $("#genero").val()

        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[2] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[2] = true
        }
        barradeprogresso()

        if (genero == "f") {
            $(".gestante").show()
        } else {
            $(".gestante").hide()
        }
    })

    $("#gestante").blur(function () {
        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }

        if ($(this).val() == "s") {
            gestante = true
        }
    })

    $("#etnia").blur(function () {
        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[3] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[3] = true
        }
        barradeprogresso()
    })

    $("#cpf").blur(function () {
        var primeiroDigito
        var segundoDigito
        var verifica
        cpf = []
        cpf = $(this).val()
        cpf = cpf.replace(/\.|-/g, "")
        primeiroDigito = 0
        segundoDigito = 0
        for (i = 0; i <= 8; i++) {
            primeiroDigito += cpf[i] * (10 - i)
        }
        primeiroDigito = (primeiroDigito * 10) % 11
        if (primeiroDigito == 10 || primeiroDigito == 11)
            primeiroDigito = 0

        for (i = 0; i <= 9; i++) {
            segundoDigito += cpf[i] * (11 - i)
        }
        segundoDigito = (segundoDigito * 10) % 11
        if (segundoDigito == 10 || segundoDigito == 11) {
            segundoDigito = 0
        }
        if (cpf[0] == 1 && cpf[1] == 1 && cpf[2] == 1 && cpf[3] == 1 && cpf[4] == 1 && cpf[5] == 1 && cpf[6] == 1 && cpf[7] == 1 && cpf[8] == 1 && cpf[9] == 1 && cpf[10] == 1) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[4] = false
        }
        else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[4] = false
        }
        else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[4] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[4] = true
        }
        barradeprogresso()
       
    })


    $("#prof").blur(function () {
        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[5] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[5] = true
        }
        barradeprogresso()
    })

    $("#peso").blur(function () {
        peso = $("#peso").val()
        peso = peso.replace(",", ".");
        if (isNaN(peso) || $("#peso").val() == "") {
            $("#peso").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[6] = false
        } else {
            $("#peso").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            barraDeProgresso[6] = true
        }
        barradeprogresso()
    })

    $("#altura").blur(function () {
        altura = $("#altura").val()
        altura = altura.replace(",", ".");
        if (isNaN(altura) || $("#altura").val() == "") {
            $("#altura").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[7] = false
        } else {
            $("#altura").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            barraDeProgresso[7] = true
        }
        barradeprogresso()
    })

    $("#comorbidade").change(function () {
        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[8] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[8] = true
        }
        barradeprogresso()

        if ($(this).val() == "s") {
            comorbidade = true
            $(".comorbidade").show()
        } else {
            $(".comorbidade").hide()
        }

    })

    $("#cartao").blur(function () {
        if (isNaN($("#cartao").val()) || $("#cartao").val().length < 15) {
            $("#cartao").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            barraDeProgresso[9] = false
        } else {
            $("#cartao").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            barraDeProgresso[9] = true
        }
        barradeprogresso()
    })


    $("#btn_form").click(function () {

        if (barra == 10) {
            if (idade > 18) {
                if ($('#gripe').is(":checked")) {
                    $("#status").html("Todos os cidadãos maiores de 18 anos, já estão contemplados no plano de vacinação atual.<br> Se você tomou a vacina da gripe a menos de 15 dias, aguarde este periodo para se vacinar novamente. <br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                } else {
                    $("#status").html("Todos os cidadãos maiores de 18 anos, já estão contemplados no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                }
            } else if (idade < 18 && idade >= 12 && gestante) {
                if ($('#gripe').is(":checked")) {
                    $("#status").html("Todas as gestantes com idade superior a 12 anos já estão contempladas no plano de vacinação atual.<br> Se você tomou a vacina da gripe a menos de 15 dias, aguarde este periodo para se vacinar novamente. <br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                } else {
                    $("#status").html("Todas as gestantes com idade superior a 12 anos já estão contempladas no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                }

            } else if (idade < 18 && idade >= 12 && comorbidade) {
                if ($('#gripe').is(":checked")) {
                    $("#status").html("Todas as pessoas que apresentam comorbidades com idade superior a 12 anos  já estão contempladas no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                } else {
                    $("#status").html("Todas as pessoas que apresentam comorbidades com idade superior a 12 anos  já estão contempladas no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
                }

            } else if (idade < 18 && idade >= 12) {
                $("#status").html("Pessoas com idade inferior a 18 anos sem comorbidades, não gastantes ainda não estão contempladas no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
            } else if (idade < 12) {
                $("#status").html("Pessoas com idade inferior a 12 anos não estão contempladas no plano de vacinação atual.<br>Seu IMC é de: " + parseInt((peso / (altura * altura))) + ".")
            }
        } else {
            $("#status").html("Você não preencheu todos os campos necessários, favor conferir.")
        }
    })



    //Modo noturno

    $("#btnNoturno").click(function () {
        if (noturnoFlag == false) {
            $("header").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgba(228,252,255,1)100%)")
            $("body").css("background-color", "rgba(54, 121, 125, 1)")
            $("nav").css("background-color", "rgba(54, 121, 125, 1)")
            $("form").css("background-color", "rgba(93,174,185,0.5)")
            $("#barraPreenchimento").css("background-color", "rgba(6,83,83,1)")
            $("body").css("color", "white")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(1)" })
            noturnoFlag = true
        } else if (noturnoFlag == true) {
            $("header").css("background", "linear-gradient(rgba(54,121,125,1) 0%, rgba(93,174,185,1) 55%, rgba(228,252,255,1)100%)")
            $("footer").css("background", "linear-gradient(rgba(228,252,255,1) 0%, rgba(93,174,185,1) 55%, rgba(54,121,125,1)100%)")
            $("body").css("background-color", "#E4FCFF")
            $("nav").css("background-color", "#E4FCFF")
            $("#barraPreenchimento").css("background-color", "rgba(54, 121, 125, 0.8)")
            $("#barraPreenchimento")
            $("body").css("color", "black")
            $("#rodape_links section a img, #data_hora a img").css({ filter: "invert(0)" })
            noturnoFlag = false
        }
    })

    //Barra de progresso

    function barradeprogresso() {
        var aux = 0
        barra = 0
        for (i = 0; i <= barraDeProgresso.length; i++) {
            if (barraDeProgresso[i] == true) {
                barra++
            }
        }
        aux = barra * 10
        $("#barraPreenchimento").css({ width: aux + "%" })
    }

    //Script do jQueryUI
    $(function () {
        $(document).tooltip();
    });

})

