// chiedere nome e cognome, colore preferito salvarli nella variabile corrispondente
// scrivere a schermo nomecognomecolorepreferito23 (nomecognomecolorepreferito23)

let nome = prompt("Come ti chiami");

console.log(nome);
let cognome = prompt("Quale è il tuo cognome?");
//console.log(cognome);
let colorePreferito = prompt("Indica il tuo colore preferito");
//console.log(colorePreferito);

//condizioni se non si inserisce valore
if (nome == null || nome == "" & cognome == null || cognome == "" & colorePreferito == null || colorePreferito == "") {
    nome = "valoreNomeNN";
    cognome = "valoreCognomeNN";
    colorePreferito = "NessunColore";
}
// messaggio da stampare a schermo

let messaggio = nome + cognome + colorePreferito + "23";
console.log(messaggio);


document.getElementById('pswGen').innerHTML = messaggio; 