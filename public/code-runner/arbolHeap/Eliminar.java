import java.util.Iterator;
public class ArbolHeap<T>{
    public static void main(String[] args) {
        ArbolHeap<Integer> arbolHeap = new ArbolHeap<>();
        arbolHeap.insertar(10);
        arbolHeap.insertar(20);
        arbolHeap.insertar(5);
        arbolHeap.insertar(15);
        arbolHeap.eliminar(5);
        System.out.println("Arbol Heap: " + arbolHeap.toString());
    }
    private T[] datos;
    private int peso;
    private final static int def = 10;
    public ArbolHeap(){
        T[] temp = (T[]) new Object[def];
        this.datos = temp;
        this.peso = 0;
    }
    public ArbolHeap(int cap){
        T[] temp = (T[]) new Object[cap];
        this.datos = temp;
        this.peso = 0;
    }
    public T getRaiz(){T r = null;if(!this.esVacio())r = this.datos[0];return (r);}
    public boolean esVacio(){return (this.peso<1);}
    private boolean esHoja(int pos){return ((pos>=peso/2) && (pos<peso));}
    private int getHijoIzq(int posPadre) {return ((2*posPadre)+1);}
    private int getPosPadre(int hijo){if(hijo<=0)return (-1);return (hijo-1)/2;}
    private int getPos(T info){for(int i=0; i<this.peso; i++){if(this.datos[i].equals(info))return (i);}return (-1);}
    public void insertar(T nuevo){        
        if(peso>=this.datos.length)
            return;
        if(this.esVacio()){this.datos[peso++] = nuevo;return;}
        int indice = peso++;this.datos[indice] = nuevo;
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
    private void reorganiza(int pos) {
      if(pos<0 || pos>peso){return;}
      while (!esHoja(pos)) {int j = getHijoIzq(pos);
        if ((j<(peso-1)) && (((Comparable)this.datos[j]).compareTo(this.datos[j+1]) < 0))j++;
        if (((Comparable)this.datos[pos]).compareTo(this.datos[j]) >= 0) return;
            this.datos =intercambiar(this.datos, pos, j);
            pos = j;
      }
    }
    public T eliminar(T info){
        int pos = this.getPos(info);T x;
        if(pos==(-1))return (null);
        if (pos==(peso-1)){
            x = this.datos[peso-1];
            this.peso--;
            this.datos[peso] = null;
            return (x);
        }else{this.datos =intercambiar(this.datos, pos, --peso);
            while ((pos>0) && (((Comparable)this.datos[pos]).compareTo(this.datos[this.getPosPadre(pos)])>0)){
                this.datos = intercambiar(this.datos, pos,this.getPosPadre(pos));pos = this.getPosPadre(pos);}
            if(peso!=0)reorganiza(pos);}
        x = this.datos[peso];
        this.datos[peso] = null;
        return (x);
    }
    @Override public String toString(){String cad = "";
        for(int i=0; i<this.peso; i++){cad+=this.datos[i].toString()+"-";}
        return (cad);
    }
}