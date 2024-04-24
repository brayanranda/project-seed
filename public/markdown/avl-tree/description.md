# Árbol AVL {"subTitle":"Árboles Binarios"}

## Definición

El nombre AVL son las iniciales de los hombres que idearon este tipo de árbol Adelson-Velskii y Landis en 1962.  
Básicamente un árbol AVL es un **Árbol binario de búsqueda** al que se le añade una condición de equilibrio. Esta condición es que para todo nodo la altura de sus subárboles izquierdo y derecho pueden diferir a lo sumo en 1.

## Caracteristicas

- Un AVL es un ABB  
- La diferencia entre las alturas de los subárboles derecho e izquierdo no debe excederse en más de 1.  
- Cada nodo tiene asignado un peso de acuerdo a las alturas de sus subárboles.  
- Un nodo tiene un peso de 1 si su subárbol derecho es más alto, -1 si su subárbol izquierdo es más alto y 0 si las alturas son las mismas.  
- La inserción y eliminación en AVLs es la misma que en los ABBs.  

## Equilibrio

Equilibrio **(n) = altura-der (n) – altura-izq (n)** describe relatividad entre subárbol der y subárbol izq.  
\+ (positivo) -> der mas alto (profundo)  
\- (negativo) -> izq mas alto (profundo)  

Un árbol binario es un AVL **si y sólo si** cada uno de sus nodos tiene un equilibrio de **–1, 0, + 1.**

Si alguno de los pesos de los nodos se modifica en un valor no válido (2 o -2) debe seguirse un esquema de rotación.

## Operaciones sobre un AVL

- Insertar  
- Balancear  
    - **Caso 1** Rotación simple izquierda RSI  
    - **Caso 2** Rotación simple derecha RSD  
    - **Caso 3** Rotación doble izquierda RDI  
    - **Caso 4** Rotación doble derecha RDD  
- Eliminar  
- Calcular Altura  

## Insertar un Dato

Usamos la misma técnica para insertar un nodo en un ABB ordenado.  

Trazamos una ruta desde el nodo raiz hasta un nodo hoja (donde hacemos la inserción).  

Insertamos el nodo nuevo.  

Volvemos a trazar la ruta de regreso al nodo raíz, ajustando el equilibrio a lo largo de ella.  

Si el equilibrio de un nodo llega a ser + - 2, volvemos a ajustar los subárboles de los nodos para que su equilibrio se mantenga acorde con los lineamientos AVL (que son +- 1).   
