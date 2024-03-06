# Árbol Binario de Búsqueda {"subTitle":"Árboles Binarios"}

## Descripción

Un árbol binario de búsqueda (ABB) es un árbol binario con la propiedad de que todos los elementos almacenados en el subárbol izquierdo de cualquier nodo x son menores que el elemento almacenado en x ,y todos los elementos almacenados en el subárbol derecho de x son mayores que el elemento almacenado en x. - Una interesante propiedad es que si se listan los nodos del ABB en inorden nos da la lista de nodos ordenada. Esta propiedad define un método de ordenación similar al Quicksort, con el nodo raíz jugando un papel similar al del elemento de partición del Quicksort aunque con los ABB hay un gasto extra de memoria mayor debido a los punteros. La propiedad de ABB hace que sea muy simple diseñar un procedimiento para realizar la búsqueda.

![partes del arbol binario de busqueda](/assets/images/bynary-search-tree/abb_2.jpg) ![ejemplo de Arbol binario de búsqueda](/assets/images/bynary-search-tree/abb_1.jpg)

Para cada nodo de un árbol binario de búsqueda debe cumplirse la propiedad:  
Las claves de los nodos del subárbol izquierdo deben ser menores que la clave de la raíz.  
Las claves de los nodos del subárbol derecho deben ser mayores que la clave de la raíz

![](/assets/images/bynary-search-tree/abb_5.jpg)

Esta definición no acepta elementos con claves duplicadas.  
Se indican en el diagrama de la figura anterior, el descendiente del subárbol izquierdo con mayor clave y el descendiente del subárbol derecho con menor valor de clave; los cuales son el antecesor y sucesor de la raíz.  
  
El siguiente árbol no es binario de búsqueda, ya que el nodo con clave 2, ubicado en el subárbol derecho de la raíz, tiene clave menor que ésta.  

![](/assets/images/bynary-search-tree/abb_6.jpg)

Los siguientes son árboles de búsqueda ya que cumplen la propiedad anterior.  

![](/assets/images/bynary-search-tree/abb_7.jpg)

La generación de estos árboles depende del orden en que se ingresen las claves en los nodos, a partir de un árbol vacío. El de la izquierda se generó insertando las claves en orden de llegada: 2, 1, 4, 3, 5 (o bien: 2, 4, 1, 5, 3). El de más a la derecha, se generó con la llegada en el orden: 5, 4, 3, 2, 1.  
  
Los dos árboles de más a la izquierda, en la Figura 6.5, se denominan balanceados, ya que las diferencias en altura de los subárboles izquierdo y derecho, para todos los nodos, difieren a lo más en uno. Los tres a la derecha están desbalanceados. El último tiene la estructura de una lista, y es un árbol degenerado.  
  
## Otras definiciones

Un árbol binario de búsqueda es una estructura de datos de tipo árbol binario en el que para todos sus nodos, el hijo izquierdo, si existe, contiene un valor menor que el nodo padre y el hijo derecho, si existe, contiene un valor mayor que el del nodo padre.  
  
Obviamente, para establecer un orden entre los elementos del árbol, el tipo base debe ser escalar o debe tratarse de un tipo compuesto con una componente que actúe como clave de ordenación.  
  
La siguiente figura es un ejemplo de árbol binario de búsqueda conteniendo enteros:

![](/assets/images/bynary-search-tree/abb_8.jpg)

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
