
# Árbol Eneario en SEED {"subTitle":"Implementación de"}

## Descripción

La estructura Árbol Eneario General consiste en un conjunto de elementos fundamentales denominados nodos enearios, estos poseen cuántos hijos se desee este elemento fundamental se implemento en la clase NodoEneario este elemento contiene la información del nodo, referencia a un nodo denominado hijo, el cual es el hijo más cercando y otra al nodo hermano más cercano.  

Esta estructura se implementó en la clase NodoEneario que se origina con la creación de un NodoEneario de nominado “raíz”, de donde se toma referencia para el desarrollo de los diferentes procesos básicos de la estructura. Cabe mencionar que esta estructura no almacena los datos de manera ordenada, para la inserción de datos se debe indicar el padre del nuevo nodo a insertar, si el padre posee ya un hijo este pasa automáticamente a ser el hermano del nuevo nodo. Para la eliminar un dato de la estructura solo se debe indicar la información que posea el nodo.  
  

![](/assets/images/n-ary-tree/enearios_11.jpg)

  
**Requerimientos funcionales implementados para Arboles Enearios:**  
- **RF1** - Crear un nuevo Árbol Eneario.  
- **RF2** - Conocer y editar la raíz del Árbol Eneario.  
- **RF3** - Insertar nuevos datos en un Árbol Eneario.  
- **RF4** - Eliminar datos de un Árbol Eneario.  
- **RF5** - Consultar la existencia de objetos dentro del Árbol Eneario.  
- **RF6** - Conocer el listado de Hijos de un determinado objeto.  
- **RF7** - Consultar el listado de hojas de un Árbol Eneario.  
- **RF8** - Conocer el número de hojas del Árbol Eneario.  
- **RF9** - Recorrer un Árbol Eneario en Preorden.  
- **RF10** - Recorrer un Árbol Eneario en Inorden.  
- **RF11** - Recorrer un Árbol Eneario en PostOrden.  
- **RF12** - Recorrer un Árbol Eneario por niveles.  
- **RF13** - Conocer el peso de un Árbol Eneario.  
- **RF14** - Consultar la altura de un Árbol Eneario.  
- **RF15** - Consultar la gordura de un Árbol Eneario.  
  
**Implementación de un Simulador para Árbol Eneario:**  
El Simulador para Árbol Eneario posee las operaciones indicadas por su menú de opciones dentro del mismo:  

![](/assets/images/n-ary-tree/enearios_12.jpg)