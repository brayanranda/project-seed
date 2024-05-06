# Árbol B {"subTitle":"Árboles Enearios"}

## Introducción

Los B-árboles sugieron en 1972 creados por R.Bayer y E.McCreight.El problema original comienza con la necesidad de mantener índices en almacenamiento externo para acceso a bases de datos,es decir,con el grave problema de la lentitud de estos dispositivos se pretende aprovechar la gran capacidad de almacenamiento para mantener una cantidad de información muy alta organizada de forma que el acceso a una clave sea lo más rápido posible.  
  
Los árboles con múltiples hijos hacen que el mantenimiento de índices en memoria externa sea mucho más eficiente y es justamente éste el motivo por el que este tipo de árboles han sido los que tradicionalmente se han usado para el mantenimiento de índices en sistemas de bases de datos.Lógicamente,aunque este tipo de estructuras sean más idóneas para mantener grandes cantidades de datos en almacenamiento externo es posible construirlas de igual forma en memoria principal,y por consiguiente pueden ser mantenidas en memoria (mediante el uso de punteros por ejemplo)al igual que las que hemos estudiado hasta ahora.  
  
Los árboles B constituyen una categoría muy importante de estructuras de datos, que permiten una implementación e?ciente de conjuntos y diccionarios, para operaciones de consulta y acceso secuencial. Existe una gran variedad de árboles B: los árboles B, B+ y B\*; pero todas ellas están basadas en la misma idea, la utilización de árboles de búsqueda no binarios y con condición de balanceo.  
  
El árbol B fue desarrollado para mantener estructuras de datos cuyo contenido se va modificando con el tiempo (Alta y bajas) de forma de poder encontrar en forma rápida y eficiente un elemento en particular. Para ello se busca que la profundidad del árbol sea la menor posible. Se requería también que la modificación del contenido no sea muy costosa en tiempo y espacio. Están pensados para disminuir la cantidad de accesos a disco, y la posibilidad de mantener en memoria la parte que se está utilizando y el resto conservarlo en el disco.

## Definición

B-árbol es un árbol de búsqueda que puede estar vacío o aquel cuyos nodos pueden tener varios hijos, existiendo una relación de orden entre ellos. Los nodos que conforman el árbol B son denominados Páginas, para comprender de una mejor manera el concepto de **Árbol B** es necesario, primeramente, conocer la estructura básica de una página.  
  

![Estructura de pagina](/assets/images/b-tree/arbolB_3.jpg)

*   Un campo Puntero Página < Dato, se utiliza para establecer el enlace con otra página que posee datos menores del dato que posee
*   Dato, información que posee la pagina
*   Un campo Puntero Página > Dato, que se utiliza para establecer el enlace con otra página que posee datos menores del dato que posee, si la pagina fuera el último de la lista, este campo tendrá como valor: NULL (vacío). Al emplearse el campo puntero sig para relacionar dos nodos, no será necesario almacenar físicamente a los nodos en espacios contiguos.

![estructura de un pagina](/assets/images/b-tree/arbolB_6.jpg)

  
  
**Estructura de una Página**  

Cada elemento de una página interno actúa como un valor separador, que lo divide en sub árboles. Las páginas de un árbol B, es decir las páginas que no son hoja, usualmente se representan como un conjunto ordenado de elementos y punteros a los hijos. Cada página interna contiene un máximo de M hijos y, con excepción del nodo raíz, un mínimo de X hijo(s). Esta relación entre M y X implica que dos nodos que están a medio llenar pueden unirse para formar una página con las características básicas, y un nodo lleno puede dividirse (romperse) en dos páginas con las características básicas. Estas propiedades hacen posible que el árbol B se ajuste para preservar sus propiedades ante la inserción y eliminación de elementos.  
  
Las páginas hoja tienen la misma restricción sobre el número de elementos, pero no tienen hijos, y por tanto poseen punteros vacios (nulos). El nodo raíz tiene límite superior de número de hijos, pero no tiene límite inferior. Algunos árboles balanceados guardan valores sólo en las páginas hoja, y por lo tanto sus páginas internas y páginas hojas son de diferente tipo. Los árboles B guardan valores en cada página, y pueden utilizar la misma estructura para todos las páginas.

Un ÁRBOL B de orden n es un árbol de búsqueda que satisface :

*   Cada página contiene como máximo 2n claves
*   Cada página contiene como mínimo n claves,excepto la raíz que puede tener sólo una.
*   Cada página o es una página hoja o tiene m+1 descendientes (enlaces a sus hijos), siendo m el número de claves en ésta.
*   Todas las páginas hoja están al mismo nivel.  