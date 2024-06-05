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
