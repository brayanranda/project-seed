# Operaciones {"subTitle":"Árbol Splay"}

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