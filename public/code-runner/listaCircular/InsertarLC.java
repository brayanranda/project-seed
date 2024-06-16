import java.util.Iterator;
public class InsertarLC<T> implements Iterable<T> {
    public static void main(String[] args) {
        InsertarLC<Integer> listaCircular = new InsertarLC<Integer>();
        listaCircular.insertIni(1);
        listaCircular.insertIni(1);
        System.out.println(listaCircular);
    }
    private Nodo<T> cabeza;
    private int tamanio=0;
    @Override public Iterator<T> iterator(){return (new IteratorLC<T>(this.cabeza));}
    public InsertarLC() {this.cabeza=new Nodo<T> (null,null);this.cabeza.setSig(cabeza);}
    public void insertIni(T dato){Nodo<T> x=new Nodo<T>(dato, cabeza.getSig());cabeza.setSig(x);this.tamanio++;}
    public void insertarAlFinal(T x){
        if(this.esVacia())this.insertIni(x);
        else {
            try {
                Nodo<T> ult=this.getPos(this.tamanio-1);
                ult.setSig(new Nodo<T>(x, this.cabeza));
                this.tamanio++;
            } catch(ExceptionUFPS e){System.err.println(e.getMensaje());}
            }
    }
    public void insertarOrdenado(T info){
        if (this.esVacia())this.insertIni(info);
        else{
            Nodo<T> x=this.cabeza;
            Nodo<T> y=x;
            x = x.getSig();
            while(x!=this.cabeza){
                Comparable comparador=(Comparable)info;
                int rta=comparador.compareTo(x.getInfo());
                if(rta<0)
                    break;
                y=x;
                x=x.getSig();
            }
            if(x==cabeza.getSig())this.insertIni(info);
            else{y.setSig(new Nodo<T>(info, x));this.tamanio++;}
            }
    }
    public boolean esVacia(){ return(cabeza==cabeza.getSig() || this.tamanio==0); }
    @SuppressWarnings("empty-statement")
    private Nodo<T> getPos(int i)throws ExceptionUFPS{
        if(i<0||i>=this.tamanio){
            System.err.println("Error indice no valido");
            return (null);
        }
        Nodo<T> x=cabeza.getSig();
        for( ; i-->0; x=x.getSig());
            return x;
    }
}
class Nodo<T>{
    private T info;private Nodo<T> sig;
    public Nodo(){this.info=null;this.sig=null;}
    public Nodo(T info, Nodo<T> sig){this.info=info;this.sig=sig;}
    protected T getInfo(){ return this.info; }
    protected Nodo<T> getSig(){ return this.sig; }
    protected void setInfo(T nuevo){ this.info=nuevo; }
    protected void setSig(Nodo<T> nuevo){ this.sig=nuevo; }
}
class ExceptionUFPS extends Exception {
    public ExceptionUFPS(String mensaje) { super(mensaje); }
    public String getMensaje(){ return (super.getMessage()); }
}
class IteratorLC<T> implements Iterator<T>{
    private Nodo<T> cabeza;private Nodo<T> posicion;
    IteratorLC(Nodo<T> cab){this.cabeza=cab;this.posicion=this.cabeza.getSig();}
    @Override public boolean hasNext(){return (this.posicion!=this.cabeza);}
    @Override public T next(){            
        if(!this.hasNext())return (null);
        Nodo<T> aux = posicion;
        this.posicion=this.posicion.getSig();
        return(aux.getInfo());
    }
}