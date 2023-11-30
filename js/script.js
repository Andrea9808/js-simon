//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, 
//i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, 
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numeri = document.getElementById("randomnum");

const numeriCasuali = [];

let clock;

//creo un ciclo dove i<5 dato che deve stampare 5 numeri
for(i = 0; i < 5; i++){

    //creo numeri randomici da 1 a 100
    const numRandom = randomNum(1,100);

    //inserisce il numero casuale all'array
    numeriCasuali.push(numRandom);

    //creo un nuovo elemento
    const altriNumeri = document.createElement("p");

    // aggiungo il numero casuale come testo del paragrafo
    altriNumeri.innerHTML = numRandom;
    
    // aggiungo il paragrafo all'elemento con id "randomnum"
    numeri.append(altriNumeri);    

}








//funzione numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//creao timer di 30s
clock = setInterval(

    function() {

        // chiedo all'utente di inserire i numeri
        const inputUtente = prompt("Inserisci i numeri che hai visto");

        console.log(inputUtente);
    
        clearInterval(clock);

    }, 30000 
);     
