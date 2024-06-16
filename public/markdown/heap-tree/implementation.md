# Árbol Heap en SEED {"subTitle":"Implementación de"}

## Descripción

El Árbol Heap (también conocido como Montículo) es un Árbol Binario con características particulares que determinan que cada Nodo padre tiene un valor mayor que el de cualquiera de sus nodos hijos, así como puede ser implementado en sentido contrario. Además de esta característica, este tipo de Árbol posee la propiedad de ser un Árbol Binario lleno, con la excepción de su último nivel el cual puede no encontrarse lleno y se va a ir llenando de izquierda a derecha.  

La implementación de este Árbol se realizó en la Clase ArbolHeap, de una manera diferente a los demás, debido a que ha sido implementado utilizando un vector de acuerdo a los lineamientos de enseñanza por los que se guía el programa, y no con Nodos como se venían manejando las anteriores estructuras.  

Como se puede observar en el siguiente diagrama de clases la representación de los datos se realiza por medio de un vector en el cual se almacenan los datos pertenecientes al Árbol. La inserción de los datos se realiza siempre en el ultimo nivel, realizando rotaciones (de ser necesario), de manera que el dato de mayor valor siempre se ubique en la raíz del Árbol para el momento que deba ser removido, ya que para este Árbol Heap, la extracción de los datos se realiza siempre eliminando la raíz del Árbol.  

![](/assets/images/heap-tree/heap_12.jpg)

  
**Requerimientos funcionales implementados para Arbol Heap:**  
- **RF1** - Crear un nuevo Árbol Heap.  
- **RF2** - Conocer la raíz del Árbol Heap.  
- **RF3** - Insertar nuevos datos en un Árbol Heap.  
- **RF4** - Eliminar datos de un Árbol Heap, según las propiedades del Árbol.  
- **RF5** - Conocer los datos existentes dentro del Árbol Heap por medio de un Array.  
- **RF6** - Consultar la existencia de un dato dentro del Árbol Heap.  
- **RF7** - Recorrer un Árbol Heap por niveles.  
- **RF8** - Conocer el peso de un Árbol Heap.  
- **RF9** - Consultar la altura de un Árbol Heap.  
- **RF10** - Ordenar los datos de un Vector utilizando un Árbol Heap (HeapSort).  
- **RF11** - Limpiar la información existente dentro del Árbol Heap.  
- **RF12** - Conocer los datos existentes en el Árbol Heap por medio de una cadena.  
  
**Implementación de un Simulador para Arbol Heap:**  
El Simulador para ArbolHeap posee las operaciones indicadas por su menú de opciones dentro del mismo:  

![](/assets/images/heap-tree/heap_13.jpg)