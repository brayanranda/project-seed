# Pila en SEED {"subTitle":"Implementación de"}

## Descripción

La Pila es una estructura lineal dinámica, cuyo comportamiento es similar al de la Lista Simple con la restricción que solo inserta datos al inicio y que al eliminar solo elimina el primer nodo que se encuentre en la estructura ya que se rige por la propiedad de acceso a la información de tipo LIFO (Last In, First Out; ultimo en entrar, primero en salir), está se implementa en la clase Pila, adicionalmente a esto la estructura requiere de un elemento fundamental de almacenamiento de objetos denominado nodo, que es la base de su implementación, este elemento fue definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
Pila es un conjunto de nodos entrelazados entre sí, cuyo origen es con la creación de un Nodo al que se le denomina “tope”, punto de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos se realiza modificando el “tope” por el nuevo nodo creado, los elementos no están ordenados en la estructura, al eliminar un objeto elimina el nodo definido como “tope” modificando el tope por el nodo siguiente. La implementación también permite conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la Pila siendo este el tamaño de la estructura.  
  
La implementación de la Clase Pila se ilustra en el siguiente diagrama de clase:

![Diagrama de Clase de Pila](/assets/images/stack/Pila_4.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear una nueva Pila.  
- **RF2** - Apilar datos en la nueva estructura.  
- **RF3** - Desapilar datos de la Pila.  
- **RF4** - Consultar el dato que se encuentra en el tope de la Pila.  
- **RF5** - Conocer el tamaño de la Pila.  
- **RF6** - Conocer los datos existentes en la Pila.  
  
**Implementación de un Simulador para Pila:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador de Pila](/assets/images/stack/Pila_5.jpg)