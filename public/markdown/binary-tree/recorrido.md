## Recorrido en Arboles Binarios

Una de las operaciones mas importantes a realizar en un árbol binario es el recorrido de los mismos, recorrer significa visitar los nodos del árbol en forma sistemática, de tal manera que todos los nodos del mismo sean visitados una sola vez.  
Existen 3 formas diferentes de efectuar el recorrido y todas ellas de naturaleza recursiva, estas son:  
  
**RECORRIDO PREORDEN:** En el que se procesa el nodo y después se procesan recursivamente sus hijos.  
Procedimiento:  
- Visitar la Raiz.  
- Recorrer el Subarbol izquierdo.  
- Recorrer el Subarbol derecho.  

![](/assets/images/binary-tree/preorden.gif)

Este recorrido consiste en visitar el nodo actual (visitar puede ser simplemente mostrar la clave del nodo por pantalla), y después visitar el subárbol izquierdo y una vez visitado, visitar el subárbol derecho. Es un proceso recursivo por naturaleza.  
  
**RECORRIDO POSTORDEN:** Donde el nodo dado se procesa después de haber procesado recursivamente a sus hijos.  

![](/assets/images/binary-tree/postorden.gif)

En este caso se trata primero el subárbol izquierdo, después el derecho y por último el nodo actual.  
  
**RECORRIDO INORDEN:** En este se procesa recursivamente el hijo izquierdo, luego se procesa el nodo actual y finalmente se procesa recursivamente el hijo derecho.  

![](/assets/images/binary-tree/inorden.gif)

En este caso se trata primero el subárbol izquierdo, después el nodo actual y por último el subárbol derecho. En un Arbol Binario de Búsqueda este recorrido daría los valores de clave ordenados de menor a mayor.  
  
Hay un último recorrido que implementa a estos 3.  
**RECORRIDIDO POR NIVELES:** Este recorrido procesa los nodos comenzando en la raíz y avanzando de forma descendente y de izquierda a derecha.  

![](/assets/images/binary-tree/niveles.gif)

Concluimos implementando el recorrido por niveles. Este recorrido procesa los nodos comenzando en la raíz y avanzando en forma descendente y de izquierda a derecha.  
El nombre se deriva del hecho de que primero visitamos:  
- los nodos del nivel 0 (la raíz),  
- después los del nivel 1 (los hijos de la raíz),  
- los del nivel 2 (los nietos de la raíz),  
- y asi sucesivamente.  
  
Un recorrido por niveles se implementa usando una cola en lugar de una pila. La cola almacena los nodos que van a ser visitados. Cuando se visita un nodo ,se colocan sus hijos al final de la cola, donde serán visitados después de los nodos que ya están en la cola. Es fácil ver que esto garantiza que los nodos se visitan por niveles.
