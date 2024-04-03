# __COSTO OPERACIONAL Y COMPLEJIDAD (HASH)__

[CODIGO FUENTE (HASH)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/TablaHash.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O).

***

## __Constructor tabla hash con 23 slots__

```java
/**
 * Constructor de una tabla hash con 23 slots. <br>
 * <b> post:</b> Se creo una tabla hash con 23 slots. <br>
 */
public TablaHash() {
                      1
     this.numeroDatos = 0;
                      1
     this.numeroSlots = 11;
                             1    1
     this.informacionEntrada = new ListaCD[this.numeroSlots];
     // inicializar los Slots de la tabla 
     // T(inicializarListas()) = 5n + 3
               5n + 3
     this.inicializarListas();
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + (5n + 3)$

     $T({n}) = 5n + 7$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Constructor tabla hash con slots especificos__

```java
/**
 * Constructor de una tabla hash con numero Slots de la tabla espeficos. <br>
 * <b> post:</b> Se creo tabla hash con numeroSlots de la tabla especificos. <br>
 * @param numeroSlots numero que representa los slots de la tabla. <br>
 */
public TablaHash(int numeroSlots) {
                      1
     this.numeroDatos = 0;
                      1
     this.numeroSlots = numeroSlots;
                             1    1
     this.informacionEntrada = new ListaCD[numeroSlots];
     // inicializar los Slots de la tabla 
     // T(inicializarListas()) = 5n + 3
               5n + 3
     this.inicializarListas();
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 5n + 3$

     $T({n}) = 5n + 7$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Insertar o Modificar en la tabla__

```java
/**
 * Metodo que permite insertar o modificar en la tabla un objeto con su respectiva clave. <br>
 * <b> post:</b> Se inserto o modifico un objeto en la tabla fragmentada . <br>
 * @param clave representa la clave del objeto a insertar o modificar. <br>
 * @param objeto representa el objeto a insertar en la tabla. <br>
 * @return el objeto insertado.
 */
public T insertar(Clave clave, T objeto) {
       1        1
     int indice = 0;
              1                                       1
     InformacionDeEntrada < Clave, T > objetoAnterior = null;
               1
     if (clave == null) {
         //Mejor de los casos
         throw new RuntimeException("La Clave de Objeto no puede ser vacia!!!");
     } else {
          //T(index()) = KTE
                 1      KTE
          indice = index(clave);
          //T(registrarEntrada()) = 14
                         1              14
          objetoAnterior = this.registrarEntrada(indice, clave);
                             1
          if (objetoAnterior == null) { // Si la clave del objeto no se encuentra en la tabla lo insertamos
                         1                                   1   1         1
               InformacionDeEntrada < Clave, T > nuevoObjeto = new InformacionDeEntrada(clave, objeto);
                                                    1
               this.informacionEntrada[indice].insertarAlFinal(nuevoObjeto);
                                2
               this.numeroDatos += 1;
               //T(getObjeto())=KTE
                  1                 KTE 
               return nuevoObjeto.getObjeto();
          } else // si la clave esta se encuentra en la tabla modificamos el objeto
               //Mejor de los casos
               objetoAnterior.setObjeto(objeto);
     }
       1     1                    KTE
     return (T) objetoAnterior.getObjeto();
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 14 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + KTE + 1 + 1 + KTE$

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Eliminar Objeto Especifico__

```java
/**
 * Metodo que permite eliminar un objeto entrada de la tabla fragmentada. <br>
 * <b> post:</b> Se elimino el objeto en la tabla fragmentada . <br>
 * @param clave representa la clave del objeto que se desea eliminar. <br>
 * @return  el objeto que se elimino o null en caso de que no exista en la tabla un objeto con esa clave.
 */
public T eliminar(Clave clave) {
      1    1
     int i = 0;
           1     
     InformacionDeEntrada objeto;
                1
     if (clave == null) {
          //Mejor de los casos
          throw new RuntimeException("La Clave de Objeto no puede ser vacia!!!");
     } else {
          //T(index())= KTE
           1         1     KTE
          int indice = index(clave);
             1               1                                     1
          ListaCD < InformacionDeEntrada < Clave, T >> listaObjeto = this.informacionEntrada[indice];
                 1   1           1
          objeto = new InformacionDeEntrada(clave);
            1                    1
          i = listaObjeto.getIndice(objeto);
                1
          if (i == -1)
               //Mejor de los casos
               objeto = null;
          else {
                      1            1                      KTE
               objeto = (InformacionDeEntrada) listaObjeto.eliminar(i);
                         2
               this.numeroDatos--;
          }
     }
        1     1       KTE
     return (T) objeto.getObjeto();
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 2 + 1 + 1 + KTE$

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Existencia del Objeto__

```java
/**
 * Metodo que permite conocer si se encuentra un objeto asociado con la clave dada. <br>
 * <b>post:<b> Se consulto si se encuentra un objeto asociado con la clave dada. <br>
 * @param clave dato a verificar si se encuentra en la tabla. <br>
 * @return true de encontrar un objeto asociado con la clave dada. <br>
 */
public boolean esta(Clave clave) {
     //T(getObjeto())=KTE
        1        KTE                1
     return (this.getObjeto(clave) != null);
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + KTE + 1$

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Obtener Objeto__

```java
/**
 * Método que permite obtener el objeto asociado con la clave especificada. <br>
 * <b> post:</b> Se obtuvo el objeto de la tabla fragmentada, que posee esa clave . <br>
 * @param clave representa la clave del objeto que se desea obtener. <br>
 * @return El objeto asociado con la clave o null si no existe objeto con esa clave.
 */
public Object getObjeto(Clave clave) {
              1
     InformacionDeEntrada objeto;
               1
     if (clave == null)
          //Mejor de los casos
          throw new IllegalArgumentException("Clave null no permitida");
     else {
          //T(index())=KTE
             1       1    KTE
          int indice = index(clave);
             1               1                                     1
          ListaCD < InformacionDeEntrada < Clave, T >> listaObjeto = this.informacionEntrada[indice];
                 1  1             1
          objeto = new InformacionDeEntrada(clave);
            1   1            1
          int i = listaObjeto.getIndice(objeto);
                1
          if (i == -1)
               //Mejor de los casos
               return null;
          else {
                      1           1
               objeto = listaObjeto.get(i);
          }
     }
       1          KTE
     return objeto.getObjeto();
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE$

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Registrar Entrada por Clave__

```java
/**
 * Metodo que permite registrar una entrada con la clave especificada dentro del slot indicado en la tabla. <br>
 * <b>pre: </b> clave!=null, indice!=null, indice>=0. <br>
 * <b>post: </b> Se registro la entrada en el slot de la tabla indicado. <br>
 * @param indice representa el indice de la tabla, donde se registrara la clave con su respectivo objeto. <br>
 * @param clave representa la clave del objeto a registrar en la tabla. <br>
 * @return la nueva entrada a la tabla o null de no encontrar una entrada asociada a la clave del objeto.
 */
private InformacionDeEntrada registrarEntrada(int indice, Clave clave) {
                     1                        1   1                1
     InformacionDeEntrada < Clave, T > objeto = new InformacionDeEntrada(clave);
            1                     1                             1
     ListaCD < InformacionDeEntrada < Clave, T >> listaEntradas = this.informacionEntrada[indice]; //Slot de la tabla donde deberia encontrarse el objeto
       1   1                       1
     int i = listaEntradas.getIndice(objeto);
           1
     if (i == -1)
          //Mejor de los casos
          objeto = null;
     else
                 1             1
          objeto = listaEntradas.get(i);
         1
     return objeto;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

     $T({n}) = 14$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Obtener Indice__

```java
/**
 * Metodo que permite dispersar el codigo hash de la clave especifica, para garantizar una mejor distribucion en la asignacion de las entradas. <br>
 * <b>pre: </b> hcode!=null. <br>
 * <b> post:</b> Se obtuvo el indice de asignacion de slot en la tabla para la clave de la entrada. <br>
 * @param clave 
 * @return indice de asignacion de slot en la tabla para la clave de la entrada. <br>
 */
public int index(Clave clave) {
       1       1      KTE
     int hcode = clave.hashCode();
          1     1       KTE        1      1
     double num = ((Math.sqrt(5.0) - 1.0) / 2.0); //numero que se utiliza para mejor distribucion de las entradas en la tabla hash.
          1   1      KTE         1
     double t = (Math.abs(hcode) * num); //(this.numeroDatos+1); //valor absoluto de hash de objeto 
        1       1     1   1      1         
     return ((int)((t - (int) t) * (this.numeroSlots)));
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + KTE + 1 + 1 + KTE + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1$

     $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Eliminar Entradas__

```java
/**
 * Metodo que permite eliminar las entradas de la tabla hash. <br>
 * <b> post:</b> Se eliminaron todos los datos antes almacendos en la tabla. <br>
 */
public void eliminarTodo() {
                      1
     this.numeroDatos = 0;
           1    1      1                                  2
     for (int i = 0; i < this.informacionEntrada.length; i++)
                                     1
          this.informacionEntrada[i] = null;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + n(1 + 2 + 1)$

     $T({n}) = 4n + 4$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Obtener Numero de Objetos Almacenados__

```java
/**
 * Metodo que permite obtener el numero de objetos almacenados en la tabla hash. <br>
 * <b> post:</b> Se obtuvo el numero de objetos almacenados en la tabla hash. <br>
 * @return el numero de objetos almacenados en la tabla hash.
 */
public int getNumeroDatos() {
        1
     return numeroDatos;
}
```

* ### __Costo Operacional__

     $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Obtener Numero de Slots__

```java
/**
 * Metodo que permite obtener el numero de slots de la tabla hash. <br>
 * <b> post:</b> Se obtuvo el numero de slots de la tabla hash. <br>
 * @return el numero de slots de la tabla hash.
 */
public int getNumeroSlots() {
       1
     return numeroSlots;
}
```

* ### __Costo Operacional__

     $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Listado de los Objetos de Entrada__

```java
/**
 * Metodo que permite obtener el listado de los objetos de entrada de la tabla hash. <br>
 * <b> post:</b> Se obtuvo el listado de los objetos de entrada de la tabla hash. <br>
 * @return el listado de los objetos de entrada de la tabla hash.
 */
public ListaCD < InformacionDeEntrada < Clave, T >> [] getInformacionEntrada() {
       1 
     return informacionEntrada;
}
```

* ### __Costo Operacional__

     $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Obtener Numero de Slots__

```java
/**
 * Metodo que permite determinar el numero de Slots ocupados en la Tabla. <br>
 * @return El numero de slots ocupados en la tabla en un entero.
 */
public int numSlotOcupados() {
       1   1
     int i = 0;
       1      1
     int cant = 0;
              1
     while (i < this.numeroSlots) {
          //T(esVacia())=2 y la validacion 1
              1                3
          if (!this.informacionEntrada[i].esVacia())
                  2
               cant++;
           2
          i++;
     }
        1
     return cant;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + n(1 + 3 + 2 + 2 + 1) + 1

     $T({n}) = 5 + n(9) + 1

     $T({n}) = 9n + 6

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Modificar Slots Lista__

```java
/**
 * Metodo que modificar el numero de slots de la tabla hash. <br>
 * <b> post:</b> Se modifico el numero de slots de la tabla hash. <br>
 * @param numeroSlots nuevo tamanio de la tabla hash. <br>
 */
public void setNumeroSlots(int numeroSlots) {
                      1
     this.numeroSlots = numeroSlots;
}
```

* ### __Costo Operacional__

     $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Modificar Lista__

```java
/**
 * Metodo que permite modificar el listado de los objetos de entrada de la tabla hash. <br>
 * <b> post:</b> Se modifico el listado de los objetos de entrada de la tabla hash. <br>
 * @param informacionEntrada el nuevo listado de los objetos de entrada de la tabla hash.
 */
public void setInformacionEntrada(ListaCD < InformacionDeEntrada < Clave, T >> [] informacionEntrada) {
                             1
     this.informacionEntrada = informacionEntrada;
}
```

* ### __Costo Operacional__

     $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***

## __Iniciar Listas__

```java
/**
 * Inicializa las listas que representan los Slots de la tabla de hashing. <br>
 * <b>pre: </b> informacionEntradas!=null. <br>
 * <b>post: </b> Se inicializaron las lista que representan los slots.
 */
private void inicializarListas() {
             1  1      1                                  2
     for (int i = 0; i < this.informacionEntrada.length; i++) {
                                     1    1
          this.informacionEntrada[i] = new ListaCD();
     }
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + n(1 + 1 + 2 + 1)$

     $T({n}) = 3 + n(5)$

     $T({n}) = 5n + 3$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Obtener Primo__

```java
/**
 * Metodo que permite obtener un numero primo cercano al valor dado. <br>
 * <b>post: </b> Se obtuvo  un numero primo cercano al valor dado.
 * @param numero representa el valor a obtener el numero primo mas cercano
 * @return  un numero primo cercano al valor dado.
 */
private int obtenerPrimo(int numero) {
       1       1        1
     int primo = numero - 1;
     //T(esPrimo()) = 8n + KTE y la validacion 1
            1   8n + KTE
     while (!esPrimo(primo)) {
                2
          primo += 2;
     }
        1
     return primo;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + (8n + KTE) + n(2 + 1 + 8n + KTE) + 1$

     $T({n}) = 4 + 8n + KTE + 8n² + KTE(n) + 1$

     $T({n}) = 8n² + KTE(n) + 8n + KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n²})$

***

## __Consultar Si es Primo__

```java
/**
 *  Metodo que permite verificar si el numero dado es un numero primo. <br>
 * <b>pre: </b> todos los numeros deben tener un divisor primo menor q su raiz cuadrada. <br>
 * <b>post: </b> Se verifico si el mumero dado es primo. <br>
 * @param numero valor a verificar si es primo. <br>
 * @return true si el numero es primo.
 */
public boolean esPrimo(int numero) {
        1            1
     boolean esPrimo = false;
        1             1    1      KTE
     int raizCuadrada = (int) Math.sqrt(numero);
           1    1       1              1  1    1        2
     for (int i = 3; i <= raizCuadrada && !(esPrimo); i += 2) {
                     1   1
          if (numero % i != 0) {
                       1
               esPrimo = true;
          }
     }
         1
     return esPrimo;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 1 + 2 + 1 + 1 + 1 + 1) + 1$

     $T({n}) = KTE + n(9) + 1$

     $T({n}) = 9n + KTE$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Imprimir Datos__

```java
/**
 * Metodo que permite imprimir los datos almacenados en la tabla. <br>
 *  <b>post: </b> Se retorno una cadena de caracteres que representan los datos almacenados en la tabla. <br>
 * @return cadena de caracteres que representan los datos almacenados en la tabla.
 */
public String imprimir() {
       1        1
     String msg = "";
            1   1      1                                  2
     for (int i = 0; i < this.informacionEntrada.length; i++)
                                         1
          if (this.informacionEntrada[i] != null)
                   2                            1   1        1                               KTE     1
               msg += "Slot de la tabla numero" + i + " ==>" + this.informacionEntrada[i].toString() + "\n";
        1
     return msg;
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1 + 1 + 1 + 1 + n(1 + 2 + 1 + 1 + 1 + KTE + 1 + 1 + 2) + 1$

     $T({n}) = 5 + n(KTE) + 1$

     $T({n}) = KTE(n) + 6$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({n})$

***

## __Consultar Existencia__

```java
/**
 * Metodo que permite determinar si la Tabla se encuentra vacía. <br>
 * @return Un objeto de tipo boolean con true si la tabla se encuentra vacia.
 */
public boolean esVacia() {
       1                      1
     return (this.numeroDatos == 0);
}
```

* ### __Costo Operacional__

     $T({n}) = 1 + 1$

     $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

     $Big O = O({1})$

***