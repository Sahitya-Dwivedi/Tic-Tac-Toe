const box = document.querySelectorAll(".box");
const check = document.querySelector("#check");
const whoTurn = document.querySelector(".whoTurn");
const checkComp = document.querySelector("#checkComp");
const X = document.querySelector(".X");
const O = document.querySelector(".O");
let toggle = true;
let checked = false;
let movecount = 0;
let reference = [];

whoTurn.textContent = "X";

check.addEventListener("change", (e) => {
  e.target.checked ? boxTapping() : (reset());
});
checkComp.addEventListener("change", (e) => {
  e.target.checked ? computer() : (reset());
});
function reset() {
  toggle = true;
  checked = false;
  movecount = 0;
  whoTurn.textContent = "X";
  box.forEach((val, i) => {
    val.textContent = "";
    box[i].removeEventListener("click", reference[i]);
  });
  reference = [];
}

function PassPlay(i) {
  if (toggle) {
    box[i].textContent = "X";
    whoTurn.textContent = "O";
    toggle = !toggle;
  } else {
    box[i].textContent = "O";
    whoTurn.textContent = "X";
    toggle = !toggle;
  }
  setTimeout(() => {
    WhoIsWinner("X");
  }, 50);
  return;
}

function computer() {
  box.forEach((val) => {
    let tempReference = () => vsComputer(val)
    val.addEventListener("click", tempReference, { once: true });
    reference.push(tempReference);
  });
}

function boxTapping() {
  for (let i = 0; i < box.length; i++) {
    let tempReference = () => PassPlay(i);
    box[i].addEventListener("click", tempReference, { once: true });
    reference.push(tempReference);
  }
}

function vsComputer(val) {
  val.textContent = "X";
  whoTurn.textContent = "Computer(O)";
  setTimeout(() => {
    if (movecount == 0) {
      if (box[4].textContent == "") {
        box[4].textContent = "O";
      } else {
        let ran = Math.random();
        if (ran < 0.25) {
          box[0].textContent = "O";
        } else if (ran > 0.25 && ran < 0.5) {
          box[2].textContent = "O";
        } else if (ran > 0.5 && ran < 0.75) {
          box[6].textContent = "O";
        } else if (ran > 0.75 && ran < 1) {
          box[8].textContent = "O";
        }
      }
      movecount++;
    } else if (movecount == 1) {
      checkWin()
    }
    whoTurn.textContent = "Your Turn(X)"
  }, 500);
  setTimeout(() => {
    WhoIsWinner();
    return;
  }, 500 + 50);
}

function draw() {
  alert("It's a draw!");
  reset();
}

function WhoIsWinner() {
  const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    let [a, b, c] = winningCombos[i];
    if (box[a].textContent == box[b].textContent && box[b].textContent == box[c].textContent && box[a].textContent != "") {
      alert(`${box[a].textContent} wins!`);
      if (box[a].textContent == "X") {
        X.textContent = parseInt(X.textContent) + 1
      } else {
        O.textContent = parseInt(O.textContent) + 1
      }
      reset();
      return;
    }
  }

  // Check if all boxes are filled (draw)
  let isDraw = true;
  for (let i = 0; i < box.length; i++) {
    if (box[i].textContent == "") {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    draw();
  }
}

function checkWin() {
  let excuted = false;
  const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    let WinProbality = winningCombos[i];
    if ((box[WinProbality[0]].textContent == "O" && box[WinProbality[1]].textContent == "O" && box[WinProbality[2]].textContent == "") ||
      (box[WinProbality[0]].textContent == "" && box[WinProbality[1]].textContent == "O" && box[WinProbality[2]].textContent == "O") ||
      (box[WinProbality[0]].textContent == "O" && box[WinProbality[1]].textContent == "" && box[WinProbality[2]].textContent == "O")) {
      for (let i = 0; i < WinProbality.length; i++) {
        if (box[WinProbality[i]].textContent == "") {
          box[WinProbality[i]].textContent = "O"
        }
      };
      excuted = true
      break;
    }
  }
  if (!excuted) {
    for (let i = 0; i < winningCombos.length; i++) {
      let WinProbality = winningCombos[i];
      if ((box[WinProbality[0]].textContent == "X" && box[WinProbality[1]].textContent == "X" && box[WinProbality[2]].textContent == "") ||
        (box[WinProbality[0]].textContent == "" && box[WinProbality[1]].textContent == "X" && box[WinProbality[2]].textContent == "X") ||
        (box[WinProbality[0]].textContent == "X" && box[WinProbality[1]].textContent == "" && box[WinProbality[2]].textContent == "X")) {
        for (let i = 0; i < WinProbality.length; i++) {
          if (box[WinProbality[i]].textContent == "") {
            box[WinProbality[i]].textContent = "O"
          }
        };
        excuted = true
        break;
      }
    }
  }
  if (!excuted) {
    let random = Math.random()
    if (random < 0.25 && box[1].textContent == "") {
      box[1].textContent = "O";
    } else if (random > 0.25 && random < 0.5 && box[3].textContent == "") {
      box[3].textContent = "O";
    } else if (random > 0.5 && random < 0.75 && box[5].textContent == "") {
      box[5].textContent = "O";
    } else if (random > 0.75 && random < 1 && box[7].textContent == "") {
      box[7].textContent = "O";
    } else {
      for (let i = 0; i < box.length; i++) {
        const element = box[i];
        if (element.textContent == "") {
          element.textContent = "O";
          break;
        }
      }
    }
  }
}
