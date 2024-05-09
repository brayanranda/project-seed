# Lista Simple en SEED {"subTitle":"Implementación de"}

## Descripción

La estructura se implemento en la clase ListaS, adicional a esto la estructura requiere de un elemento fundamental en el almacenamiento de los objetos denominado nodo que es la base de su implementación, este elemento fue definido en la clase Nodo. Nodo es un elemento que esta compuesto por la información (elemento) almacenada y un apuntador al siguiente nodo, entendiendo por apuntador la dirección del nodo que le sigue.  
  
ListaS es un conjunto de nodos entrelazados entre si, cuyo origen es con la creación de un Nodo al que se le denomina “cabeza”, punto de referencia para el desarrollo de los diversos procesos como lo son: la inserción de elementos que se puede realizar al inicio o fin de la lista es decir que los elementos no están ordenados en la estructura. En el proceso de eliminar un objeto sólo se modifica el apuntador de su predecesor hacia el nodo siguiente del que se desea eliminar, la estructura también tiene implementación de métodos como buscar y editar un elemento, conocer los datos almacenados y conocer el tamaño, para esto se define un atributo llamado “tamanio” para controlar la cantidad de elementos que posee la lista siendo este el tamaño de la estructura.  
  
Adicionalmente a esto, con la Lista Simple es posible generar un Iterador de Lista Simple (IteradorLS) que permite recorrer de una forma más sencilla la estructura.  
La implementación de la Clase ListaS se ilustra en el siguiente diagrama de clase:  

![diagrama de clase ListaS](/assets/images/list/listaS_3.jpg)
  
**Requerimientos funcionales implementados:**  

- **RF1** - Crear una nueva Lista Simple.  
- **RF2** - Insertar datos en la nueva Lista Simple.  
- **RF3** - Eliminar datos en la Lista Simple.  
- **RF4** - Editar datos de la Lista Simple.  
- **RF5** - Consultar datos en la Lista Simple.  
- **RF6** - Conocer el tamaño de la Lista Simple.  
- **RF7** - Crear un Iterador para recorrer la Lista Simple.  
- **RF8** - Conocer los datos de la Lista Simple.  
  
**Implementación de un Simulador para Lista Simple:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  
![Simulador Lista Simple](/assets/images/list/listaS_4.jpg)
