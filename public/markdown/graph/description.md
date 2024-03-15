# Teoría de Grafos

## Conceptos Básicos

La Teoría de Grafos se encarga de establecer los fundamentos y bases necesarias para resolver problemas de una determinada complejidad a través de estructuras matemáticas cómo lo son los grafos. Para muchos problemas en grafos aun no se conoce solución y en otros casos, no se sabe si las soluciones que actualmente se conocen sean las más eficientes o si se les podría mejorar. Se hace difícil resolver problemas con grafos, de 50 a 100 Nodos con algún algoritmo conocido.

## Definición de Grafos

En términos un grafo es un conjunto finito de puntos (Nodos, vértices), algunos de los cuales están conectados por líneas (flechas ó aristas).

Un grafo igualmente se conoce como una representación gráfica de los datos de una situación particular. Los grafos pueden ser representados con estructuras de datos G (V, A, J) donde V y A son conjuntos finitos y J es la correspondencia de cada elemento de A (arista) con un par de elementos de V (vértice o nodo).

- V y A -> son Vertice y Arista de G.  
- J -> asocia a cada Arista con sus 2 Vértices.  
- Dos Vértices son Adyacentes si comparten la misma Arista.  
- Los extremos de una arista son los Vértices que comparte dicha Arista.  
- Un grafo se dice que es finito si su numero de Vértices es finito.

## Representación gráfica de un Grafo

Ejemplo: Un grafo hipotético de vuelos sin escala entre ciudades de Colombia:

![grafo](/assets/images/graph/grafo_1.jpg)

Se habla que si las líneas o flechas o aristas no tienen dirección (son bidireccioales) esto se conoce como **GRAFO NO DIRIGIDO**, igualmente. Pero se puede dar la posibilidad que existan vuelos múltiples entre un par de vértices (o ciudades) para el caso se utiliza **Multigrafos (V, A)** donde A son no dirigidas y existen aristas múltiples entre un par de vértices. Todo grafo simple es un multigrafo pero no todo multigrado es un grafo simple.

Además se puede dar la posibilidad que una línea Vertice contecte con sigo mismo. Para realizar algún tipo de transacción o diagnostico, para este tipo de casos se tendría que utilizar un **Pseudografo**, la cual son más generales que los multigrafos, ya que para los pseudografos una arista o lazo puede conectar un vértice consigo mismo.

## Representación de un Grafo No Dirigido

Ejemplo: Representación de un Grafo No Dirigido: Multigrafo y Pseudografo de una Conexión telefónica entre las siguientes ciudades:

![grafo](/assets/images/graph/grafo_2.jpg)

Ahora existen situaciones en la vida real como por ejemplo el caso de los vuelos en las ciudades colombianas. Que pasa si en el caso de vuelos entre ciudades, se diera la situación que de Bogotá partan vuelos a la ciudad de Cúcuta pero de Cúcuta a Bogotá no hay vuelo pero si a otras ciudades. Esto casos no pueden representar con grafos no dirigidos. Para esta situación se aplica **GRAFOS DIRIGIDOS**.

Veamos primeramente grafos dirigidos (o dígrafos): es G (V, E), donde V es un conjunto cuyos elementos se llama vértice y E es un conjunto de pares ordenados de elementos de V, los E también llamados aristas o aristas dirigidas o arco, donde la arista dirigida (V, W) V es la cola y W es la cabeza en el diagrama se representa con una flecha V -> W.

## Representación de un Grafo Dirigido

Ejemplo: Representación de un Grafo Dirigido. Grafo hipotético de vuelos sin escala entre ciudades de Colombia:

![grafo](/assets/images/graph/grafo_3.jpg)

Recuerda que el Multigrafo dirigido puede contener múltiples aritas dirigidas desde un vértice a un segundo vértice. La palabra GRAFO se utiliza para describir grafos con aristas dirigidas o no dirigidas, con o sin bucles (lazos) y aristas múltiples.  
Ahora se emplea el término Grafo no dirigido o pseudografo para indicar grafos no dirigidos que pueden tener aristas múltiples y bucles. Y grafo dirigido para grafos cuyas aristas estén asociadas a pares ordenados.

## Grafos Conexos

Un grafo es conexo si cada par de vértices está conectado por un camino; es decir, si para cualquier par de vértices (a, b), existe al menos un camino posible desde a hacia b.

![grafos](/assets/images/graph/grafo_4.jpg)

En general:

![grafos](/assets/images/graph/grafo_5.jpg)

## Terminología Básica para Grafos No Dirigidos

