const coupon = ["diez", "quince", "veinte"];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case coupon[0]:
            descuento = 10;
            break;

        case coupon[1]:
            descuento = 15;
            break;

        case coupon[2]:
            descuento = 20;
            break;
    
        default:
            alert("El cupón de descuento insertado no es válido");
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}