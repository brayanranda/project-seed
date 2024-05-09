## Longitud de Camino Interno y Externo

Se define la **longitud de camino X** como el número de arcos que deben ser recorridos para llegar desde la raíz al nodo X. Por definición la raíz tiene longitud de camino 1, sus descendientes directos longitud de camino 2 y así sucesivamente.  
  
La **longitud de camino interno** es la suma de las longitudes de camino de todos los nodos del árbol. Es importante por que permite conocer los caminos que tiene el árbol. Puede calcularse por medio de la siguiente fórmula:  

![](/assets/images/binary-tree/ab_4.jpg)

donde "i" representa el **nivel del árbol**, "h" su **altura** y "ni" el **número de nodos** en el nivel "i".  
  
**Longitud de Camino Externo**  
Primero definiremos los conceptos de:  
- **Árbol extendido** es aquel en el que el número de hijos de cada nodo es igual al grado del árbol. Si alguno de los nodos del árbol no cumple con esta condición entonces debe incorporársele al mismo nodos especiales; tantos como sea necesario para satisfacer la condición.  
- Los **nodos especiales** tienen como objetivo reemplazar las ramas vacías o nulas, no pueden tener descendientes y normalmente se representan con la forma de un cuadrado.  
Se puede definir ahora la **longitud de camino externo** como la suma de las longitudes de camino de todos los nodos especiales del árbol. Se calcula por medio de la siguiente fórmula:

![](/assets/images/binary-tree/ab_5.jpg)

en donde "i" representa el **nivel del árbol**, "h" su **altura** y "nei" el **número de nodos especiales** en el nivel "i".  

## Árbol Binario Completo

Se define un árbol binario completo como un árbol en el que todos sus nodos, excepto los de último nivel, tienen dos hijos; el subárbol izquierdo y el subárbol derecho.

![](/assets/images/binary-tree/ab_6.jpg)

Cabe aclarar que existen algunos autores que definen un árbol binario completo de otra forma; y otros que utilizan el término lleno para referirse a completo.  