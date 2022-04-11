// Funciones Helpers
// Devuelve True o False si el numero es par o impar
function esPar(numerito) {
    return (numerito % 2 === 0);
}

// Calculadora de Promedio
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
  
  // Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
  
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
  
  // Mediana General - Recoge la lista de salarios del archivo salarios.js
const salariosSp = spain.map(
    function (personita) {
        return personita.salary;
    }
);
  
// Ordena la lista de salarios de menor a mayor
const salariosSpSorted = salariosSp.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralSp = medianaSalarios(salariosSpSorted);

// Mediana del top 10%
const spliceStart = (salariosSpSorted.length * 90) / 100;
const spliceCount = salariosSpSorted.length - spliceStart;

const salariosSpTop10 = salariosSpSorted.splice(spliceStart, spliceCount);
    
const medianaTop10Sp = medianaSalarios(salariosSpTop10);

console.log({
    medianaGeneralSp,
    medianaTop10Sp
});
