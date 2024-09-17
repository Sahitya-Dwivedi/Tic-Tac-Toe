let box = document.querySelectorAll(".box");
let check = document.querySelector("#check");
let whoTurn = document.querySelector(".whoTurn");
let checkComp = document.querySelector("#checkComp");
let toggle = true;
let checked = false;
let movecount = 0;
whoTurn.textContent = "X";

check.addEventListener("change", (e) => {
  e.target.checked ? (checked = true) : ((checked = false), reset());
});
checkComp.addEventListener("change", (e) => {
  e.target.checked ? computer() : "";
});

boxTapping();

function winner() {
  if (
    box[0].textContent == box[1].textContent &&
    box[1].textContent == box[2].textContent &&
    box[0].textContent != ""
  ) {
    if (box[0].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset()
    reset();
  } else if (
    box[3].textContent == box[4].textContent &&
    box[4].textContent == box[5].textContent &&
    box[3].textContent != ""
  ) {
    if (box[3].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[6].textContent == box[7].textContent &&
    box[7].textContent == box[8].textContent &&
    box[6].textContent != ""
  ) {
    if (box[6].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[0].textContent == box[3].textContent &&
    box[3].textContent == box[6].textContent &&
    box[0].textContent != ""
  ) {
    if (box[0].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[1].textContent == box[4].textContent &&
    box[4].textContent == box[7].textContent &&
    box[1].textContent != ""
  ) {
    if (box[1].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[2].textContent == box[5].textContent &&
    box[5].textContent == box[8].textContent &&
    box[2].textContent != ""
  ) {
    if (box[2].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[0].textContent == box[4].textContent &&
    box[4].textContent == box[8].textContent &&
    box[0].textContent != ""
  ) {
    if (box[0].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  } else if (
    box[2].textContent == box[4].textContent &&
    box[4].textContent == box[6].textContent &&
    box[2].textContent != ""
  ) {
    if (box[2].textContent == "X") {
      alert("X won");
    } else {
      alert("O won")
    }
    reset();
  }
  let draw = 0;
  box.forEach((v) => (v.textContent != "" ? draw++ : ""));
  if (draw == 9) {
    alert("draw");
    reset();
  }
}

function reset() {
  toggle = true;
  checked = false;
  movecount = 0;
  whoTurn.textContent = "X";
  box.forEach(val => val.textContent = "")
}

function PassPlay(i) {
  if (checked) {
    if (box[i].textContent == "X" || box[i].textContent == "O") {
      return;
    }
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
      winner();
    }, 50);
  }
}

function computer() {
  box.forEach((val) => {
    val.addEventListener("click", () => vsComputer(val));
  });
}

function boxTapping() {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => PassPlay(i));
  }
}

function vsComputer(val) {
  if (val.textContent == "X" || val.textContent == "O") {
    return;
  }
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
      checkWinner();
    }
    whoTurn.textContent = "Your Turn(X)"
  }, 500);
  setTimeout(() => {
    winner();
  }, 500 + 50);
}

