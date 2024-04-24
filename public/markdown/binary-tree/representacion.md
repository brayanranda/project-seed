## Representación de Árboles Binarios en Memoria

Existen dos formas de representar un árbol binario en memoria:  
- Por medio de **punteros**.  
- Por medio de **arreglos**.

La implementación en SEED se realiza por medio de punteros.  
  
Los nodos del árbol binario serán representados como registros, que contendrán como mínimo tres campos. En un campo se almacenará la **información del nodo**. Los dos restantes se utilizarán para apuntar a los subárboles **izquierdo y derecho** respectivamente del subnodo en cuestión.

![](/assets/images/binary-tree/ab_7.jpg)

**IZQ**: Campo donde se almacena la dirección del subárbol izquierdo del nodo T.  
**INFO**: Campo donde se almacena la información de interés del nodo.  
**DER**: Campo donde se almacena la dirección del subárbol derecho del nodo T.  

![](/assets/images/binary-tree/ab_8.jpg)