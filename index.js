const countBtn = document.getElementById("countBtn");
const H1 = document.getElementById("myH1");
const subtractCount = document.getElementById("subtractCount");

countBtn.addEventListener("click", incrementCount);
subtractCount.addEventListener("click", decrementCount);

let number = 0;
function incrementCount() {
  number = number + 1;
  H1.innerHTML = number;
}

function decrementCount() {
  number = number - 1;
  H1.innerHTML = number;
}
