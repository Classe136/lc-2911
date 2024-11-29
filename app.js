const fs = require("fs");

const path = require("path");

const filePath = path.join("nome_cartella", "altra_cartella", "mynewfile.txt");

console.log(filePath);
// nome_cartella/altra_cartella/mynewfile.txt

console.log(path.basename(filePath));
// mynewfile1.txt

console.log(path.extname(filePath));
// .txt

fs.readFile("demofile1.html", function (err, data) {
  console.log(data.toString());
});

fs.appendFile(
  "pippo.html",
  "<html><head><title>Primofile</title></head><body><h1>Primo file</h1>",
  (err) => {
    console.log("Saved");
  }
);
fs.appendFile("pippo.html", "</body></html>", (err) => {
  console.log("Saved");
});
const calculator = require("./modules/calculator");

console.log("somma ", calculator.sum(10, 5));
//const utils = require("./utility");
//console.log(utils.getRandomInteger(1, 100));

//const { getRandomInteger } = require("./utility");

const { getRandomInteger, isEven, owner } = require("./modules/utility");

console.log("intero random ", getRandomInteger(1, 100));

console.log(owner.name);

const sum = 4 + 5;
if (isEven(sum)) {
  console.log("pari");
} else {
  console.log("dispari");
}

/*
Variabili Globali
 __dirname, __filename

- require: funzione per usare moduli *(CommonJs) - 
  Per ES6 import/export specificare ina pagckage.json, type: module or rename file extension in .mjs * 
- module: info sul modulo corrente
- process : info relative all'ambiente di esecuzione


Moduli 
-built-in
-esterni di terze parti (installati con npm)
-nostri (specificare path)
*/
/*
> @here
Ciao Ragazzi,
esercizio di oggi: **commonjs-modules**
nome repo: `node-commonjs-modules`

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

**1 - names.js**
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.

**2 - hobbies.js**
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

2. Esporta la funzione dal file.

**3 *-* people.js**
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: `fullName` ed `hobbies`. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
**
>



*/
console.log(calculator.fullnameObj("Daniel", "Ferraiuolo"));

const user = calculator.fullnameObj("Daniel", "Ferraiuolo");
console.log(user.firstName);
