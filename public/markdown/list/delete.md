# Eliminar un elemento de una lista {"subTitle":"Operación","color":"text-black"}
La operación de eliminar un dato de una lista supone enlazar el nodo anterior con el nodo siguiente al que se desea eliminar y liberar la memoria que ocupa. El algoritmo sigue estos pasos:  

1.  Búsqueda del nodo que contiene el dato. Se ha de obtener la dirección del nodo a eliminar y la dirección del anterior.
2.  El enlace del nodo anterior que apunte al nodo siguiente del que se elimina.
3.  Si el nodo a eliminar es el cabeza de la lista (primero), se modifica primero para que tenga la dirección del siguiente nodo.
4.  Por último, la memoria ocupada por el nodo se libera. Es el propio sistema el que libera el nodo, al dejar de estar referenciado.

De ser Lista Doble y/o Lista Circular Doble  
Quitar un nodo de una lista supone realizar el enlace de dos nodos, el nodo anterior con el nodo siguiente al que se desea eliminar. La referencia adelante del nodo anterior debe apuntar al nodo siguiente, y la referencia atrás del nodo siguiente debe apuntar al nodo anterior.  
El algoritmo es similar al del borrado para una lista simple. Ahora, la dirección del nodo anterior se encuentra en la referencia atrás del nodo a borrar. Los pasos a seguir son:  

1.  Búsqueda del nodo que contiene el dato.
2.  La referencia adelante del nodo anterior tiene que apuntar a la referencia adelante del nodo a eliminar (si no es el nodo cabecera).
3.  La referencia atrás del nodo siguiente a borrar tiene que apuntar a la referencia atrás del nodo a eliminar (si no es el último nodo).
4.  Si el nodo que se elimina es el primero, cabeza, se modifica cabeza para que tenga la dirección del nodo siguiente.
5.  La memoria ocupada por el nodo es liberada automáticamente.
