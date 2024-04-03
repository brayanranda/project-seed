# __COSTO OPERACIONAL Y COMPLEJIDAD (LISTAS DOBLES)__

[CODIGO FUENTE (LISTAS DOBLES)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ListaD.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O).

***

## __Constructor__

```java
/**
 * Constructor de la Clase Lista Doble Enlazada, por defecto la cabeza es NULL. <br>
 * <b>post: </b> Se construyo una lista doble vacia.
 */
public ListaD() {
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

## __Insertar Elemento al Inicio__

```java
/**
 * Adiciona un Elemento al Inicio de la Lista doble. <br>
 * <b>post: </b> Se inserto un nuevo elemento al inicio de la Lista Doble.<br>
 * @param x Informacion que desea almacenar en la Lista doble. La informacion debe ser un Objeto.
 */
public void insertarAlInicio(T x) {
                    1
    if (this.cabeza == null)
        //Mejor de los casos
        this.cabeza = new NodoD < T > (x, null, null);
    else {
        //Peor de los casos 
                    1       1
        this.cabeza = new NodoD < T > (x, this.cabeza, null);
                       1       1
        this.cabeza.getSig().setAnt(this.cabeza);
    }
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

## __Insertar Elemento al Final__

```java
/**
 * Inserta un Elemento al Final de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento al final de la Lista Doble.<br>
 * @param x Informacion que desea almacenar en la Lista. La informacion debe ser un Objecto. <br>
 */
public void insertarAlFinal(T x) {
                    1
    if (this.cabeza == null)
        //Mejor de los casos
        this.insertarAlInicio(x);
    else {
        //Peor de los casos 
                1
        NodoD < T > ult;
        try {
            //T(getPos) = 5n + 11
                1      5n + 11             1
            ult = this.getPos(this.tamanio - 1);
                    1
            if (ult == null)
                //Mejor de los casos
                return;
            //Peor de los casos
                  1           1
            ult.setSig(new NodoD < T > (x, null, ult));
                    2
            this.tamanio++;
        } catch (ExceptionUFPS ex) {
            //Mejor de los casos                   
            System.err.println(ex.getMessage());
        }
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + (5n + 11) + 1 + 1 + 1 + 1 + 2$

    $T({n}) = 3 + 5n + 16$

    $T({n}) = 5n + 20$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Insertar Elemento Ordenado a la Cabeza__

```java
/**
 * Metodo que inserta un Elemento  de manera Ordenada desde la cabeza de la Lista. <br>
 * <b>post: </b> Se inserto un nuevo elemento en la posicion segun el Orden de la Lista.<br>
 * @param info Información que desea almacenar en la Lista de manera Ordenada.
 */
public void insertarOrdenado(T info) {
        1        1      KTE
    Comparable x = (Comparable)(info);
    //T(esVacia) = 2 y validacion si es true = 1
               3        1        KTE                1        1
    if (this.esVacia() || x.compareTo(this.cabeza.getInfo()) <= 0) {
        // Mejor de los casos
        this.insertarAlInicio(info);
        return;
    }
    //Peor de los casos
            1         1       1
    NodoD < T > nuevo = new NodoD < T > (info, null, null);
            1     1
    NodoD < T > p = this.cabeza;
            1        1       KTE         1      1        1     1
    for ((p != null && x.compareTo(p.getInfo()) >= 0); p = p.getSig()) {}
           1
    if (p == null)
        //Mejor de los casos
        this.insertarAlFinal(info);
    else {
        //Peor de los casos
                 1        1
        nuevo.setAnt(p.getAnt());
                 1
        nuevo.setSig(p);
             1
        p.setAnt(nuevo);
                 1        1
        nuevo.getAnt().setSig(nuevo);
                2
        this.tamanio++;
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + KTE + 3 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + n(1 + 1 + 1 + 1 + KTE + 1 + 1) + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2$

    $T({n}) = KTE + n(KTE) + 9$

    $T({n}) = KTE(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***
    
*__Eliminar Elemento segun la Posicion__

```java
/**
 * Metodo que remueve un elemento de la lista con la posicion de esta en la lista. <br>
 * <b>post: </b> Se elimina un elemento de la Lista dada una posicion determinada.<br>
 * @param i es de tipo integer que contiene la posicion del elemento en la lista
 * @return De tipo T que contiene el elemento removido de la lista
 */
public T eliminar(int i) {
    try {
                1
        NodoD < T > x;
        //T(getPos()) = 5n + 11  
          1    5n + 11
        x = this.getPos(i);
              1
        if (x == this.cabeza) {
            //Mejor de los casos
            //Mover el Nodo cabeza
            this.cabeza = this.cabeza.getSig();
            //Referencias de Nodo x a null
        } else {
            //Peor de los casos
                  1       1        1
            x.getAnt().setSig(x.getSig());
                     1      1
            if (x.getSig() != null) //Si no es el ultimo nodo
                //Si entra, cuenta como peor de los casos 
                 1        1        1
            x.getSig().setAnt(x.getAnt());
        }
        //Libero Nodo x 
            1
        x.setAnt(null);
            1
        x.setSig(null);
                2
        this.tamanio--;
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

    $T({n}) = 1 + 1 + (5n + 11) + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1$

    $T({n}) = 2 + 5n + 26$

    $T({n}) = 5n + 28$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***
    
*__Eliminar Todos los Elementos__

```java
/**
 * Elimina todos los datos de la Lista Doble. <br>
 * <b>post: </b> Se elimino todos los datos que encontraban en la lista doble.<br>
 */
public void vaciar(){  
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
    
*__Obtener el Contenido de un Nodo__

```java
/**
 * Metodo que permite obtener el contenido de un nodo en la lista doble. <br>
 * <b>post: </b> Se obtiene un elemento de la lista dada una posicion determinada.<br>
 * @param i es de tipo integer y contiene la posicion del nodo en la lista doble. <br>
 * @return de tipo T que contiene la informacion en el nodo de la lista doble
 */
public T get(int i) {
            1
    NodoD < T > t;
    try {
        //T(getPos) = 5n + 11
          1    5n + 11
        t = this.getPos(i);
          1           1
        return (t.getInfo());
    } catch (ExceptionUFPS ex) {
        //Mejor de los casos
        System.err.println(ex.getMessage());
        return (null);
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + (5n + 11) + 1 + 1$

    $T({n}) = 5n + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

*__Modificar Elemento segun la Posición__

```java
/**
 * Metodo que permite modificar el elemento que se encuentre en una posicion dada. <br>
 * <b>post: </b> Se edita la informacion de un elemento de la lista dada un pasicion determinada.<br>
 * @param i Una Posicion dentro de la Lista doble
 * @param dato es el nuevo valor que toma el elmento en la lista doble
 */
public void set(int i, T dato) {
    try {
        //T(getPos) = 5n + 11
                1     1     5n + 11
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

    $T({n}) = 1 + 1 + (5n + 11) + 1$

    $T({n}) = 2 + 5n + 12$

    $T({n}) = 5n + 14$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

*__Obtener Elementos__

```java
/**
 * Metodo que retorna el tamanio de la lista doble. <br>
 * <b>post: </b> Se retorno el numero de elementos existentes en la Lista Doble.<br>
 * @return de tipo integer que contiene el tamaño del a lista doble
 */
public int getTamanio() {
       1
    return this.tamanio;
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
 * Metodo que retorna true si la lista doble se encuentra vacia. <br>
 * <b>post: </b> Retorna si la Lista Doble se encuentra vacia, retorna false si hay elementos en la lista.<br>
 * @return un boolean que es true si esta vacia la lista doble
 */
public boolean esVacia() {
       1                1
    return (this.cabeza == null);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1$

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __Consultar Existencia de un Elemento__

```java
/**
 * Metodo que busca un elemento en la lista. <br>
 * <b>post: </b> Retorna true,si el elemento consultado se encuentra en la Lista.<br>
 * @param info que es el valor del elemento a buscar en la Lista. <br>
 * @return Un boolean, si es true encontro el dato en la Lista Doble. <br>
 */
public boolean esta(T info) {
    //T(getIndice()) = 7n + 6
      1           7n + 6         1
    return (this.getIndice(info) != -1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + (7n + 6) + 1$

    $T({n}) = 7n + 8$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener Iterator__

```java
/**
 * Metodo que permite obtener un Iterador para una Lista Doble. <br>
 * <b>post: </b> Retorna una Iterador para la Lista.<br>
 * @return Un objeto de tipo IteratorLD<T> que permite recorrer la Lista.
 */
@Override
public Iterator < T > iterator() {
       1             1
    return (new IteratorLD < T > (this.cabeza));
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
    // T(esVacia) = 2 y 1 de la validacion = true
               3
    if (this.esVacia())
        // Mejor de los casos
        return (null);
    //Peor de los casos
              1     1       1             1
    Object vector[] = new Object[this.getTamanio()];
               1      1        2
    Iterator < T > it = this.iterator();
     1    1
    int i = 0;
             1 + KTE
    while (it.hasNext())
            2   1   KTE
    vector[i++] = it.next();
       1
    return (vector);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + KTE + n( 2 + 1 + KTE + 1 + KTE ) + 1$

    $T({n}) = 14 + KTE + n(KTE) + 1$

    $T({n}) = KTE(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Imprime Contenido__

```java
/**
 * Metodo que permite retornar toda la informacion de los elementos de la Lista en un String. <br>
 * <b>post: </b> Retorna la impresion de los datos de la lista en un String. 
 * El String tiene el formato "e1->e2->e3..->en", donde e1, e2, ..., en son los los elementos de la Lista. <br>
 * @return Un String con los datos de los elementos de la Lista
 */
@Override
public String toString() {
    //T(esVacia) = 2 y 1 de la validacion = true
               3
    if (this.esVacia())
        //Mejor de los casos
        return ("Lista Vacia");
        1    1
    String r = "";
                 1     1                1          1     1
    for (NodoD < T > x = this.cabeza; x != null; x = x.getSig())
      2       1         1       1
    r += x.getInfo().toString() + "<->";
      1
    return (r);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + n(2 + 1 + 1 + 1 + 1 + 1 + 1) + 1$

    $T({n}) = 8 + n(8) + 1$

    $T({n}) = 8n + 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener el elemento de una Posición__

```java
/**
 * Metodo de tipo privado de la clase que devuelve al elemento en la posicion. <br>
 * <b>post: </b> Retorna el Nodo que se encuentra en esa posicion indicada. <br> 
 * @param i es de tipo integer y contiene la posicion del elemento en la lista. <br>
 * @return un tipo NodoD<T> con el nodo de la posicion.
 */
private NodoD < T > getPos(int i) throws ExceptionUFPS {
    //T(esVacia()) = 2 y se valida si es true = 1   
                3      1    1               1   1
    if (this.esVacia() || i > this.tamanio || i < 0) {
        //Mejor de los casos
        throw new ExceptionUFPS("El índice solicitado no existe en la Lista Doble");
    }
    //Peor de los casos   
            1     1
    NodoD < T > t = this.cabeza;
             1
    while (i > 0) {
          1      1
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

    $T({n}) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 2 + 1) + 1$

    $T({n}) = 10 + n( 5 ) + 1$

    $T({n}) = 5n + 11$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Obtener la Posición de un Elemento__

```java
/**
 * Metodo que obtiene la posicion de un objeto en la Lista. Se recomienda
 * que la clase tenga sobre escrito el metodo equals. <br>
 * <b>post: </b> Retorna la posicion en la que se encuentra el dato buscado. 
 * @param info Objeto que se desea buscar en la Lista
 * @return un int con la posici�n del elemento,-1 si el elemento no se 
 * encuentra en la Lista
 */
public int getIndice(T info) {
     1    1
    int i = 0;
                 1     1                1          1      1
    for (NodoD < T > x = this.cabeza; x != null; x = x.getSig()) {
                 1        2
        if (x.getInfo().equals(info))
            // Mejor de los casos
            return (i);
         2
        i++;
    }
       1
    return (-1);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 1 + 1 + n( 1 + 2 + 2 + 1 + 1 + 1) + 1$

    $T({n}) = 5 + n( 8 ) + 1$

    $T({n}) = 8n + 6$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la estructura Lista doble comparte similitudes en T(n) con la lista simple, variando unicamente en metodos tales con insertar elementos, ordenarlo desde la cabeza donde se debe validar nodos.
