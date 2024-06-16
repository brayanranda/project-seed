# Árbol Splay en SEED {"subTitle":"Implementación de"}

## Descripción

El Árbol Splay o Árbol Biselado es una más de las representaciones del Árbol Binario de Búsqueda, cuya principal propiedad de biselar los elementos del árbol al realizar las diferentes operaciones. Biselar consiste en ubicar el ultimo dato con el que se interactura en la raíz. Las operaciones que determinan esta propiedad son la inserción en el que de no existir el dato se ubica el nodo con el dato más cercano, donde cada acceso a un dato con lleva a la realización de una operación llamada “biselación”.  

La implementación de este tipo de Arboles se realiza utilizando como base el Árbol Binario de Búsqueda, debido a que sus funciones y operaciones son las mismas de dicho Árbol combinadas con una operación básica, llamada “biselación”.  
  
A continuación se presenta el diagrama de clases para el Árbol Splay implementado, con cada una de sus operaciones:  

![](/assets/images/splay-tree/splay_16.jpg)

  
**Requerimientos funcionales implementados para Arboles Splay:**  
- **RF1*** - Crear un nuevo Árbol Splay.  
- **RF2*** - Conocer y editar la raíz del Árbol Splay.  
- **RF3*** - Insertar nuevos datos en un Árbol Splay, realizando la biselación del dato.  
- **RF4*** - Eliminar datos de un Árbol Splay, realizando la biselación del dato.  
- **RF5*** - Consultar la existencia de objetos dentro del Árbol Splay. Realizando biselación del dato consultado.  
- **RF6*** - Consultar el listado de hojas de un Árbol Splay.  
- **RF7*** - Conocer el número de hojas del Árbol Splay.  
- **RF8*** - Recorrer un Árbol Splay en Preorden.  
- **RF9*** - Recorrer un Árbol Splay en Inorden.  
- **RF10*** - Recorrer un Árbol Splay en PostOrden.  
- **RF11*** - Recorrer un Árbol Splay por niveles.  
- **RF12*** - Conocer el peso de un Árbol Splay.  
- **RF13*** - Consultar la altura de un Árbol Splay.  
- **RF14*** - Conocer por consola los datos presentes en el Árbol Splay.  
  
**Implementación de un Simulador para Arbol Splay:**  
El Simulador para ArbolSplay posee las operaciones indicadas por su menú de opciones dentro del mismo:  

![](/assets/images/splay-tree/splay_17.jpg)