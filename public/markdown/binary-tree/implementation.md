# Árbol Binario en SEED {"subTitle":"Implementación de"}

## Descripción

El **Árbol Binario** es una estructura jerárquica más utilizada, cuyo comportamiento se origina con la existencia de un elemento fundamental denominado **"raíz"**, este elemento fundamental se representa en la Clase denominada NodoBin, el cual esta conformado por la información que posee y que tiene la particularidad de que solo puede referenciar a dos Nodos un hijo izquierdo denominado izq y un hijo derecho der.  

Existen diversidad de Arboles Binarios que poseen similitud en el comportamiento de este Árbol base que denominaremos Árbol Binario General el cual posee las propiedades básicas. Dentro de las funciones más destacables, se puede mencionar que el Árbol permite la inserción de datos por medio de referencia hacia algún Nodo, es decir la inserción de hijos derechos e hijos izquierdos de un Nodo determinado, resaltando que para este árbol no existe algún tipo de restricción o tendencia para el almacenamiento de los datos.  

La implementación de la estructura Árbol Binario General se encuentra en la clase denominada ArbolBinario, esta estructura se origina con la inserción de NodoBin al que se debe indicar la información a contener iniciando o indicando los apuntadores a sus hijos de esta manera se va formando la estructura del árbol, en el proceso de inserción se puede elegir el lado a insertar debido a que esta estrcutura no posee restricciones al respecto solo se debe indicar al padre del nuevo Nodo, para eliminar solo se indica la información que posee el nodo al que queremos eliminar, en este proceso que tiene presente que ocurran 4 casos: 1) que el NodoBin tiene hijos nulos, 2) que solo posee hijo derecho, 3) que solo posee hijo izquierdo ó que tiene ambos hijos, estos casos se tienen presentes con el objetivo que no se pierdan datos. La estructura amerita que se implemente diferentes tipos de recorrer el árbol como en preorden, inorden, postorden y por niveles, para estos procesos se utiliza la estructura Lista Circular Doble para disminuir coste computacional y complejidad del proceso, esta se almacena en un Iterador, Iterator es una estructura que mejorar la manipulación de la información del árbol. Para esta estructura se implementaron diversos procesos, los más relevantes se ilustran en el siguiente diagrama de clases.

![](/assets/images/binary-tree/ab_9.jpg)

  
## Requerimientos funcionales implementados para Arbol Binario General:
- **RF1** - Crear un nuevo Árbol Binario.  
- **RF2** - Conocer y editar la raíz del Árbol Binario.  
- **RF3** - Insertar nuevos datos en un Árbol Binario.  
- **RF4** - Eliminar datos de un Árbol Binario.  
- **RF5** - Consultar la existencia de objetos dentro del Árbol Binario.  
- **RF6** - Editar objetos existentes dentro del Árbol Binario.  
- **RF9** - Consultar si un Nodo es o no una hoja del Árbol Binario.  
- **RF10** - Recorrer un Árbol Binario en Preorde, en Inorden y en PostOrden.  
- **RF11** - Recorrer un Árbol Binario por niveles.  
- **RF12** - Conocer el peso de un Árbol Binario.  
- **RF13** - Consultar la altura de un Árbol Binario.  
- **RF14** - Podar un Árbol Binario. (Eliminar sus Nodos Hoja).  
- **RF15** - Conocer por consola los datos presentes en el Árbol.  
  
**Implementación de un Simulador para Arbol Binario General:**  
El Simulador para ArbolBinario posee las operaciones indicadas por su menú de opciones dentro del mismo:  
  

![](/assets/images/binary-tree/ab_10.jpg)