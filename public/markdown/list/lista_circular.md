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