## Busqueda

Para la búsqueda de un nodo x realiza un splay sobre el árbol:  

- Si la localización es exitosa, la salida será un árbol binario de búsqueda con x como raíz.  
- Si la localización fracasa, la salida será un árbol binario de búsqueda que tendrá como raíz al nodo en el que la búsqueda fracasó.  
  
**Ejemplo: Buscar 7**  

![](/assets/images/splay-tree/splay_11.jpg)

  
**Ejemplo de una búsqueda sin éxito.**  
**Buscar 2 ->** como el 2 no se encuentra en el árbol entonces se guarda el ultimo nodo en el cual la búsqueda fracaso, en este caso es 3, y luego se hace splay a ese nodo quedando como raíz.

![](/assets/images/splay-tree/splay_12.jpg)