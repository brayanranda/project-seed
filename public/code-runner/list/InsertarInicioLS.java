import java.util.Iterator;  
public class InsertarInicioLS<T> implements Iterable<T> {
    public static void main(String[] args) {
        InsertarInicioLS<Integer> listaS = new InsertarInicioLS<Integer>();
        listaS.insertarAlInicio(1);
        listaS.insertarAlInicio(2);
        System.out.println(listaS);
    }
    private Nodo<T> cabeza;   
    private int tamanio;      
    public InsertarInicioLS(){        
        this.cabeza=null;
        this.tamanio=0;    
    }
    @Override
    public Iterator<T> iterator() {        
        return new IteratorLS<T>(this.cabeza) {};        
    }
    public void insertarAlInicio(T x){        
        this.cabeza=new Nodo<T>(x, this.cabeza);
        this.tamanio++;        
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
    protected Nodo<T> getSig(){ return this.sig;}
    protected void setInfo(T nuevo){  this.info=nuevo;}
    protected void setSig(Nodo<T> nuevo){this.sig=nuevo;}
}
class IteratorLS<T> implements Iterator<T>{
    private Nodo<T> posicion;
    IteratorLS(Nodo<T> pos){            
        this.posicion=pos;            
    }
    @Override
    public boolean hasNext(){            
        return (posicion!=null);            
    }
    @Override
    public T next(){            
        if(!this.hasNext()){                
        System.err.println("Error no hay mas elementos");
        return null;                
        }            
        Nodo<T> actual=posicion;
        posicion=posicion.getSig();            
        return(actual.getInfo());
    }
    @Override
    public void remove(){}
}