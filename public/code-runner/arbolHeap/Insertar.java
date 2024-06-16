import java.util.Iterator;
public class ArbolHeap<T>{
    public static void main(String[] args) {
        ArbolHeap<Integer> arbolHeap = new ArbolHeap<>();

        // Insertar elementos en el heap
        arbolHeap.insertar(10);
        arbolHeap.insertar(20);
        arbolHeap.insertar(5);
        arbolHeap.insertar(30);
        arbolHeap.insertar(15);

        // Imprimir el heap
        System.out.println("Arbol Heap: " + arbolHeap.toString());
    }
    private T[] datos;
    private int peso;
    private final static int def = 10;
    public ArbolHeap(){
        //def es un tamaño por defecto para el Arbol.
        T[] temp = (T[]) new Object[def];
        this.datos = temp;
        this.peso = 0;
    }
    public ArbolHeap(int cap){
        T[] temp = (T[]) new Object[cap];
        this.datos = temp;
        this.peso = 0;
    }
    public T getRaiz(){
        T r = null;
        if(!this.esVacio())
            r = this.datos[0];
        return (r);
    }
    public boolean esVacio(){
        return (this.peso<1);
    }
    private int getPosPadre(int hijo){
        if(hijo<=0)
            return (-1);
        return (hijo-1)/2;
    }
    public void insertar(T nuevo){        
        if(peso>=this.datos.length)
            return; //El Arbol se encuentra lleno.        
        if(this.esVacio()){
            this.datos[peso++] = nuevo;
            return;
        }        
        int indice = peso++;
        this.datos[indice] = nuevo; 
        while ((indice!=0)&&(((Comparable)this.datos[indice]).compareTo(this.datos[this.getPosPadre(indice)]))>0){
            this.datos = intercambiar(this.datos, indice, this.getPosPadre(indice));
            indice = this.getPosPadre(indice);
        }
    }
    private T[] intercambiar(T[] h, int p1, int p2) {
        T temp = h[p1];
        h[p1]=h[p2];
        h[p2]=temp;
        return (h);
    }
    @Override
    public String toString(){
        String cad = "";
        for(int i=0; i<this.peso; i++){
            cad+=this.datos[i].toString()+"-";
        }
        return (cad);
    }
}