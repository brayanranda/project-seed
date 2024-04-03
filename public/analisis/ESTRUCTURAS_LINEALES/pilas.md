# __COSTO OPERACIONAL Y COMPLEJIDAD (PILAS)__

[CODIGO FUENTE (PILAS)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/Pila.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O).

***

## __Constructor__

```java
/**
 * Metodo constructor vacio de la clase Pila. <br>
 * <b>post: </b> Se construye una Pila vacia
 */
public Pila() {
               1
     this.tope = null;
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

## __Insertar Elemento__

```java
/**
 * Metodo que inserta un elemento en la Pila. <br>
 * <b>post: </b> Se inserto un elemento dentro de la Pila.<br>
 * @param info es de tipo T y contiene la información a insertar en la pila.
 */
public void apilar(T info) {
     //T(esVacia) = 4 y 1 de la validacion
              5
     if (this.esVacia())
          this.tope = new Nodo < T > (info, null);
     else
                    1       1      
          this.tope = new Nodo < T > (info, this.tope);
               2
     this.tamanio++;
}
```

* ### __Costo Operacional__

     $T({n}) = 5 + 1 + 1 + 2$

     $T({n}) = 9$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Eliminar Elemento__

```java
/**
 * Metodo que retira y devuelve un elemneto de la Pila. <br>
 * <b>post: </b> Se retiro y elimino el elemento tope de la Pila.<br>
 * @return un tipo T y contiene la información retirada de la pila.<br>
 */
public T desapilar() {
     //T(esVacia) = 4 y 1 de la validacion
              5
     if (this.esVacia())
     //Mejor de los casos
          return (null);
     //Peor de los casos
           1      1
     Nodo < T > x = this.tope;
               1         1
     this.tope = tope.getSig();
             2
     this.tamanio--;
                 1
     if (tamanio == 0)
                    1
          this.tope = null;
        1         1
     return (x.getInfo());
}
```

* ### __Costo Operacional__

     $T({n}) = 5 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1$

     $T({n}) = 15$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Eliminar Todos los Elementos__

```java
/**
 * Elimina todos los datos de la Pila. <br>
 * <b>post: </b> Se elimino todos los datos que se encontraban en la Pila.<br>
 */
public void vaciar() {
               1
     this.tope = null;
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


## __Obtener Elemento Tope__

```java
/**
 * Metodo devuelve el elemento que se encuentra en el tope de la Pila. <br>
 * <b>post: </b> Se retorno el elemento tope de la Pila.<br>
 * @return El elemento que esta en el tope de la Pila.
 */
public T getTope() {
       1                  1
     return (this.tope.getInfo());
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1$

     $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Obtener Cantidad de Elementos__

```java
/**
 * Metodo que retorna el tamaño de la pila. <br>
 * <b>post: </b> Se retorno el tamaño de la Pila.<br>
 * @return un tipo de dato Integer que contiene el tamaño de la Pila.
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
 * Metodo que comprueba si la pila esta vacía. <br>
 * <b>post: </b> Se retorno true si la Pila se encuentra vacia y false si no lo esta. <br>
 * @return un tipo boolean, true si es vacía y false si no.
 */
public boolean esVacia() {
          1               1       1              1
     return (this.tope == null || this.tamanio == 0);
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1$

     $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Imprimir Contenido__

```java
/**
 * Convierte la pila a una cadena de String. <br>
 * <b>post: </b> Se retorno la representacion en String de la pila. 
 * El String tiene el formato "e1->e2->e3..->en", donde e1, e2, ..., en son los los elementos de la Pila. <br>
 * @return La representacion en String de la Pila.
 */
@Override
public String toString() {
         1      1
     String msj = "";
        1         1
     Nodo < T > p = tope;
               1
     while (p != null) {
               2      1          1      1
          msj += p.getInfo().toString() + "->";
            1     1
          p = p.getSig();
     }
        1
     return msj;
}

```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 1 + 1 ) + 1$

     $T({n}) = 5 + n( 7 ) + 1$

     $T({n}) = 7(n) + 6$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la estructura Pila obta en el mejor de los casos a ser constante y en el peor de los casos a ser lineal. Teniendo en cuenta que su comportamiento lineal es en base a "this.tamanio", esté mismo se puede considerar su "n" para saber el coste operacional de cada algoritmo.
