# Algoritmo de Dijkstra

Algoritmo descubierto por el matemático holandés **Edsger Dijkstra** en 1959. Describe como solucionar el problema de camino de **longitud mínima** desde a hasta z en grafos ponderados no dirigidos, donde todos los pesos son positivos. Es fácil adaptarlo para solucionar el problema de camino de longitud mínima en grafos dirigidos.  

![](/assets/images/graph/grafo_31.jpg)

Ejemplo de algoritmo Dijkstra para hallar el camino de longitud mínima entre los vértices a y z del anterior grafo ponderado.

  
Aplicar el algoritmo de Dijkstra para computar el camino de longitud mínima entre **Bogotá y B. Aires**

![](/assets/images/graph/grafo_32.jpg)

Aplicando el Algoritmo de Dijkstra:  

![](/assets/images/graph/grafo_33.jpg)

S={ Bog. , Quito , Lima , Paz , Asun. , Aires }. Luego el camino de **longitud mínima** es de **costo 13**  
y se obtiene al realizar el recorrido: **Bog.->Quito->Lima->Asun.->Aires.**

  
**Propiedades:**  
- El algoritmo de Dijkstra determina la longitud del camino más corto entre 2 vértices de un grafo ponderado simple, conexo y no dirigido.  
- El algoritmo de Dijkstra realiza (n2) operaciones para determinar la longitud del camino más corto entre 2 vértices de un grafo ponderado simple, conexo y no dirigido con n vértices.  
- El algoritmo de Dijkstra NO se puede aplicar si hay pesos negativos.  
  