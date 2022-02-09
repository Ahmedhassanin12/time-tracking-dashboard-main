let secRow = document.querySelectorAll(".sec-row p");
console.log(secRow);
secRow.forEach(function (el) {
  // add event click to current element
  el.addEventListener("click", function (el) {
    // remove acrive class from all para
    secRow.forEach((el) => {
      el.classList.remove("active");
    });
    // add active class to current para
    el.currentTarget.classList.add("active");
  });
});

let daily = document.querySelector(".sec-row .day");

daily.addEventListener("click", function () {
  document.querySelector(".wo").textContent = 8;
  document.querySelector(".daily").textContent = "Yastrday -10hr"
  document.querySelector(".pl").textContent = 2;
  document.querySelector(".daily-pl").textContent = "Yastrday -3hr";
  document.querySelector(".st").textContent = 4;
  document.querySelector(".daily-tw").textContent = "Yastrday -2hr";
  document.querySelector(".ex").textContent = 1;
  document.querySelector(".daily-th").textContent = "Yastrday -1hr";
  document.querySelector(".so").textContent = 2;
  document.querySelector(".daily-fo").textContent = "Yastrday -4hr";
  document.querySelector(".se").textContent = "30 min";
  document.querySelector(".daily-fi").textContent = "Yastrday -1hr";
});


let week = document.querySelector(".sec-row .week");

week.addEventListener("click", function () {
  document.querySelector(".wo").textContent = 36;
  document.querySelector(".daily").textContent = "last-week -10hr";
  document.querySelector(".pl").textContent = 10;
  document.querySelector(".daily-pl").textContent = "last-week -3hr";
  document.querySelector(".st").textContent = 4;
  document.querySelector(".daily-tw").textContent = "last-week -2hr";
  document.querySelector(".ex").textContent = 4;
  document.querySelector(".daily-th").textContent = "last-week -1hr";
  document.querySelector(".so").textContent = 5;
  document.querySelector(".daily-fo").textContent = "last-week -4hr";
  document.querySelector(".se").textContent = "2hr";
  document.querySelector(".daily-fi").textContent = "last-week -1hr";
});

let monthly = document.querySelector(".sec-row .month");

monthly.addEventListener("click", function () {
  document.querySelector(".wo").textContent = 60;
  document.querySelector(".daily").textContent = "last-month -10hr";
  document.querySelector(".pl").textContent = 30;
  document.querySelector(".daily-pl").textContent = "last-month -3hr";
  document.querySelector(".st").textContent = 12;
  document.querySelector(".daily-tw").textContent = "last-month -2hr";
  document.querySelector(".ex").textContent = 10;
  document.querySelector(".daily-th").textContent = "last-month -1hr";
  document.querySelector(".so").textContent = 20;
  document.querySelector(".daily-fo").textContent = "last-month -4hr";
  document.querySelector(".se").textContent = "6hr";
  document.querySelector(".daily-fi").textContent = "last-month -1hr";
});
