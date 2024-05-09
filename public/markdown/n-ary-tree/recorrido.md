# Recorridos para Arboles Enearios {"subTitle":"Árboles Eneario"}

Lo mismo que los Árboles Binarios, los Arboles Enearios pueden recorrerse de 4 formas: **Inorden, Preorden, Posorden y por niveles.** Veamos cada uno de ellos.  
  
**Recorrido Inorden:**  
Observemos el siguiente Árbol:

![](/assets/images/n-ary-tree/enearios_8.jpg)

  
El recorrido Inorden es: **2, 1, 5, 3, 6, 10, 7, 4, 11, 8, 12, 13, 9.**  
  
El Orden del recorrido es:  
- Primer Hijo en Inorden.  
- Padre  
- Hermano en Inorden.  
  
  
**Recorrido Preorden:**  
Vemos el siguiente Árbol:  

![](/assets/images/n-ary-tree/enearios_9.jpg)

Un Árbol se recorre el Preorden, así:  
- Padre  
- Primer hijo en Preorden  
- Hermano en Preorden  
Siguiendo este orden, el recorrido es: **1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.**  
  
**Recorrido en Posorden:**  
Observemos el siguiente Árbol:  

![](/assets/images/n-ary-tree/enearios_10.jpg)

El recorrido en Posorden del anterior Arbol es:  
- Hijo en Posorden  
- Hermano en Posorden  
- Padrea  
Con lo cual el árbol anterior en Posorden es: **2, 10, 13, 14, 15, 11, 12, 3, 9, 1.**  
