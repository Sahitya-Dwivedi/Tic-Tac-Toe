let box = document.getElementsByClassName("box");
let toggle = true;
let check = document.querySelector("#check");
let checked = false;

check.addEventListener("change", (e) => {
  e.target.checked ? (checked = true) : (checked = false);
  console.log(checked);
});

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if (checked) {
      if (box[i].textContent == "X" || box[i].textContent == "O") {
        return;
      }
      if (toggle) {
        box[i].textContent = "X";
        toggle = !toggle;
      } else {
        box[i].textContent = "O";
        toggle = !toggle;
      }
    }
  });
}
