import java.util.Iterator;
public class EliminarLD<T> implements Iterable<T> {
    public static void main(String[] args) {
        EliminarLD<Integer> listaD = new EliminarLD<Integer>();
        listaD.insertarAlInicio(1);
        System.out.println(listaD);
    }
    private NodoD<T> cabeza;
    private int tamanio;
    public EliminarLD(){this.cabeza=null;this.tamanio=0;}
    @Override public Iterator<T> iterator(){return(new IteratorLD<T>(this.cabeza));}
    public void insertarAlInicio(T x){
        if (this.cabeza==null)
            this.cabeza=new NodoD<T>(x,null,null);
        else{
            this.cabeza=new NodoD<T>(x, this.cabeza, null);
            this.cabeza.getSig().setAnt(this.cabeza);
        }
        this.tamanio++;
    }
    public T eliminar(int i){
        try {
             NodoD<T> x;
             x = this.getPos(i); 
             if(x==this.cabeza){this.cabeza=this.cabeza.getSig();}
             else {x.getAnt().setSig(x.getSig());
                if(x.getSig()!=null)x.getSig().setAnt(x.getAnt());}
         x.setAnt(null);x.setSig(null);
         this.tamanio--;
         return(x.getInfo());
         }catch (ExceptionUFPS ex) {System.err.println(ex.getMessage());}
         return(null);
    }
    public boolean esVacia(){return(this.cabeza==null);}
    private NodoD<T> getPos(int i)throws ExceptionUFPS{
        if(this.esVacia() || i>this.tamanio  || i<0){
            throw new ExceptionUFPS("El índice solicitado no existe en la Lista Doble");
        }
        NodoD<T> t=this.cabeza;
        while(i>0){
            t=t.getSig();
            i--;
        }
        return(t);        
    }
}
class ExceptionUFPS extends Exception {
    public ExceptionUFPS(String mensaje) { super(mensaje); }
    public String getMensaje(){return (super.getMessage());}
}
class NodoD<T> implements java.io.Serializable{
    private T info;private NodoD<T> ant;private NodoD<T> sig;
    public NodoD() {this.info=null;this.ant=null;this.sig=null;}
    public NodoD(T info, NodoD<T> sig, NodoD<T> ant){this.info=info;this.sig=sig;this.ant=ant;}
    protected T getInfo(){return(this.info);}
    protected NodoD<T> getAnt(){return (this.ant);}
    protected NodoD<T> getSig(){return (this.sig);}
    protected void setInfo(T info){this.info = info;}
    protected void setAnt(NodoD<T> ant){this.ant=ant;}
    protected void setSig(NodoD<T> sig){this.sig=sig;}
}
class IteratorLD<T> implements Iterator<T> {
    private NodoD<T> posicion;
    IteratorLD(NodoD<T> posicion){this.posicion=posicion;}
    @Override public boolean hasNext(){return (posicion!=null);}
    @Override public T next(){
        if(!this.hasNext()){System.err.println("Error no hay mas elementos");return null;}
        NodoD<T> actual=posicion;
        posicion=posicion.getSig();
        return(actual.getInfo());
    }
    @Override public void remove(){}
}