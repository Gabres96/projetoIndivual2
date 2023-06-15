var valor = document.getElementById('valor');
valor.addEventListener('keyup', converter);

var txtResultado = document.getElementById('resultado')

unidade1 = document.getElementById('unidade1');
unidade1.addEventListener('change', converter);

unidade2 = document.getElementById('unidade2');
unidade2.addEventListener('change', converter);

var resultado;

function converter() {
    if (valor.value == '') {
        return;
    }
    numero = valor.value;
    numero = parseFloat(numero);

    /*---CALCULO METRO--*/
    if (unidade1.value == 'metro' && unidade2.value == 'metro') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} metro(s)`
    }

    if (unidade1.value == 'metro' && unidade2.value == 'centimetro') {
        resultado = numero * 100;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (unidade1.value == 'metro' && unidade2.value == 'polegada') {
        resultado = numero * 39.37;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    /*---CALCULO CENTIMETRO--*/
    if (unidade1.value == 'centimetro' && unidade2.value == 'metro') {
        resultado = numero * 0.01;
        txtResultado.innerHTML = `${numero} centimetro(s) equivalem a ${resultado} metro(s)`
    }

    if (unidade1.value == 'centimetro' && unidade2.value == 'centimetro') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} centimetro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (unidade1.value == 'centimetro' && unidade2.value == 'polegada') {
        resultado = numero * 0.39;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    /*---CALCULO POLEGADA--*/
    if (unidade1.value == 'polegada' && unidade2.value == 'metro') {
        resultado = numero / 39.37;
        txtResultado.innerHTML = `${numero} polegada(s) equivalem a ${resultado} metro(s)`
    }

    if (unidade1.value == 'polegada' && unidade2.value == 'centimetro') {
        resultado = numero * 2.54;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} centimetro(s)`
    }

    if (unidade1.value == 'polegada' && unidade2.value == 'polegada') {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} metro(s) equivalem a ${resultado} polegada(s)`
    }
    
}

