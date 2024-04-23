# Tabla Hash {"subTitle":"Estructuras Lineales"}

## Historia

La idea de tablas hashing se presento de forma independiente en diferentes lugares.  
En Enero de 1953, Hans Peter Luhn escribió un memorando interno en IBM en el cual explicaba que había utilizado hashing con encadenamiento.  
Gene Myron Amdahl, Erwin M. Boehme, Nathan Rochester y A. L. Samuel implementaron un programa usando tablas Hash al mismo tiempo. El concepto de direccionamiento abierto con probabilidad lineal es acreditado a Amdahl, pero Ershov (en Rusia) tenia la misma idea.  

## Definición

Una tabla hash o mapa hash es una estructura de datos que asocia llaves o claves con valores. Colección de elementos, cada uno de los cuales tiene una clave y una información asociada. Esta aproximación consiste en proceder, no por comparaciones entre valores clave, sino encontrando alguna función h(k), función de dispersión, que nos dé directamente la localización de la clave k en la tabla. La función de dispersión se aplica a lo que habitualmente se denomina como la clave del elemento (y que en ocasiones será él mismo). El objetivo será encontrar una función hash que provoque el menor número posible de colisiones (ocurrencias de sinónimos), aunque esto es solo un aspecto del problema, el otro será el de diseñar métodos de resolución de colisiones cuando éstas se produzcan.  
  
La operación principal que soporta de manera eficiente es la búsqueda: permite el acceso a los elementos (teléfono y dirección, por ejemplo) almacenados a partir de una clave generada usando el nombre, número de cuenta o id.  
  
Funciona transformando la clave con una función hash en un hash, un número que la tabla hash utiliza para localizar el valor deseado.  
  
Desde un “gran” Universo sólo un número reducido de claves serán consideradas, en la cual cada posicion o slot de la tabla corresponde a una llave en el universo.  
  
Las operaciones básicas que se realizan con las Tablas Hash son:  

- Insertar Llave
- Buscar Llave
- Eliminar Llave El costo para realizar alguna de estas operaciones en una Tabla Hash es de orden O(1).

  
**Función de Dispersión (Hashing)**

- La Función de Dispersión convierte un Objeto en un Entero (valor Hash) adecuado para indexar la Tabla en la que se guardará el Objeto.
- Java dispone de mecanismos estándar para obtener valores hash a partir de cualquier Objeto:
- En la clase Object está definido el método: public int hashCode()
- Este método devuelve un valor entero a partir del objeto sobre el que se invoca (obtenido a partir de la dirección de memoria del objeto sobre el que se invoca).
- Dado que el método está implementado en la raíz de la jerarquía de herencia, cualquier clase dispone de una implementación por defecto.

La función de dispersión (hash(x)) debe calcularse en tiempo constate y distribuir de forma uniforme los objetos a lo largo de la tabla.

![ejemplo de una mala función hash](/assets/images/hash-table/tablaH_3.jpg)

La Tabla Hash debe tener un tamaño relativamente grande para reducir el número de colisiones.**Tabla Hash de una sola entrada: ¡N-1 colisiones para N datos!.** Se recomienda que m sea un numero primo y que este alejado de una potencia de dos (2).

![Ejemplo Tabla Hash](/assets/images/hash-table/tablaH_4.jpg)

**Formas de Resolver las Colisiones**  

- Resolución Mediante Exploración:
    - Trata de buscar otra posición libre en la tabla para albergar la inserción del elemento.
        - Exploración Lineal.
            - Visita la siguiente casilla. Si está libre, realiza la inserción. Si no, visita la siguiente casilla.
        - Exploración Cuadrática
            - Visita la casilla i2 posiciones más allá de la que causó la colisión. Si está libre, realiza la inserción. Si no, repite el proceso hasta encontrar una libre.
- Resolución Mediante Encadenamiento Enlazado:
    - En cada posición de la tabla se mantiene una Lista Enlazada en la que se van insertando los elementos cuyo valor de hash les asigna la misma posición.

**Hashing Enlazado**  
El Hashing Enlazado usa un vector de Listas Enlazadas: Aquellos objetos que reciban un determinado valor de Hash, se insertarán en la lista enlazada correspondiente. El encadenamiento es un enfoque sencillo y eficaz para gestionar las colisiones.

- En una tabla hash con encadenamiento, las entradas de la tabla (normalmente llamadas slots o buckets, no contienen los propios objetos almacenados, sino listas enlazadas de los objetos.
- Los objetos con claves colisionadas se insertan el la misma lista.
- La inserción, la búsqueda y la eliminación se convierten en procesos de 2 pasos:

- Utilizar la función hash para seleccionar el slot adecuado.
- Realizar la operación necesaria en la lista enlazada a la que se hace referencia en dicho slot.

El hash o hashing consiste en convertir determinada información en otra a partir de una función o un método de encriptamiento, de esta manera se expresa la información de otra manera o se expresa con una clave, el método o función de encriptamiento es unidireccional, es fácil aplicar la función hash pero no se puede revertir , es decir no se puede a partir de la clave llegar a la información original, al menos que se conozca la función o método.

![Tabla Hash](/assets/images/hash-table/tablaH_5.jpg)

**Colisiones**  
Se puede dar el caso de que una información a insertar en la tabla presente el mismo valor hash, por ende habrán dos valores queriendo entrar a la misma posición de la tabla. Hay diversas soluciones para este problema, una de ellas es el encadenamiento.

![Tabla Hash](/assets/images/hash-table/tablaH_6.jpg)

**Factor de carga**  
El factor de carga es igual a la cantidad de elementos a insertar en la tabla dividida en la capacidad de esta misma, entre más diminuto sea el factor de carga se asegura que todas las operaciones realizadas en esta estructura serán de costo O(1).  
  

**Factor de carga = Elementos / Capacidad**

  
Entre más grande sea el valor del factor de carga más colisiones se presentaran, por lo tanto se recomienda crear una tabla hash con una capacidad mucho mayor que la de la cantidad de elementos.

![Factor de Carga](/assets/images/hash-table/tablaH_7.jpg)

**Hashing abierto  
El hashing abierto o encadenamiento**, es una implementación en la cual se tiene un array que en cada posición se apunta a una lista enlazada en la cual se almacenan las informaciones que contienen la misma clave, es decir los elementos se añaden al inicio en la lista enlazada.

![Tabla Hash](/assets/images/hash-table/tablaH_8.jpg)

**Hashing cerrado  
El hashing cerrado**, es una implementación en la cual se tiene un array en el cual se almacena la información en cada slot según lo indique la clave, pero al momento de producirse una colisión se recorre desde la posición que indique la clave hasta el final del array, buscando un slot que este libre para ser insertado. (Lo que lo diferencia es que no maneja punteros).

![hashing cerrado](/assets/images/hash-table/tablaH_9.jpg)