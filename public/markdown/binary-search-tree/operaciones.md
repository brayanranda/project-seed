# Operaciones {"subTitle":"Árboles Binarios de Búsqueda"}

A continuación definiremos el Tipo Abstracto de Datos asociado a los árboles binarios de búsqueda. Para no alargar la descripción del mismo supondremos incluidas las operaciones del TAD ArbolB.  
  
**Búsqueda de un Elemento:**  
La operación de búsqueda en un árbol binario de búsqueda es bastante sencilla de entender. Supongamos que buscamos un elemento x en el árbol. Lo primero que haremos será comprobar si se encuentra en el nodo raíz. Si no es así, si el elemento buscado es menor que el contenido en el nodo raíz sabremos que, de estar en el árbol, se encuentra en el subárbol izquierdo. Si el elemento buscado es mayor que el contenido en el nodo raíz sabremos que, de estar en el árbol, se encuentra en el subárbol derecho. Para continuar la búsqueda en el subárbol adecuado aplicaremos recursivamente el mismo razonamiento. Por lo tanto, el esquema del algoritmo BuscarNodo será el siguiente: 1. Si el valor del nodo actual es igual al valor buscado, lo hemos encontrado. 2. Si el valor buscado es menor que el del nodo actual, deberemos inspeccionar el subárbol izquierdo. 3. Si el valor buscado es mayor que el del nodo actual, deberemos inspeccionar el subárbol derecho.  
  

