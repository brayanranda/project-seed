# Operaciones {"subTitle":"Árbol B+"}
  
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