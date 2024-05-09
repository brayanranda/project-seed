public class ListaC<T> {
    public static void main(String[] args) {
        ListaC<Integer> listaC = new ListaC<Integer>();

        listaC.insertarAlInicio(8);
        listaC.eliminar(0);
        listaC.insertarAlInicio(3);
        listaC.vaciar();
        System.out.println(listaC);
    }

    private Nodo<T> cabeza;  

    private int tamanio=0; 

    public ListaC() {
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

    public T eliminar(int i){
        try{
            Nodo<T> x;
            if(i==0){
                x = this.cabeza.getSig();
                this.cabeza.setSig(x.getSig());
                this.tamanio--;
                return (x.getInfo());
            }
            x=this.getPos(i-1);
            if(x==null)
                return (null);
            Nodo<T> y = x.getSig();
            x.setSig(y.getSig());
            this.tamanio--;
            return(y.getInfo());
           }catch(ExceptionUFPS ex) {
                System.err.println(ex.getMensaje());
            }
        return(null);	    	    
    }

    public void vaciar(){        
        this.cabeza.setSig(cabeza);
        this.tamanio=0;
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

class ExceptionUFPS extends Exception
{
    public ExceptionUFPS(String mensaje)
    {
        super(mensaje);
    }
    public String getMensaje(){
        return (super.getMessage());
    }
}