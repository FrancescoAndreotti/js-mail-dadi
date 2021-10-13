/* variabile pc e utente */
/* numero random per entrambi */
/* stampo numero e dichiaro il vincitore */
const dadoPc = Math.round(Math.random() * 5) + 1;
const dadoUtente = Math.round(Math.random() * 5) + 1;

console.log("Dado del pc: " + dadoPc + "    Dado utente: " + dadoUtente);

if (dadoPc > dadoUtente) {
    console.log("Ha vinto il computer");
} else {
    console.log("Ha vinto l'utente");
}