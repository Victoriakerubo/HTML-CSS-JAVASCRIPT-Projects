const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingcountE1 = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalcounterEl.innerText = textareaEl.value.length;
  remainingcountE1.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}


