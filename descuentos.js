const precioOriginal = 1200;
const descuento = 18;

function calcularPrecioConDescuento(precioOriginal, descuento)
{
    const porcentajeConDescuento = 100 - descuento;
    return (precioOriginal * porcentajeConDescuento) /100; 
}


function calcularPrecioDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son " + precioConDescuento;

}
console.log(calcularPrecioConDescuento(precioOriginal, descuento));