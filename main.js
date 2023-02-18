let decrease = document.querySelector(".kleba");
let reset = document.querySelector(".ganuleba");
let increase = document.querySelector(".zrda");
let shedegi = document.querySelector("h2");
decrease.addEventListener("click", function () {
  shedegi.innerHTML--;
  if (shedegi.innerHTML < 0) {
    shedegi.style.color = "red";
  }
});
reset.addEventListener("click", function () {
  shedegi.innerHTML = 0;
  shedegi.style.color = "black";
});
increase.addEventListener("click", function () {
  shedegi.innerHTML++;
  if (shedegi.innerHTML > 0) {
    shedegi.style.color = "blue";
  }
});
