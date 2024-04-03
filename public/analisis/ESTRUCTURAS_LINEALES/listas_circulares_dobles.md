# __COSTO OPERACIONAL Y COMPLEJIDAD (LISTAS CIRCULARES DOBLES)__

[CODIGO FUENTE (LISTAS CIRCULARES DOBLES)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ListaCD.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O).

***

## __Constructor__

```java
/**
 * Constructor de la Clase Lista Circular Doble Enlazada, Crea
 * un nodo que sirve como cabezaecera de la ListaCD<T>. <br>
 * <b>post: </b> Se construyo una lista circular doble vacia.
 */
public ListaCD() {
                1    1  
    this.cabeza = new NodoD < T > (null, null, null);
                1
    this.cabeza.setSig(cabeza);
                1
    cabeza.setAnt(cabeza);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1$

    $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Insertar Elemento al Inicio__

```java
/**
 * Metodo que permite adicionar un Elemento al Inicio de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al inicio de la Lista.<br>
 * @param dato Informacion que desea almacenar en la Lista. La informacion
 * debe ser un Objeto.
 */
public void insertarAlInicio(T dato) {
         1        1    1                          1
    NodoD < T > x = new NodoD < T > (dato, cabeza.getSig(), cabeza);
         1
    cabeza.setSig(x);
         1        1
    x.getSig().setAnt(x);
         2
    this.tamanio++;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Insertar Elemento al Final__

```java

/**
 * Metodo que permite insertar un Elemento al Final de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al final de la Lista.<br>
 * @param dato Informacion que desea almacenar en la Lista. La informacion
 * debe ser un Objeto.
 */
public void insertarAlFinal(T dato) {
         1        1    1                                 1
    NodoD < T > x = new NodoD < T > (dato, cabeza, cabeza.getAnt());
         1             1
    cabeza.getAnt().setSig(x);
         1
    cabeza.setAnt(x);
         2
    this.tamanio++;
}
```

* ### __Costo Operacional__

    $T({n})= 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n})= 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Insertar Elemento Ordenado a la Cabeza__

```java
/**
 * Metodo que inserta un Elemento  de manera Ordenada desde la cabeza de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento en la posicion segun el Orden de la Lista.<br>
 * @param info Información que desea almacenar en la Lista de manera Ordenada.
 */
 public void insertarOrdenado(T info) {
    //T(esVacia()) = 5 y la validacion del true = 1
              6
    if (this.esVacia())
        //Mejor de los casos
        this.insertarAlInicio(info);
    else {
             1        1
        NodoD < T > x = this.cabeza;
             1        1
        NodoD < T > y = x;
          1   1
        x = x.getSig();
                 1
        while (x != this.cabeza) {
                  1               1     KTE
            Comparable comparador = (Comparable) info;
             1      1          KTE             1
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
            // Mejor de los casos
            this.insertarAlInicio(info);
        else {
              1        1
            y.setSig(new NodoD < T > (info, x, y));
              1        1
            x.setAnt(y.getSig());
               2
            this.tamanio++;
        }
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 13 + n(KTE) + 9$

    $T({n}) = KTE(n) + 22$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Eliminar Elemento segun la Posicion__

```java
/**
 * Metodo que permite eliminar un elemento de la lista dada una posicion. <br>
 * <b>post: </b> Se elimino el dato en la posicion indicada de la lista.<br>
 * @param i Posicion del objeto <br>
 * @return el objeto que se elimino de la lista
 */
