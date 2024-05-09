# Lista Simple Enlazada {"subTitle":"Tipos de Listas"}

Estructura conformada por un elemento fundamental denominado Nodo. El Nodo es un elemento que contiene la información y la dirección del siguiente elemento, el primer elemento creado se le denomina cabeza y es la referencia para el desarrollo de las diversas acciones en la Lista.  
  
Para comprender de una mejor manera el concepto de Listas Simples es necesario, primeramente, conocer la estructura básica de un nodo.  
En general un nodo consta de dos partes:  

![Estructura de Nodo Simple](/assets/images/list/listaS_1.1.jpg)

*   Un campo Información que será del tipo de datos que se quiera almacenar en la lista
*   Un puntero sig, que se utiliza para establecer el enlace con otro nodo de la lista. que será del tipo de datos que se quiera almacenar en la lista. Si el nodo fuera el último de la lista, este campo tendrá como valor: NULL (vacío). Al emplearse el campo puntero sig para relacionar dos nodos, no será necesario almacenar físicamente a los nodos en espacios contiguos.

Una lista enlazada, en su forma mas simple, es una colección de nodos que juntos forman un orden lineal. El ordenamiento esta determinado de tal forma que cada nodo es un objeto que guarda una referencia a un elemento y una referencia, llamado siguiente, a otro nodo. La idea principal es que se cree un nuevo nodo, se pone su enlace siguiente para que se referencie al mismo objeto que la cabeza, y entonces se pone que la cabeza apunte al nuevo nodo.  

![Lista Simple](/assets/images/list/listaS_2.1.jpg)

Podría parecer extraño tener un nodo que referencia a otro nodo, pero tal esquema trabaja fácilmente. La referencia siguiente dentro de un nodo puede ser vista como un enlace o apuntador a otro nodo. De igual nodo, moverse de un nodo a otro siguiendo una referencia al siguiente es conocida como salto de enlace o salto de apuntador.  
  
Como en un arreglo, una lista simple enlazada guarda sus elementos en un cierto orden. Este orden está determinado por la cadenas de enlaces siguientes yendo desde cada nodo a su sucesor en la lista. A diferencia de un arreglo, una lista simple enlazada no tiene un tamaño fijo predeterminado, y usa espacio proporcional al número de sus elementos. Asimismo, no se emplean números índices para los nodos en una lista enlazada. Por lo tanto, no se puede decir sólo por examinar un nodo si este es el segundo, quinto u otro nodo en la lista.  
  

**Ejemplo de Insertar**  
Se inserta en una Lista Simple los números 10, 1, 23, 2, 12.

![Ejemplo Insertar LS](/assets/images/list/listaS_5.jpg)  
![Ejemplo Insertar LS](/assets/images/list/listaS_7.jpg)

De esta manera la Lista Simple queda:

![Ejemplo Insertar LS](/assets/images/list/listaS_8.jpg)

**Ejemplo de Eliminar**  
Teniendo la Lista Simple:

![Ejemplo Eliminar LS](/assets/images/list/listaS_9.jpg)

Se desea eliminar el 11 de la Lista Simple, se modifica el puntero sig del nodo anterior por el hacia el nodo siguiente del nodo que se eliminó.

![Ejemplo Eliminar LS](/assets/images/list/listaS_10.jpg)

Quedando la Lista Simple:

![Ejemplo Eliminar LS](/assets/images/list/listaS_11.jpg)