# Operaciones {"subTitle":"Árbol Heap"}

### Insertar Datos

**Pasos para insertar en un Heap:**  
- Agregamos el nodo. (de izquierda a derecha) Comparamos son su padre.  
- Si es mayor permutamos hasta llegar a la raíz Repetimos el paso 1 y 2 hasta llenar el nivel. Una vez llenado ese nivel pasamos al siguiente nivel.  
  
Ejemplos de agregar:  

![](/assets/images/heap-tree/heap_3.jpg)

  
Agregamos el 30:  
  

![](/assets/images/heap-tree/heap_4.jpg)

Agregamos el 25:  
  

![](/assets/images/heap-tree/heap_5.jpg)

  
Agregamos el 18:  
  

![](/assets/images/heap-tree/heap_6.jpg)

  
### Eliminar Datos

**Siempre se elimina la RAIZ**  
  
**Pasos para eliminar:** - Eliminamos la raíz del heap  
- Una vez eliminada remplazamos la raíz con el último nodo del último nivel.  
- Comparamos si los hijos de la nueva raíz son menores.  
- Si son menores no se hace ninguna permutación Si son mayores (o uno de ellos) se hace permutación con el hijo mayor.  
- Repetimos los pasos anteriores hasta no tener nodos para eliminar.  
  
Ejemplo: Eliminar el 25  

![](/assets/images/heap-tree/heap_8.jpg)

  
Eliminar el 24  

![](/assets/images/heap-tree/heap_9.jpg)

  
Eliminar el 19  

![](/assets/images/heap-tree/heap_10.jpg)

  
Eliminar el 18  

![](/assets/images/heap-tree/heap_11.jpg)