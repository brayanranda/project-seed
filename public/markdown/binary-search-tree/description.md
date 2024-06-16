# Árbol Binario de Búsqueda {"subTitle":"Árboles Binarios"}

## Descripción

Un árbol binario de búsqueda (ABB) es un árbol binario con la propiedad de que todos los elementos almacenados en el subárbol izquierdo de cualquier nodo x son menores que el elemento almacenado en x ,y todos los elementos almacenados en el subárbol derecho de x son mayores que el elemento almacenado en x. - Una interesante propiedad es que si se listan los nodos del ABB en inorden nos da la lista de nodos ordenada. Esta propiedad define un método de ordenación similar al Quicksort, con el nodo raíz jugando un papel similar al del elemento de partición del Quicksort aunque con los ABB hay un gasto extra de memoria mayor debido a los punteros. La propiedad de ABB hace que sea muy simple diseñar un procedimiento para realizar la búsqueda.

![partes del arbol binario de busqueda](/assets/images/bynary-search-tree/abb_2.jpg) ![ejemplo de Arbol binario de búsqueda](/assets/images/bynary-search-tree/abb_1.jpg)

Para cada nodo de un árbol binario de búsqueda debe cumplirse la propiedad:  

- Las claves de los nodos del subárbol izquierdo deben ser menores que la clave de la raíz.  
- Las claves de los nodos del subárbol derecho deben ser mayores que la clave de la raíz

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