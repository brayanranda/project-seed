import java.util.Iterator;
public class EditarLC<T> implements Iterable<T> {
    public static void main(String[] args) {
        EditarLC<Integer> listaC = new EditarLC<Integer>();

        listaC.insertarAlInicio(1);
        listaC.set(0, 7);
        System.out.println(listaC);
    }
    private Nodo<T> cabeza;  
    private int tamanio=0; 
    @Override
    public Iterator<T> iterator(){
        return (new IteratorLC<T>(this.cabeza));
    }
    public EditarLC() {
        this.cabeza=new Nodo<T> (null,null);
        this.cabeza.setSig(cabeza);     
    }
    public void insertarAlInicio(T dato){        
        Nodo<T> x=new Nodo<T>(dato, cabeza.getSig());
        cabeza.setSig(x);
        this.tamanio++;
    }
    private Nodo<T> getPos(int i)throws ExceptionUFPS{
        if(i<0||i>=this.tamanio){
            System.err.println("Error indice no valido en una Lista Circular!");
            return (null);
        }
        Nodo<T> x=cabeza.getSig();
        for( ; i-->0; x=x.getSig());
            return x;
    }
    public void set(int i, T dato){
        try{
            Nodo<T> t=this.getPos(i);
            if(t==null)
                return;
            t.setInfo(dato);
        }catch(ExceptionUFPS e){
            System.err.println(e.getMensaje());
        }
    }
}
class Nodo<T>{
    private T info;
    private Nodo<T> sig;
    public Nodo(){
        this.info=null;
        this.sig=null;
    }
    public Nodo(T info, Nodo<T> sig){
        this.info=info;
        this.sig=sig;
    }
    protected T getInfo(){return this.info;}
    protected Nodo<T> getSig(){return this.sig;}
    protected void setInfo(T nuevo){this.info=nuevo;}
    protected void setSig(Nodo<T> nuevo){this.sig=nuevo;}
}
class ExceptionUFPS extends Exception {
    public ExceptionUFPS(String mensaje) { super(mensaje); }
    public String getMensaje(){return (super.getMessage());}
}
class IteratorLC<T> implements Iterator<T>{
    private Nodo<T> cabeza;
    private Nodo<T> posicion;
    IteratorLC(Nodo<T> cab){            
        this.cabeza=cab;
        this.posicion=this.cabeza.getSig();            
    }
    @Override
    public boolean hasNext(){            
        return (this.posicion!=this.cabeza);                
    }
    @Override
    public T next(){            
        if(!this.hasNext())
            return (null);
        Nodo<T> aux = posicion;
        this.posicion=this.posicion.getSig();
        return(aux.getInfo());
    }
    @Override
    public void remove(){}
}
