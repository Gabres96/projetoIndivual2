var valor = document.getElementById('valor');
var txtResultado = document.getElementById('resultado')
var tipoConversao = document.getElementById("tipoConversao")

seletorDe = document.getElementById('seletorDe');
seletorDe.addEventListener('change', converter);

seletorPara = document.getElementById('seletorPara');
seletorPara.addEventListener('change', converter);

var resultado;

function converter() {
    if (valor.value == '') {
        return;
    }
    numero = valor.value;
    numero = parseFloat(numero);

    /*---CALCULO METRO--*/
    if (seletorDe.value == 'metro' && seletorPara.value == 'metro') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} metro(s)`
    }

    if (seletorDe.value == 'metro' && seletorPara.value == 'centimetro') {
        resultado = numero * 100;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (seletorDe.value == 'metro' && seletorPara.value == 'polegada') {
        resultado = numero * 39.37;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    /*---CALCULO CENTIMETRO--*/
    if (seletorDe.value == 'centimetro' && seletorPara.value == 'metro') {
        resultado = numero * 0.01;
        txtResultado.innerHTML = `${numero} centimetro(s) equivalem a ${resultado} metro(s)`
    }

    if (seletorDe.value == 'centimetro' && seletorPara.value == 'centimetro') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} centimetro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (seletorDe.value == 'centimetro' && seletorPara.value == 'polegada') {
        resultado = numero * 0.39;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    /*---CALCULO POLEGADA--*/
    if (seletorDe.value == 'polegada' && seletorPara.value == 'metro') {
        resultado = numero / 39.37;
        txtResultado.innerHTML = `${numero} polegada(s) equivalem a ${resultado} metro(s)`
    }

    if (seletorDe.value == 'polegada' && seletorPara.value == 'centimetro') {
        resultado = numero * 2.54;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (seletorDe.value == 'polegada' && seletorPara.value == 'polegada') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    
}

