const textareaEl = document.getElementById("text-area");

const totalcounterEl = document.getElementById("total-counter")

const remaningcounterEl = document.getElementById("remaning-counter")

textareaEl.addEventListener("keyup", () => {

  updateCounter()
})

updateCounter()

function updateCounter() {
  totalcounterEl.textContent = textareaEl.value.length;
  remaningcounterEl.textContent = textareaEl.getAttribute("maxlength") -
    textareaEl.value.length

}