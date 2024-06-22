import java.util.Iterator;
public class ArbolEneario<T>{
    public static void main(String[] args) {
        NodoEneario<Integer> nodo1 = new NodoEneario<>(1);
        NodoEneario<Integer> nodo2 = new NodoEneario<>(2);
        nodo1.setHijo(nodo2);
        ArbolEneario<Integer> arbol = new ArbolEneario<>(nodo1);
        Iterator<Integer> it = arbol.inOrden();
        while (it.hasNext()) {System.out.print(it.next() + " ");}
    }
    private NodoEneario<T> raiz;
    public ArbolEneario(){this.raiz=null;}
    public ArbolEneario(NodoEneario<T> raiz){this.raiz=raiz;}
    public NodoEneario<T> getRaiz() {return raiz;}
    public Iterator<T> inOrden(){ListaCD<T> l=new ListaCD<T>();inOrden(this.getRaiz(),l);return (l.iterator());}
    private void  inOrden(NodoEneario<T> r, ListaCD<T> l){
        NodoEneario<T> q;
        if(r!=null){
            q = r.getHijo();
            if(q == null){l.insertarAlFinal(r.getInfo());
            }else{inOrden(q,l);
                l.insertarAlFinal(r.getInfo());
                q = q.getHermano();
                while(q != null){inOrden(q,l);
                    q = q.getHermano();
                }
            }
        }
    }

}
class ListaCD <T> implements Iterable<T>{
    private NodoD<T> cabeza;
    private int tamanio=0;
    public ListaCD() {this.cabeza=new NodoD<T> (null,null,null);this.cabeza.setSig(cabeza);cabeza.setAnt(cabeza);}
    @Override public Iterator<T> iterator(){return (new IteratorLCD<T>(this.cabeza));}
    public void insertarAlFinal(T dato){NodoD<T>x=new NodoD<T>(dato, cabeza, cabeza.getAnt());cabeza.getAnt().setSig(x);cabeza.setAnt(x);this.tamanio++;}
}
class  NodoEneario<T>{
    private T info;
    private NodoEneario<T> hijo;
    private NodoEneario<T> hermano;
    public NodoEneario(T info){this.info= info ;this.hijo=null;this.hermano=null;}
    public T getInfo() {return info;}
    public void setInfo(T info) {this.info = info;}
    public NodoEneario<T> getHijo() {return hijo;}
    public void setHijo(NodoEneario<T> hijo) {this.hijo = hijo;}
    public NodoEneario<T> getHermano() {return hermano;}
    public void setHermano(NodoEneario<T> hermano) {this.hermano = hermano;}
}
class NodoD<T> {
    private T info; private NodoD<T> ant; private NodoD<T> sig;
    public NodoD() { this.info = null; this.ant = null; this.sig = null; }
    public NodoD(T info, NodoD<T> sig, NodoD<T> ant) { this.info = info; this.sig = sig; this.ant = ant; }
    protected T getInfo() { return (this.info); }
    protected NodoD<T> getAnt() { return (this.ant); }
    protected NodoD<T> getSig() { return (this.sig); }
    protected void setInfo(T info) { this.info = info; }
    protected void setAnt(NodoD<T> ant) { this.ant = ant; }
    protected void setSig(NodoD<T> sig) { this.sig = sig; }
}
class IteratorLCD<T> implements Iterator<T> {
    private NodoD<T> cab; private NodoD<T> posicion;
    IteratorLCD(NodoD<T> cab) { this.cab = cab; this.posicion = this.cab.getSig(); }
    @Override public boolean hasNext() { return (this.posicion != this.cab); }
    @Override public T next() {if (!this.hasNext()) return (null);this.posicion = this.posicion.getSig();return (this.posicion.getAnt().getInfo());}
}