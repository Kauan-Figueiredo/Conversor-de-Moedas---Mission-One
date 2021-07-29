

let dolar = 5.3
let euro = 6
let button = document.getElementById("button")
let select = document.getElementById("select-moedas")



 async function ConverterMoedas() {

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
 return resposta.json()
})

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high

console.log(dolar)
console.log(euro)

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")


    if (select.value === "US$ - Dólar Americano"){
        let ValorEmDolares = inputValorEmReais / dolar
    inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
    if (select.value === "€ - Euro") {
        let ValorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }


    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

/// Essa funcao é responsavel por trocar bandeiras  e o nome das moedas.
function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let BandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ - Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        BandeiraMoedas.src = "./img/EUA.png"
    }
    if (select.value === "€ - Euro") {
        textoMoedas.innerHTML = "Euro"
        BandeiraMoedas.src = "./img/euro.png"

    }

    ConverterMoedas()


}

/// Esses são os eventos que dão a ação para o botão
button.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)



/// console.log(ValorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})