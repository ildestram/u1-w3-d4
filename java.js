// let numeri = ["Uno", "Due", "Tre", "Quattro"];

// let numeriLower = numeri.map(element => {
//     return element.toUpperCase();
// });

// console.log(numeriLower);

// UPPERCASE - MAIUSCOLO

let presentazione = "Sono Mario Rossi e vivo a Milano";
let maiuscolo = presentazione.toUpperCase();

console.log(maiuscolo);

// LOWERCASE - MINUSCOLO

let presentation = "Sono Lina Blu e vivo a Roma";
let minuscolo = presentation.toLowerCase();

console.log(minuscolo);

// SUDDIVISO I SUOI ELEMENTI CON SLICE

let pres = "Sono Mario Rossi e vivo a Milano";
let preseI = pres.slice(0,5);
let preseA = pres.slice(5,11);
let preseB = pres.slice(11,16);
let preseC = pres.slice(17,18);
let preseD = pres.slice(19,23);
let preseE = pres.slice(24,33);

console.log(preseI);
console.log(preseA);
console.log(preseB);
console.log(preseC);
console.log(preseD);
console.log(preseE);


// SELEZIONO DUE DATI DELL'ARRAY + CONCATENATO DUE ESEMPI

let city = ['Milano', 'Torino', 'Roma', 'Venezia', 'Napoli'];
let newCity = city.concat(['Rimini']);

console.log(newCity);

console.log(city[2]);
console.log(city[4]);

let parole = "Ho fame voglio una mela";
let parolaDoppia = parole.concat(" perfavore");

console.log(parolaDoppia);

// ARRAY DI PERSONE

let persone = [
    'Caterina', 
    'Ludovica', 
    'Michele', 
    'Alessandro'
]

console.log(persone);
console.log( persone[2]);
console.log(persone.length);

// PUSH/POP SHIFT/UNSHIFT
let fruits = [
    'Mela',
    'Pera',
    'Banana',
    'Uva',
    'Ananas'
]

console.log(fruits);

let elimina = fruits.pop();

console.log(elimina);

let aggiungi = fruits.push('Kiwi');
console.log(aggiungi);


let numeriInteri = [
    '1',
    '4',
    '6',
    '8',
    '10'
]
console.log(numeriInteri);

let eliminaNumeri = numeriInteri.shift();
console.log(eliminaNumeri);

let aggiungiNumeri = numeriInteri.unshift('10');
console.log(aggiungiNumeri);



// ALTRI ESERCIZI PER CAPIRE MEGLIO I METODI
let lista = [];
lista.push("luca");
lista.push("rossi", "bianchi");
lista.pop();

console.log(lista);




let valori = [4,3,9,7,44,3,84];
let valoriAggiunti = valori.indexOf((3));

console.log(valoriAggiunti);
console.log(valori);

// chiedere perchè non ti fa vedere la posizione dell'elemento richiesto


alert("Il minore è " + Math.min(7,4,18));

console.log(alert);

alert("Numero random: " + Math.random());
console.log(alert);

alert(Math.floor(Math.random() * 10));
console.log(alert);











