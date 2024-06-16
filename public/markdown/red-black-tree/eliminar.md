**Eliminación:**  
Al hacer una eliminación también es necesario hacer rotaciones y cambios de color según los casos que se especificaran después. El costo del algoritmo de eliminación es de ?(log n) e incluyendo el costo de las rotaciones que en el peor de los casos, será de tres rotaciones el costo total será de ?(log n).  
  
**Casos de eliminación:**  
- **caso 1:** el nodo es una hoja, se elimina fácilmente.  
- **caso 2:** El nodo hermano y sus dos hijos son negros: el negro adicional se mueve arriba del árbol.  
- **caso 3:** El nodo tiene dos hijos, nos encontramos con el sucesor que lo sustituirá. El Sucesor es el nodo mas a la izquierda en el subárbol derecho - lo cambiamos y procedemos al borrado esto tiene como máximo un hijo y lo podemos borrar.  
- **caso 4:** Nodo hermano y su hijo más cercano al nodo es de color negro, el otro es de color rojo: Al cambiar el color de algunos y la rotación que podemos sacar el extra negro.  
- **caso 5:** El nodo tiene un hijo hoja, cambia el nodo por el hijo y se borra  