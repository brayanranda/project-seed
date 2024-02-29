## Clasificación de las listas enlazadas
Los diferentes tipos de listas dependen de la forma de enlazar los nodos, son:  

*   **Listas simplemente enlazadas.** Cada nodo (elemento) contiene un único enlace que conecta ese nodo al nodo siguiente o nodo sucesor. La lista es eficiente en recorridos directos (“adelante”).
*   **Listas doblemente enlazadas.** Cada nodo contiene dos enlaces, uno a su nodo predecesor y el otro a su nodo sucesor. La lista es eficiente tanto en recorrido directo (“adelante”) como en recorrido inverso (“atrás”).
*   **Lista circular simplemente enlazada.** Una lista enlazada simplemente en la que el último elemento (cola) se enlaza al primer elemento (cabeza) de tal modo que la lista puede ser recorrida de modo circular (“en anillo”).
*   **Lista circular doblemente enlazada.** Una lista doblemente enlazada en la que el último elemento se enlaza al primer elemento y viceversa. Esta lista se puede recorrer de modo circular (en anillo) tanto en dirección directa (“adelante”) como inversa (“atrás”).  
La implementación de cada uno de los cuatro tipos de estructuras de listas se puede desarrollar utilizando referencias.

# Lista Simple Enlazada {"subTitle":"Tipos de Listas"}

Estructura conformada por un elemento fundamental denominado Nodo. El Nodo es un elemento que contiene la información y la dirección del siguiente elemento, el primer elemento creado se le denomina cabeza y es la referencia para el desarrollo de las diversas acciones en la Lista.  
  
Para comprender de una mejor manera el concepto de Listas Simples es necesario, primeramente, conocer la estructura básica de un nodo.  
En general un nodo consta de dos partes:  

![Estructura de Nodo Simple](/assets/images/list/listaS_1.1.jpg)

*   Un campo Información que será del tipo de datos que se quiera almacenar en la lista
*   Un puntero sig, que se utiliza para establecer el enlace con otro nodo de la lista. que será del tipo de datos que se quiera almacenar en la lista. Si el nodo fuera el último de la lista, este campo tendrá como valor: NULL (vacío). Al emplearse el campo puntero sig para relacionar dos nodos, no será necesario almacenar físicamente a los nodos en espacios contiguos.

Una lista enlazada, en su forma mas simple, es una colección de nodos que juntos forman un orden lineal. El ordenamiento esta determinado de tal forma que cada nodo es un objeto que guarda una referencia a un elemento y una referencia, llamado siguiente, a otro nodo. La idea principal es que se cree un nuevo nodo, se pone su enlace siguiente para que se referencie al mismo objeto que la cabeza, y entonces se pone que la cabeza apunte al nuevo nodo.  

![Lista Simple](/assets/images/list/listaS_2.1.jpg)

Podría parecer extraño tener un nodo que referencia a otro nodo, pero tal esquema trabaja fácilmente. La referencia siguiente dentro de un nodo puede ser vista como un enlace o apuntador a otro nodo. De igual nodo, moverse de un nodo a otro siguiendo una referencia al siguiente es conocida como salto de enlace o salto de apuntador.  
  
Como en un arreglo, una lista simple enlazada guarda sus elementos en un cierto orden. Este orden está determinado por la cadenas de enlaces siguientes yendo desde cada nodo a su sucesor en la lista. A diferencia de un arreglo, una lista simple enlazada no tiene un tamaño fijo predeterminado, y usa espacio proporcional al número de sus elementos. Asimismo, no se emplean números índices para los nodos en una lista enlazada. Por lo tanto, no se puede decir sólo por examinar un nodo si este es el segundo, quinto u otro nodo en la lista.  
  

**Ejemplo de Insertar**  
Se inserta en una Lista Simple los números 10, 1, 23, 2, 12.

![Ejemplo Insertar LS](/assets/images/list/listaS_5.jpg)  
![Ejemplo Insertar LS](/assets/images/list/listaS_7.jpg)

De esta manera la Lista Simple queda:

![Ejemplo Insertar LS](/assets/images/list/listaS_8.jpg)

**Ejemplo de Eliminar**  
Teniendo la Lista Simple:

![Ejemplo Eliminar LS](/assets/images/list/listaS_9.jpg)

