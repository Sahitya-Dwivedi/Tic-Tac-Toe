let box = document.querySelectorAll(".box");
let toggle = true;
let check = document.querySelector("#check");
let checked = false;
let whoTurn = document.querySelector(".whoTurn")
whoTurn.textContent = "X"
check.addEventListener("change", (e) => {
  e.target.checked ? (checked = true) : (checked = false);
});

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if (checked) {
      if (box[i].textContent == "X" || box[i].textContent == "O") {
        return;
      }
      if (toggle) {
        box[i].textContent = "X";
        whoTurn.textContent = "O"
        toggle = !toggle;
      } else {
        box[i].textContent = "O";
        whoTurn.textContent = "X"
        toggle = !toggle;
      }
      if (box[i].textContent == "X" || "O") {
        setTimeout(() => {
          winner();
        }, 50);
      }
    }
  });
}

function winner() {
  if ((box[0].textContent == box[1].textContent && box[1].textContent == box[2].textContent) && box[0].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[3].textContent == box[4].textContent && box[4].textContent == box[5].textContent) && box[3].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[6].textContent == box[7].textContent && box[7].textContent == box[8].textContent) && box[6].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[0].textContent == box[3].textContent && box[3].textContent == box[6].textContent) && box[0].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[1].textContent == box[4].textContent && box[4].textContent == box[7].textContent) && box[1].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[2].textContent == box[5].textContent && box[5].textContent == box[8].textContent) && box[2].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[0].textContent == box[4].textContent && box[4].textContent == box[8].textContent) && box[0].textContent != "") {
    alert("you won")
    reset()
  }
  else if ((box[2].textContent == box[4].textContent && box[4].textContent == box[6].textContent) && box[2].textContent != "") {
    alert("you won")
    reset()
  }
  let draw = 0
  box.forEach(v => v.textContent != "" ? draw++ : "")
  if (draw == 9) {
    alert("draw")
    reset()
  }
}

function reset() {
  for (let index = 0; index < box.length; index++) {
    const element = box[index];
    element.textContent = ""
  }
}