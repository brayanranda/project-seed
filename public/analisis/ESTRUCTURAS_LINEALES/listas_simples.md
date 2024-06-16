# __COSTO OPERACIONAL Y COMPLEJIDAD (LISTAS SIMPLES)__

[CODIGO FUENTE (LISTAS SIMPLES)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ListaS.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

Cuando se valida el valor de un metodo con retorno booleano, se suma la validacion + el costo del metodo

***

## __1. Constructor (ListaS)__

```java
/**
 * Constructor de la Clase Lista Simple Enlazada, por defecto la cabeza es NULL. <br>
 * <b>post: </b> Se construyo una lista vacia.
 */
public ListaS() {
                1
    this.cabeza = null;
                 1
    this.tamanio = 0;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __2. Insertar Elemento al Inicio (insertarAlInicio)__

```java
/**
 * Metodo que inserta un Elemento al Inicio de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al inicio de la Lista.<br>
 * @param x Informacion que desea almacenar en la Lista. La informacion debe ser un Objeto.
 */
public void insertarAlInicio(T x) {
                1    1
    this.cabeza = new Nodo < T > (x, this.cabeza);
            2
    this.tamanio++;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 2$

    $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __3. Insertar Elemento al Final (insertarAlFinal)__

```java
/**
 * Metodo que inserta un Elemento al Final de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al final de la Lista.<br>
 * @param x Información que desea almacenar en la Lista. 
 */
public void insertarAlFinal(T x) {
                     1
    if (this.cabeza == null)
        //Mejor de los casos
        this.insertarAlInicio(x);
    else {
        try {
                   1       1      (5(n) + 11)         1
            Nodo < T > ult = `15¬this.getPos(this.tamanio - 1)`;
                    1
            if (ult == null)
                return;
                  1         1              
            ult.setSig(new Nodo < T > (x, null));
                   2
            this.tamanio++;
        } catch (ExceptionUFPS e) {
            //Mejor de los casos
            System.err.println(e.getMensaje());
        }
    }
}
```

* ### __Costo Operacional__

    $T({n})= 1 + 1 + 1 + ( 5(n) + 11 ) + 1 + 1 + 1 + 1 + 2$

    $T({n})= 3 + 5(n) + 17$

    $T({n}) = 5(n) + 20$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __4. Insertar Elemento Ordenado a la Cabeza (insertarOrdenado)__

```java
/**
 * Metodo que inserta un Elemento  de manera Ordenada desde la cabeza de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento en la posicion segun el Orden de la Lista.<br>
 * @param info Información que desea almacenar en la Lista de manera Ordenada.
 */
public void insertarOrdenado(T info) {
               3 
    if (`10¬this.esVacia()`)
        //Mejor de los casos
        this.insertarAlInicio(info);
    else {
        //Peor de los casos
               1     1
        Nodo < T > x = this.cabeza;
               1     1
        Nodo < T > y = x;
                 1
        while (x != null) {
                1                 1            KTE
            Comparable comparador = (Comparable) info;
             1      1               KTE         1
            int rta = comparador.compareTo(x.getInfo());
                    1
            if (rta < 0)
            // Se ejecuta cuando se encuentre el orden, por tanto suma fuera del ciclo una vez
                  1
                break;

            // el peor de los casos sigue si no se ejecuta el break
              1
            y = x;
              1     1
            x = x.getSig();
        }
              1
        if (x == y)
            //Mejor de los casos
            this.insertarAlInicio(info);
        else {
            //Peor de los casos
                1         1
            y.setSig(new Nodo < T > (info, x));
                    2
            this.tamanio++;
        }
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}(1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 8 + n(2 + KTE + 2 + KTE + 6) + 7$

    $T({n}) = KTE(n) + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __5. Eliminar Elemento segun la Posicion (eliminar)__

```java
/**
 * Metodo que elimina un elemento dada una posición. <br>
 * <b>post: </b> Se elimino el dato en la posicion de la lista indicada.<br>
 * @param i Una posición en la Lista <br>
 * @return El elemento que elimino. Si la posición no es válida retorna NULL.
 */
public T eliminar(int i) {
               3
    if (`10¬this.esVacia()`)
        //Mejor de los casos
        return null;
    //Peor de los casos
           1     1
    Nodo < T > t = this.cabeza;
           1
    if (i == 0)
        //Mejor de los casos
        this.cabeza = this.cabeza.getSig();
    else {
        //Peor de los casos
        try {
                   1     1    (5(n) + 11)     1
            Nodo < T > y = `15¬this.getPos(i - 1)`;
              1     1
            t = y.getSig();
                1        1
            y.setSig(t.getSig());
        } catch (ExceptionUFPS e) {
            //Mejor de los casos
            System.err.println(e.getMensaje());
            return (null);
        }
    }
        1
    t.setSig(null);
           2
    this.tamanio--;
       1         1
    return (t.getInfo());
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + ( 5(n) + 11 ) + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1$

    $T({n}) = 8 + 5(n) + 21$

    $T({n}) = 5(n) + 29$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __6. Eliminar Todos los Elementos (vaciar)__

```java
/**
 * Metodo que elimina todos los datos de la Lista Simple. <br>
 * <b>post:</b> La Lista Simple se encuentra vacia.
 */
public void vaciar() {
                1
    this.cabeza = null;
                 1
    this.tamanio = 0;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __7. Obtener Elemento segun la Posicion (get)__

```java
/**
 * Metodo que retorna el elemento que se encuentre en una posicion dada. <br>
 * <b>post: </b> Se retorno el elemento indicado por la posicion recibida.<br>
 * @param i Una Posición dentro de la Lista. <br>
 * @return El objeto que se encuentra en esa posición. El objeto <br>
 * retorna su valor parametrizada "T". Si la posición no se <br>
 * encuentra en la Lista retorna null.
 */
public T get(int i) {
    try {
        //Peor de los casos
               1     1      (5n + 11) 
        Nodo < T > t = `15¬this.getPos(n)`;
            1       1
        return (t.getInfo());
    } catch (ExceptionUFPS e) {
        //Mejor de los casos
        System.err.println(e.getMensaje());
        return (null);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 11) + 1 + 1$

    $T({n}) = 2 + 5n + 13$

    $T({n}) = 5n + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __8. Modificar Elemento segun la Posición (set)__

```java
/**
 * Metodo que edita el elemento que se encuentre en una posición dada. <br>
 * <b>post: </b> Se edito la informacion del elemento indicado por la posicion recibida.<br>
 * @param i Una Posición dentro de la Lista. <br>
 * @param dato es el nuevo valor que toma el elmento en la lista
 */
public void set(int i, T dato) {
    try {
        //Peor de los casos
               1     1      (5n + 11)
        Nodo < T > t = `15¬this.getPos(i)`;
            1
        t.setInfo(dato);
    } catch (ExceptionUFPS e) {
        //Mejor de los casos
        System.err.println(e.getMensaje());
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 11) + 1$

    $T({n}) = 2 + 5n + 12$

    $T({n}) = 5n + 14$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __9. Obtener Cantidad de Elementos (getTamanio)__

```java
/**
  * Metodo que obtiene la cantidad de elementos de la Lista. <br>
  * <b>post: </b> Se retorno el numero de elementos existentes en la Lista.<br>
  * @return int con el tamaño de la lista. Si la Lista esta vacía retorna 0
  */
public int getTamanio() {
            1
    return (this.tamanio);
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __10. Consultar Existencia de Elementos (esVacia)__

```java
/**
 * Metodo que verifica si la Lista esta o no vacia. <br>
 * <b>post: </b> Se retorno true si la lista se encuentra vacia, false si tiene elementos.<br>
 * @return true si la lista esta vacia , false si contiene elementos.
 */
public boolean esVacia() {
       1                 1
    return (this.cabeza == null);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __11. Consultar Existencia de un Elemento (esta)__

```java
/**
 * Metodo que busca un elemento en la lista si lo encuentra retorna true, de lo contrario false. <br>
 * <b>post: </b> Se retorno true si se encontro el elementos buscado, false si no fue asi.<br>
 * @param info el cual contiene el valor del parametro a buscar en la lista. <br>
 * @return un boolean, si es true encontro el dato en la lista y si es false no lo encontro.
 */
public boolean esta(T info) {
        1        (8n + 9)              1   
    return (`16¬this.getIndice(info)` != -1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + ( 8n + 9 ) + 1$

    $T({n}) = 1 + 8n + 10$

    $T({n}) = 8n + 11$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __12. Obtener Iterator (iterator)__

```java
/**
 * Metodo que crea para la lista simple un elemento Iterator.
 * <b>post: </b> Se retorno un Iterator para la Lista.<br>
 * @return Un iterator tipo <T> de la lista.
 */
@Override
public Iterator < T > iterator() {
       1           1         
    return new IteratorLS < T > (this.cabeza) {};
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __13. Obtener Contenido en un Vector (aVector)__

```java
/**
 * Metodo que permite retornar la informacion de una Lista en un Vector. <br>
 * @return Un vector de Objetos con la informacion de cada posicion de la Lista.
 */
public Object[] aVector() {
              3
    if (`10¬this.esVacia()`)
    //Mejor de los casos
        return (null);
    //Peor de los casos 
           1        1       1             1
    Object vector[] = new Object[`9¬this.getTamanio()`];
               1      1          2
    Iterator < T > it = `12¬this.iterator()`;
      1   1
    int i = 0;
               KTE
    while (it.hasNext())
                2   1    KTE
        vector[i++] = it.next();
           1
    return (vector);
}
```

* ### __Costo Operacional__
    
    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + KTE + \sum_{x=0}^{n-1}( 2 + 1 + KTE + 1 + KTE ) + KTE + 1$

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + KTE + n( 2 + 1 + KTE + 1 + KTE ) + KTE + 1$

    $T({n}) = 14 + n( KTE ) + KTE$

    $T({n}) = KTE(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __14. Imprime Contenido (toString)__

```java
/**
 * Metodo que retorna toda la informacion de los elementos en un String de la Lista. <br>
 * <b>post: </b> Se retorno la representacion en String de la Lista. 
 * El String tiene el formato "e1->e2->e3..->en", donde e1, e2, ..., en son los los elementos de la Lista. <br>
 * @return Un String con los datos de los elementos de la Lista
 */
@Override
public String toString() {
              3
    if (`10¬this.esVacia()`)
    //Mejor de los casos
        return ("Lista Vacia");
    //Peor de los casos
        1    1
    String r = "";
                1     1                1          1     1
    for (Nodo < T > x = this.cabeza; x != null; x = x.getSig())
           2     1        1       1  
        r += x.getInfo().toString() + "->";
        1
    return (r);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}( 2 + 1 + 1 + 1 + 1 + 1 + 1 ) + 1 + 1 + 1 + 1$

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 1 + 1 + 1 ) + 1 + 1 + 1 + 1$

    $T({n}) = 8 + n( 8 ) + 4$

    $T({n}) = 8(n) + 12$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __15. Obtener el elemento de una Posición (getPos)__

```java
/**
 * Metodo privado de la clase que devuelve al elemento en la posicion. <br>
 * <b>post: </b> Se retorno el Nodo que se encuentra en esa posicion indicada. <br> 
 * @param i Una posici�n en la Lista. <br>
 * @return El elemento encontrado. Si la posici�n no es v�lida
 * retorna null
 */
private Nodo < T > getPos(int i) throws ExceptionUFPS {
              3              1   1               1   1
    if (`10¬this.esVacia()` || i > this.tamanio || i < 0) {
        //Mejor de los casos
        throw new ExceptionUFPS("El índice solicitado no existe en la Lista Simple");
    }
    //Peor de los casos
           1     1
    Nodo < T > t = this.cabeza;
             1
    while (i > 0) {
          1     1
        t = t.getSig();
         2
        i--;
    }
         1
    return (t);

    // en algun punto i llega a valer n, entonces i = n 
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + \sum_{i > 0}^{n-1}(1 + 1 + 2 + 1) + 1 + 1$

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 2 + 1) + 1 + 1$

    $T({n}) = 10 + n( 5 ) + 1 + 1$

    $T({n}) = 5(n) + 12$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __16 Obtener la Posición de un Elemento (getIndice)__

```java
/**
 * Metodo que obtiene la posición de un objeto en la Lista. <br>
 * <b>post: </b> Se retorno la posicion en la que se encuentra el dato buscado. 
 * @param info Objeto que se desea buscar en la Lista <br>
 * @return un int con la posición del elemento,-1 si el elemento no se 
 * encuentra en la Lista
 */
public int getIndice(T info) {
      1   1
    int i = 0;
                1     1                1          1    1
    for (Nodo < T > x = this.cabeza; x != null; x = x.getSig()) {
                1          2
        if (x.getInfo().equals(info))
            //Mejor de los casos
            return (i);
         2
        i++;
    }
    //Peor de los casos
          1
    return (-1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}( 1 + 2 + 2 + 1 + 1 + 1 ) + 1 + 1 + 1 + 1$

    $T({n}) = 1 + 1 + 1 + 1 + 1 + n( 1 + 2 + 2 + 1 + 1 + 1 ) + 1 + 1 + 1 + 1$ 

    $T({n}) = 5 + n( 8 ) + 4$

    $T({n}) = 8(n) + 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la estructura Secuencia obta en el mejor de los casos a ser constante y en el peor de los casos a ser lineal. Teniendo en cuenta que su comportamiento lineal es en base a "this.cant", esté mismo se puede considerar su "n" para saber el coste operacional de cada algoritmo.
