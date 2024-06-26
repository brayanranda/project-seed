# Árbol RojiNegro {"subTitle":"Árboles Binarios"}

## Definición

Un árbol rojo-negro es un árbol binario de búsqueda en el que cada nodo almacena un bit adicional de información llamado color, el cual puede ser rojo o negro. Sobre este atributo de color se aplican restricciones que resultan en un árbol en el que ningún camino de la raíz a una hoja es más de dos veces más largo que cualquier otro, lo cual significa que el árbol es balanceado.  
  
Cada nodo de un árbol rojo negro contiene la siguiente información: color, clave, hijo izquierdo, hijo derecho y padre. Si un hijo o el padre de un nodo no existe, el apuntador correspondiente contiene el valor NULO, el cual consideraremos como un nodo cuyo color es negro. En lo sucesivo nos referiremos a los nodos distintos a las hojas (NULO) como nodos internos del árbol y a las hojas y al padre de la raíz como nodos externos.  
  
Los árboles Rojo – Negros es un tipo de árbol que estan balanceados de tal manera que el tiempo de realizar operaciones sea O(log n) en el peor de los casos. La complejidad y el comportamiento de un árbol Rojo - Negro es mucho mejor que un AVL o un Árbol binario de búsqueda, según la gráfica se puede observar ese comportamiento.Es un árbol BB balanceado. Cada nodo almacena un dato más llamado "color", puede ser rojo o negro.

![Estructura nodo](/assets/images/red-black-tree/arn_1.jpg)
  

![Estructura nodo](/assets/images/red-black-tree/arn_2.png)

## Propiedades del Árbol RojiNegro

Todo árbol rojo-negro satisface las siguientes propiedades:  

1.  Todo nodo es rojo o negro.
2.  La raíz es negra.  
    
3.  Toda hoja (NULO) es negra.  
    
4.  Un nodo es rojo cuando sus dos hijos son negros.  
    
5.  En un camino, no puede haber más de dos nodos rojos consecutivos, pero sí pueden haber n nodos negros consecutivos. Esto significa que un nodo rojo no puede tener ningún hijo rojo.  
    
6.  Para cada nodo, todas las rutas de un nodo a las hojas (NULOs) contienen el mismo número de nodos negros. El número de nodos negros en esta ruta se conoce como ALTURA-NEGRA del nodo.

**Terminología:** 

Altura negra de un nodo x, an(x): es el número de nodos negros desde x (sin incluir x) hasta cualquier hoja descendente de x.  
Altura negra de un árbol: la altura negra de su raíz.  
  
Una ilustracion del concepto de altura sería el siguiente:  

![altura negra](/assets/images/red-black-tree/arn_3.jpg)

  
Dado que las operaciones básicas como insertar, borrar y encontrar valores tienen un peor tiempo de búsqueda proporcional a la altura del árbol, esta cota superior de la altura permite a los árboles rojo-negro ser eficientes en el peor Caso, de forma contraria a lo que sucede en los árboles binarios de búsqueda. Para ver que estas propiedades garantizan lo dicho, basta ver que ningún camino puede tener 2 nodos rojos seguidos debido a la propiedad 4. El camino más corto posible tienetodos sus nodos negros, y el más largo alterna entre nodos rojos y negros. Como todos los caminos máximos tienen el mismo número de nodos negros, por la propiedad 5, esto muestra que no hay ningún camino que pueda tener el doble de longitud que otro camino.  
  
En muchas presentaciones de estructuras arbóreas de datos, es posible para un nodo tener solo un hijo y las hojas contienen información. Es posible presentar los árboles rojo-negro en este paradigma, pero cambian algunas de las propiedades y se complican los algoritmos. Por esta razón, este artículo utilizan “hojas nulas”, que no contienen información y simplemente sirven para indicar dónde el árbol acaba, como se mostró antes. Habitualmente estos nodos son omitidos en las representaciones, lo cual da como resultado un árbol que parece contradecir los principios expuestos antes, pero que realmente no los contradice. Como consecuencia de esto todos los nodos internos tienen dos hijos, aunque uno o ambos nodos podrían ser una hoja nula.  
  
