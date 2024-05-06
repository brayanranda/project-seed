# Representación de los Grafos

Una forma de representar grafos sin aristas múltiples es enumerar todas las aristas del grafo. Otra forma de representar grafos sin aristas múltiples es utilizar **Lista de Adyacencia** - Cada vértice tiene una lista de vértices los cuales son adyacentes a él. Esto causa redundancia en un grafo no dirigido (ya que A existe en la lista de adyacencia de B y viceversa).

![grafos](/assets/images/graph/grafo_16.jpg)

Lista de Adyacencia de un Grafo No Dirigido.

  

![grafos](/assets/images/graph/grafo_17.jpg)

Lista de Adyacencia de un Grafo Dirigido.

  
**Matriz de Adyacencia:** Si G tiene n vértices, se llama matriz de adyacencia de G a la matriz booleana cuadrada de orden n, M = (mij) n×n , donde se tiene un 1 en la posición mi,j si vi y vj son adyacentes y tiene 0 en la posición mij si vi y vj no son adyacentes. Si G es no dirigido, su matriz de adyacencia es simétrica (si la arista {vi, vj} está en A, también está {vj , vi}).  
Si el grafo o digrafo es simple es nuestro caso, la diagonal está formada por ceros (no tiene lazos).  
  

![grafos](/assets/images/graph/grafo_18.jpg)

La matrices de adyacencia pueden usarse también para representar grafos no dirigidos con bucles y con aristas múltiples. Un bucle en el vértice a, se representa por medio de un 2 en posición (i,j) de la matriz de adyacencia. Cuando hay aristas múltiples, la matriz de adyacencia deja de ser booleana, ya que el elemento en la posición(i,j) de la matriz es igual al número de aristas asociadas con vi,vj. Todos los grafos no dirigidos, incluyendo multigrados y pseudografos, tienen matrices de adyacencia simétricas.  
  

**Conclusión:** Para Grafos No Dirigidos  
**M = \[mij\]/mij** = 0 si vi no es incidente con aj  
1 si vi es incidente con aj  
2 si aj es un bucle en vi  
Para Grafos Dirigidos:  
**M = \[mij\] / mij** = 0 si vi no es incidente con aj  
1 si vi es incidente con aj  
1 si aj es un bucle en vi

  
**Propiedades de la matriz de adyacencia:**  
1. Sea G un grafo no dirigido con matriz de adyacencia A. Entonces, la suma de los elementos de la fila i (o columna i) es igual al grado del vértice vi.  
2. Sea G un grafo dirigido con matriz de adyacencia A. Entonces, la suma de los elementos de la fila i es igual al grado de salida del vértice vi y la suma de los elementos de la columna j es igual al grado de entrada del vértice j.  

![grafos](/assets/images/graph/grafo_19.jpg)

La matriz de adyacencia de un grafo dirigido no tiene por qué ser simétrica, ya que puede no haber una arista de vj a vi cuando hay una arista de vi a vj. Recuerda que la matriz de adyacencia también pueden representar multigrados dirigidos, pero ya no son matrices booleanas si hay aristas múltiples en el mismo sentido conectando dos vértices.  
  
**Matriz de Incidencia:** Sea G = (V,A) un **grafo no dirigido** con n vértices y m aristas siendo V = {vi}n i=1 y A = {ai}m i=1. Llamamos **matriz de incidencia de G** a la matriz de orden n × m.  
**M = \[mij\] / mij** \= 0 si vi no es incidente con aj.  
1 si vi es incidente con aj  
2 si aj es un bucle en vi  
  
Sea G = (V,A) un **grafo dirigido** con n vértices y m arcos siendo V = {vi}n i =1 y A = {ai}m i=1. Llamamos matriz de incidencia de G a la **matriz de orden** n × m.  
**B = \[bij\] / bij** \= 0 si vi no es incidente con aj.  
1 si vi es vértice inicial de aj  
-1 si vi es vértice final de aj  
2 si aj es un bucle en vi  
  
**Propiedades de la matriz de incidencia**  
1. Sea G un **grafo no dirigido**. La suma de los elementos de cada fila de la matriz de incidencia es igual al grado del correspondiente vértice.  
2. Sea G un **grafo no dirigido**. La suma de los elementos de cada columna de la matriz de incidencia es igual a 2.  
3. Sea G un **grafo dirigido** sin bucles. La suma de los elementos de cada columna de la matriz de incidencia es igual a 0.  

![grafos](/assets/images/graph/grafo_20.jpg)
