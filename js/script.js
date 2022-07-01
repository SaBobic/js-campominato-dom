// Dichiaro le variabili globali
const playButton = document.getElementById("play-button");
const boxElement = document.getElementById("box");
let cell;
let boxRows;
let boxCols;
let cellsNumber;
let difficultyChoice;
let score;
const bombsNumber = 16;
let bombs = [];

// Creo una funzione che mi permetta di creare un div con classi cell e easy/medium/hard
const createCell = (content, level) => {
    const cell = document.createElement("div");
    cell.classList.add("cell", level);

    // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100
    cell.innerText = content;
    return cell;
};

// Creo una funzione che mi permetta di generare 16 numeri casuali da inserire nell'array "bombs"
const getBombs = (array, number, max) => {
    while (array.length !== number) {
        const random = Math.floor(Math.random() * max + 1);
        if (!array.includes(random)) array.push(random);
    }
    return array;
};

// Uso il metodo addEeventListener per generate tot celle al click del bottone play
playButton.addEventListener("click", function () {
    // Svuoto il box
    boxElement.innerHTML = "";

    // Azzero il punteggio
    score = 0;

    // Svuoto l'array delle bombe
    bombs = [];

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

    // Genero l'array di 16 bombe
    cellsNumber = boxRows * boxCols;
    getBombs(bombs, bombsNumber, cellsNumber);
    console.log(bombs);

    // Riempio il box con le nuove celle

    for (let i = 1; i <= cellsNumber; i++) {
        cell = createCell(i, difficultyChoice);

        boxElement.appendChild(cell);

        // Al click sulla cella modifichiamo lo stile, la rendiamo non più cliccabile e aggiungiamo un punto allo score
        cell.addEventListener("click", function () {
            if (this.classList.contains("active")) return;

            this.classList.add("active");

            score += 1;
            console.log(`Punteggio: ${score}`);
        });
    }

    // Cambio il testo del bottone in ricomincia
    this.innerText = "Ricomincia";
});
