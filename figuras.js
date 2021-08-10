//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    console.log("Los lados del cuadrado miden: " + lado);
    return lado * 4;
}
function areaCuadrado(lado){
    console.log("Los lados del cuadrado miden: " + lado);
    return lado * lado;
}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado);

//console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();

//Código del triángulo 
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
{
    console.log("Los lados del triángulo miden: " + ladoTriangulo1 + ", " +  ladoTriangulo2 + ", " + baseTriangulo)
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo(baseTriangulo, alturaTriangulo)
{
    console.log("La altura del triángulo mide: " + alturaTriangulo)
    return (baseTriangulo * alturaTriangulo) / 2
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo);
// console.log("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

//Código del círculo
console.group("Círculo");
// const radio = 4;
// const diametro = radio * 2;
const pi = Math.PI;
function calculaDiametro(radio)
{
    return radio * 2;
}
function perimetroCirculo(radio)
{
    const diametro = calculaDiametro(radio);
    return pi * diametro;
}
function areaCirculo(radio)
{
    return pi * radio * radio;
}
console.groupEnd();

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const value =input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro +"cm2")
}
