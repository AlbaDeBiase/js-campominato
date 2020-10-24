// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e
// verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina,
// il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio,
 // cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.

// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.


// genero 16 numeri random
// con il ciclo while ripeto finchè non cisono 16 elementi nel mio array;
//
// soluzione 1 con ciclo while
var listaMine = [];
var leMiePosizioni=[];
var numBombe = 16;
var maxBombe = 100;
var maxPoint = maxBombe - numBombe;


while(listaMine.length < numBombe){
var minaRandom = getRndInteger(1,maxBombe);
if (listaMine.includes(minaRandom) == false) {
    listaMine.push(minaRandom);
// ripeto 16 volte
    }
}
console.log("lista mine:" , listaMine)

var isBombaTrovata = false;

do {

var laMiaScelta = parseInt(prompt("inserisci un numero"));

var isGameOver = isUnaMina(laMiaScelta,listaMine );


if (isGameOver == true){
isBombaTrovata = true;
alert("you lose, il tuo punteggio è" + leMiePosizioni.length + "punti");
} else if (leMiePosizioni.includes(laMiaScelta) == false){
leMiePosizioni.push(laMiaScelta);
}
else {
alert("duplicato");
}
}while (isBombaTrovata == false && leMiePosizioni.length < maxPoint);
console.log(laMiaScelta);
if (leMiePosizioni.length == maxPoint) {
alert ("you win, il tuo punteggio è" + leMiePosizioni + "punti");
}

function isUnaMina (sceltaUtente , arrayMine){
var controllo = false;
if (arrayMine.includes(sceltaUtente) == true){
controllo=true;
}
return controllo;
}

function getRndInteger(min,max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

}

// console.log(laMiaScelta);

// soluzione 2 col ciclo for
// definisco una variabile per capire se il numero è una mina
// var mina= false;
// for (var j = 0; j < numeri.length; j++) {
// // chiedo all'utente un numero alla volta
// var numeroUtente = prompt("scrivi un numero");
// console.log(numeroUtente);
//
// // verifico se il numero indicato è una mina
// var numeroUtente = numeri[j];
//
//
// // Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina,
// // il gioco prosegue e il programma chiede all'utente un nuovo numero.
// if (numeroUtente == numeroRandom){
// mina= true;
// alert("you lose")
// }
// else {
//     alert("you win")
// }
// // verifico se il numero indicato dall'utente è una mina oppure no
// }
