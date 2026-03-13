const btn = document.querySelector("#credit-limit #davam-et");
const check = document.querySelector("#credit-limit .davam-et-check");

btn.onclick = function() {
    check.classList.toggle("check-active");
}