## Eliminar un Dato

- Buscar x.  
- Si la raíz no es x, no hay nada que hacer.  
- Eliminar el nodo que contiene a x. Quedan dos subárboles I y D.  
- Buscar el máximo de I.  
- Colocarle D como hijo derecho del máximo.  
  
**Ejemplo: Eliminar 6**

![](/assets/images/splay-tree/splay_14.jpg)

  
**Eliminar 4:** como 4 no se encuentra en el árbol entonces se aplica splay al nodo 3 ya que fue el último nodo donde fracaso la búsqueda y luego no se hace nada.

![](/assets/images/splay-tree/splay_15.jpg)