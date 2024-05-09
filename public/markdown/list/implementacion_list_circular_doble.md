# Lista Circular Doble en SEED {"subTitle":"Implementación de"}  
  
## Descripción

Estructura lineal dinámica implementada en la clase ListaCD, cuya particularidad es que el último nodo de la lista en vez de apuntar a nada apunta a la primera posición de la lista y está a su vez posee un a puntador hacia el ultimo nodo de la lista, característica que hace circular el comportamiento de la estructura. La implementación de la estructura se basa en el elemento fundamental denominado “NodoD” implementado en la clase NodoD, NodoD es un nodo doble que esta conformado por la información (elemento) almacenada y dos apuntadores uno que direcciona al nodo que le antecede y otro que direcciona al siguiente nodo.  
  
La implementación de ListaCD consiste en un conjunto de Nodo dobles “NodoD” ligados entre si, estructura que se crea con un NodoD llamado “cabeza” que es el punto de referencia para los diferentes procesos de la estructura, en el proceso de inserción se tuvo en cuenta modificar los apuntadores del nuevo creado y del nodo que le antecede si se inserta al final de la lista ó del nodo “cabeza” en caso que se inserte al inicio de la lista, igualmente para el proceso de eliminación se deben modificar los apuntadores de los nodos asociados con el nodo que se desea eliminar. Así mismo, la estructura cuenta con operaciones tale como: buscar y modificar un elemento, además de conocer el tamaño.  
  
Adicionalmente a esto, con la Lista Circular Doble es posible generar un Iterador de Lista Circular Doble (IteradorLCD) que permite recorrer de una forma más sencilla la estructura.  
La implementación de la Clase ListaCD se ilustra en el siguiente diagrama de clase:  

![Diagrama de clase de Lista Circular Doble](/assets/images/list/listaCD_2.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear una Lista Circular Doble.  
- **RF2** - Insertar datos en la Lista Circular Doble.  
- **RF3** - Eliminar datos en la Lista Circular Doble.  
- **RF4** - Editar datos de la Lista Circular Doble.  
- **RF5** - Consultar datos en la Lista Circular Doble.  
- **RF6** - Conocer el tamaño de la Lista Circular Doble.  
- **RF7** - Imprimir los datos de la Lista Circular Doble.  
  
**Implementación de un Simulador para Lista Circular Doble:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  

![Simulador de Lista Circular Doble](/assets/images/list/listaCD_3.jpg)
