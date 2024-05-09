import java.util.Iterator;
public class ConsultarLC<T> implements Iterable<T>{
    public static void main(String[] args) {
        ConsultarLC<Integer> listaC = new ConsultarLC<Integer>();
        listaC.insertarAlInicio(8);
        listaC.getTamanio();
        System.out.println(listaC);
    }
    private Nodo<T> cabeza;  
    private int tamanio=0; 
    @Override
    public Iterator<T> iterator(){
        return (new IteratorLC<T>(this.cabeza));
    }
    public ConsultarLC() {
        this.cabeza=new Nodo<T> (null,null);
        this.cabeza.setSig(cabeza);     
    }
    public void insertarAlInicio(T dato){        
        Nodo<T> x=new Nodo<T>(dato, cabeza.getSig());
        cabeza.setSig(x);
        this.tamanio++;
    }
    public T get(int i){        
        try {           
                Nodo<T> x=this.getPos(i);
                if(x==null)
                    return (null);
                return(x.getInfo());
            }catch (ExceptionUFPS ex) {
                System.err.println(ex.getMensaje());
            }
            return (null);
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
    public int getIndice(T dato){
        int i=0;        
        for(Nodo<T> x=this.cabeza.getSig();x!=this.cabeza;x=x.getSig()){
            if(x.getInfo().equals(dato))
            return(i);            
            i++;            
        }    	
        return (-1);
    }  
    public boolean esta(T info) {return (this.getIndice(info)!=-1);}
    public int getTamanio(){return (this.tamanio);}
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

class ExceptionUFPS extends Exception{
    public ExceptionUFPS(String mensaje){
        super(mensaje);
    }
    public String getMensaje(){
        return (super.getMessage());
    }
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
