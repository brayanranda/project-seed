# Árbol 1-2-3 {"subTitle":"Árboles Enearios"}

## Definición

Un árbol 1-2-3 es un árbol n-ario de orden tres, donde cada Nodo tiene uno o dos elementos.  

![](/assets/images/1-2-3-tree/123_1.jpg)

  
Cada nodo tiene **1, 2 o 3** subárboles asociados.

![](/assets/images/1-2-3-tree/123_2.jpg)

## Características:

- No hay elementos repetidos.  
- El elemento de la izquierda de cada nodo **(raíz izquierda)** es menor que el elemento de su derecha **(raíz derecha)**.

![](/assets/images/1-2-3-tree/123_3.jpg)

  
- El primer subárbol es un Árbol 1-2-3 que contiene los elementos menores que la raíz izquierda.  

![](/assets/images/1-2-3-tree/123_4.jpg)

  
- El segundo subárbol es un Árbol 1-2-3 que contiene los elementos mayores que la raíz izquierda pero menores que la raíz derecha.  

![](/assets/images/1-2-3-tree/123_5.jpg)

  
- El tercer subárbol es un Árbol 1-2-3 que contiene los elementos mayores que la raíz derecha.  

![](/assets/images/1-2-3-tree/123_6.jpg)

  
- Si la raíz derecha está vacía, su tercer subárbol debe ser vacío (El segundo puede o no ser vacío).  

![](/assets/images/1-2-3-tree/123_7.jpg)