Se desea eliminar el 11 de la Lista Simple, se modifica el puntero sig del nodo anterior por el hacia el nodo siguiente del nodo que se eliminó.

![Ejemplo Eliminar LS](/assets/images/list/listaS_10.jpg)

Quedando la Lista Simple:

![Ejemplo Eliminar LS](/assets/images/list/listaS_11.jpg)

# Lista Simple en SEED {"subTitle":"Implementación de"}

## Descripción

La estructura se implemento en la clase ListaS, adicional a esto la estructura requiere de un elemento fundamental en el almacenamiento de los objetos denominado nodo que es la base de su implementación, este elemento fue definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
ListaS es un conjunto de nodos entrelazados entre si, cuyo origen es con la creación de un Nodo al que se le denomina “cabeza”, punto de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos que se puede realizar al inicio o fin de la lista es decir que los elementos no están ordenados en la estructura. En el proceso de eliminar un objeto sólo se modifica el apuntador de su predecesor hacia el nodo siguiente del que se desea eliminar, la estructura también tiene implementación de métodos como buscar y editar un elemento, conocer los datos almacenados y conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la lista siendo este el tamaño de la estructura.  
  
Adicionalmente a esto, con la Lista Simple es posible generar un Iterador de Lista Simple (IteradorLS) que permite recorrer de una forma más sencilla la estructura.  
La implementación de la Clase ListaS se ilustra en el siguiente diagrama de clase:  

![diagrama de clase ListaS](/assets/images/list/listaS_3.jpg)
  
**Requerimientos funcionales implementados:**  

- RF1 - Crear una nueva Lista Simple.  
- RF2 - Insertar datos en la nueva Lista Simple.  
- RF3 - Eliminar datos en la Lista Simple.  
- RF4 - Editar datos de la Lista Simple.  
- RF5 - Consultar datos en la Lista Simple.  
- RF6 - Conocer el tamaño de la Lista Simple.  
- RF7 - Crear un Iterador para recorrer la Lista Simple.  
- RF8 - Conocer los datos de la Lista Simple.  
  
**Implementación de un Simulador para Lista Simple:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  
![Simulador Lista Simple](/assets/images/list/listaS_4.jpg)

# Lista Doble Enlazada {"subTitle":"Tipos de Listas"}

En una lista doblemente enlazada cada nodo tiene una referencia al nodo siguiente, el cual apunta al siguiente nodo en la lista, y al nodo anterior el cual apunta al nodo previo en la lista. Al igual que en las implementaciones de otras estructuras, en la lista doblemente enlazada los nodos cabecera y final tienen referencias a null. Una buena analogía de una lista doble enlazada sería un tren, donde cada vagón esta conectado con el que le precede y el que le sigue.  

![Estructura de nodo Doble](/assets/images/list/listaD_1.1.jpg)
  
Tipo de lista enlazada que permite ir en ambas direcciones hacia adelante y hacia atrás en una lista enlazada. Tal lista permite una gran variedad de operaciones rápidas de actualización, al estar doblemente ligada facilita la implementación de la búsqueda y recorridos en ambos sentidos incluyendo la inserción y el borrado en ambos extremos, y en el centro.

![Lista doble](/assets/images/list/listaD_2.1.jpg)
  
**Ejemplo de Insertar**  
Se desea insertar los datos so, 13, 25, 4 y 23, en una lista doble.

![Ejemplo Insertar LD 1](/assets/images/list/listaD_5.jpg)  
![Ejemplo Insertar LD](/assets/images/list/listaD_6.jpg)

De esta manera la Lista Doble queda:

![Lista Doble](/assets/images/list/listaD_7.jpg)
  
**Ejemplo de Eliminar:**  
Teniendo la Lista Doble:

![Lista Doble](/assets/images/list/listaD_8.jpg)
  
Se desea eliminar el 29 de la Lista Doble, se debe modificar el puntero sig del nodo anterior, por el del nodo siguiente del nodo que se eliminó y el puntero anterior del nodo siguiente, por el del nodo anterior del nodo que se eliminó.

![Eliminar dato Lista Doble](/assets/images/list/listaD_9.jpg)
  
Reestructurando la Lista Doble:

