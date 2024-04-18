# __COSTO OPERACIONAL Y COMPLEJIDAD (LISTAS CIRCULARES SIMPLES)__

[CODIGO FUENTE (LISTAS CIRCULARES SIMPLES)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ListaC.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

Cuando se valida el valor de un metodo con retorno booleano, se suma la validacion + el costo del metodo

***

## __1. Constructor (ListaC)__

```java
/**
 * Constructor de la Clase Lista Circular Enlazada, por defecto la cabeza es NULL. <br>
 * <b>post: </b> Se construyo una lista vacia.
 */
public ListaC() {
                1    1
    this.cabeza = new Nodo < T > (null, null);
                1
    this.cabeza.setSig(cabeza);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1$

    $T({n}) = 3$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __2. Insertar Elemento al Inicio (insertarAlInicio)__

```java
/**
 * Metodo que permite insertar un Elemento al Inicio de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al inicio de la Lista.<br>
 * @param dato Informacion que desea almacenar en la Lista. La informacion
 * debe ser un Objeto.
 */
public void insertarAlInicio(T dato) {
           1     1    1                           1
    Nodo < T > x = new Nodo < T > (dato, cabeza.getSig());
             1
    cabeza.setSig(x);
           2
    this.tamanio++;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __3. Insertar Elemento al Final (insertarAlFinal)__

```java
/**
 * Inserta un Elemento al Final de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al final de la Lista.<br>
 * @param x Representa el dato a Insertar al final de la Lista.
 */
public void insertarAlFinal(T x) {
             6
    if (`10¬this.esVacia()`)
        //Mejor de los casos
        this.insertarAlInicio(x);
    else {
        try {
                1          1       (5n + 15)              1
            Nodo < T > ult = `15¬this.getPos(this.tamanio - 1)`;
                1         1         
            ult.setSig(new Nodo < T > (x, this.cabeza));
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

    $T({n})= 6 + 1 + 1 + (5n + 15) + 1 + 1 + 1 + 2$

    $T({n})= 8 + 5n + 20$

    $T({n}) = 5n + 28$

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
              6
    if (`10¬this.esVacia()`)
        //Mejor de los casos
        this.insertarAlInicio(info);
    else {
            1        1
        Nodo < T > x = this.cabeza;
            1        1
        Nodo < T > y = x;
          1     1
        x = x.getSig();
                 1
        while (x != this.cabeza) {
                   1              1       KTE
            Comparable comparador = (Comparable) info;
               1    1           KTE            1
            int rta = comparador.compareTo(x.getInfo());
                    1
            if (rta < 0)
                // Se ejecuta cuando se encuentre el orden, por tanto suma fuera del ciclo una vez
                  1
                break;
              1  
            y = x;
              1     1
            x = x.getSig();
        }
              1        1
        if (x == cabeza.getSig())
            //Mejor de los casos
            this.insertarAlInicio(info);
        else {
               1        1
            y.setSig(new Nodo < T > (info, x));
                  2
            this.tamanio++;
        }
    }
}
```

* ### __Costo Operacional__ 

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}(1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 2$
    
    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 13 + n(KTE) + 7$

    $T({n}) = KTE(n) + 20$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __5. Eliminar Elemento segun la Posicion (eliminar)__

```java
/**
 * Metodo que permite eliminar un elemento de la lista dada una posicion. <br>
 * <b>post: </b> Se elimino el dato en la posicion indicada de la lista.<br>
 * @param i Posicion del objeto. Debe ir desde 0 hasta el tamaño de la lista menos uno.  <br>
 * @return Retorna el objeto eliminado de la Lista.
 */
public T eliminar(int i) {
    try {
              1
        Nodo < T > x;
               1
        if (i == 0) {
            // Mejor de los casos
            x = this.cabeza.getSig();
            this.cabeza.setSig(x.getSig());
            this.tamanio--;
            return (x.getInfo());
        }
          1      (5n + 15)       1
        x = `15¬this.getPos(i - 1)`;
              1
        if (x == null)
            //Mejor de los casos
            return (null);
           1        1    1
        Nodo < T > y = x.getSig();
           1        1
        x.setSig(y.getSig());
           2
        this.tamanio--;
           1        1
        return (y.getInfo());
    } catch (ExceptionUFPS ex) {
        //Mejor de los casos
        System.err.println(ex.getMensaje());
        return (null);
    }  
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + (5n + 15) + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1$

    $T({n}) = 3 + 5(n) + 26$

    $T({n}) = 5(n) + 29$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __6. Eliminar Todos los Elementos (vaciar)__

```java
/**
 * Metodo que elimina todos los datos de la Lista Circular. <br>
 * <b>post: </b> Elimina todos los datos que contenga la lista circular.<br>
 */
public void vaciar() {
                1
    this.cabeza.setSig(cabeza);
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
 * Metodo que retorna el Objeto de la posicion i. <br>
 * <b>post: </b> Se retorno el elemento indicado por la posicion recibida i.<br>
 * @param i posicion de un elemento de la lista. <br>
 * @return Devuelve el Objeto de la posicion especificada ,null en caso contrario.
 */
public T get(int i) {
    try {
             1       1      (5n + 15)
        Nodo < T > x = `15¬this.getPos(i)`;
              1
        if (x == null)
            //Mejor de los casos
            return (null);
          1          1
        return (x.getInfo());
    } catch (ExceptionUFPS ex) {
      //Mejor de los casos
        System.err.println(ex.getMensaje());
        return (null);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 15) + 1 + 1 + 1$

    $T({n}) = 2 + 5n + 18$

    $T({n}) = 5n + 20$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __8. Modificar Elemento segun la Posición (set)__

```java
/**
 * Modifica el elemento que se encuentre en una posicion dada. <br>
 * <b>post: </b> Se edito la informacion del elemento indicado por la posicion recibida.<br>
 * @param i Una Posici�n dentro de la Lista. <br>
 * @param dato es el nuevo valor que toma el elmento en la lista
 */
public void set(int i, T dato) {
    try {
            1        1     (5n + 15)
        Nodo < T > t = `15¬this.getPos(i)`;
               1
        if (t == null)
        //Independientemente si es nulo o no solo va a ejucutar la linea y salir, por tanto solo se contara uno de los dos para el T(n)
            return; // --> si es null 1 
        t.setInfo(dato); // -- si no es null 1
    } catch (ExceptionUFPS e) {
        //Mejor de los casos
        System.err.println(e.getMensaje());
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 15) + 1 + 1$

    $T({n}) = 2 + 5n + 17$

    $T({n}) = 5n + 19$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __9. Obtener Cantidad de Elementos (getTamanio)__

```java
/**
 * Metodo que devuelve el tamaño de la lista. <br>
 * <b>post: </b> Se retorno el numero de elementos existentes en la Lista.<br>
 * @return un int con el tamaño de la lista
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
 * Metodo que retorna true si la lista esta vacia, false en caso contrario. <br>
 * <b>post: </b> Se retorno true si la lista se encuentra vacia, false si tiene elementos.<br>
 * @return un boolean con true o false en caso de que la lista se encuentre vacia.
 */
public boolean esVacia() {
      1            1        1         1                1  
    return (cabeza == cabeza.getSig() || this.tamanio == 0);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1$

    $T({n}) = 5$

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
      1          (8n + 10)            1
    return (`16¬this.getIndice`(info) != -1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + (8n + 10) + 1$

    $T({n}) = 1 + 8n + 11$

    $T({n}) = 8n + 12$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __12. Obtener Iterator (iterator)__

```java
/**
 * Metodo que crea para la lista circular un elemento Iterator.
 * <b>post: </b> Se retorno un Iterator para la Lista.<br>
 * @return Un iterator tipo <T> de la lista.
 */
@Override
public Iterator < T > iterator() {
       1       1         
    return (new IteratorLC < T > (this.cabeza));
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
             6
    if (`10¬this.esVacia()`)
        //Mejor de los casos
        return (null);
        1           1       1               1
    Object vector[] = new Object[`9¬this.getTamanio()`];
        1             1         2
    Iterator < T > it = `12¬this.iterator()`;
      1   1
    int i = 0;
             1 + KTE
    while (it.hasNext())
                2   1    KTE
        vector[i++] = it.next();
           1
    return (vector);
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1+ KTE + \sum_{i=0}^{n-1}( 2 + 1 + KTE + 1 + KTE ) + (1 + KTE) + 1$

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1+ KTE + n( 2 + 1 + KTE + 1 + KTE ) + (1 + KTE) + 1$

    $T({n}) = 17 + KTE + n( KTE ) + KTE$

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
              6
    if (`10¬this.esVacia()`)
        //MEjor de los casos
        return ("Lista Vacia");
        1    1
    String r = "";
             1        1            1              1        1         1     1
    for (Nodo < T > x = this.cabeza.getSig(); x.getInfo() != null; x = x.getSig())
          2       1          1      1
        r += x.getInfo().toString() + "->";
        1
    return (r);
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}( 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 ) + 1 + 1 + 1 +1$

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 ) + 1 + 1 + 1 +1$

    $T({n}) = 13 + n( 9 ) + 4$

    $T({n}) = 9n + 17$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __15. Obtener el elemento de una Posición (getPos)__

```java
/**
 * Elemento privado de la clase que devuelve al elemento en la posicion. <br>
 * <b>post: </b> Se retorno el Nodo que se encuentra en esa posicion indicada. <br> 
 * @param i es de tipo integer y contiene la posicion del elemento en la lista. <br>
 * @return un tipo NodoD<T> con el nodo de la posicion.
 */
@SuppressWarnings("empty-statement")
private Nodo < T > getPos(int i) throws ExceptionUFPS {
          1   1    1      
    if (i < 0 || i >= this.tamanio) {
        //Mejor de los casos
        System.err.println("Error indice no valido en una Lista Circular!");
        return (null);
    }
         1       1        1
    Nodo < T > x = cabeza.getSig();
            2  1      1     1
    for (; i-- > 0; x = x.getSig());
        1
    return x;

    // en algun punto i llega a valer n, entonces i = n 
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + \sum_{i=0}^{n-1}(1 + 1 + 2 + 1) + 11211$

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + n(1 + 1 + 2 + 1) + 11211$

    $T({n}) = 9 + n(5) + 6$

    $T({n}) = 5n + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __16. Obtener la Posición de un Elemento (getIndice)__

```java
/**
 * Obtiene la posición de un objeto en la Lista. <br>
 * <b>post: </b> Se retorno la posicion en la que se encuentra el dato buscado. 
 * @param dato Representa el datoa a encontrar dentro de la Lista. <br>
 * @return un int con la posición del elemento,-1 si el elemento no se encuentra en la Lista.
 */
public int getIndice(T dato) {
      1   1
    int i = 0;
             1        1            1            1                 1      1
    for (Nodo < T > x = this.cabeza.getSig(); x != this.cabeza; x = x.getSig()) {
               1          1
        if (x.getInfo().equals(dato))
            //Mejor de los casos
            return (i);
         2   
        i++;
    }
         1
    return (-1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + \sum_{x=0}^{n-1}( 1 + 1 + 2 + 1 + 1 + 1 ) + 1 + 1 + 1  + 1$

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + n( 1 + 1 + 2 + 1 + 1 + 1 ) + 1 + 1 + 1  + 1$

    $T({n}) = 6 + n( 8 ) + 4$

    $T({n}) = 8n + 10$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la lista circular es similar en comparacion a la lista simple con la unica variacion en sus metodos auxiliares como lo son getPos, esVacia y getIndice,  y al añadir un Nodo <T> auxiliar suman pocas opraciones mas al calculo de la complejidad.
