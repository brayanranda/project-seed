# Árbol AVL en SEED {"subTitle":"Implementación de"}

## Descripción

Es una representación de un Árbol Binario auto-balanceable, su fin es el de crear un factor de balance entre los Nodos del Árbol de manera para cada Nodo en cualquier parte del Árbol, la altura de la rama izquierda no difiera en más de una unidad de la altura de la rama derecha o viceversa, y de esta manera después de cada operación siempre se encuentren balanceados “por altura”.  

La implementación de este Árbol AVL se realiza tomando como base en Árbol Binario de Búsqueda (ABB), por tal motivo se realiza la herencia de los atributos, métodos y operaciones, la inserción y retiro de datos en el Árbol se realizan de forma muy similar, con la condición que si alguna de las operaciones altera el equilibrio del Árbol, se deben realizar operaciones especiales denominadas “rotaciones” que permiten balancear nuevamente el Árbol.  

Al igual que la estructura ArbolBinario que fundamenta su implementación en el elemento fundamental “NodoBin”, la Estructura ArbolAVL basa su funcionamiento en el elemento “NodoAVL”, “NodoAVL” posee las misma características de “NodoBin”, por esto “NodoAVL” hereda los atributos y operaciones de “NodoBin”, solo difiere la aparición de un nuevo atributo balanceo “bal”. A su vez, cada uno de los Nodos Binarios (NodoBin) también deben ser alterados, de manera que en cada uno de ellos se pueda almacenar su factor de balance (atributo “bal”) y así poder hacer más fácil la realización del balanceo.  

Las operaciones realizadas por el Árbol AVL no son muy distintas a las planteadas para los anteriores Arboles Binarios de Búsqueda, con la diferencia del balanceo y las rotaciones; Por lo que esta estructura extiende de la estructura ArbolBinarioBusqueda, la inserción y retiro de datos dentro del Árbol es de manera ordenada, manteniendo siempre el factor de balance de cada Nodo en un valor que oscila entre 1 y -1. En el siguiente Diagrama se puede observar los atributos y operaciones que se implementaron en la estructura.

![](/assets/images/avl-tree/avl_12.jpg)

  
**Requerimientos funcionales implementados para Árboles AVL:**  
- **RF1** - Crear un nuevo Árbol AVL.  
- **RF2** - Conocer y editar la raíz del Árbol AVL.  
- **RF3** - Insertar nuevos datos en un Árbol AVL, sin que este pierda sus propiedades.  
- **RF4** - Eliminar datos de un Árbol AVL, sin que este pierda sus propiedades.  
- **RF5** - Consultar la existencia de objetos dentro del Árbol AVL.  
- **RF6** - Consultar el listado de hojas de un Árbol AVL.  
- **RF7** - Conocer el número de hojas del Árbol AVL.  
- **RF8** - Recorrer un Árbol AVL en Preorden.  
- **RF9** - Recorrer un Árbol AVL en Inorden.  
- **RF10** - Recorrer un Árbol AVL en PostOrden.  
- **RF11** - Recorrer un Árbol AVL por niveles.  
- **RF12** - Conocer el peso de un Árbol AVL.  
- **RF13** - Consultar la altura de un Árbol AVL.  
- **RF14** - Conocer por consola los datos presentes en el Árbol AVL.  
  
**Implementación de un Simulador para Árboles AVL:**  
El Simulador para Árbol AVL posee las operaciones indicadas por su menú de opciones dentro del mismo:  

![](/assets/images/avl-tree/avl_13.jpg)