![Lista Doble](/assets/images/list/listaD_10.jpg)

# Lista Doble en SEED {"subTitle":"Implementación de"}

## Descripción

La implementación de la estructura se encuentra en la clase ListaD, está se basa en el elemento fundamental denominado “NodoD” implementado en la clase NodoD, NodoD es un nodo doble que esta conformado por la información (elemento) almacenada y dos apuntadores un que direcciona al nodo que le antecede y otro que direcciona al siguiente nodo, este es requerido por la ListaS para almacenar los elementos de la lista.  
  
ListaD es un conjunto de Nodo dobles “NodoD” ligados entre si, originada por la creación que un NodoD llamado “cabeza” que es el punto de referencia para los diferentes procesos de la estructura, en el proceso de inserción se tuvo en cuenta modificar los apuntadores del nuevo nodo creado y del nodo que le antecede si se inserta al final de la lista ó del nodo “cabeza” en caso que se inserte al inicio de la lista, igualmente para el proceso de eliminación se deben modificar los apuntadores de los nodo asociados con el nodo a eliminar. Así mismo, la estructura cuenta con operaciones tale como: buscar y modificar un elemento, además de conocer el tamaño de la estructura su comportamiento es similar al de la Lista Simple solo difieren del elemento fundamental para el almacenamiento de sus objetos.  
  
Adicionalmente a esto, con la Lista Doble es posible generar un Iterador de Lista Doble (IteradorLD) que permite recorrer de una forma más sencilla la estructura.  
  
La implementación de la Clase ListaD se ilustra en el siguiente diagrama de clase:  

![Diagrama de Clase de Lista Doble](/assets/images/list/listaD_3.jpg)

**Requerimientos funcionales implementados:**  
  
- RF1 - Crear una Lista Doble.  
- RF2 - Insertar datos en la Lista Doble.  
- RF3 - Eliminar datos en la Lista Doble.  
- RF4 - Editar datos de la Lista Doble.  
- RF5 - Consultar datos en la Lista Doble.  
- RF6 - Conocer el tamaño de la Lista Doble.  
- RF7 - Imprimir los datos de la Lista Doble.  
  
  
**Implementación de un Simulador para Lista Doble:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador de Lista Doble](/assets/images/list/listaD_4.jpg)

# Lista Circular Enlazada {"subTitle":"Tipos de Listas"}

En las listas lineales simples o dobles siempre hay un primer nodo y un último nodo que tiene el campo de enlace a nulo. Esto, porque se delimita el comienzo y el término de la misma. Una lista circular, por su naturaleza cíclica, no tiene ni principio ni fin. No obstante, es útil y recomendable establecer un nodo de referencia a partir del cual se acceda a la lista y así poder conocer la posición inicial y acceder a sus operaciones insertar, borrar etc.  
  
Una lista circularmente enlazada tiene el mismo tipo de nodos que una lista simple enlazada. Esto es, cada nodo en una lista circularmente enlazada tiene un apuntador siguiente y una referencia a un elemento. Pero no hay una cabeza o cola en la lista circularmente enlazada. En vez de tener que el apuntador del \_ultimo nodo sea null, en una lista circularmente enlazada, este apunta de regreso al primer nodo. Por lo tanto, no hay primer nodo o último. Si se recorren los nodos de una lista circularmente enlazada desde cualquier nodo usando los apuntadores sig, se ciclará a través de los nodos.

![Lista circular](/assets/images/list/listaC_1.1.jpg)

Aún cuando una lista circularmente enlazada no tiene inicio o terminación, no obstante se necesita que algún nodo esté marcado como especial, el cual será llamado el cursor. El nodo cursor permite tener un lugar para iniciar si se requiere recorrer una lista circularmente inversa. Y si se recuerda esta posición inicial, entonces también se puede saber cuando se haya terminado con un recorrido en la lista circularmente enlazada, que es cuando se regresa al nodo que fue el nodo cursor cuando se inicio.  
**Ejemplo de Insertar**  
Se desea insertar en una estructura Lista Circular, los siguientes datos: 1, 12, 3, 9 y 8.

![Insertar Lista Circular](/assets/images/list/listaC_4.jpg)![Insertar Lista circular](/assets/images/list/listaC_5.jpg)

