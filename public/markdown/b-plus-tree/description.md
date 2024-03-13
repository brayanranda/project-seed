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

  
**Operación de búsqueda**  
Para buscar un registro en un árbol B+ a partir de su clave, primero hay que recorrer todo el árbol del índice, comparando los valores de clave de cada nodo y tomando el descendiente adecuado, tal y como se realiza en la operación de búsqueda de un registro en un árbol B. Ahora, la diferencia fundamental consiste en que al estar todos los registros en los bloques de datos, es necesario que la búsqueda llegue siempre a un nodo hoja, que es donde se encuentra la dirección del bloque donde puede estar el registro almacenado. Una vez localizado el bloque, se llevará a memoria, donde se realiza la búsqueda del registro.

![descripcion operacion insertar](/assets/images/b-plus-tree/arbolBMas_6.jpg)

**Ejemplo de Insertar**  
Se busca un registro con clave “86” en el árbol B+ de orden 4. Empezamos comparando con la clave almacenada en el nodo raíz. Como es mayor, seguimos la búsqueda por su hijo derecho; compararamos con ”78”, como 78<86 continuamos con la hoja que contiene las claves {“80”,“84”}. Comparando, 80 < 84 < 86, seleccionamos el tercer apuntador de esta hoja, que nos lleva al último bloque del conjunto secuencia. En color verde se indica la secuencia de apuntadores que se ha seguido. Una vez obtenida la posición del bloque de datos se lleva a memoria donde se realiza la búsqueda del registro.

![Ejemplo de búsqueda](/assets/images/b-plus-tree/arbolBMas_7.jpg)

  
  
**Operación de inserción**  
Se quiere insertar un nuevo registro en el archivo de datos. Para insertar un nuevo registro en un árbol B+, hay que localizar, a partir de su clave, el bloque en el que debe almacenarse, de modo similar a una operación de búsqueda, recorriendo el árbol desde el página raíz hasta la página hoja adecuada. Una vez encontrada la página indica, si aún no se ha ocupado su máximo número de registros, se inserta el elemento de forma ordenada en la página hoja.  

Si el bloque está completo, se produce “desbordamiento”, se resolverse "rompiendo" la página y repartiendo equitativamente los registros entre dos nuevas páginas hojas.  
  
Por tanto, una vez obtenido la página, las estrategias son:  
Si hay espacio en la página:

1.  Se almacena el registro en la página de forma ordenada.
2.  Se reescribe nuevamente la página en disco.

Si no hay espacio en la página:

1.  Se crea una nueva página en la estructura y se reparten los datos de la página entre ambas, insertando el dato en la posición adecuada.
2.  Se actualiza el índice: al tener una página más de registros, hay que insertar, en el árbol B+ el índice, una clave separadora que diferencie los datos de estas dos páginas consecutivas; por convenio ésta se obtiene a partir de la primera clave del segundo bloque.

![proceso de insertar](/assets/images/b-plus-tree/arbolBMas_8.jpg)

**Operación de Eliminar**  
Para eliminar un dato de un árbol B+, hay que recorrer el árbol hasta llegar a la hoja que contiene la dirección del bloque en el que se encuentra. Los bloques del conjunto secuencia también deben tener un número mínimo de registros almacenados, por lo que pueden crearse situaciones de “insuficiencia” dentro de la páginas, similares a las de los nodos del conjunto índice. En ese caso, se resuelven, mediante redistri- bución de registros entre bloques adyacentes, y si no es posible, concatenando los registros de los dos bloques. En consecuencia, tras la eliminación:

*   Si el bloque queda con al menos la mitad de los registros:
    1.  No habrá que hacer ningún cambio; sólo se reescribir´a el bloque en disco.
    2.  Se comprueba si la clave separadora de este bloque y el siguiente sigue siendo válida. En caso de no serlo, habrá que cambiarla dentro del índice.
*   Si el bloque queda ocupado con menos de la mitad de su capacidad:
    1.  Como en una situación de insuficiencia en un nodo de un árbol B+, primero se intenta redistribuir los registros entre ese bloque y un bloque adyacente, y si no es posible, entonces se concatena en las doa páginas.
    2.  Actualizar el índice: en caso de haber hecho redistribución, hay que cambiar la clave separadora entre las páginas. Si se ha hecho concatenación tendremos una página menos, y por tanto, hay que eliminar la clave separadora del índice, resolviendo las posibles situaciones de “insuficiencia” en las páginas.