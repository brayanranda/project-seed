**RECORRIDIDO POR NIVELES:** Este recorrido procesa los nodos comenzando en la raíz y avanzando de forma descendente y de izquierda a derecha.  

![](/assets/images/binary-tree/niveles.gif)

Concluimos implementando el recorrido por niveles. Este recorrido procesa los nodos comenzando en la raíz y avanzando en forma descendente y de izquierda a derecha.  
El nombre se deriva del hecho de que primero visitamos:  
- los nodos del nivel 0 (la raíz),  
- después los del nivel 1 (los hijos de la raíz),  
- los del nivel 2 (los nietos de la raíz),  
- y asi sucesivamente.  
  
Un recorrido por niveles se implementa usando una cola en lugar de una pila. La cola almacena los nodos que van a ser visitados. Cuando se visita un nodo ,se colocan sus hijos al final de la cola, donde serán visitados después de los nodos que ya están en la cola. Es fácil ver que esto garantiza que los nodos se visitan por niveles.