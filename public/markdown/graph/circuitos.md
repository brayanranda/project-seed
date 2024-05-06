# Circuitos y Rutas Eulerianas

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