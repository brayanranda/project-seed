# Operaciones {"subTitle":"Árboles Binarios de Búsqueda"}

A continuación definiremos el Tipo Abstracto de Datos asociado a los árboles binarios de búsqueda. Para no alargar la descripción del mismo supondremos incluidas las operaciones del TAD ArbolB.  
  
**Búsqueda de un Elemento:**  
La operación de búsqueda en un árbol binario de búsqueda es bastante sencilla de entender. Supongamos que buscamos un elemento x en el árbol. Lo primero que haremos será comprobar si se encuentra en el nodo raíz. Si no es así, si el elemento buscado es menor que el contenido en el nodo raíz sabremos que, de estar en el árbol, se encuentra en el subárbol izquierdo. Si el elemento buscado es mayor que el contenido en el nodo raíz sabremos que, de estar en el árbol, se encuentra en el subárbol derecho. Para continuar la búsqueda en el subárbol adecuado aplicaremos recursivamente el mismo razonamiento. Por lo tanto, el esquema del algoritmo BuscarNodo será el siguiente: 1. Si el valor del nodo actual es igual al valor buscado, lo hemos encontrado. 2. Si el valor buscado es menor que el del nodo actual, deberemos inspeccionar el subárbol izquierdo. 3. Si el valor buscado es mayor que el del nodo actual, deberemos inspeccionar el subárbol derecho.  
  
**Inserción de un Elemento:**  
La operación de inserción de un nuevo nodo en un árbol binario de búsqueda consta de tres fases básicas: 1. Creación del nuevo nodo 2. Búsqueda de su posición correspondiente en el árbol. Se trata de encontrar la posición que le corresponde para que el árbol resultante siga siendo de búsqueda. 3. Inserción en la posición encontrado. Se modifican de modo adecuado los enlaces de la estructura. La creación de un nuevo nodo supone simplemente reservar espacio para el registro asociado y rellenar sus tres campos. Dado que no nos hemos impuesto la restricción de que el árbol resultante sea equilibrado, consideraremos que la posición adecuada para insertar el nuevo nodo es la hoja en la cual se mantiene el orden del árbol. Insertar el nodo en una hoja supone una operación mucho menos complicada que tener que insertarlo como un nodo interior y modificar la posición de uno o varios subárboles completos.  
  
Veamos con un ejemplo la evolución de un árbol conforme vamos insertando nodos siguiendo el criterio anterior respecto a la posición adecuada.  

![](/assets/images/bynary-search-tree/abb_9.jpg)

![](/assets/images/bynary-search-tree/abb_10.jpg)

![](/assets/images/bynary-search-tree/abb_11.jpg)

  
**Eliminación de un Elemento:**  
La eliminación de un nodo de un árbol binario de búsqueda es más complicada que la inserción, puesto que puede suponer la recolocación de varios de sus nodos. En líneas generales un posible esquema para abordar esta operación es el siguiente: 1. Buscar el nodo que se desea borrar manteniendo un puntero a su padre. 2. Si se encuentra el nodo hay que contemplar tres casos posibles: a. Si el nodo a borrar no tiene hijos, simplemente se libera el espacio que ocupa b. Si el nodo a borrar tiene un solo hijo, se añade como hijo de su padre, sustituyendo la posición ocupada por el nodo borrado. c. Si el nodo a borrar tiene los dos hijos se siguen los siguientes pasos: i. Se busca el máximo de la rama izquierda o el mínimo de la rama derecha. ii. Se sustituye el nodo a borrar por el nodo encontrado.  
  
Veamos gráficamente varios ejemplos de eliminación de un nodo:  

![](/assets/images/bynary-search-tree/abb_12.jpg)
