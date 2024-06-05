import java.util.Iterator;
public class ArbolBinarioNiveles<T> {
    public static void main(String[] args) {
        ArbolBinarioNiveles<Integer> ArbolBinarioNiveles = new ArbolBinarioNiveles<>();
        System.out.println(ArbolBinarioNiveles.impNiveles());
    }
    private NodoBin<T> raiz;
    public ArbolBinarioNiveles(){this.raiz=null;}
    public ArbolBinarioNiveles(T raiz) {this.raiz = new NodoBin(raiz);}
    public T getObjRaiz() {return (raiz.getInfo());}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
    public boolean esVacio(){return(this.raiz==null);}
    public Iterator<T> impNiveles(){
        ListaCD<T> l=new ListaCD<T>();
        if(!this.esVacio()){
            Cola<NodoBin<T>> c=new Cola<NodoBin<T>>();c.enColar(this.getRaiz());NodoBin<T> x;
                while(!c.esVacia()){
                    x=c.deColar();l.insertarAlFinal(x.getInfo());
                    if(x.getIzq()!=null)c.enColar(x.getIzq());
                    if(x.getDer()!=null)c.enColar(x.getDer());
                }
        }
        return (l.iterator());
    }
}
class Cola<T>{
    private NodoD<T> inicio;private int tamanio;
    public Cola(){this.inicio=new NodoD<T> (null,null,null);this.inicio.setSig(inicio);inicio.setAnt(inicio);this.tamanio=0;}
    protected void aumentarTamanio() {this.tamanio++;}
    public int getTamanio(){return(this.tamanio);}
    public boolean esVacia(){return(this.getTamanio()==0);}
    public void enColar(T info){NodoD<T>x=new NodoD<T>(info,inicio,inicio.getAnt());inicio.getAnt().setSig(x);inicio.setAnt(x);this.aumentarTamanio();}
    public T deColar(){ 
        if(this.esVacia())
            return (null);
        NodoD<T> x=this.inicio.getSig();this.inicio.setSig(x.getSig());
        x.getSig().setAnt(inicio);x.setSig(null);x.setAnt(null);this.tamanio--;
        return(x.getInfo());     
    }
}
class ListaCD<T> implements Iterable<T> {
    private NodoD<T> cabeza;private int tamanio=0;
    @Override public Iterator<T> iterator() {return null;}
    public ListaCD() {this.cabeza=new NodoD<T> (null,null,null);this.cabeza.setSig(cabeza);cabeza.setAnt(cabeza);}
    public void insertarAlFinal(T dato){NodoD<T>x=new NodoD<T>(dato, cabeza, cabeza.getAnt());cabeza.getAnt().setSig(x);cabeza.setAnt(x);this.tamanio++;}
}
class NodoD<T> {
    private T info;private NodoD<T> ant;private NodoD<T> sig;
    public NodoD() {this.info=null;this.ant=null;this.sig=null;}
    public NodoD(T info, NodoD<T> sig, NodoD<T> ant){this.info=info;this.sig=sig;this.ant=ant;}
    protected T getInfo(){return(this.info);}
    protected NodoD<T> getAnt(){ return (this.ant);}protected NodoD<T> getSig(){ return (this.sig);}
    protected void setInfo(T info){this.info = info;}protected void setAnt(NodoD<T> ant){this.ant=ant;}protected void setSig(NodoD<T> sig){this.sig=sig;}
}
class NodoBin<T>{
    private T info;private NodoBin<T> izq;private NodoBin<T> der;
    public NodoBin() {this.info=null;this.der=null;this.izq=null;}
    public NodoBin(T x, NodoBin<T> i, NodoBin<T> d) {this.info=x;this.izq=i;this.der=d;}
    public NodoBin(T x){this.info=x;this.izq=this.der=null;}
    public T getInfo(){return this.info;}public NodoBin<T> getIzq() {return this.izq;}public NodoBin<T> getDer() {return this.der;}public void setInfo(T info) {this.info=info;}
    public void setIzq(NodoBin<T> i) {this.izq=i;}public void setDer(NodoBin<T> d) {this.der=d;}
}