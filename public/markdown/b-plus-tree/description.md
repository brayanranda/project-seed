# Árbol B+ {"subTitle":"Árboles Enearios"}

## Descripción

Una variante de los árboles B que permite realizar de forma eficiente tanto el acceso directo mediante clave como el procesamiento en secuencia ordenada de los registros, es la estructura de árbol B+ (propuesta por Knuth \[Knu97b\]). Los árboles B+ almacenan los registros de datos sólo en sus nodos hoja (agrupados en páginas o bloques), y en los nodos interiores y nodo raíz se construye un índice multinivel mediante un árbol B, para esos bloques de datos.  

Los árboles-B+ se han convertido en la técnica mas utilizada para la organización de archivos indizados. La principal característica de estos arboles es que todas las claves se encuentran en las hojas y por lo tanto cualquier camino desde la raíz hasta alguna de las claves tienen la misma longitud.  
  
**Propiedades**  
Un árbol B+ de orden n es una estructura formada por un conjunto de bloques de registros ordenados por clave, que se almacenan a nivel de hoja (llamado conjunto secuencia), y un índice sobre un árbol B de orden n para los bloques de registros (llamado conjunto índice).  
  
Las restricciones de ocupación que determine el orden n del árbol sólo afectarán al conjunto índice pero no a los bloques de registros, a los cuales se les exigirá una ocupación mínima (y una máxima) pero no estará relacionada con el orden del árbol.  
  
Por tanto, las propiedades que estudiamos para los árboles B pueden aplicarse a los árboles B+; la diferencia entre ambos está en el nivel de las hojas. Además, los árboles B+ no almacenan en sus nodos interiores direcciones de registros, sino sólo claves. Los registros se obtienen a nivel de las hojas, donde se encuentran almacenados ordenados dentro de cada bloque. Es decir, los nodos hoja del conjunto índice direccionan los nodos terminales que contienen los datos.  
  
Es de notar que los arboles-B+ ocupan un poco mas de espacio que los arboles-B, y esto ocurre al existir duplicidad en algunas claves. Sin embargo, esto es aceptable si el archivo se modifica frecuentemente, puesto que se evita la operación de reorganización del árbol que es tan costosa en los arboles-B.  
  
Formalmente se define un árbol-B+ de la siguiente manera:  

1.  Cada pagina, excepto la raíz, contiene entre n y 2n elementos.
2.  Cada pagina, excepto la raíz, tiene entre n + 1 y 2n + 1 descendientes. Se utiliza m para expresar el numero de elementos por pagina.
3.  La pagina raíz tiene al menos dos descendientes.
4.  Las paginas hojas están todas al mismo nivel.
5.  Todas las claves se encuentran en las paginas hojas.
6.  Las claves de las paginas raíz e interiores se utilizan como índices.

**Estructura**

*   **Conjunto secuencia:** Está formado por los registros de datos, agrupados dentro de bloques en los que se mantienen ordenados en base a la clave de búsqueda. Estos bloques no tienen por qué almacenarse físicamente en el archivo según la ordenación lógica, por lo que se mantiene una lista doblemente enlazada de bloques, y de este modo poder recuperar ordenados todos los registros de datos recorriendo toda la lista de bloques.
*   **Conjunto índice:** Es un árbol B de orden n que indexa los bloques de registros de datos del conjunto secuencia. En los nodos de este árbol B sólo se almacenan claves de búsqueda y direcciones de nodos descendientes, excepto los nodos hoja, que contienen las direcciones de los bloques con los registros de datos del conjunto secuencia.

![arbol B orde 2](/assets/images/b-plus-tree/arbolBMas_4.jpg)

**Ejemplo de Árbol B+**  
En la siguiente figura se representa un árbol B+ de orden 4. El conjunto índice es un árbol B de orden 4 con tres niveles, y el conjunto secuencia está formado por bloques que almacenan dos registros de datos cada uno.

![árbol bMas](/assets/images/b-plus-tree/arbolBMas_5.jpg)