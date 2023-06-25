document.getElementById("formularioConversor").addEventListener("submit", function (event) {
    event.preventDefault()

    var valorDe = document.getElementById("valorDe")
    var valorPara = document.getElementById("valorPara")
    var valor = document.getElementById("valor")

    var resultado = calculoConversoes(valorDe.value, valorPara.value, valor.value)

    var valorFinal = document.getElementById("valorFinal")
    if (valorDe.selectedIndex === 0 || valorPara.selectedIndex === 0) {
        alert("Algum campo não foi preenchido, por gentileza corrija")
    } else {
        valorFinal.style.color = "white"
        valorFinal.innerText = resultado.toFixed(2)
    }
})
document.getElementById("escolherMedidas").addEventListener("change", function (event) {
    event.preventDefault()

    var definir = event.target.value

    var lista = []
    if (definir == "Comprimento") { lista = ["Metros", "Centimetros", "Polegadas"] }
    if (definir == "Peso") { lista = ["Quilogramas", "Gramas", "Libras"] }
    if (definir == "Temperatura") { lista = ["Celsius", "Fahrenheit", "Kelvin"] }
    opcoesMedidas(lista)
})

function opcoesMedidas(lista) {
    valorDe.innerHTML = "<option disabled selected hidden>Qual medida você deseja?</option>"
    for (var i = 0; i < lista.length; i++) {
        var opcao = document.createElement("option")
        opcao.innerText = `${lista[i]}`
        valorDe.append(opcao)
    }
    document.getElementById("valorDe").addEventListener("change", function (event) {
        event.preventDefault()

        var definir = event.target.selectedIndex
        valorPara.innerHTML = "<option disabled selected hidden>Qual medida você deseja?</option>"

        for (var i = 0; i < lista.length; i++) {
            if (definir - 1 != i) {
                var opcao = document.createElement("option")
                opcao.innerText = `${lista[i]}`
                valorPara.append(opcao)
            }
        }
    })
}

function calculoConversoes(valorDe, valorPara, valor) {

    if (valorDe == "Quilogramas") { if (valorPara == "Gramas") { return valor * 1000 } if (valorPara == "Libras") { return valor * 2.20462 } }
    if (valorDe == "Gramas") { if (valorPara == "Quilogramas") { return valor * 0.001 } if (valorPara == "Libras") { return valor * 0.00220462 } }
    if (valorDe == "Libras") { if (valorPara == "Quilogramas") { return valor * 0.453592 } if (valorPara == "Gramas") { return valor * 453.5920000001679 } }


    if (valorDe == "Celsius") { if (valorPara == "Fahrenheit") { return valor * 1.8 + 32 } if (valorPara == "Kelvin") { return valor * 1 + 273.15 } }
    if (valorDe == "Fahrenheit") { if (valorPara == "Celsius") { return (valor - 32) / 1.8 } if (valorPara == "Kelvin") { return (valor - 32) * 5 / 9 + 273.15 } }
    if (valorDe == "Kelvin") { if (valorPara == "Celsius") { return valor - 273.15 } if (valorPara == "Fahrenheit") { return (valor - 273.15) * 1.8 + 32 } }

    if (valorDe == 'Metros') { if (valorPara == 'Centimetros') { return valor * 100 } if (valorPara == 'Polegadas') { return valor * 39.3701 } }
    if (valorDe == 'Centimetros') { if (valorPara == 'Metros') { return valor * 0.01 } if (valorPara == 'Polegadas') { return valor * 0.393701 } }
    if (valorDe == 'Polegadas') { if (valorPara == 'Metros') { return valor * 0.0254 } if (valorPara == 'Centimetros') { return valor * 2.54 } }
}



