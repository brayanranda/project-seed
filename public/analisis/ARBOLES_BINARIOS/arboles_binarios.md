# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolBinario)__

[CODIGO FUENTE (ArbolBinario)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolBinario.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

***

## __1. Constructor Vacio (ArbolBinario)__

```java
/**
 * Crea un Arbol Binario vacio. <br>
 * <b>post: </b> Se creo un Arbol Binario vacio.<br>
 */
public ArbolBinario() {
              1
    this.raiz = null;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(1)$

***

## __2. Constructor Raiz Predefinida (ArbolBinario)__

```java
/**
 * Crea un Arbol Binario con una raiz predefinida. <br>
 * <b>post: </b> Se creo un nuevo Arbol con su raiz definida.<br>
 * @param raiz  Un objeto de tipo T que representa del dato en la raiz del Arbol. <br>
 */
public ArbolBinario(T raiz) {
              1  1     1
    this.raiz = new NodoBin(raiz);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1$

  $T({n}) = 3$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Obtener Objeto Especifico (getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto de la raiz del Arbol Binario. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Binario.<br>
 * @return la raiz del Arbol Binario.
 */
public T getObjRaiz() {
       1            1
    return (raiz.getInfo());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Obtener raiz (getRaiz)__

```java
/**
 * Metodo que permite conocer la raiz del Arbol Binario. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Binario.<br>
 * @return la raiz del Arbol Binario.
 */
public NodoBin < T > getRaiz() {
    1
  return raiz;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __5. Modificar Raiz (setRaiz)__

```java
/**
 * Metodo que permite modificar la raiz del Arbol Binario. <br>
 * <b>post: </b> Se modifico la raiz del Arbol Binario.<br>
 * @param raiz representa la nueva raiz del Arbol Binario.
 */
public void setRaiz(NodoBin < T > raiz) {
            1
  this.raiz = raiz;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __6. Insertar Hijo a la Izquierda (insertarHijoIzq)__

```java
/**
 * Metodo que permite insertar un Hijo izquiero al elemento. <br>
 * <b>post: </b> Se inserto un hijo a la izquierda del elemento.<br>
 * @param padre Padre del nuevo elemento. <br>
 * @param hijo Elemento nuevo a insertar. <br>
 * @return  
 */
public boolean insertarHijoIzq(T padre, T hijo) {
                 2        1
    if (`41¬this.esVacio()`) {
               1         1
        `5¬this.setRaiz(new NodoBin < T > (hijo))`;
           1
        return (true);
    }
    //Peor de los casos
                    1      KTE
    NodoBin < T > p = `16¬this.buscar(padre)`;
           1
    if (p != null) {
      //Peor de los casos
                1      1
        if (p.getIzq() == null) {
               1      1
            p.setIzq(new NodoBin < T > (hijo));
               1
            return (true);
        }
          1
        return (false);
    }
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __7. Insertar Hijo a la Derecha (insertarHijoDer)__

```java
/**
 * Metodo que permite insertar un Hijo derecho al elemento. <br>
 * <b>post: </b> Se inserto un hijo a la derecha del elemento.<br>
 * @param padre Padre del nuevo elemento. <br>
 * @param hijo Elemento nuevo a insertar. <br>
 * @return  
 */
public boolean insertarHijoDer(T padre, T hijo) {
              2
    if (`41¬this.esVacio()`) {
                 1        1
        `5.¬this.setRaiz(new NodoBin < T > (hijo));`
           1
        return (true);
    }
    //Peor de los casos
                    1        KTE
    NodoBin < T > p = `16¬this.buscar(padre)`;
           1
    if (p != null) {
      //Peor de los casos
               1       1
        if (p.getDer() == null) {
               1      1
            p.setDer(new NodoBin < T > (hijo));
               1
            return (true);
        }
          1
        return (false);
    }
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __8. Eliminar Elemento (eliminar)__

```java
/**
 * Metodo que permite eliminar un elemento del Arbol Binario, dada su informacion. <br>
 * <b>post: </b> Se elimino el elemento del Arbol Binario.<br>
 * @param info Dato que se desea eliminar del Arbol Binario. <br>
 * @return true o false dependiendo si se pudo o no eliminar el dato.
 */
public boolean eliminar(T info) {
      1            1      KTE
    NodoBin < T > r = `16¬this.buscar(info);`
          1
    if (r == null)
          1
        return (false);
        1       1   1         1      1          1
    boolean tnd = r.getDer() != null ? true : false;
        1       1   1         1      1          1
    boolean tni = r.getIzq() != null ? true : false;
    //Caso 1: No tiene hijos
          1   1   1
    if (!tnd && !tni)
           1       KTE
        return `9¬eliminarC1(r)`;
    //Caso 2: Tiene solo hijo derecho
            1    1
    if (tnd && !tni)
           1        KTE
        return `10¬eliminarC2(r)`;
    //Caso 3: Tiene solo hijo izquierdo
          1   1
    if (!tnd && tni)
           1        KTE
        return `10¬eliminarC2(r)`;
    //Caso 4: Tiene ambos hijos
    //Peor de los casos, debe llegar hasta aca 
            1
    if (tnd && tni)
          1         KTE
        return `11¬eliminarC3(r)`;
        1
    return false;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __9. Eliminar Elemento C1 (eliminarC1)__

```java
/**
 * Metodo de tipo privado que permite eliminar de un Arbol Binario para el Caso 1. <br>
 * <b>post: </b> Se elimino el elemento del Arbol Binario.<br>
 * @param r Nodo que se desea eliminar del Arbol Binario. <br>
 * @return true o false dependiendo si se pudo o no eliminar el dato.
 */
private boolean eliminarC1(NodoBin < T > r) {
       1            1     KTE
    NodoBin < T > p = `20¬this.getPadre(r)`;
          1
    if (p == null) {
                  1            1
        if (`4¬this.getRaiz()` != r)
              1
            return (false);
              1
        `5¬this.setRaiz(null)`;
           1
        return (true);
    }
    //Peor de los casos
       1             1    1
    NodoBin < T > hi = p.getIzq();
       1             1    1
    NodoBin < T > hd = p.getDer();
            1
    if (hi == r) {
             KTE                 1
        `20¬this.getPadre(r)`.setIzq(null);
           1
        return true;
    }
    //Peor de los casos
            1
    if (hd == r) {
              KTE              1
        `20¬this.getPadre(r)`.setDer(null);
          1
        return true;
    }
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __10. Eliminar elemento C2 (eliminarC2)__

```java
/**
 * Metodo de tipo privado que permite eliminar de un Arbol Binario para el Caso 2. <br>
 * <b>post: </b> Se elimino el elemento del Arbol Binario.<br>
 * @param r Nodo que se desea eliminar del Arbol Binario. <br>
 * @return true o false dependiendo si se pudo o no eliminar el dato.
 */
private boolean eliminarC2(NodoBin < T > r) {
       1            1     KTE
    NodoBin < T > p = `20¬this.getPadre(r)`;
       1             1    1       1            1            1
    NodoBin < T > ha = r.getIzq() != null ? r.getIzq() : r.getDer();
          1
    if (p == null) {
              1
        `5¬this.setRaiz(ha)`;
          1
        return (true);
    }
    //Peor de los casos
      1              1     1
    NodoBin < T > hi = p.getIzq();
      1              1     1
    NodoBin < T > hd = p.getDer();
           1
    if (hi == r) {
               KTE              1
        `20¬this.getPadre(r)`.setIzq(ha);
          1
        r.setDer(null);
          1
        r.setIzq(null);
          1
        return true;
    }
    //Peor de los casos
           1
    if (hd == r) {
             KTE            1
        `20¬this.getPadre(r)`.setDer(ha);
          1
        r.setDer(null);
          1
        r.setIzq(null);
          1
        return true;
    }
      1
    return false;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __11. Eliminar elemento C3 (eliminarC3)__

```java
/**
 * Metodo de tipo privado que permite eliminar de un Arbol Binario para el Caso 3. <br>
 * <b>post: </b> Se elimino el elemento del Arbol Binario.<br>
 * @param r Nodo que se desea eliminar del Arbol Binario. <br>
 * @return true o false dependiendo si se pudo o no eliminar el dato.
 */
private boolean eliminarC3(NodoBin < T > r) {
       1            1              KTE               1
    NodoBin < T > masIzq = `12¬this.masIzquierda(r.getDer())`;
               1
    if (masIzq != null) {
            KTE        1        1
        `8¬this.eliminar((T) masIzq.getInfo())`;
          1             1
        r.setInfo(masIzq.getInfo());
           1
        return (true);
    }
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __12. Nodo mas a la izquierda (masIzquierda)__

```java
/**
 * Metodo de tipo privado que permite conocer el Nodo mas a la izquierda, Caso eliminacion 3. <br>
 * <b>post: </b> Se retorno el Nodo mas a la izquierda que se desea eliminar.<br>
 * @param r Nodo que se desea eliminar del Arbol Binario. <br>
 * @return Nodo Binario ubicado mas a la izquierda del Nodo indicado.
 */
private NodoBin < T > masIzquierda(NodoBin < T > r) {
            1       1
    if (r.getIzq() != null) {
           1         KTE         1
        return (masIzquierda(r.getIzq()));
    }
       1
    return (r);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __13. Existencia de un Elemento (esta)__

```java
/**
 * Metodo que retorna true si existe un dato en el arbol binario, o false en caso contrario. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el Arbol.<br>
 * @param info representa la informacion del elemento que se desea buscar. <br>
 * @return Un boolean, true si el dato esta o false en caso contrario.
 */
public boolean esta(T info) {
      1      KTE
  return (`14¬esta(this.raiz, info)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __14. Existencia de un Elemento por Raiz (esta)__

```java
/**
 * Metodo de tipo privado que retorna true si existe un dato en el arbol binario, o false en caso contrario. <br>
 * Es necesario para que el metodo funcione que los objetos almacenados en el arbol tengan sobreescrito el metodo equals.<br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el Arbol.<br>
 * @param r representa la raiz del arbol binario, o raiz de subarbol. <br>
 * @param info representa la informacion del elmento que se desea buscar. <br>
 * @return true si el dato esta o false en caso contrario.
 */
private boolean esta(NodoBin < T > r, T info) {
           1
    if (r == null)
           1
        return (false);
           1          2
    if (r.getInfo().equals(info))
           1
        return (true);
      1      KTE     1              1    KTE     1  
    return (esta(r.getIzq(), info) || esta(r.getDer(), info));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 2 + 1 + KTE + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __15. Buscar un Elemento (buscar)__

```java
/**
 * Metodo que permite consultar un elemento existente dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno un NodoBin<T> perteneciente al dato buscado. <br>
 * @param info Elemento a ubicar dentro del Arbol Binario.
 * @return Un objeto de tipo NodoBin<T> que representa el objeto buscado.
 */
private NodoBin < T > buscar(T info) {
       1                  KTE
    return (`16¬buscar(this.raiz, info)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __16. Buscar Elemento por Raiz (buscar)__

```java
/**
 * Metodo que permite consultar un elemento existente dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno un NodoBin<T> perteneciente al dato buscado. <br>
 * @param info Elemento a ubicar dentro del Arbol Binario. <br>
 * @param r Representa la raiz del Arbol. <br>
 * @return Un objeto de tipo NodoBin<T> que representa el objeto buscado.
 */
private NodoBin < T > buscar(NodoBin < T > r, T info) {
          1
    if (r == null)
          1
        return (null);
           1         2
    if (r.getInfo().equals(info))
           1
        return (r);
    else {
      //Peor de los casos
                          1       1     1           1      KTE        1
        NodoBin < T > aux = (r.getIzq() == null) ? null : buscar(r.getIzq(), info);
                1
        if (aux != null)
                1
            return (aux);
      //Peor de los casos
        else
                1      1       1           1       KTE        1
            return (r.getDer() == null) ? null : buscar(r.getDer(), info);
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 2 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1+ KTE + 1$

  $T({n}) = KTE$
    
* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __17. Modificar Dato (setDato)__

```java
/**
 * Modificar la informacion de un Nodo dentro del Arbol Binario. <br>
 * <b>post: </b> Se edito la informacion de un Nodo del Arbol. <br>
 * @param info1 Elemento dentro del Arbol Binario que se quiere modificar. <br>
 * @param info2 Nueva informacion del elemento que se desea modificar. <br>
 * @return Un boolean si se puede editar la informacion del elemento.
 */
public boolean setDato(T info1, T info2) {
           1        KTE        1          KTE
    if (!`13¬this.esta(info1)` || `13¬this.esta(info2)`)
          1
        return (false);
        1          KTE    
    return (`18¬setDato(this.raiz, info1, info2))`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + KTE$

  $T({n}) = 1 + 8n + 11$

  $T({n}) = 8n + 12$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __18. Modificar Dato por Raiz (setDato)__

```java
/**
 * Modificar la informacion de un Nodo dentro del Arbol Binario. <br>
 * <b>post: </b> Se edito la informacion de un Nodo del Arbol. <br>
 * @param info1 Elemento dentro del Arbol Binario que se quiere modificar. <br>
 * @param info2 Nueva informacion del elemento que se desea modificar. <br>
 * @param r Representa la raiz del Arbol Binario. <br>
 * @return Un boolean si se puede editar la informacion del elemento.
 */
private boolean setDato(NodoBin < T > r, T info1, T info2) {
          1
    if (r == null)
          1
        return (false);
          1            2
    if (r.getInfo().equals(info1)) {
          1
        r.setInfo(info2);
          1
        return (true);
    }
       1        KTE     1                     1     KTE     1              
    return (setDato(r.getIzq(), info1, info2) || setDato(r.getDer(), info1, info2));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 2 + 1 + KTE + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __19. Obtener Padre por Dato (getPadre)__

```java
/**
 * Metodo que dado un dato almacenado en el arbol, retorna el padre de ese dato. <br>
 * <b>post: </b> Se retorno el padre del nodo que contiene la informacion dada.<br>
 * @param r Dato que se desea buscar. <br>
 * @return El padre del dato almacenado en el arbol, null en caso no existir el dato
 */
protected NodoBin < T > getPadre(NodoBin < T > r) {
           1      1            1
    if (r == null || this.raiz == null)
           1
        return null;
       1            1     KTE
    NodoBin < T > x = `20¬getPadre(this.raiz, r.getInfo())`;
           1
    if (x == null)
          1
        return null;
        1
    return (x);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __20. Obtener Padre (getPadre)__

```java
/**
 * Metodo de tipo privado que dado un dato almacenado en el arbol, retorna el padre de ese dato.Se parte
 * de la premisa que el arbol no contiene elementos repetidos. <br>
 * <b>post: </b> Se retorno el padre del nodo que contiene la informacion dada.<br>
 * @param x representa la raiz del arbol, o raiz de subarbol
 * @param info dato que se desea buscar
 * @return el padre del dato almacenado en el arbol, null en caso no existir el dato
 */
private NodoBin < T > getPadre(NodoBin < T > x, T info) {
           1
    if (x == null)
          1
        return null;
            1       1       1     1          1        2            1     1        1       1
    if ((x.getIzq() != null && x.getIzq().getInfo().equals(info)) || (x.getDer() != null && x.
       1        1        2
    getDer().getInfo().equals(info)))
           1
        return (x);
    //Peor de los casos
        1           1     KTE      1
    NodoBin < T > y = getPadre(x.getIzq(), info);
          1
    if (y == null)
          1        KTE       1
        return (getPadre(x.getDer(), info));
    else
          1
        return (y);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Obtener Hojas Iterator (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del arbol binario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del arbol binario.<br>
 * @return un iterador con las hojas del arbol binario 
 */
public Iterator < T > getHojas() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
           KTE
    `22¬getHojas(this.raiz, l)`;
       1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __22. Obtener Hojas Iterator Privado (getHojas)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con las hojas del arbol binario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del arbol binario.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void getHojas(NodoBin < T > r, ListaCD < T > l) {
           1
    if (r != null) {
                    8
        if (`23¬this.esHoja(r)`)
                    KTE            1
            l.insertarAlFinal(r.getInfo());
            KTE      1
        getHojas(r.getIzq(), l);
            KTE      1
        getHojas(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 8 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __23. Es Hoja (esHoja)__

```java
/**
 * Metodo de tipo privado que permite saber si un elemento es una hoja. <br>
 * <b>post: </b> Se retorno true si es nodo hoja del arbol binario.<br>
 * @param x representa la raiz del arbol, o raiz de subarbol. <br>
 * @return true si sus dos hijos son null. <br>
 */
private boolean esHoja(NodoBin < T > x) {
      1      1       1      1      1       1       1     1
  return (x != null && x.getIzq() == null && x.getDer() == null);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __24. Contar Hojas (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @return El numero de hojas existentes en el Arbol Binario.
 */
public int contarHojas() {
      1           KTE
  return (`25¬contarHojas(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __25. Contar Hoja por Raiz (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @return El numero de hojas existentes en el Arbol Binario.
 */
private int contarHojas(NodoBin < T > r) {
          1
    if (r == null)
          1
        return (0);
                8
    if (`23¬this.esHoja(r)`)
          1
        return (1);
     1      1       KTE       1
    int chi = contarHojas(r.getIzq());
     1      1       KTE       1
    int chd = contarHojas(r.getDer());
       1        1
    return (chi + chd);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 8 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1 + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __26. Iterador con Pre-Orden (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un iterador en preorden (padre->hijoIzq->hijoDer) para el arbol binario.
 */
public Iterator < T > preOrden() {
       1            1   1     
    ListaCD < T > l = new ListaCD < T > ();
       KTE               1  
    `27¬preOrden`(`5¬this.getRaiz()`, l);
       1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE + 1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __27. Iterador con Pre-Orden Privado (preOrden)__

```java
/**
 * Metodo que tipo privado que retorna un iterador con el recorrido preOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void preOrden(NodoBin < T > r, ListaCD < T > l) {
           1
    if (r != null) {
                KTE            1
        l.insertarAlFinal(r.getInfo());
            KTE       1
        preOrden(r.getIzq(), l);
            KTE       1
        preOrden(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __28. Iterador con In-Order (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol.<br>
 * @return un iterador en inOrden (hijoIzq->padre->hijoDer) para el arbol binario. <br>
 */
public Iterator < T > inOrden() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
       KTE           1
    `29¬inOrden(this.getRaiz(), l)`;
       1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE +1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __29. Iterador con In-Order Privado (inOrden)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con el recorrido in Orden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador inOrdenpara el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void inOrden(NodoBin < T > r, ListaCD < T > l) {
           1
    if (r != null) {
           KTE     1
        inOrden(r.getIzq(), l);
               KTE            1
        l.insertarAlFinal(r.getInfo());
           KTE      1
        inOrden(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __30. Iterador con Pos-Orden (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @return un iterador en postOrden (hijoIzq->hijoDer->padre) para el arbol binario. <br>
 */
public Iterator < T > postOrden() {
      1             1  1
    ListaCD < T > l = new ListaCD < T > ();
      KTE             1
    `31¬postOrden`(`4¬this.getRaiz()`, l);
       1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE + 1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __31. Iterador con Pos-Orden Privado (postOrden)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol
 */
private void postOrden(NodoBin < T > r, ListaCD < T > l) {
           1
    if (r != null) {
            KTE       1
        postOrden(r.getIzq(), l);
            KTE       1
        postOrden(r.getDer(), l);
            KTE                1
        l.insertarAlFinal(r.getInfo());
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __32. Retornar Cadena Pre-Orden-Iterativo (preOrden_Iterativo)__

```java
/**
 * Metodo que permite retornar en un String el recorrido preOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un String el recorrido preOrden del arbol
 */
public String preOrden_Iterativo() {
      1       11 + KTE(n^2) + KTE(n)
  return (`33¬preOrden_Iterativo(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 11 + KTE(n^2) + KTE(n)$

  $T({n}) = 12 + KTE(n^2) + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __33. Retornar Cadena Pre-Orden-Iterativo Privado (preOrden_Iterativo)__

```java
/**
 * Metodo de tipo privado que permite retornar en un String el recorrido preOrden del arbol. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol
 * @return  un String el recorrido preOrden del arbol
 */
private String preOrden_Iterativo(NodoBin < T > r) {
      1                1  1
    Pila < NodoBin > p = new Pila < NodoBin > ();
      1       1
    String rr = "";
              1
    while (r != null) {
          KTE
        p.apilar(r);
           2      1          1       1
        rr += r.getInfo().toString() + "-";
          1     1
        r = r.getIzq();
    }
               2
    while (!p.esVacia()) {
          1     KTE
        r = p.desapilar();
          1     KTE
        r = r.getDer();
                  1
        while (r != null) {
                2       1        1       1
            rr += r.getInfo().toString() + "-";
               KTE
            p.apilar(r);
              1     1
            r = r.getIzq();
        }
    }
      1
    return (rr);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 2 + n( 1 + KTE + 1 + KTE + 1 + n(2 + 1 + 1 + 1 + KTE + 1 + 1 + 1) + 1 + 2) + 2 + 1$

  $T({n}) = 8 + n(KTE + n(KTE) + 3) + 3$

  $T({n}) = 11 + KTE(n^2) + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __34. Retornar Cadena In-Orden-Iterativo (inOrden_Iterativo)__

```java
/**
 * Metodo que permite retornar en un String el recorrido inOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en inOrden para el arbol.<br>
 * @return un String el recorrido inOrden del arbol
 */
public String inOrden_Iterativo() {
    1        11 + KTE(n^2) + KTE(n)
  return (`35¬inOrden_Iterativo(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 11 + KTE(n^2) + KTE(n)$

  $T({n}) = 12 + KTE(n^2) + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __35. Retornar Cadena In-Orden-Iterativo Privado (inOrden_Iterativo)__

```java
/**
 * Metodo de tipo privado que permite retornar en un String el recorrido inOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en inOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol
 * @return  un String el recorrido inOrden del arbol
 */
private String inOrden_Iterativo(NodoBin < T > r) {
      1                1  1
    Pila < NodoBin > p = new Pila < NodoBin > ();
      1       1
    String rr = "";
              1
    while (r != null) {
           KTE
        p.apilar(r);
          1   1
        r = r.getIzq();
    }
               2
    while (!p.esVacia()) {
          1      KTE
        r = p.desapilar();
           2      1          1       1
        rr += r.getInfo().toString() + "-";
          1    1
        r = r.getDer();
                 1
        while (r != null) {
               KTE
            p.apilar(r);
              1     1
            r = r.getIzq();
        }
    }
      1
    return (rr);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 2 + n( 1 + KTE + 2 + 1 + 1 + 1 + 1 + 1 + 1+ n(KTE + 1 + 1 + 1) + 1 + 2) + 2 + 1$

  $T({n}) = 8 + n(KTE + n(KTE) + 3) + 3$

  $T({n}) = 11 + KTE(n^2) + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __36. Retornar Cadena Pos-Orden-Iterativo (postOrden_Iterativo)__

```java
/**
 * Metodo que permite retornar en un String el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en postOrden para el arbol.<br>
 * @return un String el recorrido inOrden del arbol
 */
public String postOrden_Iterativo() {
      1             10 + KTE(n)$
    return (`37¬postOrden_Iterativo(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 10 + KTE(n)$

  $T({n}) = 11 + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __37. Retornar Cadena Pos-Orden-Iterativo Privado (postOrden_Iterativo)__

```java
/**
 * Metodo de tipo privado que permite retornar en un String el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en postOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @return  un String el recorrido postOrden del arbol
 */
private String postOrden_Iterativo(NodoBin < T > r) {
      1                   1  1
    Pila < NodoBin > pila = new Pila < NodoBin > ();
      1                1
    NodoBin < T > tope = null;
      1       1
    String rr = "";
              1
    while (r != null) {
                1       1      1     1        1       1    1       1
        if (r.getIzq() != null && r.getIzq() != tope && r.getDer() != tope) {
                KTE
            pila.apilar(r);
              1    1
            r = r.getIzq();
                      1        1       1    1        1      1     1
        } else if (r.getIzq() == null && r.getDer() == null && r != tope) {
               2    1            1       1
            rr += r.getInfo().toString() + "-";
                 1
            tope = r;
                     2
            if (!pila.esVacia())
                  1     KTE
                r = pila.desapilar();
                   1
            else r = null;
                      1       1       1       1      1
        } else if (r.getDer() != null && tope != r.getDer()) {
                 KTE
            pila.apilar(r);
              1   1
            r = r.getDer();
                     1        1       1       1      1
        } else if (r.getDer() != null && tope == r.getDer()) {
               2     1           1       1
            rr += r.getInfo().toString() + "-";
                 1
            tope = r;
                      2
            if (!pila.esVacia())
                  1     KTE
                r = pila.desapilar();
                   1
            else r = null;
        }
    }
       1
    return (rr);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1+ n( 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 2 + 1 + KTE) + 1 + 1$

  $T({n}) = 8 + n(KTE) + 2$

  $T({n}) = 10 + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __38. Retornar Niveles (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol Binario. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol Binario.<br>
 * @return Un iterador con el recorrido por niveles del Arbol Binario.
 */
public Iterator < T > impNiveles() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
              2
    if (`41¬!this.esVacio()`) {
          1       1             1  1           1
        Cola < NodoBin < T >> c = new Cola < NodoBin < T >> ();
          KTE          1
        c.enColar(`4¬this.getRaiz()`);
          1
        NodoBin < T > x;
                   2
        while (!c.esVacia()) {
              1    KTE
            x = c.deColar();
                   KTE            1
            l.insertarAlFinal(x.getInfo());
                   1        1
            if (x.getIzq() != null)
                   KTE      1
                c.enColar(x.getIzq());
                   1       1
            if (x.getDer() != null)
                   KTE        1
                c.enColar(x.getDer());
        }
    }
      1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 2 + n(1 + KTE + KTE + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 2) + 2 + 1 + KTE$

  $T({n}) = KTE + n(KTE) + KTE$

  $T({n}) = KTE + KTE(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __39. Obtener Peso (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol Binario.<br>
 * @return Un entero con la cantidad de elementos del Arbol Binario.
 */
public int getPeso() {
      1         KTE           1   
  return (`40¬getPeso`(`4¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __40. Obetener Peso por Raiz (getPeso)__

```java
/**
 * Metodo de tipo privado que permite conocer el numero de elemento del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de elementos en el arbol.<br>
 * @param r Representa la raiz del arbol, o raiz de subarbol. <br>
 * @return El munero de elementos que contiene el Arbol Binario.
 */
private int getPeso(NodoBin < T > r) {
        1
  if (r == null)
        1
      return 0;
    1      KTE        1      1    1    KTE      1
  return (getPeso(r.getIzq()) + 1 + getPeso(r.getDer()));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __41. Consultar Existencia de Elementos (esVacio)__

```java
/**
 * Metodo que permite saber si el Arbol Binario se encuentra vacio. <br>
 * <b>post: </b> Se retorno true si el arbol no contiene elementos.<br>
 * @return true su no hay datos en el Arbol Binario.
 */
public boolean esVacio() {
      1              1
  return (this.raiz == null);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __42. Obtener Altura (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol Binario. <br>
 * <b>post: </b> Se retorno la altura del Arbol Binario.<br>
 * @return Un entero con la altura del Arbol Binario.
 */
public int getAltura() {
                  1
    if (this.raiz == null)
          1
        return (0);
       1           10              1
    return (`43¬getAltura`(`4¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 10 + 1$

  $T({n}) = 13$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __43. Obtener Altura Privada (getAltura)__

```java
/**
 * Metodo de tipo privado que permite conocer la altura del Arbol Binario. <br>
 * <b>post: </b> Se retorno la altura del Arbol Binario. <br>
 * @param r Representa la raiz del arbol, o raiz de subarbol. <br>
 * @return Un entero con la altura del Arbol Binario.
 */
private int getAltura(NodoBin < T > r) {
     1     1       1
    int ai = 0, ad = 0;
            1       1
    if (r.getIzq() != null)
           1     KTE       1
        ai = getAltura(r.getIzq());
           1        1
    if (r.getDer() != null)
           1     KTE       1
        ad = getAltura(r.getDer());
            1
    if (ai >= ad)
          1        1
        return (ai + 1);
      1        1
    return (ad + 1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 10$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __44. Obtener Grado (getGrado)__

```java
/**
 * Metodo de tipo privado que permite el grado del Nodo de un Arbol. <br>
 * <b>post: </b> Se retorno el grado del Nodo de Arbol Binario. <br>
 * @param info Representa la informacion del Nodo a consultar el Grado. <br>
 * @return Un entero con el grado del Nodo consultado.
 */
public int getGrado(T info) {
       1         1     KTE
    NodoBin nodo = `16¬this.buscar(info)`;
              1
    if (nodo == null)
           1
        return (-1);
            8
    if (`23¬this.esHoja(nodo)`)
           1
        return (0);
     1      1
    int rta = 0;
            1          1
    if (nodo.getIzq() != null)
          2
        rta++;
          1            1
    if (nodo.getDer() != null)
          2
        rta++;
      1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + 8 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __45. Consultar Arbol Completo (esCompleto)__

```java
/**
 * Indica si el Arbol es completo. <br>
 * <b>post: </b> Se retorno true si el Arbol esta completo o false de lo contrario. <br>
 * @return True si el Arbol es completo o false de lo contrario
 */
public boolean esCompleto() {
      1          KTE
  return (`46¬esCompleto(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __46. Consultar Arbol Completo Privado (esCompleto)__

```java
/**
 * Indica si el Arbol es completo. <br>
 * <b>post: </b> Se retorno true si el Arbol esta completo o false de lo contrario. <br>
 * @return True si el Arbol es completo o false de lo contrario
 */
private boolean esCompleto(NodoBin < T > r) {
                9
    if (`23¬this.esHoja(r)`)
          1   
        return true;
                 1      1       1     1       1
    else if (r.getIzq() != null && r.getDer() != null)
          1       KTE         1        1     KTE        1
        return esCompleto(r.getIzq()) && esCompleto(r.getDer());
    else
          1    
        return false;
}
```

* ### __Costo Operacional__

  $T({n}) = 9 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __47. Consultar Arbol Lleno (estaLleno)__

```java
/**
 * Indica si el Arbol se encuentra lleno. <br>
 * <b>post: </b> Se retorno true si el Arbol esta lleno o false de lo contrario. <br>
 * @return True si el Arbol esta lleno o false de lo contrario
 */
public boolean estaLleno() {
      1              KTE                   13
  return (`48¬estaLleno`(this.raiz, `42¬this.getAltura()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 13$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __48. Consultar Arbol Lleno Privado (estaLleno)__

```java
/**
 * Indica si el Arbol se encuentra lleno. <br>
 * <b>post: </b> Se retorno true si el Arbol esta lleno o false de lo contrario. <br>
 * @param alt La altura para verificar si el arbol esta lleno
 * @return True si el Arbol esta lleno o false de lo contrario
 */
private boolean estaLleno(NodoBin < T > r, int alt) {
               8
    if (`23¬this.esHoja(r)`)
           1        1
        return (alt == 1);
                1       1       1      1      1
    else if (r.getIzq() == null || r.getDer() == null)
           1
        return false;
    else
           1       KTE       1           1    1     KTE        1           1
        return estaLleno(r.getIzq(), alt - 1) && estaLleno(r.getDer(), alt - 1);
}
```

* ### __Costo Operacional__

  $T({n}) = 8 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __49. Podar Arbol (podar)__

```java
/**
 * Metodo que elimina las hojas(nodos terminales) del arbol binario.<br>
 * <b>post: </b> Se eliminaron las hojas del arbol binario.<br>
 */
public void podar() {
             8
    if (`23¬this.esHoja(raiz)`)
             1
      `5¬this.setRaiz(null)`;
           KTE
    `50¬podar(this.raiz)`;
}
```

* ### __Costo Operacional__

  $T({n}) = 8 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __50. Podar Arbol Privado (podar)__

```java
/**
 * Metodo de tipo privado que elimina las hojas(nodos terminales) del arbol binario. <br>
 * <b>post: </b> Se eliminaron las hojas del arbol binario.<br>
 * @param x reprenseta la raiz del arbol, o raiz de subarbol
 */
private void podar(NodoBin < T > x) {
          1
    if (x == null)
          1
        return;
            8            1
    if (`23¬this.esHoja(x.getIzq())`)
            1
        x.setIzq(null);
            8            1
    if (`23¬this.esHoja(x.getDer())`)
            1 
        x.setDer(null);
      KTE     1
    podar(x.getIzq());
      KTE     1
    podar(x.getDer());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 8 + 1 + 8 + 1 + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __51. Retornar Łukasiewicz (Luca)__

```java
/**
 * Metodo que retorna el codigo  Łukasiewicz del arbol binario; Este codigo etiqueta los nodos internos con "a" 
 * y los externos con una "b" y realiza el recorrido en preorden con estas convenciones. <br>
 * <b>post: </b> Se retorno el codigo  Łukasiewicz del Arbol Binario.<br>
 * @return  un String con el codigo  Łukasiewicz del arbol binario
 */
public String Luca() {
      1       KTE
  return (`52¬Luca(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __52. Retornar Łukasiewicz Privado (Luca)__

```java
/**
 * Metodo que retorna el codigo Łukasiewicz del arbol binario; Este codigo etiqueta los nodos internos con "a" 
 * y los externos con una "b" y realiza el recorrido en preorden con estas convenciones. <br>
 * <b>post: </b> Se retorno el codigo  Łukasiewicz del arbol binario.<br>
 * @param r reprenseta la raiz del arbol, o raiz de subarbol
 * @return  un String con el codigo  Łukasiewicz del arbol binario
 */
private String Luca(NodoBin < T > r) {
          1
    if (r == null)
          1
        return ("b");
        1       1   KTE   1        1   KTE   1
    return ("a" + Luca(r.getIzq()) + Luca(r.getDer()));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + KTE + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __53. Cosnultar Arboles Iguales (esIgual)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son iguales de Informacion y estructura. <br>
 * <b>post: </b> Se retorno true si los arboles son Iguales. <br>
 * @param a2 Segundo arbol a evaluar su igualdad con el arbol actual. <br>
 * @return Un boolean dependiendo de si los Arboles son iguales o no.
 */
public boolean esIgual(ArbolBinario < T > a2) {
      1          KTE                     1
  return (`54¬esIgual`(this.raiz, `4¬a2.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __54. Consultar Arboles Iguales Privado (esIgual)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son iguales de Informacion y estructura. <br>
 * <b>post: </b> Se retorno true si los arboles son Iguales. <br>
 * @param r1 Representa el NodoBin del primer Arbol evaluado. <br>
 * @param r2 Representa el NodoBin del segundo Arbol evaluado. <br>
 * @return Un boolean dependiendo de si los Arboles son iguales o no.
 */
private boolean esIgual(NodoBin < T > r1, NodoBin < T > r2) {
           1       1      1
    if (r1 == null && r2 == null)
           1
        return (true);
           1       1      1
    if (r1 == null || r2 == null)
           1
        return (false);
            1        1     1  
    if (r1.getInfo() == r2.getInfo())
          1       KTE       1              1      1    KTE       1            1
        return (esIgual(r1.getIzq(), r2.getIzq()) && esIgual(r1.getDer(), r2.getDer()));
    else
          1
        return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __55. Es Isomorfo (esIsomorfo)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son isomorfos; Misma estructura o forma. <br>
 * <b>post: </b> Se retorno true si los arboles son isomorfos. <br>
 * @param a2 Segundo arbol a evaluar su igualdad con el arbol actual. <br>
 * @return Un boolean dependiendo de si los Arboles son isomorfos o no.
 */
public boolean esIsomorfo(ArbolBinario < T > a2) {
      1           KTE                     1
  return (`56¬esIsomorfo`(this.raiz, `4¬a2.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __56. Es Isomorfo Privado (esIsomorfo)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son isomorfos; Misma estructura o forma. <br>
 * <b>post: </b> Se retorno true si los arboles son isomorfos. <br>
 * @param r1 Representa el NodoBin del primer Arbol evaluado. <br>
 * @param r2 Representa el NodoBin del segundo Arbol evaluado. <br>
 * @return Un boolean dependiendo de si los Arboles son Isomorfos o no.
 */
private boolean esIsomorfo(NodoBin < T > r1, NodoBin < T > r2) {
            1      1     1
    if (r1 == null && r2 == null)
           1
        return (true);
            1      1     1
    if (r1 == null || r2 == null)
          1
        return (false);
      1         KTE       1            1         1     KTE        1           1
    return (esIsomorfo(r1.getIzq(), r2.getIzq()) && esIsomorfo(r1.getDer(), r2.getDer()));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __57. Consultar Arboles Semejantes (esSemejante)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son semejantes; Misma informacion, diferente forma. <br>
 * <b>post: </b> Se retorno true si los arboles son Semejantes. <br>
 * @param a2 Segundo arbol a evaluar su igualdad con el arbol actual. <br>
 * @return Un boolean dependiendo de si los Arboles son semejantes o no.
 */
public boolean esSemejante(ArbolBinario < T > a2) {
               KTE           1        KTE
    if (`39¬this.getPeso()` != `39¬a2.getPeso()`)
          1
        return (false);
       1           KTE            1
    return (`58¬esSemejante`(`4¬a2.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = KTE + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __58. Consultar Arboles Semejantes Privado (esSemejante)__

```java
/**
 * Metodo que permite saber si dos Arboles Binarios son semejantes; Misma informacion, diferente forma. <br>
 * <b>post: </b> Se retorno true si los arboles son Semejantes. <br>
 * @param r1 Representa el NodoBin del primer Arbol evaluado. <br>
 * @param r2 Representa el NodoBin del segundo Arbol evaluado. <br>
 * @return Un boolean dependiendo de si los Arboles son Semejantes o no.
 */
private boolean esSemejante(NodoBin < T > r) {
          1
    if (r == null)
          1
        return (true);
            1    KTE       1
    if (!`13¬this.esta(r.getInfo())`)
          1
        return (false);
                KTE         1       1      KTE        1
    return (esSemejante(r.getIzq()) && esSemejante(r.getDer()));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + KTE + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __59. Imprimir Arbol (imprime)__

```java
/**
 * Metodo que permite conocer por consola la informacion del Arbol Binario.
 */
public void imprime() {
         KTE
    System.out.println(" ----- Arbol Binario ----- ");
         KTE
    `60¬this.imprime(this.raiz)`;
}
```

* ### __Costo Operacional__

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __60. Imprimir Arbol Privado (imprime)__

```java
/**
 * Metodo de tipo privado que permite mostrar por consola la informacion del Arbol Binario. <br>
 * @param n Representa la raiz del ArbolBinario o de alguno de sus subarboles.
 */
public void imprime(NodoBin < T > n) {
    1   1
    T l = null;
    1   1
    T r = null;
          1
    if (n == null)
          1
        return;
           1        1
    if (n.getIzq() != null) {
          1     1        1
        l = n.getIzq().getInfo();
    }
          1        1
    if (n.getDer() != null) {
          1    1         1
        r = n.getDer().getInfo();
    }
           KTE                     1   1             1    1        1                1
    System.out.println("NodoIzq: " + l + "\t Info: " + n.getInfo() + "\t NodoDer: " + r);
            1       1
    if (n.getIzq() != null) {
           KTE      1
        imprime(n.getIzq());
    }
           1        1
    if (n.getDer() != null) {
           KTE     1
        imprime(n.getDer());
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __61. Clonar Arbol (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol Binario Busqueda. <br>
 * @return Un objeto de tipo ArboBinarioBusqueda con la informacion duplicada del Arbol.
 */
public ArbolBinarioBusqueda < T > clonar() {
           1                     1   1
    ArbolBinarioBusqueda < T > t = new ArbolBinarioBusqueda < T > ();
       1                 KTE         1
    t.setRaiz(`62¬clonarAB`(`4¬this.getRaiz()`));
       1
    return (t);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + KTE + 1 + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __62. Clonar Arbol Privado (clonarAB)__

```java
private NodoBin < T > clonarAB(NodoBin < T > r) {
    //Mejor de los casos
           2
    if (r == null)
           1
        return r;
    //Peor de los casos
    else {
           1              1  1                     1           KTE       1           KTE        1           
        NodoBin < T > aux = new NodoBin < T > (r.getInfo(), clonarAB(r.getIzq()), clonarAB(r.getDer()));
           1
        return aux;
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 1 + 1 + 1 + KTE + 1 + KTE + 1$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***
