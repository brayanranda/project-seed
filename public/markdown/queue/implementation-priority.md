# Cola de Prioridad en SEED {"subTitle":"Implementación de"}

## Descripción

Estructura lineal dinámica, cuyo comportamiento es similar al de la Cola a diferencia que en esta estructura se asigna prioridad en los elementos almacenados, prioridad que se usa para insertar datos de forma descendente (de mayor a menor) en la estructura con el fin que al eliminar elimina el objeto de mayor prioridad que se encuentra en el inicio de la Cola, está estructura se implementa en la clase ColaP, adicionalmente a esto la estructura requiere de unelemento fundamental de almacenamiento de objetos denominado nodo que es la base de su implementación, este elemento fue definido en la clase NodoP. NodoP es un elemento que esta compuesto por la información (elemento) almacenada, un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue y una “prioridad” para otorgar a cada elemento dicho valor, la prioridad de los elementos dentro de la ColaP se ha decidido que sea de tipo entero (aunque pueden existir de otro tipo) de manera que sea más sencilla de implementar.  
  
La estructura ColaP implementada es un conjunto de nodos entrelazados entre si, estructura que se origina con la creación de un NodoP al que se le denomina se le denomina “ini” (primer nodo de la Cola) y “fin” (ultimo nodo de la estructura definido como atributo por el programador para disminuir la complejidad de operaciones en la estructura), atributos que se utilizan como punto de referencia para el desarrollo de los diversos procesos como lo son: Insertar en este proceso la posición del nuevo elemento depende de la prioridad que posea de manera que los elementos están organizados de forma ascendente por su prioridad, al eliminar un objeto elimina al de mayor prioridad que siempre se encontrara en el inicio de la estructura modificando el apuntador “ini” por el nodo que le sigue. La implementación también permite conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la ColaP siendo este el tamaño de la estructura.  
  
La implementación de la Clase ColaP ilustrara en el siguiente diagrama de clase:

![Diagrama de clase de Cola de Prioridad](/assets/images/queue/ColaPs_1.jpg)
  
# Requerimientos funcionales implementados:
  
- **RF1** - Crear una nueva Cola de Prioridad.  
- **RF2** - Encolar datos en la nueva estructura.  
- **RF3** - Decolar datos de la Cola.  
- **RF4** - Consultar el dato que se encuentra en el inicio de la Cola.  
- **RF5** - Consultar el dato que se encuentra en el final de la Cola.  
- **RF6** - Conocer el tamaño de la Cola.  
- **RF7** - Conocer los datos existentes en la Cola.  