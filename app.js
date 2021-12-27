const button = document.getElementById("convert.calc")
const select = document.getElementById("currency-select-dolar")

const dolar = 5.6
const euro = 6
const bitcoin = 300000
const ethereum = 20000

const convertValues = () => {
    const inputReais = document.getElementById("input-value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)

    if (select.value === "US$ Dólar americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar);
}

    if (select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro);
}

    if (select.value === "₿ Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputReais / bitcoin);
}

    if (select.value === "Ethereum"){
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "ETH"
    }).format(inputReais / ethereum);
}
};


changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-image-convers")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "../CSS/assets/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../CSS/assets/Euro.svg"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "../CSS/assets/bitcoin.svg"
    }

    if (select.value === "Ethereum") {
        currencyName.innerHTML = "Ethereum"
        currencyImg.src = "../CSS/assets/Ethereum.png"
    }

    convertValues()
}



button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)