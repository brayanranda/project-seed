export const descriptionList = "Una lista es un contenedor secuencial en el que se pueden insertar y borrar elementos independientemente del tamaño del contenedor. Para insertar un elemento cualquiera debemos ir recorriendo la lista, lo que pudiera hacer creer que las listas son menos prácticas que los vectores, pero estas tienen sus ventajas: una inserción en medio de la lista no requiere mover todos los elementos que se encuentran después del punto de inserción mientras que en un vector es necesario recorrer todos los elementos para abrir espacio al nuevo elemento. <br> Las operaciones básicas de los diferentes tipos de listas son las misma sólo que se realizan de formas diferentes dependiendo de la naturaleza de cada una de ellas. Estas operaciones básicas son: Insertar, Eliminar, editar y consultar un dato en la estructura."

export const itemsListInterface = {
    items1: [
        "En la cabeza (elemento primero) de la lista.",
        "En el final de la lista (elemento último).",
        "Ordenado",
    ],
    items2: [
        "Búsqueda del nodo que contiene el dato. Se ha de obtener la dirección del nodo a eliminar y la dirección del anterior.",
        "El enlace del nodo anterior que apunte al nodo siguiente del que se elimina.",
        "Si el nodo a eliminar es el cabeza de la lista (primero), se modifica primero para que tenga la dirección del siguiente nodo.",
        "Por último, la memoria ocupada por el nodo se libera. Es el propio sistema el que libera el nodo, al dejar de estar referenciado.",
    ],
    items3: [
        "Búsqueda del nodo que contiene el dato.",
        "La referencia adelante del nodo anterior tiene que apuntar a la referencia adelante del nodo a eliminar (si no es el nodo cabecera).",
        "La referencia atrás del nodo siguiente a borrar tiene que apuntar a la referencia atrás del nodo a eliminar (si no es el último nodo).",
        "Si el nodo que se elimina es el primero, cabeza, se modifica cabeza para que tenga la dirección del nodo siguiente.",
        "La memoria ocupada por el nodo es liberada automáticamente.",
    ],
    items4: [
        "Listas simplemente enlazadas. Cada nodo (elemento) contiene un único enlace que conecta ese nodo al nodo siguiente o nodo sucesor. La lista es eficiente en recorridos directos (“adelante”).",
        "Listas doblemente enlazadas. Cada nodo contiene dos enlaces, uno a su nodo predecesor y el otro a su nodo sucesor. La lista es eficiente tanto en recorrido directo (“adelante”) como en recorrido inverso (“atrás”).",
        "Lista circular simplemente enlazada. Una lista enlazada simplemente en la que el último elemento (cola) se enlaza al primer elemento (cabeza) de tal modo que la lista puede ser recorrida de modo circular (“en anillo”).",
        "Lista circular doblemente enlazada. Una lista doblemente enlazada en la que el último elemento se enlaza al primer elemento y viceversa. Esta lista se puede recorrer de modo circular (en anillo) tanto en dirección directa (“adelante”) como inversa (“atrás”).",
        "La implementación de cada uno de los cuatro tipos de estructuras de listas se puede desarrollar utilizando referencias.",
    ],
    items5:[
        "Un campo Información que será del tipo de datos que se quiera almacenar en la lista",
        "Un puntero sig, que se utiliza para establecer el enlace con otro nodo de la lista. que será del tipo de datos que se quiera almacenar en la lista. Si el nodo fuera el último de la lista, este campo tendrá como valor: NULL (vacío). Al emplearse el campo puntero sig para relacionar dos nodos, no será necesario almacenar físicamente a los nodos en espacios contiguos."
    ]
}