public T eliminar(int i) {
    try {
             1
        NodoD < T > x;
               1
        if (i == 0) {
            //Mejor de los casos
            x = this.cabeza.getSig();
            this.cabeza.setSig(x.getSig());
            this.cabeza.getSig().setAnt(this.cabeza);
            x.setSig(null);
            x.setAnt(null);
            this.tamanio--;
            return (x.getInfo());
        }
        //T(getPos()) = 5n + 8
          1      5n + 8   1
        x = this.getPos(i - 1);
             1        1     1
        NodoD < T > y = x.getSig();
          1         1
        x.setSig(y.getSig());
          1         1
        y.getSig().setAnt(x);
           1
        y.setSig(null);
           1
        y.setAnt(null);
            2
        this.tamanio--;
          1        1
        return (y.getInfo());
    } catch (ExceptionUFPS ex) {
        //Mejor de los casos
        System.err.println(ex.getMessage());
        return (null);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + (5n + 8) + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1$

    $T({n}) = 3 + 5(n) + 22$

    $T({n}) = 5(n) + 25$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Eliminar Todos los Elementos__

```java
/**
 * Metodo que elimina todos los datos de la Lista Circular Doble. <br>
 * <b>post: </b> Elimina todos los datos que contenga la lista circular doble.<br>
 */
public void vaciar() {
                1    1  
    this.cabeza = new NodoD < T > (null, null, null);
                1
    this.cabeza.setSig(cabeza);
           1
    cabeza.setAnt(cabeza);
                 1
    this.tamanio = 0;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1$

    $T({n}) = 5$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Obtener Elemento segun la Posicion__

```java
/**
 * Metodo que retorna el objeto de la posicion i. <br>
 * <b>post: </b> Se retorno el elemento indicado por la posicion recibida i.<br>
 * @param i posicion de un elemento de la lista <br>
 * @return Devuelve el Objeto de la posicion especificada , null en caso contrario
 */
public T get(int i) {
    try {
        //T(getPos) = 5n + 8
             1        1     5n + 8   
        NodoD < T > x = this.getPos(i);
           1         1
        return (x.getInfo());
    } catch (ExceptionUFPS ex) {
        //Mejor de los casos
        System.err.println(ex.getMessage());
        return (null);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 8) + 1 + 1$

    $T({n}) = 2 + 5n + 10$

    $T({n}) = 5n + 12$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Modificar Elemento segun la Posición__

```java
/**
 * Metodo que modifica el elemento que se encuentre en una posicion dada. <br>
 * <b>post: </b> Se edito el elemento indicado en la posicion indicada.<br>
 * @param i Una Posicion dentro de la Lista <br>
 * @param dato es el nuevo valor que toma el elmento en la lista
 */
public void set(int i, T dato) {
    try {
        //T(getPos) = 5n + 8
             1        1      5n + 8
        NodoD < T > t = this.getPos(i);
             1 
        t.setInfo(dato);
    } catch (ExceptionUFPS e) {
        //Mejor de los casos
        System.err.println(e.getMessage());
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 8) + 1$

    $T({n}) = 2 + 5n + 9$

    $T({n}) = 5n + 11$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener Elementos__

```java
/**
 * Metodo que permite conocer el tamaño de la lista. <br>
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

## __Consultar Existencia de Elementos__

```java
/**
 * Metodo que permite conocer si en la lista se encuentra elementos. <br>
 * <b>post: </b> Se retorno true si la lista no contiene elementos.<br>
 * @return un boolean true si la lista esta vacia, false en caso contrario
 */
public boolean esVacia() {
       1           1         1        1            1       1
    return (cabeza == cabeza.getSig() || this.getTamanio() == 0);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1$

    $T({n}) = 6$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Consultar Existencia de un Elemento__

```java
/**
 * Metodo que permite buscar un elemento en la lista si lo encuentra retorna true, de lo contrario false. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en la Lista.<br>
 * @param info el cual contiene el valor del parametro a buscar en la lista <br>
 * @return un boolean, si es true encontro el dato en la lista y si es 
 * false no.
 */
public boolean esta(T info) {
    //T(getIndice()) = 8n + 7
      1         8n + 7            1
    return (this.getIndice(info) != -1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + (8n + 7) + 1$

    $T({n}) = 1 + 8n + 8$

    $T({n}) = 8n + 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener Iterator__

```java
/**
 * Metodo que permite obtiene Iterador para una Lista Circular Doble. <br>
 * <b>post: </b> Se retorno un Iterador para una Lista Circular Doble.<br>
 * @return IteratorLCD<T>
 */
@Override
public Iterator < T > iterator() {
      1        1   
    return (new IteratorLCD < T > (this.cabeza));
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Obtener Contenido en un Vector__

```java
/**
 * Metodo que permite retornar la informacion de una Lista en un Vector. <br>
 * @return Un vector de Objetos con la informacion de cada posicion de la Lista.
 */
public Object[] aVector() {
    //T(esVacia()) = 5 y la validacion del true es 1
             6
    if (this.esVacia())
        //Mejor de los casos
        return (null);
        1           1    1               1
    Object vector[] = new Object[this.getTamanio()];
    //T(iterador()) = 2
           1          1         2
    Iterator < T > it = this.iterator();
     1    1
    int i = 0;
              1+KTE
    while (it.hasNext())
                2   1    KTE
        vector[i++] = it.next();
          1
    return (vector);
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1+ KTE + n( 2 + 1 + KTE + 1 + KTE ) + 1$

    $T({n}) = 17 + KTE + n( KTE ) + 1$

    $T({n}) = KTE(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Imprime Contenido__

```java

/**
 * Metodo que permite retornar toda la informacion de los elementos de la Lista Circular Doble en un String. <br>
 * <b>post: </b> Retorna la impresion de los datos de la lista Circular Doble en un String. <br>
 * El String tiene el formato "e1->e2->e3..->en", donde e1, e2, ..., en son los los elementos de la Lista Circular Doble. <br>
 * @return Un String con los datos de los elementos de la Lista
 */
@Override
public String toString() {
    //T(esVacia()) = 5 y la validacion del true es 1
             6
    if (this.esVacia())
        //Mejor de los casos
        return ("Lista Vacia");
       1     1
    String r = "";
              1        1            1               1      1          1     1
    for (NodoD < T > x = this.cabeza.getSig(); x.getInfo() != null; x = x.getSig())
          2      1         1        1
        r += x.getInfo().toString() + "<->";
        1
    return (r);
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 ) + 1$

    $T({n}) = 13 + n( 9 ) + 1$

    $T({n}) = 9n + 14$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener el elemento de una Posición__

```java
/**
 * Metodo de tipo private, que retorna un nodo con la posicion de este en la
 * lista y ejecuta una exception si sucede un error. <br>
 * @param i es de tipo integer y contiene la posicion del elemento en la lista. <br>
 * @return un tipo NodoD<T> con el nodo de la posicion
 */
@SuppressWarnings("empty-statement")
private NodoD < T > getPos(int i) throws ExceptionUFPS {
          1   1    1
    if (i < 0 || i >= this.tamanio) {
        // Mejor de los casos
        throw new ExceptionUFPS("El índice solicitado no existe en la Lista Doble");
    } else {
           1          1           1
        NodoD < T > t = this.cabeza.getSig();
                 1
        while (i > 0) {
              1   1
            t = t.getSig();
              2
            i--;
        }    
              1
        return (t);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 2 + 1) + 1$

    $T({n}) = 7 + n(5) + 1$

    $T({n}) = 5n + 8$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener el elemento de una Posición Optimizado__

```java
/**
 * Metodo de tipo private, que retorna un nodo con la posicion de este en la
 * lista y ejecuta una exception si sucede un error. <br>
 * Utiliza la estrategia de validar la posición para realizar la búsqueda por la izquierda o 
 * por la derecha. 
 * @author Jeison Omar Ferrer Ortega (jeisonomarfort@ufps.edu.co)
 * @param i es de tipo integer y contiene la posicion del elemento en la lista. <br>
 * @return un tipo NodoD<T> con el nodo de la posicion
 */
@SuppressWarnings("empty-statement")
private NodoD < T > getPos_optimizado(int pos) throws ExceptionUFPS {
            1    1      1    
    if (pos >= 0 && pos < this.tamanio) {} else {
        //mejor de los casos
        throw new ExceptionUFPS("La posición " + pos + " No es válida en la lista");
    }
    //EL METODO SE PRUEBA EL LA CLASE TestGetPostListaCD DE LA VISTA
         1
    NodoD < T > nodoPos;
            1                 1
    if (pos >= (this.tamanio) / 2) {
            1              1   1
        pos = this.tamanio - 1 - pos;
                1          1
        nodoPos = this.cabeza.getAnt();
                 2   1
        while (pos-- > 0) {
                    1        1
            nodoPos = nodoPos.getAnt();
        }
    } else {
        //Mejor de los casos
        nodoPos = this.cabeza.getSig();
        while (pos-- > 0) {
            nodoPos = nodoPos.getSig();
        }
    }
         1
    return nodoPos;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + n(1 + 1 + 2 + 1) + 1$

    $T({n}) = 14 + n(5) + 1$

    $T({n}) = 5n + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener la Posición de un Elemento__

```java
/**
 * Metodo que busca un elemento de la lista y devuelve su posicion.Los objetos
 * que se almacenan en la lista deben tener el Método equals. <br>
 * <b>post: </b> Retorna el Nodo que se encuentra en esa posicion indicada. <br> 
 * @param dato de tipo T que indica la informacion del nodo a buscar <br>
 * @return un entero que representa la posicion del objeto consultado en la lista
 */
public int getIndice(T dato) {
     1    1
    int i = 0;
           1           1           1             1                 1      1
    for (NodoD < T > x = this.cabeza.getSig(); x != this.cabeza; x = x.getSig()) {
                1         2
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

    $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + n( 1 + 2 + 2 + 1 + 1 + 1 ) + 1$

    $T({n}) = 6 + n( 8 ) + 1$

    $T({n}) = 8n + 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***
## __Conclusión__

En el análisis anterior se pudo observar que la lista circular doble en comparacion a la lista circular simple para esta implementacion en especifico se modificaron algunos metodos auxiliares que disminuyeron o aumentaron su costo operacional sin cambiar su complejidad.
