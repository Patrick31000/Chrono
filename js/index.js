var chrono = function(currentTime) {
    this.time = currentTime;
    this.start = function() {
        Debut();
    };
    this.pause = function() {
        Milieu();

    };
    this.stop = function() {
        Fin();
    };
}
var Chronometre = new chrono(-1);

$("#Start").click(function() {
    compteur = setInterval(Debut, 1000);
    Chronometre.start();
    $("#Start").hide();
    $("#Pause").show();
});

$("#Stop").click(function() {
    Chronometre.stop();
    $("#Start").show();
    $("#Pause").hide();
});

$("#Pause").click(function() {
    Chronometre.pause();
    $("#Start").show();
    $("#Pause").hide();
});

function Debut() {
    Chronometre.time += 1;
    var heure = Math.floor(Chronometre.time / 3600);
    var min = Math.floor((Chronometre.time - heure * 3600) / 60);
    var sec = Math.floor(Chronometre.time - (heure * 3600 + min * 60));

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;

    }
    if (heure < 10) {
        heure = "0" + heure;
    }

    $("#timer").html(heure + "." + min + "." + sec);
};

function Milieu() {
    clearInterval(compteur);
}

function Fin() {
    clearInterval(compteur);
    Chronometre.time = -1;
    $("#timer").html("00.00.00");


}