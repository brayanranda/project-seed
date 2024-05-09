# Operaciones {"subTitle":"Árboles B"}

**Búsqueda**  

Localizar una clave en un B-árbol es una operación simple pues consiste en situarse en el nodo raíz del árbol, si la clave se encuentra ahí hemos terminado y si no es así seleccionamos de entre los hijos el que se encuentra entre dos valores de clave que son menor y mayor que la buscada respectivamente y repetimos el proceso hasta que la encontremos. En caso de que se llegue a una hoja y no podamos proseguir la búsqueda la clave no se encuentra en el árbol. En definitiva, los pasos a seguir son los siguientes:  

1.  Seleccionar como nodo actual la raíz del árbol.
2.  Comprobar si la clave se encuentra en el nodo actual:
    1.  Si la clave está, fin.
    2.  Si la clave no está:  
        *   Si estamos en una hoja, no se encuentra la clave. Fin. ?
        *   Si no estamos en una hoja, hacer nodo actual igual al hijo que corresponde según el valor de la clave a buscar y los valores de las claves del nodo actual (i buscamos la clave K en un nodo con n claves: el hijo izquierdo si K < K1, el hijo derecho si K > Kn y el hijo i-ésimo si Ki < K < Ki+1) y volver al segundo paso.  
            

**Insertar**  

1.  Realizando una búsqueda en el árbol, se halla el nodo hoja en el cual debería ubicarse el nuevo elemento.
2.  Si el nodo hoja tiene menos elementos que el máximo número de elementos legales, entonces hay lugar para uno más. Inserte el nuevo elemento en el nodo, respetando el orden de los elementos.
3.  De otra forma, el nodo debe ser dividido en dos nodos. La división se realiza de la siguiente manera:
    1.  Se escoge el valor medio entre los elementos del nodo y el nuevo elemento.
    2.  Los valores menores que el valor medio se colocan en el nuevo nodo izquierdo, y los valores mayores que el valor medio se colocan en el nuevo nodo derecho; el valor medio actúa como valor separador.
    3.  El valor separador se debe colocar en el nodo padre, lo que puede provocar que el padre sea dividido en dos, y así sucesivamente.

Ejemplo de Insertar:  
  
Se desea insertar en un árbol B de grado 2, los siguientes elementos: 30, 60, 45, 8, 22, 35, 4, 28, 52, 33, 13, 39, 41, 43, 24, 25 y 15

*   Insertar primero 30, 60, 45 y 8.
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_15.jpg)  
    
*   Seguidamente al insertar el 22, se produce desbordamiento, por lo que se llevará a cabo el proceso de rompimiento de la página en la inserción.
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_9.jpg)
    
*   Seguidamente se insertan las llaves 35, 4, 28, 52 sin problemas, pero al insertar la llave 33 se produce un nuevo desbordamiento, por lo que se volverá al proceso de inserción con desbordamiento.
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_10.jpg)
    
*   Al insertar la llave 13, se produce nuevamente un desbordamiento.
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_11.jpg)
    
*   Se insertan 39 y 41 sin problemas, pero al insertar 43 hay desbordamiento, por lo que:
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_12.jpg)
    
*   Se insertan 24 y 25 nuevamente sin problema, pero al insertar el 15 se produce un doble desbordamiento, por lo tanto:
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_13.jpg)
    
*   Quedando el árbol finalmente así:  
    
    ![ejemplo insertar](/assets/images/b-tree/arbolB_14.jpg)
    

  
  

**Eliminar**  
La idea para realizar el borrado de una clave es similar a la inserción teniendo en cuenta que ahora, en lugar de divisiones, realizamos uniones. Existe un problema añadido, las claves a borrar pueden aparecer en cualquier lugar del árbol y por consiguiente no coincide con el caso de la inserción en la que siempre comenzamos desde una hoja y propagamos hacia arriba. La solución a esto es inmediata pues cuando borramos una clave que está en un nodo interior, lo primero que realizamos es un intercambio de este valor con el inmediato sucesor en el árbol, es decir, el hijo más a la izquierda del hijo derecho de esa clave.  
Las operaciones a realizar para poder llevar a cabo el borrado son por tanto:

1.  **Redistribución:** la utilizaremos en el caso en que al borrar una clave el nodo se queda con un número menor que el mínimo y uno de los hermanos adyacentes tiene al menos uno más que ese mínimo, es decir, redistribuyendo podemos solucionar el problema.
2.  **Unión:** la utilizaremos en el caso de que no sea posible la redistribución y por tanto sólo será posible unir los nodos junto con la clave que los separa y se encuentra en el padre. En definitiva, el algoritmo nos queda como sigue:
    1.  Localizar el nodo donde se encuentra la clave..
    2.  Si el nodo localizado no es una hoja, intercambiar el valor de la clave localizada con el valor de la clave más a la izquierda del hijo a la derecha. En definitiva colocar la clave a borrar en una hoja. Hacemos nodo actual igual a esa hoja.
    3.  Borrar la clave.
    4.  Si el nodo actual contiene al menos el mínimo de claves como para seguir siendo un B-árbol, fin.
    5.  Si el nodo actual tiene un número menor que el mínimo:
        1.  Si un hermano tiene más del mínimo de claves, redistribución y fin.
        2.  Si ninguno de los hermanos tiene más del mínimo, unión de dos nodos junto con la clave del padre y vuelta al paso 4 para propagar el borrado de dicha clave (ahora en el padre).

![ejemplo eliminar](/assets/images/b-tree/arbolB_7.jpg)

![ejemplo de eliminar](/assets/images/b-tree/arbolB_8.jpg)