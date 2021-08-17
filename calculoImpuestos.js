function calculaISR(valueSueldoBruto)
{
    const result = isrs.filter(isr => valueSueldoBruto > isr.limiteInferior);
    const tabulador = result[result.length-2];
    const sueldoExcedente = valueSueldoBruto - tabulador.limiteInferior;
    const isrExcedente = (sueldoExcedente * tabulador.porcentajeEnExcedente)/100;
    const isrCalculado = tabulador.CuotaFija + isrExcedente;
    return isrCalculado;
}



//Función para calcular  
function CalculaISRNeto()
{
    const sueldoBruto = document.getElementById("sueldoBruto");
    const valueSueldoBruto = sueldoBruto.value;
    const ISR = Math.round(calculaISR(valueSueldoBruto)* 100)/100;
    const sueldoNeto = valueSueldoBruto - ISR ;
    const pSueldoNeto = document.getElementById("sueldoNeto");
    pSueldoNeto.innerText = "Su sueldo neto es de " + sueldoNeto + " pesos mexicanos y la cantidad de ISR retenida es " + ISR + " pesos mexicanos";
    
}