const emailUtente = prompt("Inserisci la tua e-mail");

const greenPass = ["florian.boolean@aruba.it", "flavio.boolean@gmail.com", "clelia.boolean@libero.it"];
let puoiEntrare = false;
for (let i = 0; i < greenPass.length; i++) {
    if (emailUtente.toLowerCase() == greenPass[i]) {
        puoiEntrare = true;
    }
}
if (puoiEntrare == true) {
    alert("Benvenuto!");
} else {
    alert("Mi dispiace non puoi accedere!");
}


