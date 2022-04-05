// const lista1 = [34, 27, 45, 55, 22, 34]

    function calcularMediaArmonica(lista) {
        let divisor = 0;
        for (let i = 0; i < lista.length; i++) {
            divisor = divisor + 1 / lista[i];
        }

        const mediaArmonica = lista.length / divisor;

        return mediaArmonica;
    }

