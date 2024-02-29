export const itemsCaracteristicas = {
    items1: [
        "Elementos (valores que se almacenan en c/u de las casillas)",
        "Los índices (Permiten hacer referencia a los elementos)"
    ],
    items2: [
        "En la ejecución del programa, se reservan tantas posiciones como el tamaño definido de la Secuencia, siendo cada posición del tamaño requerido por el tipo de dato de la estructura.",
        "El primer elemento de una Secuencia tiene obligatoriamente índice 0.",
        "Si una Secuencia tiene como máximo n elementos, el último elemento se referenciará con el índice n-1."
    ],
    items3: [
        "Unidimensional o vector: un solo índice",
        "Bidimensional o matriz: dos índices",
        "Multidimensional: más de dos índices"
    ],
}

export const description = "Son estructuras de datos que, una vez definidas, no pueden ser cambiadas por otras de otra naturaleza, o de diferente tamaño. Este tipo de estructuras no se pueden utilizar para problemas donde se requiera un tamaño de almacenamiento variable al momento de la ejecución. <br> Una Secuencia es una lista contigua (físicamente inclusive) de datos del mismo tipo que son accesibles por un índice, es la representación dentro del componente de un vector en lenguaje JAVA. Esta estructura se encuentra clasificada como estática lineal, debido a que el tamaño definido al crear la Estructura no se modifica y representa un espacio de almacenamiento de datos denominados elementos que se encuentran almacenados de forma sucesiva dentro de la estructura."

export const characteristic = "La característica principal de Secuencia es que almacena sus datos de manera consecutiva, por lo que entre la primera posición de la Secuencia (posición cero) y la última posición (última posición donde exista un dato) no se encuentran posiciones nulas, lo que si puede ocurrir en un vector tradicional donde no necesariamente los datos son almacenados secuencialmente. Esta característica permite examinar los datos almacenados dentro de la Secuencia sin tener que recorrer toda la capacidad de la estructura. <br> La Secuencia tiene la característica de que puede almacenar a N elementos del mismo tipo, permite seleccionar a cada uno de ellos. Así se distinguen dos partes:"

export const typeAndSize = [
    {
        name: "Tipo",
        description: "Hace referencia al tipo de los datos contenidos en el vector."
    },
    {
        name: "Tamaño",
        description: "Hace referencia al número de elementos máximos que puede contener la Secuencia. OJO: Este tamaño se define al crear la estructura y no puede modificarse a lo largo de la operabilidad de la misma."
    }
]