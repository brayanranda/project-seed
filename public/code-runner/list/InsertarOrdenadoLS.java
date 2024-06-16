import java.util.Iterator;  
public class InsertarOrdenadoLS<T> implements Iterable<T> {     
    public static void main(String[] args) {
        InsertarOrdenadoLS<Integer> listaS = new InsertarOrdenadoLS<Integer>();
        listaS.insertarAlInicio(1);
        listaS.insertarOrdenado(2);
        System.out.println(listaS);
    }
    private Nodo<T> cabeza;   
    private int tamanio;      
    public InsertarOrdenadoLS(){        
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
    public boolean esVacia(){
        return(this.cabeza==null);
    }
    public void insertarOrdenado(T info){
        if (this.esVacia())
            this.insertarAlInicio(info);
        else{
            Nodo<T> x=this.cabeza;
            Nodo<T> y=x;
                while(x!=null){
                    Comparable comparador=(Comparable)info;
                    int rta=comparador.compareTo(x.getInfo());
                    if(rta<0)
                        break;
                    y=x;
                    x=x.getSig();
                }
            if(x==y)
                this.insertarAlInicio(info);
            else{
                y.setSig(new Nodo<T>(info, x));
                this.tamanio++;
                }
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