# Eliminar un Dato {"subTitle":"Árbol AVL"}

Al eliminar un nodo en un árbol AVL puede afectar el equilibrio de sus nodos. Entonces hay que hacer rotaciones simples o dobles.  
Eliminas un nodo como lo hacemos en un árbol binario ordenado. Al localizar el nodo que queremos eliminar seguimos este procedimiento:  
- Si el nodo es un nodo hoja, simplemente lo eliminamos.  
- Si el nodo solo tiene un hijo, lo sustituimos con su hijo.  
- Si el nodo eliminado tiene dos hijos, lo sustituimos por el hijo derecho y colocamos el hijo izquierdo en el subárbol izquierdo del hijo derecho.  
  
Ahora que hemos eliminado el nodo, tenemos que volver a equilibrar el árbol:  
- Si el equilibrio del padre del nodo eliminado cambia de 0 a +-1 el algoritmo concluye.  
- Si el padre del nodo eliminado cambio de +-1 a 0, la altura del árbol ha cambiado y se afecte el equilibrio de su abuelo.  
- Si el equilibrio del padre del nodo eliminado cambia de +- 1 a +- 2 hay que hacer una rotación.  
- Después de concluirla, el equilibrio del padre podría cambiar, lo que, a su vez, podría forzarnos a hacer otros cambios (y probables rotaciones) en toda la ruta hacia arriba a medida que ascendemos hacia la raíz. Si encontramos en la ruta un nodo que cambie de 0 a +- 1 entonces terminamos. 