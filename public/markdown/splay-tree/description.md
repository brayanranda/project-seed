# Árbol Splay {"subTitle":"Árboles Binarios"}

## Definición

Los arboles biselados (inglés: splay tree) son árboles binarios de búsqueda que ofrecen en tiempo O(log n) en las operaciones de búsqueda, inserción y eliminación de un nodo.
 
En un árbol biselado cada vertice contiene a una clave y las claves en el ramo izquierdo son menores que la clave del vértice mismo, mientras a la derecha están las claves mayores.  
Las claves son unicas.  

## Operación Splay

La idea básica es que después de acceder a un nodo éste se lleva a la raíz mediante rotaciones.  
En cada operación splay se hace ascender al nodo en uno o dos niveles, dependiendo de su orientación relativa respecto de su nodo abuelo.  
  
Un splay mueve el elemento recuperado a la raíz del árbol.  
Así, un splay hace que:  
- Todos los nodos accedidos durante una consulta luego sean mucho menos costosos de acceder.  
- Todos los demás nodos no accedidos, su consulta se empeora sólo un poco.  
  
Ejemplo de Splay (1,S):  

![](/assets/images/splay-tree/splay_1.jpg)

![](/assets/images/splay-tree/splay_2.jpg)

  
Ejemplo de Splay (2,S):  

![](/assets/images/splay-tree/splay_3.jpg)

  
Para hacer **splay** en un nodo x, repetimos los siguientes pasos hasta que x sea la raíz del árbol:  
  
**Caso Zig:** si x es un hijo izquierdo de la raíz del árbol, rotar x a derecha y terminar.  

![](/assets/images/splay-tree/splay_4.jpg)

  
**Caso Zag:** si x es un hijo derecho de la raíz del árbol, rotar x a izquierda y terminar.  

![](/assets/images/splay-tree/splay_5.jpg)

  
**Caso Zig-Zig:** si x es un hijo izquierdo y su padre es un hijo izquierdo, rotar el padre de x y luego en x ambos a derecha.  

![](/assets/images/splay-tree/splay_6.jpg)

**Caso Zag-Zag:** si x es un hijo derecho y su padre es un hijo derecho rotar el padre de x y luego en x ambos a izquierda.  

![](/assets/images/splay-tree/splay_7.jpg)

  
**Caso Zig-Zag:** si x es un hijo izquierdo y su padre es un hijo derecho, rotar en x a derecha y luego en x de nuevo, pero a izquierda.  

![](/assets/images/splay-tree/splay_8.jpg)

  
**Caso Zag-Zig:** si x es un hijo derecho y su padre es un hijo izquierdo, rotar en x a izquierda y luego en x de nuevo pero a derecha.  

![](/assets/images/splay-tree/splay_9.jpg)

## Ejemplo del Método Splay

Acceder al nodo a; es decir splay(a, root).  

![](/assets/images/splay-tree/splay_10.jpg)

## Busqueda

Para la búsqueda de un nodo x realiza un splay sobre el árbol:  

- Si la localización es exitosa, la salida será un árbol binario de búsqueda con x como raíz.  
- Si la localización fracasa, la salida será un árbol binario de búsqueda que tendrá como raíz al nodo en el que la búsqueda fracasó.  
  
**Ejemplo: Buscar 7**  

![](/assets/images/splay-tree/splay_11.jpg)

  
**Ejemplo de una búsqueda sin éxito.**  
**Buscar 2 ->** como el 2 no se encuentra en el árbol entonces se guarda el ultimo nodo en el cual la búsqueda fracaso, en este caso es 3, y luego se hace splay a ese nodo quedando como raíz.

![](/assets/images/splay-tree/splay_12.jpg)

## Inserción de un dato

Para insertar un nodo x en un árbol splay; primero se inserta como si fuera un árbol binario de búsqueda y luego se hace splay en el nodo insertado.  
  
**Ejemplo: Insertar 5**

![](/assets/images/splay-tree/splay_13.jpg)

## Eliminar un Dato

- Buscar x.  
- Si la raíz no es x, no hay nada que hacer.  
- Eliminar el nodo que contiene a x. Quedan dos subárboles I y D.  
- Buscar el máximo de I.  
- Colocarle D como hijo derecho del máximo.  
  
**Ejemplo: Eliminar 6**

![](/assets/images/splay-tree/splay_14.jpg)

  
**Eliminar 4:** como 4 no se encuentra en el árbol entonces se aplica splay al nodo 3 ya que fue el último nodo donde fracaso la búsqueda y luego no se hace nada.

![](/assets/images/splay-tree/splay_15.jpg)