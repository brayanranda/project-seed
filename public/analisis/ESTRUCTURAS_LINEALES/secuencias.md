# __COSTO OPERACIONAL Y COMPLEJIDAD (SECUENCIAS)__

[CODIGO FUENTE (SECUENCIAS)](https://gitlab.com/Yoner_Silva/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/Secuencia.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

***

## __1. Constructor (Secuencia)__

```java
/**
 * Constructor con parametros de la clase secuencia. <br>
 * <b>post: </b> Se construye una Secuencia vacia. <br>
 * @param n es de tipo integer que contiene el tamaño en capacidad de la Secuencia. <br>
 */
public Secuencia(int n) {
          1
    if (n <= 0) {
        //Mejor de los casos
        System.err.println("Tamaño de secuencia no valido!");
        return;
    }
    //Peor de los casos
            1  1  1
    Object r[] = new Object[n];
         1
    cant = 0;
                1   1
    this.vector = (T[]) r;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1$

    $T({n}) = 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __2. Insertar Elemento (insertar)__

```java
/**
 * Metodo que inserta un nuevo elemento a la secuencia. <br>
 * <b>post: </b> Se inserto un elemento en la Secuencia.<br>
 * @param elem es de tipo T que contiene el elemento a insertar
 */
public void insertar(T elem) {
                   1
    if (this.cant >= this.vector.length)
        //Mejor de los casos
        System.err.println("No hay más espacio!");
    else
        //Peor de los casos
                        2        1
        this.vector[this.cant++] = elem;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 2 + 1$

    $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __3. Eliminar Elemento (eliminar)__

```java
/**
 * Metodo que elimina un elemento a la secuencia. <br>
 * <b>post: </b> Se elimino un elemento en la Secuencia.<br>
 * @param elem es de tipo T que contiene el elemento a eliminar
 */
public void eliminar(T elem) {
        1     1
    boolean e = false;
          2    1      1      1             2    
    for (int i = 0, j = 0; i < this.cant; i++) {
        //Peor de los casos
            1                 2
        if (!this.vector[i].equals(elem)) {
                           1
            this.vector[j] = vector[i];
             2
            j++;
        } else {
            //Mejor de los casos
              1
            e = true;
                           1
            this.vector[j] = null;
        }
    }
        1
    if (e)
             2
        this.cant--;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 2 + 1 + 1 + 1 + \sum_{i=0}^{n-1}( 1 + 2 + 1 + 2 + 1 + 2 ) + 1 + 2$

    $T({n}) = 1 + 1 + 2 + 1 + 1 + 1 + n( 1 + 2 + 1 + 2 + 1 + 2 ) + 1 + 2$

    $T({n}) = 7 + n( 9 ) + 3$

    $T({n}) = 9n + 10$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __4. Eliminar Elemento por Posición (eliminarP)__

```java
/**
 * Metodo que elimina un elemento a la secuencia dada su posicion. <br>
 * <b>post: </b> Se elimino un elemento en la Secuencia.<br>
 * @param pos es de tipo int que contiene la posicion del elemento a eliminar
 */
public void eliminarP(int pos) {
            1    1     1
    if (pos < 0 || pos > this.cant) {
        //Mejor de los casos
        System.err.println("Indíce fuera de rango!");
        return;
    }
    //Peor de los casos
       1      1
    boolean e = false;
          2    1      1      1             2 
    for (int i = 0, j = 0; i < this.cant; i++) {
               1
        if (i != pos) {
            //Peor de los casos
                           1
            this.vector[j] = vector[i];
             2
            j++;
        } else {
            //Mejor de los casos
              1
            e = true;
                           1
            this.vector[j] = null;
        }
    }
        1
    if (e)
              2
        this.cant--;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + \sum_{i=0}^{n-1}( 1 + 1 + 2 + 1 + 2 ) + 1 + 2$

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + n( 1 + 1 + 2 + 1 + 2 ) + 1 + 2$

    $T({n}) = 10 + n( 7 ) + 3$

    $T({n}) = 7n + 13$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __5. Vaciar Contenido (vaciar)__

```java
/**
 * Metodo que vacia la secuencia. <br>
 * <b>post:</b> La Secuencia se encuentra vacia.
 */
public void vaciar() {
    //Peor de los casos
          1    1      1             2
    for (int i = 0; i < this.cant; i++)
                       1
        this.vector[i] = null;
              1
    this.cant = 0;
} 
```

* ### __Costo Operacional__ 

    $T({n}) = 1 + 1 + 1 + \sum_{i=0}^{n-1}( 1 + 1 + 2 ) + 1$

    $T({n}) = 1 + 1 + 1 + n( 1 + 1 + 2 ) + 1$

    $T({n}) = 3 + n( 4 ) + 1$

    $T({n}) = 4n + 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __6. Obtener Elemento por Posición (get)__

```java
/**
 * Metodo que retorna un objeto tipo T de la secuencia dada la posición. <br>
 * <b>post:</b> Se ha retornado un elemento de la Secuencia dada su posicion<br>
 * @param i es de tipo integer y contiene la posicion en la secuencia. <br>
 * @return un tipo T que contiene el elemento del nodo en la posicion indicada <br>
 */
public T get(int i) {
          1    1   1
    if (i < 0 || i > this.cant) {
        //Mejor de los casos
        System.err.println("Indíce fuera de rango!");
        return (null);
    } else
        //Peor de los casos
           1
        return (this.vector[i]);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1$

    $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __7. Modificar Elemento de una Posición (set)__

```java
/**
 * Metodo que cambia un elemento de la secuencia en la posición indicada , por otro. <br>
 * <b>post:</b> Se ha modificado un elemento de la Secuencia.<br>
 * @param i de tipo integer que contiene la posicion de la secuencia que se va ha cambiar.<br>
 * @param nuevo Representa el nuevo objeto que reemplazara al objeto editado. <br>
 */
public void set(int i, T nuevo) {
          1    1   1
    if (i < 0 || i > this.cant) {
        //Mejor de los casos
        System.err.println("Indíce fuera de rango!");
        return;
    }
    //Peor de los casos
               1
    if (nuevo == null) {
        //Mejor de los casos
        System.err.println("No se pueden ingresar datos nulos!");
        return;
    }
    //Peor de los casos
                   1
    this.vector[i] = nuevo;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1$

    $T({n}) = 5$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __8. Consultar Existencia de un Elemento (esta)__

```java
/**
 * Metodo que recibe un un elemento y comprueba si existe en la secuencia. <br>
 * <b>post:</b> Se ha retornado true si el elemento se encuentra en la Secuencia.<br>
 * @param elem es de tipo T y contiene el elemnto que se va ha buscar. <br>
 * @return un tipo boolean, retorna true si el objeto existe y false en caso contrario.
 */
public boolean esta(T elem) {
    //Peor de los casos
           1   1      1             2
    for (int i = 0; i < this.cant; i++)
                             2
        if (this.vector[i].equals(elem))
            //Mejor de los casos
            return true;
    //Mejor de los casos
          1
    return false;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + \sum_{i=0}^{n-1}( 2 + 1 + 2 ) + 1$

    $T({n}) = 1 + 1 + 1 + n( 2 + 1 + 2 ) + 1$

    $T({n}) = 3 + n( 5 ) + 1$

    $T({n}) = 5n + 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __9. Obtener Indice de Posición de un Elemento (getIndice)__

```java
/**
 * Metodo que permite conocer el indice de un Elemento dentro de la Secuencia. <br>
 * <b>post:</b> Se ha retornado el indice del elemento dentro de la Secuencia. <br>
 * @param elem Representa el elemento al cual se le quiere determinar el indice en la Secuencia. <br>
 * @return Un objeto de tipo (int) con la posicion del elemento dentro de la Secuencia.
 */
public int getIndice(T elem) {
    //Peor de los casos
           1   1      1             2
    for (int i = 0; i < this.cant; i++)
                             2
        if (this.vector[i].equals(elem))
            //Mejor de los casos
            return (i);
    //Mejor de los casos
         1
    return (-1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + \sum_{i=0}^{n-1}( 2 + 1 + 2 ) + 1$

    $T({n}) = 1 + 1 + 1 + n( 2 + 1 + 2 ) + 1$

    $T({n}) = 3 + n( 5 ) + 1$

    $T({n}) = 5n + 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __10. Obtener la Cantidad Lógica Total de Elementos (getTamanio)__

```java
/**
 * Metodo que retorna el tamaño lógico de la secuencia, esto es el numero de datos almacenados. <br>
 * <b>post:</b> Se ha retornado el numero de elementos dentro de la secuencia.<br>
 * @return un tipo integer que contiene el tamaño lógico de la secuencia
 */
public int getTamanio() {
           1
    return this.cant;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __11. Consultar Existencia de Elementos (esVacia)__

```java
/**
 * Metodo que permite conocer si la Secuencia esta vacia. <br>
 * <b>post:</b> Se ha retornado true o false dependiendo si la Secuencia esta vacia.<br>
 * @return de tipo boolean true indica que la Secuencia esta vacia.
 */
public boolean esVacia() {
          1            1
    return (this.cant == 0);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __12. Obtener la Cantidad Real Total de Elementos (getCapacidad)__

```java
/**
 * Metodo que retorna el tamaño real de la secuencia, esto es, el length del vector con o sin elementos. <br>
 * <b>post:</b> Se ha retornado la capacidad de la Secuencia para guardar elementos.<br>
 * @return un tipo integer que contiene el tamaño real de la secuencia
 */
public int getCapacidad() {
        1
    return (this.vector.length);
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __13. Imprimir Contenido (toString)__

```java
/**
 * Metodo que retorna el contenido de la secuencia en una cadena String. <br>
 * <b>post:</b> Se retorno la representacion en String de la Secuencia. <br>
 * @return de tipo String y contiene el String de datos de la secuencia
 */
@Override
public String toString() {
              2      1
    if (`11¬this.esVacia()`)
        //Mejor de los casos
        return "Secuencia vacia!";
    //Peor de los casos
      1        1         
    String msg = "Secuencia -> | ";
          1    1      1             2
    for (int i = 0; i < this.cant; i++)
            2                    1       1
        msg += this.vector[i].toString() + " | ";
        1
    return (msg);
}
```

* ### __Costo Operacional__

    $T({n}) = 2 + 1 + 1 + 1 + 1 + 1 + 1 + \sum_{i=0}^{n-1}( 2 + 1 + 1 + 1 + 2) + 1$

    $T({n}) = 2 + 1 + 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 2) + 1$

    $T({n}) = 8 + n( 7 ) + 1$

    $T({n}) = 7n + 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la estructura Secuencia obta en el mejor de los casos a ser constante y en el peor de los casos a ser lineal. Teniendo en cuenta que su comportamiento lineal es en base a "this.cant", esté mismo se puede considerar su "n" para saber el coste operacional de cada algoritmo.
