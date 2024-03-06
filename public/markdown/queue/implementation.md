# Cola en SEED {"subTitle":"Implementación de"}

## Descripción

Estructura lineal dinámica, cuyo comportamiento es similar al de la Lista Simple con la restricción que solo inserta datos al final y que al eliminar solo elimina el primer nodo que se encuentre en la estructura ya que se rige por la propiedad de acceso a la información de tipo FIFO (Firts In, First Out; primero en entrar, primero en salir), está estructura se implementa en la clase Cola, adicionalmente a esto la estructura requiere de un elemento fundamental del almacenamiento de objetos denominado nodo, que es la base de su implementación, este elemento fue definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
La estructura Cola implementada, es un conjunto de nodos entrelazados entre sí, estructura que se origina con la creación de nodos a los que se le denomina “ini” (primer nodo de la Cola) y “fin” (ultimo nodo de la estructura definido como atributo por el programador para disminuir la complejidad de operaciones en la estructura), puntos de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos se realiza modificando el nodo “fin” por el nuevo nodo creado, los elementos no están ordenados en la estructura. Al eliminar un objeto elimina el nodo definido como “ini” modificando el “ini” por el nodo siguiente. La implementación también permite conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la Cola siendo este el tamaño de la estructura. La implementación de la Clase Cola se ilustra en el siguiente diagrama de clase:  

![Diagrama de Clase de Cola](/assets/images/queue/Cola_2.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear una Cola.  
- **RF2** - enColar datos en la Cola.  
- **RF3** - deColar datos de la Cola.  
- **RF4** - Consultar datos en la Cola.  
- **RF5** - Conocer el tamaño de la Cola.  
- **RF6** - Conocer los datos existentes en la Cola.  
  
**Implementación de un Simulador para Pila:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  
La implementación de la Clase Cola se ilustra en el siguiente diagrama de clase:

![Simulador de Cola](/assets/images/queue/Cola_3.jpg)