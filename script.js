const mainContainer = document.querySelector(".card");
const thanksContainer = document.querySelector(".thank-you_card");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});


rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});