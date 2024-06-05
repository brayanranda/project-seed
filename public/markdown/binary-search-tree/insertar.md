**Inserción de un Elemento:**  
La operación de inserción de un nuevo nodo en un árbol binario de búsqueda consta de tres fases básicas: 1. Creación del nuevo nodo 2. Búsqueda de su posición correspondiente en el árbol. Se trata de encontrar la posición que le corresponde para que el árbol resultante siga siendo de búsqueda. 3. Inserción en la posición encontrado. Se modifican de modo adecuado los enlaces de la estructura. La creación de un nuevo nodo supone simplemente reservar espacio para el registro asociado y rellenar sus tres campos. Dado que no nos hemos impuesto la restricción de que el árbol resultante sea equilibrado, consideraremos que la posición adecuada para insertar el nuevo nodo es la hoja en la cual se mantiene el orden del árbol. Insertar el nodo en una hoja supone una operación mucho menos complicada que tener que insertarlo como un nodo interior y modificar la posición de uno o varios subárboles completos.  
  
Veamos con un ejemplo la evolución de un árbol conforme vamos insertando nodos siguiendo el criterio anterior respecto a la posición adecuada.  

![](/assets/images/bynary-search-tree/abb_9.jpg)

![](/assets/images/bynary-search-tree/abb_10.jpg)

![](/assets/images/bynary-search-tree/abb_11.jpg)