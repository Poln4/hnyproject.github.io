function gustar() {
    console.log("También me gusta")
    document.getElementById("reply").innerHTML="I like it too!";
    cuentaVotos()
}

var i = 3;

function cuentaVotos() {
    i++
    document.getElementById("votes").innerHTML= i + " votes";
}