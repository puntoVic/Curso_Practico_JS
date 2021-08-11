const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = lista1.length / 2;
function esPar(numerito)
{
    return numerito % 2 === 0;
}
let mediana;
if(esPar(lista1.length))
{
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    mediana = calcularMediaAritmetica([elemento1,elemento2])
}
else
{
    mediana = lista[parseInt(mitadLista1)]
}

function calcularMediaAritmetica(lista)
{
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    return sumaLista / lista.length;

}