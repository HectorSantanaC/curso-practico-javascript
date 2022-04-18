// Calculadora de ahorro mensual según porcentaje elegido

function calcularAhorroMensual(ingresos, porcentaje) {
    const ahorro = (ingresos * porcentaje) / 100;
    return ahorro.toFixed(2);
}

function ButtonCalcularAhorroMensual() {
    const inputIngresos = document.getElementById("InputIngresos");
    const ingresosValue = inputIngresos.value;

    const inputPorcentaje = document.getElementById("InputAhorro");
    const ahorroValue = inputPorcentaje.value;

    const ahorroMensual = calcularAhorroMensual(ingresosValue, ahorroValue);

    const ResultA = document.getElementById("ResultA");
    ResultA.innerText = "El " + ahorroValue + "% de tus ingresos es " + ahorroMensual + "€";
}


// Calculadora de interés compuesto

function calcularInteresCompuesto(ahorros, tiempo, interes) {
    let interesCompuesto = 0;
    let ahorroTotal = 0;

    for (i = 0; i < tiempo ; i++) {
        ahorroTotal = interesCompuesto + ahorros;
        interesCompuesto = ahorroTotal * (1 + interes / 100);
    }

    return interesCompuesto.toFixed(2);
}

function ButtonCalcularInteresCompuesto() {
    const inputAhorroMensual = document.getElementById("InputAhorroMensual");
    const ahorroMensualValue = inputAhorroMensual.value;

    const aportacionAnual = ahorroMensualValue * 12;

    const inputTiempo = document.getElementById("InputTiempo");
    const tiempoValue = inputTiempo.value;

    const inputInteres = document.getElementById("InputInteres");
    const interesValue = inputInteres.value;
    
    const resultadoFinal = calcularInteresCompuesto(aportacionAnual, tiempoValue, interesValue);

    const ResultB = document.getElementById("ResultB");
    ResultB.innerText = "El capital final invirtiendo " + ahorroMensualValue + "€ al mes con un interés del " + interesValue + "% durante " + 
    tiempoValue + " años sería " + resultadoFinal + "€";
}
