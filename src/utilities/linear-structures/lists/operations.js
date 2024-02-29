import { faPlus, faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'

export const operationsList = [
    {
        icon: faPlus,
        title: "Inserción de un elemento en una lista",
        description: "El nuevo elemento que se desea incorporar a una lista se puede insertar de distintas formas, según la posición de inserción. Ésta puede ser:",

    },
    {
        icon: faEdit,
        title: "Editar un elemento en una lista",
        description: "La operación editar un elemento en una lista recorre la lista hasta encontrar la posición del nodo al que se desea modificar la información del elemento y actualiza la información del nodo por el nuevo elemento. El algoritmo, una vez modificada la información del nodo, devuelve la referencia a ese nodo (en caso negativo, devuelve null). Otro planteamiento es que el método devuelva true si se pudo modificar la información del nodo con el elemento, y false si no se pudo realizar la operación."
    },
    {
        icon: faSearch,
        title: "Consulta de un elemento en una lista",
        description: "La operación búsqueda de un elemento en una lista enlazada recorre la lista hasta encontrar el nodo con el elemento. El algoritmo, una vez encontrado el nodo, devuelve la referencia a ese nodo (en caso negativo, devuelve null). Otro planteamiento es que el método devuelva true si encuentra el nodo con el elemento, y false si no está en la lista."
    },
    {
        icon: faTrash,
        title: "Eliminar un elemento de una lista",
        description: "La operación de eliminar un dato de una lista supone enlazar el nodo anterior con el nodo siguiente al que se desea eliminar y liberar la memoria que ocupa. El algoritmo sigue estos pasos:",

    },
]