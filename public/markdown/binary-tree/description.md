# Árbol Binario {"subTitle":"Árboles Binarios"}

## Definición de Árbol

Un árbol (tree) es un **T.D.A.** que consta de un conjunto finito T de **nodos** y una relación R (paternidad) entre los nodos tal que:  
- Hay un nodo, especialmente designado, llamado la **raíz** del árbol T.  
- Los nodos restantes, excluyendo la raíz, son particionados en m (m >= 0) conjuntos disjuntos T1, T2, ..., Tm, cada uno de los cuales es, a su vez, un árbol, llamado **subárbol** de la raíz del árbol T.  
- A los nodos que no son raíces de otros subárboles se les denomina **hojas** del árbol T, o sea, no tienen **sucesores** o **hijos**.  
- Si n es un nodo y A1, A2, A3, A4, A5, …, Ak son árboles con raíces n1, n2, n3, n4,…, nk . Se puede construir un nuevo árbol haciendo que n se constituya en **padre** de los nodos n1, n2, n3, n4,…, nk.  
- En dicho árbol, n es la raíz y A1, A2, A3, A4, A5, …, Ak son los **subárboles** de la raíz.  
- Los nodos n1, n2, n3, n4,…, nk reciben el nombre de **hijos** del nodo n.  
- Si el conjunto finito T de nodos del árbol es vacío, entonces se trata de un **árbol vacío**.  
- En esta estructura existe **sólo un nodo** sin padre, que es la **raíz del árbol**.  
- Todo nodo, a excepción del nodo raíz, tiene **uno y sólo un padre**.  
- Los nodos distintos a null se denominan : **nodos internos(ni)** ; de lo contrario, son llamados **nodos externos (ne)**.
  
![](/assets/images/binary-tree/ab_2.jpg)

## Árboles Binarios

Los **árboles binarios** constituyen un tipo particular de árboles de gran aplicación. Estos árboles se caracterizan porque no existen nodos con grado mayor que dos, es decir, un nodo tendrá como máximo dos subárboles.  
**Un árbol binario** es un conjunto finito de nodos que puede estar vacío o consistir en un nodo raíz y dos árboles binarios disjuntos, llamados subárbol izquierdo y subárbol derecho.  

![ab](/assets/images/binary-tree/ab_11.jpg)

En general, en un árbol no se distingue entre los subárboles de un nodo, mientras que en un árbol binario se suele utilizar la nomenclatura subárbol izquierdo y derecho para identificar los dos posibles subárboles de un nodo determinado. De forma que, por ejemplo, los dos siguientes árboles, a pesar de contener la misma información son distintos por la disposición de los subárboles:

![ab](/assets/images/binary-tree/ab_3.jpg)![ab](/assets/images/binary-tree/ab_12.jpg)

## Conceptos Básicos:

- **Grado de un nodo**: Es el número de subárboles que tienen como raíz ese nodo (el número de subárboles que "cuelgan" del nodo).  
- **Nodo terminal**: Nodo con grado 0, no tiene subárboles.  
- **Grado de un árbol**: Grado máximo de los nodos de un árbol.  
- **Hijos de un nodo**: Nodos que dependen directamente de ese nodo, es decir, las raíces de sus subárboles.  
- **Padre de un nodo**: Antecesor directo de un nodo, nodo del que depende directamente.  
- **Nodos hermanos**: Nodos hijos del mismo nodo padre.  
- **Camino**: Sucesión de nodos del árbol n1, n2, ..., nk, tal que ni es el padre de ni+1.  
- **Antecesores de un nodo**: Todos los nodos en el camino desde la raíz del árbol hasta ese nodo.  
- **Nivel de un nodo**: Longitud del camino desde la raíz hasta el nodo. El nodo raíz tiene nivel 1.  
- **Altura (profundidad) de un árbol**: Nivel máximo de un nodo en un árbol.  
- **Longitud de camino de un árbol**: Suma de las longitudes de los caminos a todos sus componentes.  
- **Bosque**: Conjunto de n>0 árboles disjuntos.  