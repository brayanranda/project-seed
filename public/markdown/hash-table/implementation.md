# Tabla Hash en SEED {"subTitle":"Implementación de"}

## Descripción

Esta estructura consiste en el almacenamiento de datos en una tabla, en el cual para la inserción de datos se aplica un algoritmo cuyo propósito es la realizar la mejor distribución posible de índices en la tabla, en este contexto se podría generar que dos o más objetos generen un mismo índice en la tabla a esto se le denomina “colisión”, la solución que se implementó es direccionamiento abierto o Hashing cerrado, el cual consiste en generar listas en cada una de las posiciones de la tabla, implementado la estructura como un vector de listas, que por costo algorítmico se definió que fueran listas circulares dobles.  
  
La estructura se implementó en la clase TablaHash, que contiene el tamaño de la tabla, el número de datos almacenados en ella y un vector de ListaCD de tipo InformacionDeEntrada implementado en la clase InformacionDeEntrada. InformacionDeEntrada son objetos que poseen la clave del objeto y el objeto que será insertado como un objeto general en la tabla.  
  
La función hash utilizada para la distribución de índices, consiste en la raíz cuadrada absoluta del codigo Hash asignado por defecto a todo los objetos de la clase Object, multiplicado por el valor recíproco de la relación áurea (sqrt( 5.0 ) - 1.0) / 2.0) que según estudios se obtiene resultados eficientes. \[54\] A este resultado se le resta la parte entera y se multiplica su parte decimal por el tamaño de la tabla dando como resultado índices de 0 hasta el tamaño de la tabla, cabe mencionar que esta función es más eficiente con un número primo como tamaño de la tabla y que todavía no existe una función hash perfecta. Para esta estructura se implementaron diversos procesos, los más relevantes se ilustran en el siguiente diagrama de clases.  
  

![Diagrama de clases de Tabla Hash](/assets/images/hash-table/tablaH_1.jpg)
  
**Requerimientos funcionales implementados:**  
  
- **RF1** Crear un nueva Tabla Hash.  
- **RF2** Insertar nuevos datos en una Tabla hash.  
- **RF3** Modificar el Objeto asociado con determinada clave.  
- **RF4** Eliminar datos de una Tabla Hash.  
- **RF5** Consultar la existencia de objetos dentro de la Tabla Hash.  
- **RF6** Consultar el numero de elementos almacenados de una Tabla Hash.  
- **RF7** Conocer y editar el factor de cargar de una Tabla Hash.  