# Árbol Binario de Búsqueda en SEED {"subTitle":"Implementación de"}

## Descripción

El árbol Binario de Búsqueda es un árbol binario especial, cuya particularidad es que mantiene sus datos de manera ordena, estableciendo entre los datos el valor de comparación entre ellos. Su estructura también se fundamenta en una estructura denominada “NodoBin”, que almacena la información y del cual destaca un Nodo principal llamado “raíz” en donde este será mayor que su hijo izquierdo y menor que su hijo derecho y se almacenara los datos de menor valor en su hijo izquierdo y los de mayor valor en su hijo derecho.  
  
Cabe mencionar que al poseer los datos ordenados el proceso de búsqueda a comparación con el Árbol Binario General es mucho más eficiente. Esta estructura posee gran similitud, con la estructura Árbol binario General, solo difieren en el hecho en que esta estructura los datos se insertar de forma ordenada. Por esta razón el equipo de desarrollo decidió usar herencia del Árbol Binario, de esta manera el árbol de Búsqueda adquiere los atributos, propiedades y las operaciones que se hallan declarado protegidas o publicas, la estructura se implemento en la clase ArbolBinarioBusqueda.  
  
Los método básicos insertar se implementaron de nuevo teniendo en cuenta la propiedad de mantener los datos ordenados, en esta estructura al insertar el nuevo elemento no es necesario informar el padre ni el lado a insertar, debido a que ese proceso no hace parte que del comportamiento de la estructura. En el siguiente diagrama de clases se puede observar los metodos y atributos de la clase.

![Diagrama de clase de ArbolBinarioBusqueda](/assets/images/bynary-search-tree/abb_3.jpg)

**Requerimientos funcionales implementados:**  
  
- **RF1** Crear un nuevo Árbol Binario de Búsqueda.  
- **RF2** Conocer y editar la raíz del Árbol Binario de Búsqueda.  
- **RF3** Insertar nuevos datos en un Árbol Binario de Búsqueda.  
- **RF4** Eliminar datos de un Árbol Binario de Búsqueda.  
- **RF5** Consultar la existencia de objetos dentro del Árbol Binario de Búsqueda.  
- **RF6** Editar objetos existentes dentro del Árbol Binario de Búsqueda. RF9 Consultar si un Nodo es o no una hoja del Árbol Binario de Búsqueda.
- **RF10** Recorrer un Árbol Binario de Búsqueda en Preorden, en Inorden y en PostOrden.  
- **RF11** Recorrer un Árbol Binario de Búsqueda por niveles.  
- **RF12** Conocer el peso de un Árbol Binario de Búsqueda.  
- **RF13** Consultar la altura de un Árbol Binario de Búsqueda.
- **RF14** Podar un Árbol Binario de Búsqueda. (Eliminar sus Nodos Hoja).  
- **RF15** Conocer por consola los datos presentes en el Árbol.  
  
  
## Implementación de un Simulador para Árbol Binario de Búsqueda
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![simuldor Arbol binario de busqueda](/assets/images/bynary-search-tree/abb_4.jpg)