Otra explicación que se da del árbol rojo-negro es la de tratarlo como un árbol binario de búsqueda cuyas aristas, en lugar de nodos, son coloreadas de color rojo o negro, pero esto no produce ninguna diferencia. El color de cada nodo en la terminología de este artículo corresponde al color de la arista que une el nodo a su padre, excepto la raíz, que es siempre negra (por la propiedad 2) donde la correspondiente arista no existe.  
  
**Ventajas**  

*   Todas las operaciones son O(log n).
*   Se mantienen mas balanceados que otras estructuras.
*   Permite organizar un listado de números de manera sencilla.

  
**Desventajas:**  

*   Su costo espacial es mayor que el de otros arboles por el uso de nodos centinelas.

  
  
**Rotación**  
Para conservar las propiedades que debe cumplir todo árbol rojo-negro, en ciertos casos de la inserción y la eliminación será necesario reestructurar el árbol, si bien no debe perderse la ordenación relativa de los nodos. Para ello, se llevan a cabo una o varias rotaciones, que no son más que reestructuraciones en las relaciones padre-hijo-tío-nieto.  
  
Las rotaciones que se consideran a continuación son simples; sin embargo, también se dan las rotaciones dobles.  
  
**Rotación derecha y Rotación izquierda**  

![rotaciones](/assets/images/red-black-tree/arn_4.jpg)

**Búsqueda:** se hace de igual manera que en un árbol binario de búsqueda.  
  
**Inserción:** la inserción se hace como en un árbol binario de búsqueda el nuevo nodo se le asigna el color rojo probablemente se incumpla alguna de las propiedades por lo cual se deben hacer las respectivas rotaciones según ciertos casos específicos, si el árbol tiene n nodos el costo de la inserción será del ?(log n).  
  
**Casos de inserción:**  
- **Caso 1:** el nuevo nodo es raíz del árbol se pinta de negro.  
- **Caso 2:** el nuevo nodo es hijo de un padre negro.  
- **Caso 3:** El padre y el tío del nuevo nodo son rojos. Se pintan de negro, y al abuelo se pinta de rojo. Luego se repite el ciclo con el abuelo, si la raíz al final queda roja, se corrige estableciendo que la raíz siempre debe ser negra.  
- **Caso 4:** El nuevo nodo y su padre son rojos, y el abuelo es negro. Lo que se hace es pintar de negro al padre y pintar de rojo al abuelo y luego rotar a la derecha del abuelo.  
- **Caso 5:** El tío del nodo nuevo es negro y el nodo nuevo es el hijo derecho de su padre. En este caso se realiza una rotación a la izquierda para transformar este caso en el Caso anterior (Caso 4). una vez se roten los nodos, el nodo nuevo va a ser el antiguo padre.  
  
**Eliminación:**  

Al hacer una eliminación también es necesario hacer rotaciones y cambios de color según los casos que se especificaran después. El costo del algoritmo de eliminación es de ?(log n) e incluyendo el costo de las rotaciones que en el peor de los casos, será de tres rotaciones el costo total será de ?(log n).  
  
**Casos de eliminación:**  
- **Caso 1:** el nodo es una hoja, se elimina fácilmente.  
- **Caso 2:** El nodo hermano y sus dos hijos son negros: el negro adicional se mueve arriba del árbol.  
- **Caso 3:** El nodo tiene dos hijos, nos encontramos con el sucesor que lo sustituirá. El Sucesor es el nodo mas a la izquierda en el subárbol derecho - lo cambiamos y procedemos al borrado esto tiene como máximo un hijo y lo podemos borrar.  
- **Caso 4:** Nodo hermano y su hijo más cercano al nodo es de color negro, el otro es de color rojo: Al cambiar el color de algunos y la rotación que podemos sacar el extra negro.  
- **Caso 5:** El nodo tiene un hijo hoja, cambia el nodo por el hijo y se borra  