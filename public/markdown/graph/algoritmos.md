# Algoritmos

### BÚSQUEDA EN PROFUNDIDAD - BEP  
Se comienza en el vértice inicial (vértice con índice 1) que se marca como vértice activo. Hasta que todos los vértices hayan sido visitados, en cada paso se avanza al vecino con el menor índice siempre que se pueda, pasando este a ser el vértice activo. Cuando todos los vecinos al vértice activo hayan sido visitados, se retrocede al vértice X desde el que se alcanzó el vértice activo y se prosigue siendo ahora X el vértice activo.  

El algoritmo de recorrido en profundidad o **DFS**, explora sistemáticamente las ramas o aristas del grafo de manera que primero se visitan los nodos o vértices adyacentes a los visitados más recientemente. De esta forma se va **“profundizando”** en el grafo, es decir, alejándose progresivamente del nodo inicial. Esta estrategia admite una implementación simple en forma recursiva, utilizando globalmente un contador y un vector de enteros para marcar los vértices ya visitados y almacenar el orden del recorrido. En la siguiente figura, se presenta la secuencia seguida para recorrer todos los nodos utilizando un algoritmo **DFS**.

![](/assets/images/graph/grafo_34.jpg)

### BÚSQUEDA ANCHURA - BEA
Se comienza en el vértice inicial (vértice con índice 1) y se marca como vértice activo, a diferencia con la BEP ahora se visitan en orden creciente de índice todos los vecinos del vértice activo antes de pasar al siguiente. Hasta que todos los vértices hayan sido visitados, en cada paso se van visitando en orden creciente de índice todos los vecinos del vértice activo. Cuando se han visitado todos los vecinos del vértice activo, se toma como nuevo vértice activo el primer vértice X visitado después del actual vértice activo en el desarrollo del algoritmo.  

El algoritmo de recorrido en anchura o **BFS**, explora sistemáticamente todas las ramas o aristas del grafo de manera que primero se visitan los nodos o vértices más cercanos a un nodo inicial. La siguiente figura presenta la secuencia seguida para recorrer todos los nodos utilizando un algoritmo BFS.

![](/assets/images/graph/grafo_35.jpg)

### ALGORITMO DE BELLMAN FORD:
El algoritmo de Bellman-Ford, genera el camino más corto en un Grafo dirigido ponderado (en el que el peso de alguna de las aristas puede ser negativo). El algoritmo de Dijkstra resuelve este mismo problema en un tiempo menor, pero requiere que los pesos de las aristas no sean negativos. Por lo que el Algoritmo Bellman-Ford normalmente se utiliza cuando hay aristas con peso negativo. Este algoritmo fue desarrollado por Richard Bellman y Lester Ford.  

Según Robert Sedgewick, “Los pesos negativos no son simplemente una curiosidad matemática; \[…\] surgen de una forma natural en la reducción a problemas de caminos más cortos”, y son un ejemplo de una reducción del problema del camino hamiltoniano que es NP-completo hasta el problema de caminos más cortos con pesos generales. Si un grafo contiene un ciclo de coste total negativo entonces este grafo no tiene solución. El algoritmo es capaz de detectar este caso. Si el grafo contiene un ciclo de coste negativo, el algoritmo lo detectara, pero no encontrará el camino más corto que no repite ningún vértice. La complejidad de este problema es al menos la del problema del camino más largo de complejidad NP-Completo.  

El Algoritmo de Bellman-Ford es, en su estructura básica, muy parecido al algoritmo de Dijkstra, pero en vez de seleccionar vorazmente el nodo de peso mínimo aun sin procesar para relajarlo, simplemente relaja todas las aristas, y lo hace |V|-1 veces, siendo |V| el numero de vértices en el grafo. Las repeticiones permiten a las distancias mínimas recorrer el árbol, ya que en la ausencia de ciclos negativos, el camino más corto solo visita cada vértice una vez. A diferencia de la solución voraz, la cual depende de la suposición de que los pesos sean positivos, esta solución se aproxima más al caso general.  
  
### ALGORITMO DE PRIM  
El algoritmo de Prim es un algoritmo de la teoría de los grafos para encontrar un árbol recubridor mínimo en un grafo conexo, no dirigido y cuyas aristas están etiquetadas. En otras palabras, el algoritmo encuentra un subconjunto de aristas que forman un árbol con todos los vértices, donde el peso total de todas las aristas en el árbol es el mínimo posible. Si el grafo no es conexo, entonces el algoritmo encontrará el árbol recubridor mínimo para uno de los componentes conexos que forman dicho grafo no conexo.  

El algoritmo fue diseñado en 1930 por el matemático Vojtech Jarnik y luego de manera independiente por el científico computacional Robert C. Prim en 1957 y redescubierto por Dijkstra en 1959. Por esta razón, el algoritmo es también conocido como algoritmo DJP o algoritmo de Jarnik.  

El algoritmo incrementa continuamente el tamaño de un árbol, comenzando por un vértice inicial al que se le van agregando sucesivamente vértices cuya distancia a los anteriores es mínima. Esto significa que en cada paso, las aristas a considerar son aquellas que inciden en vértices que ya pertenecen al árbol.  

El árbol recubridor mínimo está completamente construido cuando no quedan más vértices por agregar. El algoritmo de Prim se utiliza para hallar árboles de expansión mínima en grafos no dirigidos.  
  
**Algoritmo**  
Inicio  
Dado G(V, A)  
Se trabaja con un conjunto VP de vértices agregados al árbol y con un conjunto de aristas AP de aristas agregadas al árbol. Al inicio ambos conjuntos se encuentran vacíos.  
1. Se elige un vértice v0 y se agrega. Queda: VP = { v0 } y AP = {}  
2. Se elige la arista mínima (vi, vj) que una a cualquier miembro de VP con uno de V – VP tal que no se produzca un ciclo entre los mismos y se agrega la arista a AP y el vértice incluido a VP.  
3. Se repite 2 hasta que V – VP = {}.  