const fromAmount = document.getElementById("fromAmount");
const toAmount = document.getElementById("toAmount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const swapButton = document.getElementById("swapButton");

// Yalnız satış məzənnələri (AZN əsaslı)
const rates = {
    "AZN": 1,
    "USD": 1.702,
    "EUR": 2.0352,
    "RUB": 0.0256,
    "TRY": 0.04
};

function convert() {
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    const amount = Number(fromAmount.value);

    let result = 0;

    if(fromValue === "AZN") {
        // AZN → digər valyuta
        result = amount / rates[toValue];
    } else if(toValue === "AZN") {
        // Digər valyuta → AZN
        result = amount * rates[fromValue];
    } else {
        // Valyuta → valyuta (AZN vasitəsilə)
        const azn = amount * rates[fromValue];
        result = azn / rates[toValue];
    }

    toAmount.value = result.toFixed(2);
}

// Event-lər
fromAmount.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

// SWAP BUTTON
swapButton.addEventListener("click", () => {
    const tempCurrency = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCurrency;

    const tempAmount = fromAmount.value;
    fromAmount.value = toAmount.value;
    toAmount.value = tempAmount;

    convert();
});