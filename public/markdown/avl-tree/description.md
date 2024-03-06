# Árbol AVL {"subTitle":"Árboles Binarios"}

## Definición

El nombre AVL son las iniciales de los hombres que idearon este tipo de árbol Adelson-Velskii y Landis en 1962.  
Básicamente un árbol AVL es un **Árbol binario de búsqueda** al que se le añade una condición de equilibrio. Esta condición es que para todo nodo la altura de sus subárboles izquierdo y derecho pueden diferir a lo sumo en 1.

## Caracteristicas

- Un AVL es un ABB  
- La diferencia entre las alturas de los subárboles derecho e izquierdo no debe excederse en más de 1.  
- Cada nodo tiene asignado un peso de acuerdo a las alturas de sus subárboles.  
- Un nodo tiene un peso de 1 si su subárbol derecho es más alto, -1 si su subárbol izquierdo es más alto y 0 si las alturas son las mismas.  
- La inserción y eliminación en AVLs es la misma que en los ABBs.  

## Equilibrio

Equilibrio **(n) = altura-der (n) – altura-izq (n)** describe relatividad entre subárbol der y subárbol izq.  
\+ (positivo) -> der mas alto (profundo)  
\- (negativo) -> izq mas alto (profundo)  

Un árbol binario es un AVL **si y sólo si** cada uno de sus nodos tiene un equilibrio de **–1, 0, + 1.**

Si alguno de los pesos de los nodos se modifica en un valor no válido (2 o -2) debe seguirse un esquema de rotación.

## Operaciones sobre un AVL

- Insertar  
- Balancear  
    - **Caso 1** Rotación simple izquierda RSI  
    - **Caso 2** Rotación simple derecha RSD  
    - **Caso 3** Rotación doble izquierda RDI  
    - **Caso 4** Rotación doble derecha RDD  
- Eliminar  
- Calcular Altura  

## Insertar un Dato

Usamos la misma técnica para insertar un nodo en un ABB ordenado.  

Trazamos una ruta desde el nodo raiz hasta un nodo hoja (donde hacemos la inserción).  

Insertamos el nodo nuevo.  

Volvemos a trazar la ruta de regreso al nodo raíz, ajustando el equilibrio a lo largo de ella.  

Si el equilibrio de un nodo llega a ser + - 2, volvemos a ajustar los subárboles de los nodos para que su equilibrio se mantenga acorde con los lineamientos AVL (que son +- 1).  

## Balancear el Árbol

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

## Eliminar un Dato

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
