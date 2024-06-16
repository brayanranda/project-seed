**Inserción:** la inserción se hace como en un árbol binario de búsqueda el nuevo nodo se le asigna el color rojo probablemente se incumpla alguna de las propiedades por lo cual se deben hacer las respectivas rotaciones según ciertos casos específicos, si el árbol tiene n nodos el costo de la inserción será del ?(log n).  
  
**Casos de inserción:**  
- **caso 1:** el nuevo nodo es raíz del árbol se pinta de negro.  
- **caso 2:** el nuevo nodo es hijo de un padre negro.  
- **caso 3:** El padre y el tío del nuevo nodo son rojos. Se pintan de negro, y al abuelo se pinta de rojo. Luego se repite el ciclo con el abuelo, si la raíz al final queda roja, se corrige estableciendo que la raíz siempre debe ser negra.  
- **caso 4:** El nuevo nodo y su padre son rojos, y el abuelo es negro. Lo que se hace es pintar de negro al padre y pintar de rojo al abuelo y luego rotar a la derecha del abuelo.  
- **caso 5:** El tío del nodo nuevo es negro y el nodo nuevo es el hijo derecho de su padre. En este caso se realiza una rotación a la izquierda para transformar este caso en el caso anterior (Caso 4). una vez se roten los nodos, el nodo nuevo va a ser el antiguo padre.