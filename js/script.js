//* MILESTONE 2

/*
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
*/

//* Procedimento step-by-step

/*
1. Dichiaro le variabili globali: play button, #box, numero di righe e colonne
2. Creo una funzione che mi permetta di creare un numero ben definito di celle secondo il quantitativo di righe e colonne
3. Uso il metodo addEeventListener per generate le celle al click del bottone play
*/

// Dichiaro le variabili globali
const playButton = document.getElementById("play-button");
const boxElement = document.getElementById("box");
let cell;
let boxRows;
let boxCols;
let difficultyChoice;

// Creo una funzione che mi permetta di creare un div con classi cell e easy/medium/hard
const createCell = (content, level) => {
    const cell = document.createElement("div");
    cell.classList.add("cell", level);

    //* MILESTONE 3
    // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100
    cell.innerText = content;

    return cell;
};

// Uso il metodo addEeventListener per generate tot celle al click del bottone play
playButton.addEventListener("click", function () {
    // Svuoto il box
    boxElement.innerHTML = "";

    // Aggiungo l'istruzione if per modificare il numero di boxRows e boxCols in base alla difficoltà scelta dell'utente
    difficultyChoice = document.getElementById("difficulty").value;

    switch (difficultyChoice) {
        case "easy":
            boxRows = boxCols = 10;
            break;
        case "medium":
            boxRows = boxCols = 9;
            break;
        case "hard":
            boxRows = boxCols = 7;
    }

    // Riempio il box con le nuove celle
    for (let i = 1; i <= boxRows * boxCols; i++) {
        cell = createCell(i, difficultyChoice);

        boxElement.appendChild(cell);

        //* MILESTONE 4
        // Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
        cell.addEventListener("click", function () {
            this.classList.toggle("active");
            console.log(this.innerText);
        });
    }

    // Cambio il testo del bottone in ricomincia
    this.innerText = "Ricomincia";
});
