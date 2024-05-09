public class Pila<T> {

    public static void main(String[] args) {
        Pila<Integer> pila = new Pila<Integer>();

        pila.apilar(2);
        pila.apilar(7);
        pila.apilar(3);
        pila.desapilar();

        System.out.println(pila);
    }

    private Nodo<T> tope; 
    private int tamanio;  

    public Pila(){
        this.tope = null;
        this.tamanio = 0;
    }

    public boolean esVacia() {
        return(this.tope==null||this.tamanio==0);
    }

    public void apilar(T info){
        if(this.esVacia())
            this.tope = new Nodo<T>(info, null);
        else
            this.tope=new Nodo<T>(info, this.tope);        
        this.tamanio++;
    }

    public T desapilar(){
        if(this.esVacia())
            return (null);
        Nodo<T> x=this.tope;
        this.tope = tope.getSig();     
        this.tamanio--;
        if(tamanio==0)
            this.tope=null;
        return(x.getInfo());
    }
    
    @Override
    public String toString( )
    {
        String msj ="";
        Nodo<T> p = tope;
        while(p != null){
            msj += p.getInfo().toString()+"->";
            p = p.getSig();
        }
        return msj;
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

    protected T getInfo(){
        return this.info;
    }
    
    protected Nodo<T> getSig(){        
        return this.sig;        
    }
    
    protected void setInfo(T nuevo){        
        this.info=nuevo;
    }

    protected void setSig(Nodo<T> nuevo){
        this.sig=nuevo;
    }
}