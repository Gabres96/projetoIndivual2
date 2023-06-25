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

var criarBotaoConverter = document.querySelector(".botaoConverter");

criarBotaoConverter.addEventListener("click", function () {
    var valor = document.getElementById("valor").value;
    var seletorMedida = escolherMedida.value;
    var opcaoDe = escolherOpcaoDe.value;
    var opcaoPara = escolherOpcaoPara.value;

    if (valor === "") {
        alert(document.getElementById("campoResultado").value = "Digite algum valor para ser calculado.")
    } else {
        if (seletorMedida === "" || opcaoDe === "" || opcaoPara === "") {
            alert(document.getElementById("campoResultado").value = "Adicione informações em todos os campos")
        } else {
            var resultado = realizarConversao(valor, seletorMedida, seletorOrigem, seletorDestino);

            Document.getElementById("campoResultado").value = resultado;

        }
    }

});

document.addEventListener("keydown", function (event) {
    if (event.key === "enter") {
        criarBotaoConverter.click();
    }
})

function realizarConversao(valor, seletorMedida, opcaoDe, opcaoPara) {
    if (opcaoDe === opcaoPara) {
        return parseFloat(valor);
    }

    if (seletorMedida === "comprimento") {
        if (opcaoDe === "Metros" && opcaoPara === 'Centímetros') {
            return (valor * 100).toFixed(2);
        } else if (opcaoDe === "Centímetros" && opcaoPara === "Metros") {
            return (valor / 100).toFixed(2);
        } else if (opcaoDe === "Polegadas" && opcaoPara === "Centímetros") {
            return (valor * 2.54).toFixed(2);
        } else if (opcaoDe === "Metros" && opcaoPara === "Polegadas") {
            return (valor / 2.54).toFixed(2);

        } else if (opcaoDe === "Metros" && opcaoPara === "Polegadas") {
            return (valor * 39.37).toFixed(2);
        } else if (opcaoDe === "Polegadas" && opcaoPara === "Metros") {
            return (valor / 39.37).toFixed(2);
        }
    } else if (seletorMedida === "peso") {
        if (opcaoDe === "Quilogramas" && opcaoPara === "Gramas") {
            return (valor * 1000).toFixed(2);
        } else if (opcaoDe === "Gramas" && opcaoPara === "Quilogramas") {
            return (valor / 1000).toFixed(2);
        } else if (opcaoDe === "Libras" && opcaoPara === "Quilogramas") {
            return (valor * 0.453592).toFixed(2);
        } else if (opcaoDe === "Quilogramas" && opcaoPara === "Libras") {
            return (valor * 2.20462).toFixed(2);

        } else if (opcaoDe === "Gramas" && opcaoPara === "Polegadas") {
            return (valor / 453.592).toFixed(2);
        } else if (opcaoDe === "Libras" && opcaoPara === "Gramas") {
            return (valor * 453.592).toFixed(2);
        }
    } else if (seletorMedida === "temperatura") {
        if (opcaoDe === "Celsius" && opcaoPara === "Fahrenheit") {
            return ((valor * 9 / 5 + 32).toFixed(2));
        } else if (opcaoDe === "Fahrenheit" && opcaoPara === "Celsius") {
            return (valor / 1000).toFixed(2);
        } else if (opcaoDe === "Celsius" && opcaoPara === "Kelvin") {
            return (parseFloat(valor) + 273.15).toFixed(2);
        } else if (opcaoDe === "Kelvin" && opcaoPara === "Celsius") {
            return (parseFloat(valor) - 273.15).toFixed(2);
        } else if (opcaoDe === "Fahrenheit" && opcaoPara === "Kelvin") {
            return ((parseFloat(valor) + 459.67) * 5 / 9).toFixed(2);
        } else if (opcaoDe === "Kelvin" && opcaoPara === "Fahrenheit") {
            return ((parseFloat(valor) * 9 / 5) - 459.67).toFixed(2);
        }
    }
    return "Conversão Inválida";
}






