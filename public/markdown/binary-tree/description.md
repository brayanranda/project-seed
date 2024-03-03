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
  
![](/src/assets/images/binary-tree/ab_2.jpg)

## Árboles Binarios

Los **árboles binarios** constituyen un tipo particular de árboles de gran aplicación. Estos árboles se caracterizan porque no existen nodos con grado mayor que dos, es decir, un nodo tendrá como máximo dos subárboles.  
**Un árbol binario** es un conjunto finito de nodos que puede estar vacío o consistir en un nodo raíz y dos árboles binarios disjuntos, llamados subárbol izquierdo y subárbol derecho.  

![ab](/src/assets/images/binary-tree/ab_11.jpg)

En general, en un árbol no se distingue entre los subárboles de un nodo, mientras que en un árbol binario se suele utilizar la nomenclatura subárbol izquierdo y derecho para identificar los dos posibles subárboles de un nodo determinado. De forma que, por ejemplo, los dos siguientes árboles, a pesar de contener la misma información son distintos por la disposición de los subárboles:

![ab](/src/assets/images/binary-tree/ab_3.jpg)![ab](/src/assets/images/binary-tree/ab_12.jpg)

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

## Recorrido en Arboles Binarios

Una de las operaciones mas importantes a realizar en un árbol binario es el recorrido de los mismos, recorrer significa visitar los nodos del árbol en forma sistemática, de tal manera que todos los nodos del mismo sean visitados una sola vez.  
Existen 3 formas diferentes de efectuar el recorrido y todas ellas de naturaleza recursiva, estas son:  
  
**RECORRIDO PREORDEN:** En el que se procesa el nodo y después se procesan recursivamente sus hijos.  
Procedimiento:  
- Visitar la Raiz.  
- Recorrer el Subarbol izquierdo.  
- Recorrer el Subarbol derecho.  

![](/src/assets/images/binary-tree/preorden.gif)

Este recorrido consiste en visitar el nodo actual (visitar puede ser simplemente mostrar la clave del nodo por pantalla), y después visitar el subárbol izquierdo y una vez visitado, visitar el subárbol derecho. Es un proceso recursivo por naturaleza.  
  
**RECORRIDO POSTORDEN:** Donde el nodo dado se procesa después de haber procesado recursivamente a sus hijos.  

![](/src/assets/images/binary-tree/postorden.gif)

En este caso se trata primero el subárbol izquierdo, después el derecho y por último el nodo actual.  
  
**RECORRIDO INORDEN:** En este se procesa recursivamente el hijo izquierdo, luego se procesa el nodo actual y finalmente se procesa recursivamente el hijo derecho.  

![](/src/assets/images/binary-tree/inorden.gif)

En este caso se trata primero el subárbol izquierdo, después el nodo actual y por último el subárbol derecho. En un Arbol Binario de Búsqueda este recorrido daría los valores de clave ordenados de menor a mayor.  
  
Hay un último recorrido que implementa a estos 3.  
**RECORRIDIDO POR NIVELES:** Este recorrido procesa los nodos comenzando en la raíz y avanzando de forma descendente y de izquierda a derecha.  

![](/src/assets/images/binary-tree/niveles.gif)

Concluimos implementando el recorrido por niveles. Este recorrido procesa los nodos comenzando en la raíz y avanzando en forma descendente y de izquierda a derecha.  
El nombre se deriva del hecho de que primero visitamos:  
- los nodos del nivel 0 (la raíz),  
- después los del nivel 1 (los hijos de la raíz),  
- los del nivel 2 (los nietos de la raíz),  
- y asi sucesivamente.  
  
Un recorrido por niveles se implementa usando una cola en lugar de una pila. La cola almacena los nodos que van a ser visitados. Cuando se visita un nodo ,se colocan sus hijos al final de la cola, donde serán visitados después de los nodos que ya están en la cola. Es fácil ver que esto garantiza que los nodos se visitan por niveles.

## Longitud de Camino Interno y Externo

Se define la **longitud de camino X** como el número de arcos que deben ser recorridos para llegar desde la raíz al nodo X. Por definición la raíz tiene longitud de camino 1, sus descendientes directos longitud de camino 2 y así sucesivamente.  
  
La **longitud de camino interno** es la suma de las longitudes de camino de todos los nodos del árbol. Es importante por que permite conocer los caminos que tiene el árbol. Puede calcularse por medio de la siguiente fórmula:  

![](/src/assets/images/binary-tree/ab_4.jpg)

donde "i" representa el **nivel del árbol**, "h" su **altura** y "ni" el **número de nodos** en el nivel "i".  
  
**Longitud de Camino Externo**  
Primero definiremos los conceptos de:  
- **Árbol extendido** es aquel en el que el número de hijos de cada nodo es igual al grado del árbol. Si alguno de los nodos del árbol no cumple con esta condición entonces debe incorporársele al mismo nodos especiales; tantos como sea necesario para satisfacer la condición.  
- Los **nodos especiales** tienen como objetivo reemplazar las ramas vacías o nulas, no pueden tener descendientes y normalmente se representan con la forma de un cuadrado.  
Se puede definir ahora la **longitud de camino externo** como la suma de las longitudes de camino de todos los nodos especiales del árbol. Se calcula por medio de la siguiente fórmula:

![](/src/assets/images/binary-tree/ab_5.jpg)

en donde "i" representa el **nivel del árbol**, "h" su **altura** y "nei" el **número de nodos especiales** en el nivel "i".  

## Árbol Binario Completo

Se define un árbol binario completo como un árbol en el que todos sus nodos, excepto los de último nivel, tienen dos hijos; el subárbol izquierdo y el subárbol derecho.

![](/src/assets/images/binary-tree/ab_6.jpg)

Cabe aclarar que existen algunos autores que definen un árbol binario completo de otra forma; y otros que utilizan el término lleno para referirse a completo.  

## Representación de Árboles Binarios en Memoria

Existen dos formas de representar un árbol binario en memoria:  
- Por medio de **punteros**.  
- Por medio de **arreglos**.

La implementación en SEED se realiza por medio de punteros.  
  
Los nodos del árbol binario serán representados como registros, que contendrán como mínimo tres campos. En un campo se almacenará la **información del nodo**. Los dos restantes se utilizarán para apuntar a los subárboles **izquierdo y derecho** respectivamente del subnodo en cuestión.

![](/src/assets/images/binary-tree/ab_7.jpg)

**IZQ**: Campo donde se almacena la dirección del subárbol izquierdo del nodo T.  
**INFO**: Campo donde se almacena la información de interés del nodo.  
**DER**: Campo donde se almacena la dirección del subárbol derecho del nodo T.  

![](/src/assets/images/binary-tree/ab_8.jpg)