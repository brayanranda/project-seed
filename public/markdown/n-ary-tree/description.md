# Árbol Eneario {"subTitle":"Árboles Enearios"}

## Definición

Un Árbol Eneario es una estructura de datos que se caracterizan porque cada nodo tiene un número indeterminado de hijos:  
Por ejemplo:

![](/assets/images/n-ary-tree/enearios_1.jpg)

  
El Nodo A tiene 4 hijos, los Nodos B, C y E no tienen hijos, y el Nodo D tiene 3 hijos. 
 
Esta circunstancia exige que cada Nodo guarde una Lista de apuntadores para almacenar el número de hijos. El árbol anterior en la memoria dinámica se puede ver así:  

![](/assets/images/n-ary-tree/enearios_2.jpg)

  
Al igual que en los TDAs estudiados con anterioridad, la forma de implementar un árbol n-ario dependerá del problema a resolver y de la capacidad del diseñador.  

No obstante, existen 3 Implementaciones básicas:  
  
- **Implementación matricial.** El árbol se representa en un vector de enteros, donde cada componente contiene el índice de su nodo padre.  
- **Implementación con listas.** Se representa mediante un vector de listas. Cada índice de las componentes del vector se asocia con un nodo del árbol, y cada componente es una lista con los Hijos del nodo.  
- **Implementación con celdas enlazadas.** Cada nodo del árbol es una celda enlazada con un puntero a su padre, a su hijo izquierda y a su hermano derecha.  
- El tipo **Nodo del árbol** es entero.  
- La **relación padre-hijo** se representa en un vector P, donde P\[i\] indica cuál es el nodo padre de i. Si el nodo no tiene padre (es la raíz), P\[i\] tomará valor -1.  
- Las **etiquetas** de los nodos se representan en otro vector de etiquetas.  
  
Esta implementación es relativamente sencilla y con bajo coste de memoria. Facilita las operaciones de acceso a los ancestros de un nodo **(eficiencia O(log(n))** para viajar desde un nodo hoja hasta la raíz), pero resulta difícil gestionar operaciones con los hijos (conocer la altura, determinar los hijos, establecer hijo izquierda y hermano derecha...).  
  
De acuerdo con la definición anterior, la estructura de cada Nodo será:  

![](/assets/images/n-ary-tree/enearios_3.jpg)

  
El apuntador hijo , direcciona al primer hijo, al hijo más a la izquierda y el apuntador hermano, se utiliza para formar la lista de hermanos. Para el ejemplo, los hijos de A están en la Lista:  

![](/assets/images/n-ary-tree/enearios_4.jpg)

  
Los hijos de D se encuentran en la Lista:  

![](/assets/images/n-ary-tree/enearios_5.jpg)

  
Veamos otro ejemplo:

![](/assets/images/n-ary-tree/enearios_6.jpg)

En la memoria dinámica este Árbol se puede ver así:  

![](/assets/images/n-ary-tree/enearios_7.jpg)