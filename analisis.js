
///Helpers
function esPar(numerito){
    return numerito % 2 === 0
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
//Mediana Salarios
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length))
    {
        return calcularMediaAritmetica([lista[mitad], lista[mitad-1]]);
    }
    else
    {
        return lista[mitad];
    }
}
//Mediana General
const salariosCol = mexico.map(
    function(personita){
        return personita.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB)
    {
        return salaryA - salaryB;
    }
);

//Mediana Top 10%

const spliceStart = (salariosColSorted.length * 0.9) ;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosTop10);







console.log(

    medianaTop10Col
);
