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

## OPERACIONES CON LOS HEAPS


### Insertar Datos

**Pasos para insertar en un Heap:**  
- Agregamos el nodo. (de izquierda a derecha) Comparamos son su padre.  
- Si es mayor permutamos hasta llegar a la raíz Repetimos el paso 1 y 2 hasta llenar el nivel. Una vez llenado ese nivel pasamos al siguiente nivel.  
  
Ejemplos de agregar:  

![](/assets/images/heap-tree/heap_3.jpg)

  
Agregamos el 30:  
  

![](/assets/images/heap-tree/heap_4.jpg)

Agregamos el 25:  
  

![](/assets/images/heap-tree/heap_5.jpg)

  
Agregamos el 18:  
  

![](/assets/images/heap-tree/heap_6.jpg)

  
### Eliminar Datos

**Siempre se elimina la RAIZ**  
  
**Pasos para eliminar:** - Eliminamos la raíz del heap  
- Una vez eliminada remplazamos la raíz con el último nodo del último nivel.  
- Comparamos si los hijos de la nueva raíz son menores.  
- Si son menores no se hace ninguna permutación Si son mayores (o uno de ellos) se hace permutación con el hijo mayor.  
- Repetimos los pasos anteriores hasta no tener nodos para eliminar.  
  
Ejemplo: Eliminar el 25  

![](/assets/images/heap-tree/heap_8.jpg)

  
Eliminar el 24  

![](/assets/images/heap-tree/heap_9.jpg)

  
Eliminar el 19  

![](/assets/images/heap-tree/heap_10.jpg)

  
Eliminar el 18  

![](/assets/images/heap-tree/heap_11.jpg)