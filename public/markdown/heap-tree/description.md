# Árbol Heap {"subTitle":"Árboles Binarios"}

## Definición

Un heap o montículo es una estructura de datos similar a un árbol binario de búsqueda pero ordenado de distinta forma por prioridades y además se representa siempre como un árbol binario completo representado como un arreglo.  

![](/assets/images/heap-tree/heap_1.jpg)

## Características

Un montículo es un árbol binario completo tal que puede:  
- Estar vacío  
- El valor de la prioridad en la raíz es mayor, (menor) o igual que la prioridad de cualquiera de sus hijos.  
- Ambos subárboles son montículos o heap.

![](/assets/images/heap-tree/heap_2.jpg)

## Propiedades del Heap

**Debe cumplir dos propiedades:**  
- Un árbol binario completamente lleno, con la posible excepción del nivel más bajo, el cual se rellena de izquierda a derecha. Estos árboles se denominan árboles binarios completos.  
- Todo nodo debe ser mayor que todos sus descendientes. Por lo tanto, el maximo estará en la raíz y su búsqueda y eliminación se podrá realizar rápidamente.  
  
**Otras características:**  
- Todos los heaps son árboles binarios. No son necesariamente ABBs.  
- El árbol está completamente balanceado excepto el último nivel, que debe estar lleno de izquierda a derecha.  
- Para un elemento del heap en la posición k, sus hijos deberán estar en las posiciones 2k y 2k+1 del heap.  
- Un HEAP puede representarse en un arreglo.  
- Toda lista ordenada es un heap.  