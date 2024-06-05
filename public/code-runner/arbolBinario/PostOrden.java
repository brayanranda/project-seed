import java.util.Iterator;
public class ArbolBinarioPostOrden<T> {
    public static void main(String[] args) {
        ArbolBinarioPostOrden<Integer> ArbolBinarioPostOrden = new ArbolBinarioPostOrden<>();
        NodoBin<Integer> nb=new NodoBin<>(2);
        ListaCD<Integer> list=new ListaCD<>();
        ArbolBinarioPostOrden.setRaiz(nb);
        ArbolBinarioPostOrden.postOrden(nb, list);
        System.out.println(ArbolBinarioPostOrden);
    }
    private NodoBin<T> raiz;
    public ArbolBinarioPostOrden(){this.raiz=null;}
    public ArbolBinarioPostOrden(T raiz) {this.raiz = new NodoBin(raiz);}
    public T getObjRaiz() {return (raiz.getInfo());}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
    public Iterator<T> postOrden(){
        ListaCD<T> l=new ListaCD<T>();
        postOrden(this.getRaiz(),l);
        return (l.iterator());
    }
    private void  postOrden(NodoBin<T> r, ListaCD<T> l){
        if(r!=null){
            postOrden(r.getIzq(), l);
            postOrden(r.getDer(), l);
            l.insertarAlFinal(r.getInfo());
        }
    }
}
class ListaCD<T> implements Iterable<T> {
    private NodoD<T> cabeza;private int tamanio=0;
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
    protected T getInfo(){ return(this.info); }
    protected NodoD<T> getAnt(){ return (this.ant); }protected NodoD<T> getSig(){ return (this.sig); }
    protected void setInfo(T info){ this.info = info; }
    protected void setAnt(NodoD<T> ant){ this.ant=ant; }
    protected void setSig(NodoD<T> sig){ this.sig=sig; }
}
class IteratorLCD<T> implements Iterator<T> {
    private NodoD<T> cab;private NodoD<T> posicion;
    IteratorLCD(NodoD<T> cab) {
        this.cab=cab;
        this.posicion=this.cab.getSig();
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