Quedando la Lista Cicular de la siguiente forma:

![Lista Circular](/assets/images/list/listaC_6.jpg)

  
**Ejemplo de eliminar:**  
Se tiene la lista circular.  

![Lista Circular](/assets/images/list/listaC_7.jpg)

Se desea eliminar el 29 de la Lista Simple, se modifica el puntero sig del nodo anterior, hacia el nodo siguiente del nodo que se eliminó.

![Ejemplo Eliminar LC](/assets/images/list/listaC_8.jpg)

Quedando la Lista Circular:

![Eliminar LC](/assets/images/list/listaC_9.jpg)

**Ejemplo de Eliminar:**  
Teniendo la lista Circular.  

![Lista Circular](/assets/images/list/listaC_10.jpg)

Se desea eliminar el 29 de la Lista Circular, se modifica el puntero sig del nodo anterior, hacia el nodo siguiente del nodo que se eliminó.

![Ejemplo Eliminar LC](/assets/images/list/listaC_11.jpg)

Quedando la Lista Circular:

![Lista Circular](/assets/images/list/listaC_12.jpg)

# Lista Circular en SEED {"subTitle":"Implementación de"}  

## Descripción

Una lista circular catalogada como una estructura lineal dinámica, es una lista simple cuya particularidad es que el último nodo de la lista en vez de apuntar a nada apunta a la primera posición de la lista, característica que hace circular el comportamiento de la estructura. Esta estructura fue implementada en la clase ListaC, consiste en un conjunto de Nodo simples ligados que son el elemento fundamental de la estructura definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
ListaC es un conjunto de Nodo entrelazados entre si, con la creación de un Nodo denominado “cabeza” se crea la estructura, la cabeza es el punto de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos que se puede realizar al inicio o fin de la lista teniendo en cuenta que al inserta al inicio se debe modificar la “cabeza” por el nuevo nodo, al insertar al final se deben modificar los apuntadores del penúltimo y el nuevo nodo para que este apunte a la “cabeza”, los elementos no están ordenados en la estructura. Al eliminar un objeto sólo se modifica el apuntador de su predecesor hacia el nodo siguiente del que se desea eliminar, la estructura también tiene implementación de métodos como buscar y editar un elemento, conocer los datos almacenados y conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la lista siendo este el tamaño de la estructura.  
  
Adicionalmente a esto, con la Lista Circular es posible generar un Iterador de Lista Circular (IteradorLC) que permite recorrer de una forma más sencilla la estructura.La implementación de la Clase ListaC se ilustra en el siguiente diagrama de clase:  
  
![Diagrama de clase de Lista Circular](/assets/images/list/listaC_2.jpg)

**Requerimientos funcionales implementados:**  
  
- RF1 - Crear una nueva Lista Circular.  
- RF2 - Insertar datos en la nueva Lista Circular.  
- RF3 - Eliminar datos en la Lista Circular.  
- RF4 - Editar datos de la Lista Circular.  
- RF5 - Consultar datos en la Lista Circular.  
- RF6 - Conocer el tamaño de la Lista Circular.  
- RF7 - Crear un Iterador para recorrer la Lista Circular.  
- RF8 - Conocer los datos de la Lista Circular.  
  
  
**Implementación de un Simulador para Lista Circular:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador Lista Circular](/assets/images/list/listaC_3.jpg)

# Lista Circular Doble {"subTitle":"Tipos de Listas"}

En una lista circular doblemente enlazada, cada nodo tiene dos enlaces, análogamente a la lista doblemente enlazada lineal, el cambio radica en que el enlace anterior del primer nodo apunta al último y el enlace siguiente del último nodo, apunta al primero.

![lista circular doble](/assets/images/list/listaCD_1.1.jpg)

Como en una lista doblemente enlazada, las inserciones y eliminaciones pueden ser hechas desde cualquier punto con acceso a algún nodo contiguo. Aunque estructuralmente una lista circular doblemente enlazada no tiene ni principio ni fin, un puntero de acceso externo (centinela) puede establecer el nodo apuntado que está en la cabeza o al nodo final, y así mantener el orden como en una lista doblemente enlazada.  
  
