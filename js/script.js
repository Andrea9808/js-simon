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

//dichiaro l'output
const risultato = document.getElementById("output");

// variabile per il timer
let clock;

//array per i numeri casuali generati
let numeriCasuali = [];

//array per i numeri inseriti dall'utente
let numeriInseriti = [];

//array per i numeri indovinati dall'utente
let numeriIndovinati = [];


//creo un ciclo dove i<5 dato che deve stampare 5 numeri
for (let i = 0; i < 5; i++) {

    //creo numeri randomici da 1 a 100
    const numRandom = randomNum(1, 100);

    //aggiungo il numero casuale all'array numeriCasuali
    numeriCasuali.push(numRandom);
    console.log(numeriCasuali);

    //creo un nuovo elemento paragrafo per mostrare il numero all'utente
    const altriNumeri = document.createElement("p");

    // aggiungo il numero casuale come testo del paragrafo
    altriNumeri.innerHTML = numRandom;

    // aggiungo il paragrafo all'elemento con id "randomnum"
    numeri.append(altriNumeri);

}


//aggiungo un listener per gestire il click sul bottone dell'utente
buttonUtente.addEventListener("click",



    function () {

        //ottengo il numero inserito dall'utente
        const numeroUser = parseInt(inputUtente.value);

        //aggiungo il numero inserito dall'utente all'array numeriInseriti
        numeriInseriti.push(numeroUser);
        console.log(numeriInseriti);

        // controllo se sono stati inseriti tutti e 5 i numeri (solo se vengono inseriti i 5 numeri prosegue con il resto)
        if (numeriInseriti.length === 5) {

            //questo ciclo è necessario per confrontare ciascun numero casuale con quelli inseriti dall'utente.
            for (let i = 0; i < numeriCasuali.length; i++) {


                //numiesimo
                const num = numeriCasuali[i];


                //se il numero che inserisco è presente tra quelli casuali, viene aggiunto a numeriIndovinati
                if (numeriInseriti.includes(num)) {

                    numeriIndovinati.push(num);
                }
            }

            // mostro l'output all'utente
            risultato.innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(", ")}`;

        }
    }
)





//funzione numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//creato timer di 30s
clock = setTimeout(

    function () {

        // rimuove i numeri dopo i 30s
        numeri.innerHTML = "";

        // mostro l'input e il bottone per l'utente dopo 30s
        inputUtente.style.display = "block";
        buttonUtente.style.display = "block";


    }, 30000
);


