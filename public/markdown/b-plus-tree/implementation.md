# Árbol B+ en SEED {"subTitle":"Implementación de"}

## Descripción

Estructura que posee similar comportamiento que el de la Estructura árbol B por esta razón se implemento la herencia, solo se diferencia en que esta estructura posee toda su información en las hojas y los elementos internos de la estructura simplemente son claves que se implementan para llegar a la información. En la estructura se implementa un nuevo atributo denominado “vsam” el cual es el encargado de apuntar a las hojas del Árbol en donde se ubica los datos que contiene el árbol.  
  
Esta estructura se implemento en la Clase ArbolBMas, difiere a ArbolB solo en el atributo “vsam” y a los procesos de inserción, eliminación y búsqueda, debido a que algunos datos se repiten pero cumplen diferentes funciones en la estructura. En el siguiente diagrama de Clases se ilustraran los atributos y operaciones implementadas en la estructura.  

![Diagrama de Clase de Arbol B+](/assets/images/b-plus-tree/arbolBMas_1.jpg)

  
  
**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear un nuevo Árbol B+.  
- **RF2** - Conocer y editar la raíz del Árbol B+.  
- **RF3** - Insertar nuevos datos en un Árbol B+.  
- **RF4** - Eliminar datos de un Árbol B+.  
- **RF5** - Consultar la existencia de objetos dentro del Árbol B+.  
- **RF6** - Consultar el listado de hojas de un Árbol B+.  
- **RF7** - Conocer el número de hojas del Árbol B+.  
- **RF8** - Recorrer un Árbol B+ en Inorden.  
- **RF9** - Conocer el peso de un Árbol B+.  
- **RF10** - Consultar la altura de un Árbol B+.  
  
  
**Implementación de un Simulador para Árbol B+**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulador para árbol b+](/assets/images/b-plus-tree/arbolBMas_2.jpg)