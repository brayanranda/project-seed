# Operaciones {"subTitle":"Árbol RojiNegro"}
  
**Rotación**  
Para conservar las propiedades que debe cumplir todo árbol rojo-negro, en ciertos casos de la inserción y la eliminación será necesario reestructurar el árbol, si bien no debe perderse la ordenación relativa de los nodos. Para ello, se llevan a cabo una o varias rotaciones, que no son más que reestructuraciones en las relaciones padre-hijo-tío-nieto.  
  
Las rotaciones que se consideran a continuación son simples; sin embargo, también se dan las rotaciones dobles.  
  
**Rotación derecha y Rotación izquierda**  

![rotaciones](/assets/images/red-black-tree/arn_4.jpg)

**Búsqueda:** se hace de igual manera que en un árbol binario de búsqueda.  
  
**Inserción:** la inserción se hace como en un árbol binario de búsqueda el nuevo nodo se le asigna el color rojo probablemente se incumpla alguna de las propiedades por lo cual se deben hacer las respectivas rotaciones según ciertos casos específicos, si el árbol tiene n nodos el costo de la inserción será del ?(log n).  
  
**Casos de inserción:**  
- **caso 1:** el nuevo nodo es raíz del árbol se pinta de negro.  
- **caso 2:** el nuevo nodo es hijo de un padre negro.  
- **caso 3:** El padre y el tío del nuevo nodo son rojos. Se pintan de negro, y al abuelo se pinta de rojo. Luego se repite el ciclo con el abuelo, si la raíz al final queda roja, se corrige estableciendo que la raíz siempre debe ser negra.  
- **caso 4:** El nuevo nodo y su padre son rojos, y el abuelo es negro. Lo que se hace es pintar de negro al padre y pintar de rojo al abuelo y luego rotar a la derecha del abuelo.  
- **caso 5:** El tío del nodo nuevo es negro y el nodo nuevo es el hijo derecho de su padre. En este caso se realiza una rotación a la izquierda para transformar este caso en el caso anterior (Caso 4). una vez se roten los nodos, el nodo nuevo va a ser el antiguo padre.  
  
**Eliminación:**  
Al hacer una eliminación también es necesario hacer rotaciones y cambios de color según los casos que se especificaran después. El costo del algoritmo de eliminación es de ?(log n) e incluyendo el costo de las rotaciones que en el peor de los casos, será de tres rotaciones el costo total será de ?(log n).  
  
**Casos de eliminación:**  
- **caso 1:** el nodo es una hoja, se elimina fácilmente.  
- **caso 2:** El nodo hermano y sus dos hijos son negros: el negro adicional se mueve arriba del árbol.  
- **caso 3:** El nodo tiene dos hijos, nos encontramos con el sucesor que lo sustituirá. El Sucesor es el nodo mas a la izquierda en el subárbol derecho - lo cambiamos y procedemos al borrado esto tiene como máximo un hijo y lo podemos borrar.  
- **caso 4:** Nodo hermano y su hijo más cercano al nodo es de color negro, el otro es de color rojo: Al cambiar el color de algunos y la rotación que podemos sacar el extra negro.  
- **caso 5:** El nodo tiene un hijo hoja, cambia el nodo por el hijo y se borra  