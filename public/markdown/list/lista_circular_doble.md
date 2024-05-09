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