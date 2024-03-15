# Grafos en SEED {"subTitle":"Implementación de"}

## Descripción

**Grafo No Dirigido:**  
Estructura de almacenamiento de datos jerarquica no binario que se fundamenta en la creación de elementos fundamentales que son Vertice y Aristas para el desarrollo de los diferentes procesos básicos del grafo, los vértices se representan en la clase Vertice que contiene la información del vértice, un vértice predecesor en un recorrido y una lista de vértices adyacentes (vecinos). Las aristas se representan en la Clase Arista, esta conformada por un vértice A, vértice B, el peso para representar costos, tiempos, distancias. Las Clases Vertice y Aristas poseen un atributo en común denominado “esVisit” utilizado en los recorridos del árbol para saber si el objeto ya fue visitado.  

EL grafo no dirigido esta implementado en la clase GrafoND, que contiene una lista de vértices y aristas, esta estructura se origina con la creación de un vértice y se va consolidadndo con la creación de elementos fundamentales. Los atributos y algunos métodos que posee la estructura se pueden observar en le siguiente diagrama de clase.

![](/assets/images/graph/grafo_36.jpg)

**Requerimientos funcionales implementados para Grafos No Dirigidos:**  
- RF1 - Crear un nuevo Grafo No Dirigido.  
- RF2 - Insertar nuevos vértices y aristas al Grafo No Dirigido.  
- RF3 - Eliminar vértices y aristas de un Grafo No Dirigido.  
- RF4 - Conocer la Matriz de Adyacencia de un Grafo No Dirigido.  
- RF5 - Conocer la matriz de Incidencia de un Grafo No Dirigido.  
- RF6 - Indicar e imprimir la ruta entre dos vértices de un Grafo No Dirigido  
- RF7 - Indicar e imprimir la ruta mínima por el algoritmo de Dijkstra de un Grafo No Dirigido.  
- RF8 - Indicar e imprimir el costo de ruta mínima por el algoritmo de Dijkstra de un Grafo No Dirigido.  
- RF9 - Indicar e imprimir el circuito Euleriano de un Grafo No Dirigido.  
- RF10 - Indicar e imprimir el circuito Hamiltoniano de un Grafo No Dirigido.  
- RF11 - Indicar e imprimir el camino Euleriano de un Grafo No Dirigido.  
- RF12 - Indicar e imprimir el camino Hamiltoniano de un Grafo No Dirigido.  
- RF13 - Indicar e imprimir la Búsqueda en Profundidad en un Grafo No Dirigido.  
- RF14 - Indicar e imprimir la Búsqueda en Anchura en un Grafo No Dirigido.  
- RF15 - Pintar el Grafo No Dirigido.  
  
**Grafo Dirigido - Digrafo:**  
El dígrafo posee gran similitud en el comportamiento de la estructura ArbolNoDirigido, con el única diferencia posee dirección. Se fundamenta en la creación de elementos fundamentales que son Vertice y Aristas para el desarrollo de los diferentes procesos básicos del grafo, los vértices se representan en la clase Vertice que contiene la información del vértice, un vértice predecesor en un recorrido y una lista de vértices adyacentes (vecinos).  

Las aristas se representan en la Clase Arista, esta conformada por un vértice A, vértice B, el peso para representar costos, tiempos, distancias. Las Clases Vertice y Aristas poseen un atributo en común denominado “esVisit” utilizado en los recorridos del árbol para saber si el objeto ya fue visitado. La estructura se implementó en la clase Digrafo, que contiene una lista de vértices y aristas, esta estructura se origina con la creación de un vértice y se va consolidando con la creación de elementos fundamentales. Los atributos y algunos métodos que posee la estructura se pueden observar en le siguiente diagrama de clase.  

![](/assets/images/graph/grafo_37.jpg)

**Requerimientos funcionales implementados para Digrafos:**  
- RF1 - Crear un nuevo Grafo Dirigido.  
- RF2 - Insertar nuevos vértices y aristas al Grafo Dirigido.  
- RF3 - Eliminar vértices y aristas de un Grafo Dirigido.  
- RF4 - Conocer la Matriz de Adyacencia de un Grafo Dirigido.  
- RF5 - Conocer la matriz de Incidencia de un Grafo Dirigido.  
- RF6 - Indicar e imprimir la ruta entre dos vértices de un Grafo Dirigido  
- RF7 - Indicar e imprimir la ruta mínima por el algoritmo de Dijkstra de un Grafo Dirigido.  
- RF8 - Indicar e imprimir el costo de ruta mínima por el algoritmo de Dijkstra de un Grafo Dirigido.  
- RF9 - Indicar e imprimir el circuito Euleriano de un Grafo Dirigido.  
- RF10 - Indicar e imprimir el circuito Hamiltoniano de un Grafo Dirigido.  
- RF11 - Indicar e imprimir el camino Euleriano de un Grafo Dirigido.  
- RF12 - Indicar e imprimir el camino Hamiltoniano de un Grafo Dirigido.  
- RF13 - Indicar e imprimir la Búsqueda en Profundidad en un Grafo Dirigido.  
- RF14 - Indicar e imprimir la Búsqueda en Anchura en un Grafo Dirigido. RF15 - Pintar el Grafo Dirigido.  
  
**Implementación de un Simulador para Grafos:**  
El Simulador para Grafos posee las operaciones indicadas por su menú de opciones dentro del mismo:  
  

![](/assets/images/graph/grafo_38.jpg)