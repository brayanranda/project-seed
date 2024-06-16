# Balancear el Árbol {"subTitle":"Árbol AVL"}

**Caso 1: Rotación simple izquierda RSI**  
Si esta desequilibrado a la izquierda y su hijo derecho tiene el mismo signo (+) hacemos rotación sencilla izquierda.  

![](/assets/images/avl-tree/avl_1.jpg)

Luego de la rotación:  

![](/assets/images/avl-tree/avl_2.jpg)

  
**Caso 2: Rotación simple derecha RSD**  

![](/assets/images/avl-tree/avl_3.jpg)

Luego de la rotación:  

![](/assets/images/avl-tree/avl_4.jpg)

  
Hay varios puntos que cabe señalar aquí:  
- Se conserva el orden apropiado del árbol.  
- Restablece todos los nodo a equilibrios apropiados AVL  
- Conserva el recorrido en orden que el árbol anterior.  
- Sólo necesitamos modificar 3 apuntadores para lograr el nuevo equilibrio (con la de la raíz).  
  
**Caso 3: Rotación doble izquierda RDI**  
Si está desequilibrado a la izquierda **(FE < –1)**, y su hijo derecho tiene distinto signo **(+)** hacemos rotación doble izquierda-derecha.

![](/assets/images/avl-tree/avl_11.jpg)

  
Otro ejemplo de esta rotación:  
  

![](/assets/images/avl-tree/avl_8.jpg)

  
  
**Caso 4: Rotación doble derecha RDD**  
Si esta desequilibrado a la derecha y su hijo izquierdo tiene distinto signo **(–)** hacemos rotación doble derecha-izquierda.  
  

![](/assets/images/avl-tree/avl_9.jpg)

Otro ejemplo:  

![](/assets/images/avl-tree/avl_10.jpg)