function acquista() {
    let costo = 8;
    let eta = prompt("Inserisci la tua età");
    eta = Number(eta);
    console.log("età inserita: " + eta);

    while (eta < 0 || isNaN(eta)) {
        eta = prompt("errore; età invalida. Inserisci la tua età");
        eta = Number(eta);
        console.log("età inserita: " + eta);
    }
    
    if (eta < 5) {
        costo = 0;
    } else if (eta >= 18 && eta <= 25) {
        costo = 3.5;
    } else if (eta >= 50 && eta <= 55) {
        costo = 5;
    }

    alert("hai " + eta + " anni. paghi " + costo +"€.");
    console.log("hai " + eta + " anni. paghi " + costo +"€.");
}