// local storage
const contBtn = document.querySelector(".btn-continue");
const closeBtn = document.querySelector(".exit");

const hideLocaleSelector = () => {
  const localeSelectorContainer = document.querySelector(
    ".locale-selector-container"
  );
  localeSelectorContainer.style.display = "none";
};

closeBtn.addEventListener("click", () => {
  hideLocaleSelector();
});
const country = document.querySelector("#country");
const locSt = localStorage.getItem("country");
if (locSt) {
  hideLocaleSelector();
}
contBtn.addEventListener("click", () => {
  localStorage.setItem("country", country.value);
  hideLocaleSelector();
});