- Dos vértices de un grafo No Dirigido son **Adyacentes** si comparten la misma arista: "Dos vértices u y v en un grafo no dirigido G son llamados adyacentes (o vecinos) en G si {u, v} es una arista de G. Si e = {u, v}, la arista e es llamada incidente con los vértices u y v. Se dice que la arista e conecta a u y v. Los vértices u y v son llamados puntos finales (extremos) de la arista {u, v}."  
- Los **extremos** de una arista son los vértices que comparte dicha arista:

![grafosç](/assets/images/graph/grafo_6.jpg)

**DONDE:** Los vértices Yumbo y Cali son adyacentes. e2, es incidente con los vértices Yumbo y Cali (los conecta). Los vértices Yumbo y Cali son los puntos finales (extremos ó vértice inicial y vértice final) de la arista e2. Cabe mencionar que los vértices inicial y final de un bucle o lazo coinciden.  
  
- Si v es un vértice de un grafo, se denomina **grado** de v al número de aristas que inciden en el mismo (por convenio de considera que un lazo o bucle cuenta dos veces al determinar el grado de su vértice). Grado de un vértice: **d(V)**.

![grafos](/assets/images/graph/grafo_7.jpg)

**DONDE:**: d(Jamundí)=1, d(Tuluá)=4, d(Cali)=5, d(Manizales)=0, d(Yumbo)=2, d(Palmira)=3, d(Buga)=3.  
  
- Vértices de Grado cero se les llama **Vertices Aislados**. (No es adyacente a ningún vértice): Para el caso es Vértice aislado Manizales.  
- Vertice Colgante ó **Hoja**. Sí y sólo sí tiene un solo grado. Para el ejemplo anterior el Vértice Jamundi.  
  

## Terminología Básica para Grafos Dirigidos

- Incidencia/Adyacencia: Cuando (u, v) es una arista del grafo G con aristas dirigidas, se dice que u es **adyacente** a v y se dice que v es adyacente desde u. El vértice u es llamado vértice inicial y v es llamado vértice final o Terminal. El vértice inicial y final de un bucle es el mismo.

![grafos](/assets/images/graph/grafo_8.jpg)

El vértice Yumbo es adyacente a Cali. Y el vértice Cali es adyacente desde Yumbo. Yumbo es el vértice inicial y Cali es el vértice final.  
  
- En un grafo dirigido, el **grado de entrada** de un vértice v, denotado por **d-(v)**, es el número de aristas que tienen a v como vértice final. El **grado de salida** de un vértice v, denotado por **d+(v)**, es el número de aristas que tienen a v como vértice inicial (Nótese que un bucle contribuye con una unidad tanto al grado de entrada como al grado de salida del vértice correspondiente).  
  
- **TEOREMA:** Sea G= (V,E) un grafo dirigido, **Entonces:**  
**Ed-(v) + Ed+(v) = |E|**

![grafos](/assets/images/graph/grafo_9.jpg)

**Solución:**

Los grados de Entrada de G son: **d-(Jamundi)=1, d-(cali)=2, d-(Yumbo)=1, d-(Palmira)=2, d-(Buga)=2, d-(Tuluá)=2.**  
Los grados de Salida de G son: **d+(Jamundi)=0, d+(cali)=3, d+(Yumbo)=2, d+(Palmira)=1, d+(Buga)=1, d+(Tuluá)=2.**

## Familias distinguidas de Grafos Simples

Grafo Completo: Un Grafo **completo** de n Vértices denotado por **Kn**, es el grafo simple que contiene exactamente una arista entre cada par de vértices distintos.

![grafos](/assets/images/graph/grafo_10.jpg)

Ciclos: Un **Ciclo**, denotado por **Cn**, para n >= 3, consta de n vértices v1, v2, ...., vn y aristas {v1, v2}, {v2, v3}, . . . , {vn-1, vn} y {vn, v1}.

![grafos](/assets/images/graph/grafo_11.jpg)

Ruedas: Una **Rueda**, denotado por **Wn**, para n>= 3, se obtiene cuando a un ciclo se le adiciona un nuevo vértice y este se conecta a los n vértices existentes.

![grafos](/assets/images/graph/grafo_12.jpg)

n-Cubos: Un **n-Cubo**, denotado por **Qn**, es el grafo que tiene vértices que representan las 2n cadenas de bits de longitud n. dos vértices son adyacentes si y solo si las cadenas que representandifieren en solo un bit.

![grafos](/assets/images/graph/grafo_13.jpg)

  
## Grafos Bipartitos

Un grafo simple es **bipartito** si su conjunto de V de vértices se puede dividir en dos conjuntos disyuntos V1 y V2 tales que cada arista del grafo conecta un vértice de V1 con un vértice de V2.

