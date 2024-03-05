// chiedere nome e cognome, colore preferito salvarli nella variabile corrispondente
// scrivere a schermo nomecognomecolorepreferito23 (nomecognomecolorepreferito23)

let nome = prompt("Come ti chiami");
console.log(nome);
let cognome = prompt("Quale è il tuo cognome?");
console.log(cognome);
let colorePreferito = prompt("Indica il tuo colore preferito");
console.log(colorePreferito);
let messaggio = nome + cognome + colorePreferito + "23";
console.log(messaggio);

document.getElementById('pswGen').innerHTML = messaggio; 