function checkWinner() {
  if (
    (box[0].textContent == "O" && box[1].textContent == "O" && box[2].textContent == "") ||
    (box[0].textContent == "O" && box[2].textContent == "O" && box[1].textContent == "") ||
    (box[2].textContent == "O" && box[1].textContent == "O" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[1].textContent == "") {
      box[1].textContent = "O";
    } else {
      box[2].textContent = "O";
    }
  } else if (
    (box[0].textContent == "O" && box[3].textContent == "O" && box[6].textContent == "") ||
    (box[0].textContent == "O" && box[6].textContent == "O" && box[3].textContent == "") ||
    (box[3].textContent == "O" && box[6].textContent == "O" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else {
      box[6].textContent = "O";
    }
  } else if (
    (box[0].textContent == "O" && box[4].textContent == "O" && box[8].textContent == "") ||
    (box[0].textContent == "O" && box[8].textContent == "O" && box[4].textContent == "") ||
    (box[4].textContent == "O" && box[8].textContent == "O" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[8].textContent = "O";
    }
  } else if (
    (box[2].textContent == "O" && box[5].textContent == "O" && box[8].textContent == "") ||
    (box[2].textContent == "O" && box[8].textContent == "O" && box[5].textContent == "") ||
    (box[5].textContent == "O" && box[8].textContent == "O" && box[2].textContent == "")
  ) {
    if (box[2].textContent == "") {
      box[2].textContent = "O";
    } else if (box[5].textContent == "") {
      box[5].textContent = "O";
    } else {
      box[8].textContent = "O";
    }
  }
  else if (
    (box[2].textContent == "O" && box[4].textContent == "O" && box[6].textContent == "") ||
    (box[2].textContent == "O" && box[6].textContent == "O" && box[4].textContent == "") ||
    (box[4].textContent == "O" && box[6].textContent == "O" && box[2].textContent == "")
  ) {
    if (box[2].textContent == "") {
      box[2].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[6].textContent = "O";
    }
  }
  else if (
    (box[6].textContent == "O" && box[7].textContent == "O" && box[8].textContent == "") ||
    (box[6].textContent == "O" && box[8].textContent == "O" && box[7].textContent == "") ||
    (box[7].textContent == "O" && box[8].textContent == "O" && box[6].textContent == "")
  ) {
    if (box[6].textContent == "") {
      box[6].textContent = "O";
    } else if (box[7].textContent == "") {
      box[7].textContent = "O";
    } else {
      box[8].textContent = "O";
    }
  }
  else if (
    (box[1].textContent == "O" && box[4].textContent == "O" && box[7].textContent == "") ||
    (box[1].textContent == "O" && box[7].textContent == "O" && box[4].textContent == "") ||
    (box[4].textContent == "O" && box[7].textContent == "O" && box[1].textContent == "")
  ) {
    if (box[1].textContent == "") {
      box[1].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[7].textContent = "O";
    }
  }
  else if (
    (box[3].textContent == "O" && box[4].textContent == "O" && box[5].textContent == "") ||
    (box[3].textContent == "O" && box[5].textContent == "O" && box[4].textContent == "") ||
    (box[4].textContent == "O" && box[5].textContent == "O" && box[3].textContent == "")
  ) {
    if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[5].textContent = "O";
    }
  }
  else if (
    (box[0].textContent == "X" && box[1].textContent == "X" && box[2].textContent == "") ||
    (box[0].textContent == "X" && box[2].textContent == "X" && box[1].textContent == "") ||
    (box[2].textContent == "X" && box[1].textContent == "X" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[1].textContent == "") {
      box[1].textContent = "O";
    } else {
      box[2].textContent = "O";
    }

  } else if (
    (box[0].textContent == "X" && box[3].textContent == "X" && box[6].textContent == "") ||
    (box[0].textContent == "X" && box[6].textContent == "X" && box[3].textContent == "") ||
    (box[3].textContent == "X" && box[6].textContent == "X" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else {
      box[6].textContent = "O";
    }
  } else if (
    (box[0].textContent == "X" && box[4].textContent == "X" && box[8].textContent == "") ||
    (box[0].textContent == "X" && box[8].textContent == "X" && box[4].textContent == "") ||
    (box[4].textContent == "X" && box[8].textContent == "X" && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[8].textContent = "O";
    }

  } else if (
    (box[2].textContent == "X" && box[5].textContent == "X" && box[8].textContent == "") ||
    (box[2].textContent == "X" && box[8].textContent == "X" && box[5].textContent == "") ||
    (box[5].textContent == "X" && box[8].textContent == "X" && box[2].textContent == "")
  ) {
    if (box[2].textContent == "") {
      box[2].textContent = "O";
    } else if (box[5].textContent == "") {
      box[5].textContent = "O";
    } else {
      box[8].textContent = "O";
    }

  }
  else if (
    (box[2].textContent == "X" && box[4].textContent == "X" && box[6].textContent == "") ||
    (box[2].textContent == "X" && box[6].textContent == "X" && box[4].textContent == "") ||
    (box[4].textContent == "X" && box[6].textContent == "X" && box[2].textContent == "")
  ) {
    if (box[2].textContent == "") {
      box[2].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[6].textContent = "O";
    }
  }
  else if (
    (box[6].textContent == "X" && box[7].textContent == "X" && box[8].textContent == "") ||
    (box[6].textContent == "X" && box[8].textContent == "X" && box[7].textContent == "") ||
    (box[7].textContent == "X" && box[8].textContent == "X" && box[6].textContent == "")
  ) {
    if (box[6].textContent == "") {
      box[6].textContent = "O";
    } else if (box[7].textContent == "") {
      box[7].textContent = "O";
    } else {
      box[8].textContent = "O";
    }
  }
  else if (
    (box[1].textContent == "X" && box[4].textContent == "X" && box[7].textContent == "") ||
    (box[1].textContent == "X" && box[7].textContent == "X" && box[4].textContent == "") ||
    (box[4].textContent == "X" && box[7].textContent == "X" && box[1].textContent == "")
  ) {
    if (box[1].textContent == "") {
      box[1].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[7].textContent = "O";
    }
  }
  else if (
    (box[3].textContent == "X" && box[4].textContent == "X" && box[5].textContent == "") ||
    (box[3].textContent == "X" && box[5].textContent == "X" && box[4].textContent == "") ||
    (box[4].textContent == "X" && box[5].textContent == "X" && box[3].textContent == "")
  ) {
    if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[5].textContent = "O";
    }
  } else {
    let ran = Math.random()
    if (ran < 0.25 && box[5].textContent == "") {
      box[5].textContent = "O"
    }
    else if (ran < 0.5 && ran > 0.25 && box[3].textContent == "") {
      box[3].textContent = "O"
    }
    else if (ran < 0.75 && ran > 0.5 && box[7].textContent == "") {
      box[7].textContent = "O"
    }
    else if (ran < 1 && ran > 0.75 && box[1].textContent == "") {
      box[1].textContent = "O"
    } else {
      if (box[5].textContent == "") {
        box[5].textContent = "O"
      } else if (box[3].textContent == "") {
        box[3].textContent == "O"
      } else if (box[7].textContent == "") {
        box[7].textContent == "O"
      } else if (box[1].textContent == "") {
        box[7].textContent == "O"
      }
    }
  }
}
