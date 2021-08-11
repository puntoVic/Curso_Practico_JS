const lista1  = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    1
];
function mapeaLista(lista)
{
    const lista1Count = {};

    lista.map(
        function(elemento){
            if(lista1Count[elemento])
            {
                lista1Count[elemento] += 1;
            }
            else{
                lista1Count[elemento] = 1;    
            }
        }
    );
    return lista1Count;
}

function calcularModa(lista)
{
    const list1Array = Object.entries(mapeaLista(lista)).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    )
    return list1Array[list1Array.length-1]
}


