# Ruta o Camino de Longitud "n"

Una **Ruta** o Camino de longitud n de u a v en un grafo no-dirigido es una secuencia de arcos **e1, e2, . . ., en** del grafo tal que arco e1 tiene nodos terminales xo y x1 , arco e2 tiene nodos terminales x1 y x2 ,. . . y arco en tiene nodos terminales xn-1 y xn , Donde x0 = u y xn = v.

![grafos](/assets/images/graph/grafo_22.jpg)

Esta ruta pasa a través de los nodos **e , d, f, a** en este orden.

![grafos](/assets/images/graph/grafo_23.jpg)

Esta otra ruta ruta pasa a través de los nodos **a, f, d, e, a** en este orden. Esta tiene **longitud 4.**  
Esta ruta es un **circuito** ya que esta comienza y termina en el mismo nodo.  
Una ruta o circuito es **simple** si no contiene el mismo arco o arista más de una vez.  
  
Ahora bien, un grafo no-dirigido se dice **conectado (conexo)** si existe una ruta entre cada par de nodos distintos del grafo.  
Un grafo que **no es conexo** es la unión de dos o más subgrafos conexos. Estos subgrafos conexos disjuntos reciben el nombre de componentes conexos del grafo.  
  
Otros conceptos relacionados con la **conectividad** de los grafos son:  
- Sea G=(N,A) un grafo. Un nodo v recibe el nombre de **articulación** cuando su eliminación de G desconecta a G.  
Un arco e pertenece a A recibe el nombre de **puente** cuando su eliminación de G desconecta a G.  