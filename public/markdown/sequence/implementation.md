# Secuencia en SEED {"subTitle":"Implementación de"}

## Descripción

Una secuencia es una estructura estática que se definió en la clase Secuencia, en la que principalmente se debe definir un tamaño en especifico, ya que es el espacio reservado para el almacenamiento de los objetos, el funcionamiento de la secuencia consiste en almacenar sus datos de manera consecutiva en sus posiciones que comienzan desde (0) hasta (el tamaño definido – 1), de manera que en esta estructura los datos no se encuentran ordenados y entre la primera posición de la Secuencia (posición cero) y la última posición (última posición donde exista un dato) no se encuentran posiciones nulas, lo que si puede ocurrir en un vector tradicional donde no necesariamente los datos son almacenados secuencialmente. Se debe tener en cuenta que la capacidad para almacenar en la Secuencia es igual al tamaño que se le definió en el momento de su creación y que esta no es la misma cantidad de objetos almacenados, al poseer la cantidad de objetos en la estructura permite examinar los datos almacenados dentro de la Secuencia sin tener que recorrer toda la capacidad de la estructura.  

La implementación de la Clase Secuencia se ilustra en el siguiente diagrama de clase:  
  

![Diagrama de Clase Secuencia](/assets/images/sequence/Secuencia_10.jpg)

  
**Requerimientos funcionales implementados:**  
- RF1 - Crear una nueva Secuencia.  
- RF2 - Insertar datos a la nueva Secuencia.  
- RF3 - Eliminar datos de la Secuencia (Vaciar la Secuencia).  
- RF4 - Editar datos de la Secuencia.  
- RF5 - Consultar datos de la Secuencia.  
- RF6 - Conocer el tamaño de la Secuencia.  
- RF7 - Conocer la capacidad de la Secuencia.  
- RF8 - Conocer los datos de la Secuencia.  
  
**Implementación de un Simulador:**  
El Simulador posee las operaciones indicadas por su menú de opciones:  
  

![Simulado de Secuencia](/assets/images/sequence/Secuencia_11.jpg)