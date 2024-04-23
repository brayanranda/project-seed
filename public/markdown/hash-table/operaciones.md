# Tabla Hash {"subTitle":"Operaciones"}

**Inserción**  
En hashing abierto, consiste en aplicar la función hash al dato a insertar. El resultado de esta operación genera la clave que va a indicar la posición del array en la cual se almacenará el dato y en esta posición del array se añadirá al inicio de la lista enlazada. (insertar al inicio en una lista enlazada es constante ). Hay que tener en cuenta que al insertar un dato en una lista con tamaño mayor a cero se genera una nueva colisión.  

**Ejemplo de Insertar**  
Se tiene una tabla hash de tres slots, cada uno apunta a una lista enlazada en primer momento vacía (No hay colisiones).

![ejemplo Insertar](/assets/images/hash-table/tablaH_10.jpg)  
  
![ejemplo insertar](/assets/images/hash-table/tablaH_11.jpg)  
  
![Ejemplo insertar](/assets/images/hash-table/tablaH_12.jpg)  
  
![ejemplo insertar](/assets/images/hash-table/tablaH_13.jpg)  
  
![Ejemplpo insertar](/assets/images/hash-table/tablaH_14.jpg)

**Eliminación**  
La eliminación tiene el mismo costo que la búsqueda, ya que con la función hash se encuentra la posición del elemento y posteriormente se elimina.  
  
**Ejemplo de eliminar**  
Se desea eliminar “ana” Hacemos función hash, nos devuelve la posición 0, buscamos en la lista que esta en la posición 0.

![Ejemplo de eliminar](/assets/images/hash-table/tablaH_15.jpg)