![grafos](/assets/images/graph/grafo_14.jpg)

**C6** es bipartito siendo V1={v1, v3, v5} y V2={v2, v4, v6}. Mientras que **C3** no es bipartito.  
  
El grafo **bipartito completo Km**,n es el conjunto de vértices conformado por dos subconjuntos con m y n vértices, respectivamente, y hay una arista entre dos vértices si y solo si, un vértice está en el primer subconjunto y el otro vértice en el segundo subconjunto.

![grafos](/assets/images/graph/grafo_15.jpg)

## Representación de los Grafos

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

## Isomorfismo de Grafos

Se puede decir que dos grafos son **isomorfos** si existe una correspondencia uno a uno entre los vértices de los grafos tal que para todo par de vértices que son adyacentes en un grafo si y solo si el correspondiente par de vértices son adyacentes en el otro grafo, pero al final tienen diferente forma.  

Dos grafos G=(V;E) y G’=(V‘;E’) son isomorfos si existe una biyección f : V!V‘ que preserva la relación de adyacencia, es decir tal que: Ejemplo Los dos grafos representados en la siguiente figura son isomorfos, ya que la función f que lleva a en a’, b en b’, c en c’ y d en d’ es una bisección y preserva la adyacencia.

![grafos](/assets/images/graph/grafo_21.jpg)

Dos grafos isomorfos deben tener el mismo número de vertices. Más aún todas las propiedades que se deriven de la relación de adyacencia deben ser idénticas en ambos, en particular deben tener el mismo número de aristas, el mismo número de vértices aislados y la misma sucesión de grados. Para los fines de la teoría de grafos, dos grafos isomorfos se consideran idénticos.

## Ruta o Camino de Longitud "n"

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

## Circuitos y Rutas Eulerianas

Un **circuito** es un recorrido con el mismo origen y final. Un **circuito euleriano** de un multigrafo conexo G es un circuito que contiene todas las aristas de G. Un grafo G con un circuito euleriano se denomina un **grafo euleriano**.

![grafos](/assets/images/graph/grafo_24.jpg)

Circuito Euleriano: u1– u2–u8-u9-u2-u3-u4-u2-u7-u4-u5-u6-u7-u1

  
Por otro lado, Un **recorrido** es una cadena sin aristas repetidas (se pueden repetir vértices).  
Un **recorrido euleriano** de un multigrafo conexo G es un recorrido que contiene todas las aristas de G.  

![grafos](/assets/images/graph/grafo_25.jpg)

Ruta o recorrido Eluleriano: v1–v2-v4-v3-v2-v6-v5-v4

  
Se dice que un multigrafo **conexo** G es **euleriano** si y solo si el grado de cada vértice **es par**.

![grafos](/assets/images/graph/grafo_26.jpg)

Es **conexo**, todos los vértices tienen **grado par** -> Entonces existe un **circuito euleriano**

  
Sea G un multigrafo conexo no trivial. Entonces G contiene un **recorrido o camino euleriano** si y solo si tiene dos vértices de grado impar. Además, el recorrido empieza en uno de ellos y acaba en el otro.

![grafos](/assets/images/graph/grafo_27.jpg)

u y v tienen **grado impar**, los demàs grado par.

## Circuitos y Rutas Hamiltonianas

Un grafo G se dice que es **Hamiltoniano** si tiene un ciclo recubridor. Es decir, un ciclo que pasa por **cada vértice** una sola vez.

![grafos](/assets/images/graph/grafo_28.jpg)

Ningún grafo conexo con vértices de corte es Hamiltoniano:  
**Teorema.** Si un Grafo G es **Hamiltoniano**, entonces  
K (G-S) = | S |  
Para todo subconjunto propio no vacío S de V (G).  
  
Sea G un **grafo Hamiltoniano** y sea C un ciclo Hamiltoniano. Sea n el numero de componentes de G-S: G1, G2, … , G n. Sea ui el ultimo vértice de Gi i sea vi el vértice que inmediatamente sigue a ui en C. Entonces vi pertenece a S y hay tantos vértices en S como componentes en G-S.

![grafos](/assets/images/graph/grafo_29.jpg)

## Grafos Ponderados y Algoritmos

A Los grafos que tienen un número asignado a cada arista se les denomina grafos ponderados.

![grafos](/assets/images/graph/grafo_30.jpg)

Se aclara que puede haber más de un **camino** entre dos vértices, lo otro es conocer cual es el **camino de longitud mínimo**. Para lo cual existen algoritmos que nos permiten hallar el **camino más corto**.

## Algoritmo de Dijkstra

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
  

## Algoritmos

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