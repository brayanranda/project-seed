# Cola de Prioridad {"subTitle":"Estructuras Lineales"}

Las colas de prioridad es una extensión de la estructura de datos Cola. Se basan en el orden de salida de sus elementos: en el orden de llegada y orden de prioridad; asi un elemento que ingresa a la cola se posicionará al final del segmento de elementos de su misma prioridad. Las colas de prioridad permiten alterar el orden de salida de los elementos de una cola:  

- no es necesario seguir un orden FIFO.
- el orden se puede basar en una función de comparación.
  
Las operaciones de las colas de prioridad son las mismas que las de las colas con un comportamiento diferente. Una cola de prioridad es una cola a cuyos elementos se les ha asignado una prioridad, de forma que el orden en que los elementos son procesados sigue las siguientes reglas:  

- El elemento con mayor prioridad es procesado primero.
- Dos elementos con la misma prioridad son procesados según el orden en que fueron introducidos en la cola.
  
Así, si tenemos que la prioridad más alta es 0, y la más baja es 3, la estructura se vería así:

![Cola de Prioridad](/assets/images/queue/ColaP_1.jpg)

La cola de prioridad cuenta con las mismas rutinas que la estructura de cola genérica, con la salvedad que al encolar elementos y desencolar elementos se debe de tomar en cuenta su prioridad para su posicionamiento.