La búsqueda y los algoritmos de ordenación se simplifican si se usan los llamados Nodos Centinelas o cabecera, donde cada elemento apunta a otro elemento y nunca a nulo. El Nodo Centinela o Puntero Cabeza contiene, como otro, un puntero siguiente que apunta al que se considera como primer elemento de la lista También contiene un puntero previo que hace lo mismo con el último elemento.  
  
El Nodo Centinela es definido como otro nodo en una lista doblemente enlazada. Si los punteros anterior y siguiente apuntan al Nodo Centinela la lista se considera vacía. En otro caso, si a la lista se le añaden elementos ambos puntero apuntarán a otros nodos. Estos Nodos Centinelas simplifican muchos las operaciones pero hay que asegurarse de que los punteros anterior y siguiente existen en cada momento.  
  
**Ejemplo de insertar**  
Se desea insertar en una Lista Circular Doble los datos: 23, 10,16, 1 y 29.  

![Ejemplo Insertar LCD](/assets/images/list/listaCD_5.jpg)

![Ejmeplo de Insertar LCD](/assets/images/list/listaCD_6.jpg)

Quedando los datos almacenados en la Lista Circular Doble de la siquiente manera:

![Lista Circular Doble](/assets/images/list/listaCD_7.jpg)

**Ejemplo de Eliminar**  
Teniendo la Lista Circular Doble:

![Lista Circular Doble](/assets/images/list/listaCD_8.jpg)

Se desea eliminar el 29 de la Lista Circular Doble, se debe modificar el puntero sig del nodo anterior, por el del nodo siguiente del nodo que se eliminó y el puntero anterior del nodo siguiente por el del nodo anterior del nodo que se eliminó.

![Ejemplo Lista Circular Doble](/assets/images/list/listaCD_9.jpg)

Quedando la Lista Circular Doble:

![Lista Circular Doble](/assets/images/list/listaCD_10.jpg)

# Lista Circular Doble en SEED {"subTitle":"Implementación de"}  
  
## Descripción

Estructura lineal dinámica implementada en la clase ListaCD, cuya particularidad es que el último nodo de la lista en vez de apuntar a nada apunta a la primera posición de la lista y está a su vez posee un a puntador hacia el ultimo nodo de la lista, característica que hace circular el comportamiento de la estructura. La implementación de la estructura se basa en el elemento fundamental denominado “NodoD” implementado en la clase NodoD, NodoD es un nodo doble que esta conformado por la información (elemento) almacenada y dos apuntadores uno que direcciona al nodo que le antecede y otro que direcciona al siguiente nodo.  
  
La implementación de ListaCD consiste en un conjunto de Nodo dobles “NodoD” ligados entre si, estructura que se crea con un NodoD llamado “cabeza” que es el punto de referencia para los diferentes procesos de la estructura, en el proceso de inserción se tuvo en cuenta modificar los apuntadores del nuevo creado y del nodo que le antecede si se inserta al final de la lista ó del nodo “cabeza” en caso que se inserte al inicio de la lista, igualmente para el proceso de eliminación se deben modificar los apuntadores de los nodos asociados con el nodo que se desea eliminar. Así mismo, la estructura cuenta con operaciones tale como: buscar y modificar un elemento, además de conocer el tamaño.  
  
Adicionalmente a esto, con la Lista Circular Doble es posible generar un Iterador de Lista Circular Doble (IteradorLCD) que permite recorrer de una forma más sencilla la estructura.  
La implementación de la Clase ListaCD se ilustra en el siguiente diagrama de clase:  

![Diagrama de clase de Lista Circular Doble](/assets/images/list/listaCD_2.jpg)

**Requerimientos funcionales implementados:**  
  
- RF1 - Crear una Lista Circular Doble.  
- RF2 - Insertar datos en la Lista Circular Doble.  
- RF3 - Eliminar datos en la Lista Circular Doble.  
- RF4 - Editar datos de la Lista Circular Doble.  
- RF5 - Consultar datos en la Lista Circular Doble.  
- RF6 - Conocer el tamaño de la Lista Circular Doble.  
- RF7 - Imprimir los datos de la Lista Circular Doble.  
  
**Implementación de un Simulador para Lista Circular Doble:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  

![Simulador de Lista Circular Doble](/assets/images/list/listaCD_3.jpg)