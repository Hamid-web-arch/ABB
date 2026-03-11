function displayAmount() {
  const manat = document.querySelector("#amountSlider");
  const month = document.querySelector("#monthslider");
  const faiz = document.querySelector("#faiz");
  const display = document.querySelector("#amountValue");
  const kredit = document.querySelector("#monthlyPayment");

  display.textContent = manat.value + " ₼";

  const mebleq = Number(manat.value);
  const ay = Number(month.value);
  const faizDerece = Number(faiz.value);

  const total = mebleq + (mebleq * faizDerece) / 100;
  const ayligOdenis = total / ay;
  kredit.textContent = ayligOdenis.toFixed(2) + " ₼";
}
// ay
function displayAmount2() {
  let month = document.querySelector("#monthslider");
  let display = document.querySelector("#monthvalue");
  display.textContent = month.value + " ay";
  displayAmount();
}

// faiz
function displayAmount3() {
  let faiz = document.querySelector("#faiz");
  let display = document.querySelector("#faizValue");
  display.textContent = faiz.value + " %";
  displayAmount();
}
displayAmount();
displayAmount2();
displayAmount3();

// currency converter
