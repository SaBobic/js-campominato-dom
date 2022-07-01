// Dichiaro le variabili globali
const playButton = document.getElementById("play-button");
const boxElement = document.getElementById("box");
let cell;
let boxRows;
let boxCols;
let cellsNumber;
let difficultyChoice;

// Creo una funzione che mi permetta di creare un div con classi cell e easy/medium/hard
const createCell = (content, level) => {
    const cell = document.createElement("div");
    cell.classList.add("cell", level);

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

    cellsNumber = boxRows * boxCols;

    // Riempio il box con le nuove celle
    for (let i = 1; i <= cellsNumber; i++) {
        cell = createCell(i, difficultyChoice);

        boxElement.appendChild(cell);

        // Al click sulla cella, stampiamo il numero della cella cliccata in console, modifichiamo lo stile e la rendiamo non più cliccabile
        cell.addEventListener("click", function () {
            if (this.classList.contains("active")) return;

            this.classList.add("active");
            console.log(this.innerText);
        });
    }

    // Cambio il testo del bottone in ricomincia
    this.innerText = "Ricomincia";
});
