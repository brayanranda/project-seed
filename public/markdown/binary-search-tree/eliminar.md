**Eliminación de un Elemento:**  
La eliminación de un nodo de un árbol binario de búsqueda es más complicada que la inserción, puesto que puede suponer la recolocación de varios de sus nodos. En líneas generales un posible esquema para abordar esta operación es el siguiente: 1. Buscar el nodo que se desea borrar manteniendo un puntero a su padre. 2. Si se encuentra el nodo hay que contemplar tres casos posibles: a. Si el nodo a borrar no tiene hijos, simplemente se libera el espacio que ocupa b. Si el nodo a borrar tiene un solo hijo, se añade como hijo de su padre, sustituyendo la posición ocupada por el nodo borrado. c. Si el nodo a borrar tiene los dos hijos se siguen los siguientes pasos: i. Se busca el máximo de la rama izquierda o el mínimo de la rama derecha. ii. Se sustituye el nodo a borrar por el nodo encontrado.  
  
Veamos gráficamente varios ejemplos de eliminación de un nodo:  

![](/assets/images/bynary-search-tree/abb_12.jpg)