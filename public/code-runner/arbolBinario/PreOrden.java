import java.util.Iterator;
public class ArbolBinarioPreOrden<T> {
    public static void main(String[] args) {
        ArbolBinarioPreOrden<Integer> arbolBinarioPreOrden = new ArbolBinarioPreOrden<>();
        NodoBin<Integer> nb=new NodoBin<>(2);
        ListaCD<Integer> list=new ListaCD<>();
        arbolBinarioPreOrden.setRaiz(nb);
        arbolBinarioPreOrden.preOrden(nb, list);
        System.out.println(arbolBinarioPreOrden);
    }
    private NodoBin<T> raiz;
    public ArbolBinarioPreOrden(){this.raiz=null;}
    public ArbolBinarioPreOrden(T raiz) {this.raiz = new NodoBin(raiz);}
    public T getObjRaiz() {return (raiz.getInfo());}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
    public Iterator<T> preOrden(){
            ListaCD<T> l=new ListaCD<T>();
            preOrden(this.getRaiz(),l);
            return (l.iterator());
    }
    private void  preOrden(NodoBin<T> r, ListaCD<T> l){
        if(r!=null){
            l.insertarAlFinal(r.getInfo());
        preOrden(r.getIzq(), l);
        preOrden(r.getDer(), l);
        }
    }
}
class ListaCD<T> implements Iterable<T> {
    private NodoD<T> cabeza;
    private int tamanio=0;
    @Override
    public Iterator<T> iterator() {return null;}
    public ListaCD() {
        this.cabeza=new NodoD<T> (null,null,null);
        this.cabeza.setSig(cabeza);
        cabeza.setAnt(cabeza);        
    }
    public void insertarAlFinal(T dato){
        NodoD<T>x=new NodoD<T>(dato, cabeza, cabeza.getAnt());
        cabeza.getAnt().setSig(x);
        cabeza.setAnt(x);
        this.tamanio++;
    }
}
class NodoD<T> {
    private T info;private NodoD<T> ant;private NodoD<T> sig;
    public NodoD() {this.info=null;this.ant=null;this.sig=null;}
    public NodoD(T info, NodoD<T> sig, NodoD<T> ant){this.info=info;this.sig=sig;this.ant=ant;}
    protected T getInfo(){return(this.info);}
    protected NodoD<T> getAnt(){ return (this.ant);}protected NodoD<T> getSig(){ return (this.sig);}
    protected void setInfo(T info){this.info = info;}
    protected void setAnt(NodoD<T> ant){this.ant=ant;}
    protected void setSig(NodoD<T> sig){this.sig=sig;}
}
class IteratorLCD<T> implements Iterator<T> {
    private NodoD<T> cab;private NodoD<T> posicion;
    IteratorLCD(NodoD<T> cab) {
        this.cab=cab;this.posicion=this.cab.getSig();
    }
    @Override
    public boolean hasNext(){return (this.posicion!=this.cab);}
    @Override
    public T next() {
        if(!this.hasNext())
            return (null);
        this.posicion=this.posicion.getSig();
        return(this.posicion.getAnt().getInfo());
    }
    @Override
    public void remove() {}
}
class NodoBin<T>{
    private T info;private NodoBin<T> izq;private NodoBin<T> der;
    public NodoBin() {this.info=null;this.der=null;this.izq=null;}
    public NodoBin(T x, NodoBin<T> i, NodoBin<T> d) {this.info=x;this.izq=i;this.der=d;}
    public NodoBin(T x){this.info=x;this.izq=this.der=null;}
    public T getInfo(){return this.info;}public NodoBin<T> getIzq() {return this.izq;}public NodoBin<T> getDer() {return this.der;}public void setInfo(T info) {this.info=info;}
    public void setIzq(NodoBin<T> i) {this.izq=i;}public void setDer(NodoBin<T> d) {this.der=d;}
}