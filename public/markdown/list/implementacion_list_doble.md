# Lista Doble en SEED {"subTitle":"Implementación de"}

## Descripción

La implementación de la estructura se encuentra en la clase ListaD, está se basa en el elemento fundamental denominado “NodoD” implementado en la clase NodoD, NodoD es un nodo doble que esta conformado por la información (elemento) almacenada y dos apuntadores un que direcciona al nodo que le antecede y otro que direcciona al siguiente nodo, este es requerido por la ListaS para almacenar los elementos de la lista.  
  
ListaD es un conjunto de Nodo dobles “NodoD” ligados entre si, originada por la creación que un NodoD llamado “cabeza” que es el punto de referencia para los diferentes procesos de la estructura, en el proceso de inserción se tuvo en cuenta modificar los apuntadores del nuevo nodo creado y del nodo que le antecede si se inserta al final de la lista ó del nodo “cabeza” en caso que se inserte al inicio de la lista, igualmente para el proceso de eliminación se deben modificar los apuntadores de los nodo asociados con el nodo a eliminar. Así mismo, la estructura cuenta con operaciones tale como: buscar y modificar un elemento, además de conocer el tamaño de la estructura su comportamiento es similar al de la Lista Simple solo difieren del elemento fundamental para el almacenamiento de sus objetos.  
  
Adicionalmente a esto, con la Lista Doble es posible generar un Iterador de Lista Doble (IteradorLD) que permite recorrer de una forma más sencilla la estructura.  
  
La implementación de la Clase ListaD se ilustra en el siguiente diagrama de clase:  

![Diagrama de Clase de Lista Doble](/assets/images/list/listaD_3.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear una Lista Doble.  
- **RF2** - Insertar datos en la Lista Doble.  
- **RF3** - Eliminar datos en la Lista Doble.  
- **RF4** - Editar datos de la Lista Doble.  
- **RF5** - Consultar datos en la Lista Doble.  
- **RF6** - Conocer el tamaño de la Lista Doble.  
- **RF7** - Imprimir los datos de la Lista Doble.  
  
  
**Implementación de un Simulador para Lista Doble:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador de Lista Doble](/assets/images/list/listaD_4.jpg)
