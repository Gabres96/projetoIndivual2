var escolherMedida = document.getElementById("seletorMedida");
var escolherOpcaoDe = document.getElementById("opcaoDe");
var escolherOpcaoPara = document.getElementById("opcaoPara");
var selecionar = document.getElementById("selecionar");

escolherMedida.addEventListener("change", function () {
    var seletorMedida = escolherMedida.value;

    if (seletorMedida === "comprimento") {
        populateOptions(["Metros", "Centímetros", "Polegadas"]);
    } else if (seletorMedida === 'peso') {
        populateOptions(["Quilogramas", "Gramas", "Libras"]);
    } else if (seletorMedida === 'temperatura') {
        populateOptions(["Celsius", "Fahrenheit", "Kelvin"]);
    } else if (seletorMedida === 'escolha') {
        populateOptions(['Selecione uma categoria'])
    }
});

function populateOptions(options) {
    escolherOpcaoDe.innerHTML = '';
    escolherOpcaoPara.innerHTML = '';

    options.forEach(function (option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;

        opcaoDe.appendChild(optionElement);
        opcaoPara.appendChild(optionElement.cloneNode(true));
    });
}

var botaoConverter = document.querySelector("botaoConverter");

botaoConverter.addEventListener("click", function () {
    var valor = document.getElementById("valor").value;
    var seletorMedida = seletorMedida.value;
    var opcaoDe = opcaoDe.value;
    var opcaoPara = opcaoPara.value;

    var resultado = realizarConversao(valor, seletorMedida, seletorOrigem, seletorDestino);

    Document.getElementById("campoResultado").value = resultado;
})

document.addEventListener("keydown", function (event) {
    if (event.key === "enter") {
        botaoConverter.click();
    }
})

function realizarConversao(valor, seletorMedida, seletorOrigem, seletorDestino) {
    if (seletorOrigem === seletorDestino) {
        return parseFloat(valor);
    }

    if (seletorMedida === "comprimento") {
        if (seletorOrigem === "Metros" && seletorDestino === 'Centímetros') {
            return (valor * 100).toFixed(2);
        } else if (seletorOrigem === "Centímetros" && seletorDestino === "Metros") {
            return (valor / 100).toFixed(2);
        } else if (seletorOrigem === "Polegadas" && seletorDestino === "Centímetros") {
            return (valor * 2.54).toFixed(2);
        } else if (seletorOrigem === "Metros" && seletorDestino === "Polegadas") {
            return (valor / 2.54).toFixed(2);

        } else if (seletorOrigem === "Metros" && seletorDestino === "Polegadas") {
            return (valor * 39.37).toFixed(2);
        } else if (seletorOrigem === "Polegadas" && seletorDestino === "Metros") {
            return (valor / 39.37).toFixed(2);
        }
    } else if (seletorMedida === "peso") {
        if (seletorOrigem === "Quilogramas" && seletorDestino === "Gramas") {
            return (valor * 1000).toFixed(2);
        } else if (seletorOrigem === "Gramas" && seletorDestino === "Quilogramas") {
            return (valor / 1000).toFixed(2);
        } else if (seletorOrigem === "Libras" && seletorDestino === "Quilogramas") {
            return (valor * 0.453592).toFixed(2);
        } else if (seletorOrigem === "Quilogramas" && seletorDestino === "Libras") {
            return (valor * 2.20462).toFixed(2);

        } else if (seletorOrigem === "Gramas" && seletorDestino === "Polegadas") {
            return (valor / 453.592).toFixed(2);
        } else if (seletorOrigem === "Libras" && seletorDestino === "Gramas") {
            return (valor * 453.592).toFixed(2);
        }
    } else if (categoria === "temperatura") {
        if (seletorOrigem === "Celsius" && seletorDestino === "Fahrenheit") {
            return ((valor * 9 / 5 + 32).toFixed(2));
        } else if (seletorOrigem === "Fahrenheit" && seletorDestino === "Celsius") {
            return (valor / 1000).toFixed(2);
        } else if (seletorOrigem === "Celsius" && seletorDestino === "Kelvin") {
            return (parseFloat(valor) + 273.15).toFixed(2);
        } else if (seletorOrigem === "Kelvin" && seletorDestino === "Celsius") {
            return (parseFloat(valor) - 273.15).toFixed(2);
        } else if (seletorOrigem === "Fahrenheit" && seletorDestino === "Kelvin") {
            return ((parseFloat(valor) + 459.67) * 5 / 9).toFixed(2);
        } else if (seletorOrigem === "Kelvin" && seletorDestino === "Fahrenheit") {
            return ((parseFloat(valor) * 9 / 5) - 459.67).toFixed(2);
        }
    }
    return "Conversão Inválida";
}






