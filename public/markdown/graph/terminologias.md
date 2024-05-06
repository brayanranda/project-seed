# Terminología Básica para Grafos No Dirigidos

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
