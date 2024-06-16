import java.util.Iterator;  
public class EditarLS<T> implements Iterable<T>{
    public static void main(String[] args) {
        EditarLS<Integer> listaS = new EditarLS<Integer>();
        listaS.insertarAlInicio(1);
        listaS.set(0, 7);
        System.out.println(listaS);
    }
    private Nodo<T> cabeza;   
    private int tamanio;
    public EditarLS(){        
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
    public void set(int i, T dato){        
        try{            
            Nodo<T> t=this.getPos(i);
             t.setInfo(dato);            
        }catch(ExceptionUFPS e){            
            System.err.println(e.getMensaje());            
        }        
    }
    public boolean esVacia(){        
        return(this.cabeza==null);        
    }
    private Nodo<T> getPos(int i)throws ExceptionUFPS{        
        if(this.esVacia() || i>this.tamanio  || i<0){
            throw new ExceptionUFPS("El índice solicitado no existe en la Lista Simple");
        }            
        Nodo<T> t=this.cabeza;        
        while(i>0){            
            t=t.getSig();
            i--;            
        }        
        return(t);        
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
    public ExceptionUFPS(String mensaje){
        super(mensaje);
    }
    public String getMensaje(){
        return (super.getMessage());
    }
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