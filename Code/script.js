
let word;
let wordArr = [];
let guessArr = [];

window.addEventListener('load', main);

function main() {
  word = selectWord();
  console.log(word);
  wordArr = [...word];
  console.log(wordArr);
}

function selectWord() {
  var randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

document.addEventListener("keydown", type);


async function checkWordReal(guess) {
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`);
  console.log(response);
  let boo = response.ok;
  console.log(boo);
  return boo;
}

function compareWords() {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (guessArr[i] == wordArr[i]) {
      document.getElementById(`${currentRow}${i}`).style.backgroundColor = "green";
      count++;
      document.getElementById(guessArr[i]).style.backgroundColor = "green";
    } else if (wordArr.includes(guessArr[i])) {
      document.getElementById(`${currentRow}${i}`).style.backgroundColor = "yellow";
      document.getElementById(guessArr[i]).style.backgroundColor = "yellow";
    } else {
      document.getElementById(`${currentRow}${i}`).style.backgroundColor = "grey";
      document.getElementById(guessArr[i]).style.backgroundColor = "grey";
    }
  }
  if(count == 5) {
    document.getElementById("message").innerHTML = "you win. TOOK YOU THIS LONG!";
  }
}

let currentRow = 0;
let currentCol = 0;
const maxCols = 5;
const maxRows = 6;
let board = Array.from({ length: maxRows }, () => Array(maxCols).fill(""));

async function type(e) {
  if (currentRow >= maxRows) return;

  if (e.key == "Backspace") {
    if (currentCol > 0) {
      guessArr.pop();
      console.log(guessArr);
      currentCol--;
      board[currentRow][currentCol] = "";
      updateCell(currentRow, currentCol, "");
    }
  } else if (e.key == "Enter") {
    if (currentCol == maxCols) {
      let wordGuess = guessArr.join("");
      let value = await checkWordReal(wordGuess);
      console.log(value);
      if (value == true) {
        compareWords();
        guessArr = [];
        wordGuess = board[currentRow].join("").toLowerCase();
        currentRow++;
        currentCol = 0;
        document.getElementById("message").innerHTML = "";
      } else {
        document.getElementById("message").innerHTML = "NOT A WORD YOU IDIOT! SOME PEOPLE NEVER LEARN!";
      }
    }
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    if (currentCol < maxCols) {
      let letter = e.key.toUpperCase();
      guessArr.push(e.key.toLowerCase());
      console.log(guessArr);
      board[currentRow][currentCol] = letter;
      updateCell(currentRow, currentCol, letter);
      currentCol++;
    }
  }
};

function updateCell(row, col, value) {
  const cell = document.getElementById(`${row}${col}`);
  if (cell) cell.innerText = value;
}






