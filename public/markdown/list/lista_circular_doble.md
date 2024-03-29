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
  
- **RF1** - Crear una Lista Circular Doble.  
- **RF2** - Insertar datos en la Lista Circular Doble.  
- **RF3** - Eliminar datos en la Lista Circular Doble.  
- **RF4** - Editar datos de la Lista Circular Doble.  
- **RF5** - Consultar datos en la Lista Circular Doble.  
- **RF6** - Conocer el tamaño de la Lista Circular Doble.  
- **RF7** - Imprimir los datos de la Lista Circular Doble.  
  
**Implementación de un Simulador para Lista Circular Doble:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  

![Simulador de Lista Circular Doble](/assets/images/list/listaCD_3.jpg)
