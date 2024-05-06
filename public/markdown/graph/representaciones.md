# Representación gráfica de un Grafo

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