const rightBtn = document.querySelector("#kampaniyalar .right");
const leftBtn = document.querySelector("#kampaniyalar .left");
const cardsContainer = document.getElementById("companyCards");
let currentIndex = 0; /* BASLANGICDA OLAN CARD */
/* ILK CARDIMIZIN UZUNLUGUNU ALIRIQ  */
function getCardWidth() {
  const style = getComputedStyle(cardsContainer.children[0]);
  const gap = 24; 
  return cardsContainer.children[0].offsetWidth + gap;
}
/* TRANSITION ƏLAVƏ EDIRIK */
cardsContainer.style.transition = "transform 0.3s ease";
/* SAG DUYMEYE CLICK */
rightBtn.onclick = function() {
  if(currentIndex < cardsContainer.children.length - 1) {
    currentIndex++;
    const translateX = currentIndex * getCardWidth();
    cardsContainer.style.transform = `translateX(-${translateX}px)`;
  }
}
/* SOL DUYMEYE CLICK */
leftBtn.onclick = function() {
  if(currentIndex > 0) {
    currentIndex--;
    const translateX = currentIndex * getCardWidth();
    cardsContainer.style.transform = `translateX(-${translateX}px)`;
  }
}