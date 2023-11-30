//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, 
//i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, 
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//dichiaro il div
const numeri = document.getElementById("randomnum");

//dichiaro l'input
const inputUtente = document.getElementById("inputUtente");

//dichiaro il bottone
const buttonUtente = document.getElementById("buttonutente");

let clock;

//creo un ciclo dove i<5 dato che deve stampare 5 numeri
for(let i = 0; i < 5; i++){

    //creo numeri randomici da 1 a 100
    const numRandom = randomNum(1,100);

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


//creato timer di 30s
clock = setTimeout(

    function() {

        // rimuove i numeri dopo i 30s
        numeri.innerHTML = "";

        // mostro l'input e il bottone per l'utente dopo 30s
        inputUtente.style.display = "block";
        buttonUtente.style.display = "block";

        clearInterval(clock);

    }, 1000
);     


buttonUtente.addEventListener("click",

    function () {
        

         //verifico l'inserimento di 5 numeri
        if (numeriInseriti.length !== 5) {

            alert("Inserisci 5 numeri.");
            
        }
    }
)