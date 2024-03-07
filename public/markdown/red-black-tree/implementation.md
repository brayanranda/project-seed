# Árbol RojiNegro en SEED {"subTitle":"Implementación de"}

## Descripción

Es una representación de un Árbol Binario auto-balanceable, se caracteriza por que los elementos que contiene poseen color ya se Rojo ó Negro, además de no poseer elemento nulos, sino elementos con información nula. Su fin es el de crear un factor de balance entre los Nodos del Árbol de manera para cada Nodo en cualquier parte del Árbol, posea la misma altura de negra en su rama izquierda y derecha y de esta manera después de cada operación siempre se encuentren balanceados “por la altura negra”.  
  
El Árbol RojiNegro implementado en la clase “ArbolRojiNegro” basa su funcionamiento en el elemento fundamental “NodoRN” posee similitud de características con “NodoBin” y su implementación extiende de él, por esto hereda los atributos y operaciones de “NodoBin” y solo difiere la aparición de un nuevo atributo “color”, que será el responsable de mantener el equilibrio de la altura negra en la estructura.  
  
La implementación de este Árbol RojiNegro, se implementa con herencia de los atributos, métodos y operaciones de la estructura ArbolBinarioBusqueda debido a la semejanza del comportamiento de las estructuras, aunque la inserción y retiro de datos en el Árbol se realizan de forma diferente debido a que no posee elementos nulos y algunas de las operaciones altera el equilibrio de la altura negra del Árbol, en donde se deben realizar operaciones especiales denominadas “rotaciones” que permiten balancear los colores nuevamente el Árbol, las demás operaciones complementan el funcionamiento de la estructura. En el siguiente Diagrama se puede observar los atributos y operaciones que se implementaron en la estructura.  
  

![Diagrama de Clase de Arbol RojiNegro](/assets/images/red-black-tree/arn_5.jpg)

  
**Requerimientos funcionales implementados:**  
- **RF1** - Crear un nuevo Árbol RojiNegro.  
- **RF2** - Conocer y editar la raíz del Árbol RojiNegro.  
- **RF3** - Insertar nuevos datos en un Árbol RojiNegro, sin que este pierda sus propiedades.  
- **RF4** - Eliminar datos de un Árbol RojiNegro, sin que este pierda sus propiedades.  
- **RF5** - Consultar la existencia de datos dentro del Árbol RojiNegro.  
- **RF6** - Consultar el listado de hojas de un Árbol RojiNegro.  
- **RF7** - Conocer el número de hojas del Árbol RojiNegro.  
- **RF8** - Recorrer un Árbol RojiNegro en Preorden.  
- **RF9** - Recorrer un Árbol RojiNegro en Inorden.  
- **RF10** - Recorrer un Árbol RojiNegro en PostOrden.  
- **RF11** - Recorrer un Árbol RojiNegro por niveles.  
- **RF12** - Conocer el peso de un Árbol RojiNegro.  
- **RF13** - Consultar la altura de un Árbol RojiNegro.  
  
  
**Implementación de un Simulador para Pila:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador de un Arbol RojiNegro](/assets/images/red-black-tree/arn_6.jpg)