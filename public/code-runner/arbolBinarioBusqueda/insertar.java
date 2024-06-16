import java.util.Iterator;
import java.lang.Comparable;
public class ArbolBinarioBusqueda <T extends Comparable<T>> extends ArbolBinario<T> {
    public static void main(String[] args) {
        ArbolBinarioBusqueda<Integer> arbol = new ArbolBinarioBusqueda<>(null);
        arbol.insertar(5);
        arbol.insertar(3);
        arbol.insertar(7);
        System.out.println(arbol.esta(5)); // true
        System.out.println(arbol.esta(10)); // false
    }
    public ArbolBinarioBusqueda(){super();}
    public ArbolBinarioBusqueda(T raiz){super(raiz);}
    @Override public NodoBin<T> getRaiz(){return (super.getRaiz());}
    private boolean esta(NodoBin<T> r, T x){
        if (r==null || r.getInfo() == null)
            return (false);
        int compara=((Comparable)r.getInfo()).compareTo(x);
        if(compara>0)
            return(esta(r.getIzq(),x));
        else
            if(compara<0)
                return(esta(r.getDer(),x));
            else
                return (true);
    }
    public boolean esta(T x) {
        return esta(getRaiz(), x);
    }
    public boolean insertar(T dato){NodoBin<T> rr=this.esta(dato)?null:insertar(this.getRaiz(), dato);
        if(rr!=null)this.setRaiz(rr);
        return (rr!=null);
    }
    private NodoBin<T> insertar(NodoBin<T> r, T dato){
        if(r==null || r.getInfo() == null)
            return(new NodoBin<T>(dato,null, null));
        int compara=r.getInfo().compareTo(dato);
        if(compara>0) 
            r.setIzq(insertar(r.getIzq(), dato));
        else
            if(compara<0)  
                    r.setDer(insertar(r.getDer(), dato));
            else{
            System.err.println("Error dato duplicado:"+dato.toString());
            }
        return r;
    }

}
class ArbolBinario<T> {
    private NodoBin<T> raiz;
    public ArbolBinario(){this.raiz=null;}
    public ArbolBinario(T raiz) {this.raiz = new NodoBin(raiz);}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
}
class NodoBin<T>{
    private T info;private NodoBin<T> izq;private NodoBin<T> der;
    public NodoBin() {this.info=null;this.der=null;this.izq=null;}
    public NodoBin(T x, NodoBin<T> i, NodoBin<T> d) {this.info=x;this.izq=i;this.der=d;}
    public NodoBin(T x){this.info=x;this.izq=this.der=null;}
    public T getInfo(){return this.info;}public NodoBin<T> getIzq() {return this.izq;}public NodoBin<T> getDer() {return this.der;}public void setInfo(T info) {this.info=info;}
    public void setIzq(NodoBin<T> i) {this.izq=i;}public void setDer(NodoBin<T> d) {this.der=d;}
}