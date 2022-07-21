$(document).ready(function(){
    // passo 1 esconder todos os passos e mostrar o primeiro
    // esconde todos os passos
    $(".step").hide();

    // mostra o primeiro passo
    $(".step").first().show();
   
    var passoExibido = function() {
        var index = parseInt($(".step:visible").index());
        console.log(index);
        if (index == 0) {
            $("#anterior").hide();
            $("#enviar").hide();
            $(".progress-bar").css("width", "0%");
        } else if (index == 1){
            $("#enviar").hide();
            $("#anterior").show();
            $(".progress-bar").css("width", "33.33%");
        } else if (index == 2){
            $("#anterior").show();
            $("#enviar").hide();
            $("#avancar").show();
            document.getElementById("texto").innerHTML += "<h1>Chegou aqui</h1>";
            var t = document.getElementsByTagName("h1");
            if ( t.length > 1) {
                document.getElementById("texto").innerHTML = t[0].outerHTML;
            }
            $(".progress-bar").css("width", "66.66%");
        } else if (index == 3) {    
            $("#avancar").hide();
            $("#enviar").show();
            $("#anterior").show();
            $(".progress-bar").css("width", "100%");
        }
        $("#passo").html(index + 1);
    }
    passoExibido();

    // avanca para o proximo passo
    $("#avancar").on('click', function(e){
        e.preventDefault();
        $(".step:visible").hide().next().show();
        passoExibido();
    });

    //retrocede para o passo anterior
    $("#anterior").on('click', function(){
        $(".step:visible").hide().prev().show();
        passoExibido();
    });
});