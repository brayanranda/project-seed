# __COSTO OPERACIONAL Y COMPLEJIDAD (COLAS-P)__

[CODIGO FUENTE (COLAS-P)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ColaP.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

***

## __1. Constructor (ColaP)__

```java
/**
 * Constructor de la Clase Cola, por defecto el primer y ultimo nodo es NULL y su tamaño es 0. <br>
 * <b>post: </b> Se construyo una Cola.
 */
public ColaP() {
       5
     super();
           1            1
     super.setInicio(new NodoP < T > (null, null, null, 0));
             1     1       1              1
     NodoP < T > x = (NodoP < T > ) super.getInicio();
         1
     x.setSig(x);
         1
     x.setAnt(x);
}
```

* ### __Costo Operacional__

     $T({n}) = 5 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

     $T({n}) = 13$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __2. Insertar Elemento (enColar)__

```java
/**
 * Metodo que permite agregar un elemento a la Cola. <br>
 * <b>post: </b> Se inserto un nuevo elemento a la Cola.<br>
 * @param info es de tipo T y contiene la informacion a en colar. <br>
 * @param p es de tipo entero y representa la prioridad del elemento. 
 */
public void enColar(T info, int p) {
          1            1    1 
     NodoP < T > nuevo = new NodoP < T > (info, null, null, p);
             4            1
     if (`7¬this.esVacia()`) {
          //Mejor de los casos
          NodoP < T > x = new NodoP < T > (info, (NodoP < T > ) super.getInicio(), (NodoP < T> ) super.getInicio().getAnt(),p);
          ((NodoP < T > ) super.getInicio()).getAnt().setSig(x);
          ((NodoP < T > ) super.getInicio()).setAnt(x);
          this.aumentarTamanio();
     } else {
          //Peor de los casos
                    1                  1          1             1        1             1
          if (((NodoP < T > ) super.getInicio().getSig()).getPrioridad() < nuevo.getPrioridad()) {
               //Mejor de los casos
               //Inserta al inicio
               nuevo.setSig(((NodoP < T > ) super.getInicio()).getSig());
               ((NodoP < T > ) super.getInicio()).getSig().setAnt(nuevo);
               ((NodoP < T > ) super.getInicio()).setSig(nuevo);
               nuevo.setAnt(((NodoP < T > ) super.getInicio()));
               super.aumentarTamanio();
          } else {
               //Peor de los casos
               //NodoP iterado
                    1        1        1                  1          1
               NodoP < T > c = ((NodoP < T > ) super.getInicio()).getSig();
                    1      1
               boolean ins = false;
                         1        1             1             1    1
               while (c != ((NodoP < T > ) super.getInicio()) && !ins) {
                             1     1         1                  1         1    1            1         1             1
                    if (c.getSig() != ((NodoP < T > ) super.getInicio()) && c.getSig().getPrioridad() < nuevo.getPrioridad()) {
                              1        1
                         nuevo.setSig(c.getSig());
                             1        1   
                         c.getSig().setAnt(nuevo);
                              1
                         c.setSig(nuevo);
                                  1
                         nuevo.setAnt(c);
                                       2
                         super.aumentarTamanio();
                             1
                         ins = true;
                    } else {
                         //Mejor de los casos
                         c = c.getSig();
                    }
               }
               //Si no inserto, es porque tiene la menor prioridad
                     1        1                 1
               if (c == ((NodoP < T > ) super.getInicio())) {
                         1        1    1                         1             1
                    NodoP < T > x = new NodoP < T > (info, (NodoP < T > ) super.getInicio(), 
                         1              1               1 
                    (NodoP < T > ) super.getInicio().getAnt(), p);
                         1                     1          1        1
                    ((NodoP < T > ) super.getInicio()).getAnt().setSig(x);
                         1                   1           1
                    ((NodoP < T > ) super.getInicio()).setAnt(x);
                                2
                    this.aumentarTamanio();
               }
          }
     }
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 4 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1) 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2$
     
     $T({n}) = 26 + n(23) + 25$

     $T({n}) = 23n + 51$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __3. Eliminar Elemento (deColar)__

```java
/**
 * Metodo que permite retirar el primer elemento que fue insertado en la Cola. <br>
 * <b>post: </b> Se elimina el primer elemento que fue insertado en la Cola. <br>
 * @return un tipo T que contiene la informacion del nodo retirado
 */
@Override
public T deColar() {
       1           18
     return (super.deColar());
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 18$

     $T({n}) = 19$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __4. Vaciar la Cola (vaciar)__

```java
/**
 * Metodo que permite elimar todos los datos que contiene la Cola. <br>
 * <b>post: </b> Se elimino todos los datos que se encontraban en la Cola.<br>
 */
@Override
public void vaciar() {
          3
     super.vaciar();
}
```

* ### __Costo Operacional__

     $T({n}) = 3$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __5. Obtener Informacion Primer Elemento (getInfoInicio)__

```java
/**
 * Metodo que permite conocer el primer elemento que fue insertado en la Cola. <br>
 * <b>post: </b> Se obtiene el primer elemento que fue insertado en la Cola.<br>
 * @return el primer elemento que fue insertado en la cola
 */
@Override
public T getInfoInicio() {
        1          3
     return (super.getInfoInicio());
}
```

* ### __Costo Operacional__

     $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __6. Obtener Tamanio (getTamanio)__

```java
/**
 * Metodo que retorna el tamaño de la Cola. <br>
 * <b>post: </b> Se retorno el numero de elementos existentes en la Cola.<br>
 * @return un tipo integer qeu contiene el tamaño de la Cola.
 */
@Override
public int getTamanio() {
        1            1
     return (super.getTamanio());
}
```

* ### __Costo Operacional__

     $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __7. Consultar Existencia de Elementos (esVacia)__

```java
/**
 * Metodo que permite evaluar si la Cola se encuentra o no vacia. <br>
 * <b>post: </b> Retorna si la Cola se encuentra vacia, retorna false si hay elementos en la Cola.<br>
 * @return Un tipo boolean, true si es vacio y false si contiene nodos
 */
@Override
public boolean esVacia() {
        1         3
     return (super.esVacia());
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 3$

     $T({n}) = 4$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __8. Imprimir Contenido (toString)__

```java
/**
 * Convierte la pila a una cadena de String. <br>
 * <b>post: </b> Se retorno la representacion en String de la pila. 
 * El String tiene el formato "e1->e2->e3..->en", donde e1, e2, ..., en son los los elementos de la Pila. <br>
 * @return La representacion en String de la Pila.
 */
@Override
public String toString() {
          1     1
     String msj = "";
          1        1       1              1
     NodoP < T > c = ((NodoP < T > ) super.getInicio());
          1        1
     NodoP < T > x = c;
       1     1
     x = x.getSig();
              1         1             1
     while (x != ((NodoP < T > ) super.getInicio())) {
              2         1     1
          msj += x.toString() + "->";
            1     1
          x = x.getSig();
     }
        1
     return msj;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n( 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1$

     $T({n}) = 6 + n( 9 ) + 4$

     $T({n}) = 9n + 10$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __9. Clonar (clonar)__

```java
public ColaP < T > clonar() {
          1           1    13
     ColaP < T > clon = new `1¬ColaP()`;
          1        1       1              1
     NodoP < T > c = ((NodoP < T > ) super.getInicio());
          1        1
     NodoP < T > x = c;
       1     1
     x = x.getSig();
               1        1             1
     while (x != ((NodoP < T > ) super.getInicio())) {
          (23n + 51)        1              1
          clon.enColar(x.getInfo(), x.getPrioridad());
            1  1
          x = x.getSig();
     }
        1
     return (clon);
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 13 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n((23n + 51) + 1 + 1 + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + 1$

     $T({n}) = 26 + n(23n + 58) + 4$

     $T({n}) = 23n² + 58n + 30$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n²})$

***

## __Conclusión__

En el análisis anterior se pudo observar que la estructura Cola prioridad toma como base la cola simple, sin embargo esta al tener que recorrer multiples veces su tamaño y al mismo tiempo dar prioridad esta llega en el peor de los casos a ser cuadratica.
