# Árbol B en SEED {"subTitle":"Implementación de"}

## Descripción

Estructura de Datos jerárquica No binaria, que se caracteriza por poseer los datos ordenados basa su implementación en el elemento fundamental llamado página que poseen información y punteros hacia las demás páginas, este elemento fundamental se implementa en la clase Pagina, contiene como atributos el numero mínimo de datos que debe poseer una Pagina “n”, este número lo determina el grado del árbol que es dado en la creación de la estructura, el numero máximo que debe poseer una Pagina que es el dos veces el grado del árbol “m”, además posee el número de apuntadores que tiene la Pagina que es el numero máximo de datos que puede poseer una pagina más 1, también contiene un vector de la información que posee y un vector de apuntadores a las demás paginas.  
  
La estructura se implementó en la clase ArbolB, que se origina con la creación de una página de la que se hace referencia para la implementación de los procesos fundamentales como lo son: la inserción, la elimininacion, la búsqueda, entre otras operaciones. A continuación se presenta el diagrama de clases para el Árbol B implementado, con cada una de sus operaciones:  

![Diagrama de Clase Arbol B](/assets/images/b-tree/arbolB_1.jpg)
  
**Requerimientos funcionales implementados:**  
  
- **RF1** - Crear un nuevo Árbol B.  
- **RF2** - Conocer y editar la raíz del Árbol B.  
- **RF3** - Insertar nuevos datos en un Árbol B.  
- **RF4** - Eliminar datos de un Árbol B.  
- **RF5** - Consultar la existencia de objetos dentro del Árbol B.  
- **RF6** - Consultar el listado de hojas de un Árbol B.  
- **RF7** - Conocer el número de hojas del Árbol B.  
- **RF8** - Recorrer un Árbol B en Inorden.  
- **RF9** - Conocer el peso de un Árbol B.  
- **RF10** - Consultar la altura de un Árbol B.  
  
  
**Implementación de un Simulador para Árbol B**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![simulador para un arbol B](/assets/images/b-tree/arbolB_2.jpg)