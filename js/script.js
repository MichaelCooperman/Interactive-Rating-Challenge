const rateContainer = document.querySelector(".rate-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const btnSubmit = document.querySelector(".submit");
const btnRateAgain = document.querySelector(".rate-again");
const rates = document.querySelectorAll(".rate");
const rated = document.querySelector(".rated");

btnSubmit.addEventListener("click", function () {
  thankYouContainer.classList.remove("hidden");
});

btnRateAgain.addEventListener("click", function () {
  thankYouContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rated.innerHTML = rate.innerHTML;
  });
});
