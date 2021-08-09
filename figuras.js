//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();

//Código del triángulo 
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + ", " +  ladoTriangulo2 + ", " + baseTriangulo)
console.log("La altura del triángulo mide: " + alturaTriangulo)
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El perímetro del triángulo es: " + perimetroTriangulo);
console.log("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

//Código del círculo
console.group("Círculo");
const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;

const perimetroCirculo = pi * diametro;
const areaCirculo = pi * radio * radio;
console.log("El radio del círuclo es: " + radio);
console.log("El diametro del círuclo es: " + diametro);
console.log("El perímetro del cículo es: " + perimetroCirculo);
console.log("El área del cículo es: " + areaCirculo);
console.groupEnd();
