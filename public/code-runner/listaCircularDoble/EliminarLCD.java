import java.util.Iterator;
public class EliminarLCD<T> implements Iterable<T> {
    public static void main(String[] args) {
        EliminarLCD<Integer> eliminar = new EliminarLCD<Integer>();
        eliminar.insertarAlInicio(7);
        eliminar.eliminar(0);
        System.out.println(eliminar);
    }
    private NodoD<T> cabeza; private int tamanio = 0;
    @Override public Iterator<T> iterator() { return (new IteratorLCD<T>(this.cabeza)); }
    public void insertarAlInicio(T dato) {NodoD<T> x = new NodoD<T>(dato, null, null);
        if (this.tamanio == 0) {this.cabeza.setSig(x);this.cabeza.setAnt(x);x.setSig(this.cabeza);x.setAnt(this.cabeza);}
        else {x.setSig(this.cabeza.getSig());x.setAnt(this.cabeza);this.cabeza.getSig().setAnt(x);this.cabeza.setSig(x);}
        this.tamanio++;
    }
    public EliminarLCD() {this.cabeza = new NodoD<T>(null, null, null);this.cabeza.setSig(cabeza); cabeza.setAnt(cabeza);}
    public T eliminar(int i) {
        try {NodoD<T> x;
            if (i == 0) {x = this.cabeza.getSig();
                this.cabeza.setSig(x.getSig());
                this.cabeza.getSig().setAnt(this.cabeza);
                x.setSig(null); x.setAnt(null); this.tamanio--;
                return (x.getInfo());
            }
            x = this.getPos(i - 1);
            NodoD<T> y = x.getSig();
            x.setSig(y.getSig());
            y.getSig().setAnt(x);
            y.setSig(null); y.setAnt(null); this.tamanio--;
            return (y.getInfo());
        } catch (ExceptionUFPS ex) {
            System.err.println(ex.getMessage());
        }
        return (null);
    }
    @SuppressWarnings("empty-statement") private NodoD<T> getPos(int i) throws ExceptionUFPS {
        if (i < 0 || i >= this.tamanio) {throw new ExceptionUFPS("El índice no existe");
        } else {NodoD<T> t = this.cabeza.getSig();
            while (i > 0) {t = t.getSig(); i--;}
            return (t);
        }
    }
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
class ExceptionUFPS extends Exception {public ExceptionUFPS(String mensaje) {super(mensaje);}public String getMensaje() {return (super.getMessage());}
}
class IteratorLCD<T> implements Iterator<T> {
    private NodoD<T> cab; private NodoD<T> posicion;
    IteratorLCD(NodoD<T> cab) { this.cab = cab; this.posicion = this.cab.getSig(); }
    @Override public boolean hasNext() { return (this.posicion != this.cab); }
    @Override public T next() {if (!this.hasNext()) return (null);this.posicion = this.posicion.getSig();return (this.posicion.getAnt().getInfo());}
}
