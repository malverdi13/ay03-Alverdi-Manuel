$(document).ready(function(){
    var espejo = $("#Mirror");

    espejo.mouseenter(function(){
        espejo.css("background-color", "crimson");
    });

    espejo.mouseleave(function(){
        espejo.css("background-color", "lightskyblue");
    });

    var esconder = $("#Bttn_esconder");
    var escondido = true;

    esconder.click(function(){
        if (escondido == false) {
            $("#cerebro").fadeTo("fast", 1);
            $("#cerebro").css("font-size", "x-large");
            escondido = true}
        else {
            $("#cerebro").fadeTo("fast", 0);
            $("#cerebro").css("font-size", "xx-small");
            escondido = false}
    })

    var traducir = $("#Bttn_traducir");
    var cartas = $("#cerebro");
    traducir.click(function() {
        cartas.text("Inglich");
    })

});