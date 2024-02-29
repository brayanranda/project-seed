export const title = "LISTA SIMPLE ENLAZADA"
export const descriptionListaSimpleEnlazada = "Estructura conformada por un elemento fundamental denominado Nodo. El Nodo es un elemento que contiene la información y la dirección del siguiente elemento, el primer elemento creado se le denomina cabeza y es la referencia para el desarrollo de las diversas acciones en la Lista. <br> Para comprender de una mejor manera el concepto de Listas Simples es necesario, primeramente, conocer la estructura básica de un nodo. <br> En general un nodo consta de dos partes:"

export const description2ListaSimpleEnlazada = "Podría parecer extraño tener un nodo que referencia a otro nodo, pero tal esquema trabaja fácilmente. La referencia siguiente dentro de un nodo puede ser vista como un enlace o apuntador a otro nodo. De igual nodo, moverse de un nodo a otro siguiendo una referencia al siguiente es conocida como salto de enlace o salto de apuntador. <br> Como en un arreglo, una lista simple enlazada guarda sus elementos en un cierto orden. Este orden está determinado por la cadenas de enlaces siguientes yendo desde cada nodo a su sucesor en la lista. A diferencia de un arreglo, una lista simple enlazada no tiene un tamaño fijo predeterminado, y usa espacio proporcional al número de sus elementos. Asimismo, no se emplean números índices para los nodos en una lista enlazada. Por lo tanto, no se puede decir sólo por examinar un nodo si este es el segundo, quinto u otro nodo en la lista."

export const itemsListaSimpleEnlazada = [
    "Un campo Información que será del tipo de datos que se quiera almacenar en la lista",
    "Un puntero sig, que se utiliza para establecer el enlace con otro nodo de la lista. que será del tipo de datos que se quiera almacenar en la lista. Si el nodo fuera el último de la lista, este campo tendrá como valor: NULL (vacío). Al emplearse el campo puntero sig para relacionar dos nodos, no será necesario almacenar físicamente a los nodos en espacios contiguos."
]

export const clasificacionListasEnlazadas = [
    "Listas simplemente enlazadas. Cada nodo (elemento) contiene un único enlace que conecta ese nodo al nodo siguiente o nodo sucesor. La lista es eficiente en recorridos directos (“adelante”).",
    "Listas doblemente enlazadas. Cada nodo contiene dos enlaces, uno a su nodo predecesor y el otro a su nodo sucesor. La lista es eficiente tanto en recorrido directo (“adelante”) como en recorrido inverso (“atrás”).",
    "Lista circular simplemente enlazada. Una lista enlazada simplemente en la que el último elemento (cola) se enlaza al primer elemento (cabeza) de tal modo que la lista puede ser recorrida de modo circular (“en anillo”).",
    "Lista circular doblemente enlazada. Una lista doblemente enlazada en la que el último elemento se enlaza al primer elemento y viceversa. Esta lista se puede recorrer de modo circular (en anillo) tanto en dirección directa (“adelante”) como inversa (“atrás”).",
    "La implementación de cada uno de los cuatro tipos de estructuras de listas se puede desarrollar utilizando referencias.",
]
