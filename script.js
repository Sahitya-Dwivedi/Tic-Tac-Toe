let box = document.querySelectorAll(".box");
let toggle = true;
let check = document.querySelector("#check");
let checked = false;
let checkedComp = false;
let whoTurn = document.querySelector(".whoTurn");
let checkComp = document.querySelector("#checkComp");
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
    alert("you won");
    reset();
  } else if (
    box[3].textContent == box[4].textContent &&
    box[4].textContent == box[5].textContent &&
    box[3].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[6].textContent == box[7].textContent &&
    box[7].textContent == box[8].textContent &&
    box[6].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[0].textContent == box[3].textContent &&
    box[3].textContent == box[6].textContent &&
    box[0].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[1].textContent == box[4].textContent &&
    box[4].textContent == box[7].textContent &&
    box[1].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[2].textContent == box[5].textContent &&
    box[5].textContent == box[8].textContent &&
    box[2].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[0].textContent == box[4].textContent &&
    box[4].textContent == box[8].textContent &&
    box[0].textContent != ""
  ) {
    alert("you won");
    reset();
  } else if (
    box[2].textContent == box[4].textContent &&
    box[4].textContent == box[6].textContent &&
    box[2].textContent != ""
  ) {
    alert("you won");
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
  for (let index = 0; index < box.length; index++) {
    const element = box[index];
    element.textContent = "";
  }
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
  whoTurn.textContent = "O";
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
  setTimeout(() => {
    winner();
  }, 50);
}

function checkWinner() {
  if (
    (box[0].textContent == box[1].textContent && box[2].textContent == "") ||
    (box[0].textContent == box[2].textContent && box[1].textContent == "") ||
    (box[2].textContent == box[1].textContent && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[1].textContent == "") {
      box[1].textContent = "O";
    } else {
      box[2].textContent = "O";
    }
  } else if (
    (box[0].textContent == box[3].textContent && box[6].textContent == "") ||
    (box[0].textContent == box[6].textContent && box[3].textContent == "") ||
    (box[3].textContent == box[6].textContent && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else {
      box[6].textContent = "O";
    }
  } else if (
    (box[0].textContent == box[4].textContent && box[8].textContent == "") ||
    (box[0].textContent == box[8].textContent && box[4].textContent == "") ||
    (box[4].textContent == box[8].textContent && box[0].textContent == "")
  ) {
    if (box[0].textContent == "") {
      box[0].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[8].textContent = "O";
    }
  } else if (
    (box[2].textContent == box[5].textContent && box[8].textContent == "") ||
    (box[2].textContent == box[8].textContent && box[5].textContent == "") ||
    (box[5].textContent == box[8].textContent && box[2].textContent == "")
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
    (box[2].textContent == box[4].textContent && box[6].textContent == "") ||
    (box[2].textContent == box[6].textContent && box[4].textContent == "") ||
    (box[4].textContent == box[6].textContent && box[2].textContent == "")
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
    (box[6].textContent == box[7].textContent && box[8].textContent == "") ||
    (box[6].textContent == box[8].textContent && box[7].textContent == "") ||
    (box[7].textContent == box[8].textContent && box[6].textContent == "")
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
    (box[1].textContent == box[4].textContent && box[7].textContent == "") ||
    (box[1].textContent == box[7].textContent && box[4].textContent == "") ||
    (box[4].textContent == box[7].textContent && box[1].textContent == "")
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
    (box[3].textContent == box[4].textContent && box[5].textContent == "") ||
    (box[3].textContent == box[5].textContent && box[4].textContent == "") ||
    (box[4].textContent == box[5].textContent && box[3].textContent == "")
  ) {
    if (box[3].textContent == "") {
      box[3].textContent = "O";
    } else if (box[4].textContent == "") {
      box[4].textContent = "O";
    } else {
      box[5].textContent = "O";
    }
  }
}
