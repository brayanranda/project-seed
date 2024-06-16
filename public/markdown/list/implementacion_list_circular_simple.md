# Lista Circular en SEED {"subTitle":"Implementación de"}  

## Descripción

Una lista circular catalogada como una estructura lineal dinámica, es una lista simple cuya particularidad es que el último nodo de la lista en vez de apuntar a nada apunta a la primera posición de la lista, característica que hace circular el comportamiento de la estructura. Esta estructura fue implementada en la clase ListaC, consiste en un conjunto de Nodo simples ligados que son el elemento fundamental de la estructura definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
ListaC es un conjunto de Nodo entrelazados entre si, con la creación de un Nodo denominado “cabeza” se crea la estructura, la cabeza es el punto de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos que se puede realizar al inicio o fin de la lista teniendo en cuenta que al inserta al inicio se debe modificar la “cabeza” por el nuevo nodo, al insertar al final se deben modificar los apuntadores del penúltimo y el nuevo nodo para que este apunte a la “cabeza”, los elementos no están ordenados en la estructura. Al eliminar un objeto sólo se modifica el apuntador de su predecesor hacia el nodo siguiente del que se desea eliminar, la estructura también tiene implementación de métodos como buscar y editar un elemento, conocer los datos almacenados y conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la lista siendo este el tamaño de la estructura.  
  
Adicionalmente a esto, con la Lista Circular es posible generar un Iterador de Lista Circular (IteradorLC) que permite recorrer de una forma más sencilla la estructura.La implementación de la Clase ListaC se ilustra en el siguiente diagrama de clase:  
  
![Diagrama de clase de Lista Circular](/assets/images/list/listaC_2.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear una nueva Lista Circular.  
- **RF2** - Insertar datos en la nueva Lista Circular.  
- **RF3** - Eliminar datos en la Lista Circular.  
- **RF4** - Editar datos de la Lista Circular.  
- **RF5** - Consultar datos en la Lista Circular.  
- **RF6** - Conocer el tamaño de la Lista Circular.  
- **RF7** - Crear un Iterador para recorrer la Lista Circular.  
- **RF8** - Conocer los datos de la Lista Circular.  
  
  
**Implementación de un Simulador para Lista Circular:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador Lista Circular](/assets/images/list/listaC_3.jpg)