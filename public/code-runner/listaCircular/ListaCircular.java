public class ListaCircular<T> {
    public static void main(String[] args) {
        ListaCircular<Integer> listaCircular = new ListaCircular<Integer>();
        listaCircular.insertarAlInicio(1);
        listaCircular.insertarAlInicio(1);
        System.out.println(listaCircular);
    }
    private Nodo<T> cabeza;
    private int tamanio=0;
    public ListaCircular() {
        this.cabeza=new Nodo<T> (null,null);
        this.cabeza.setSig(cabeza);     
    }
    public void insertarAlInicio(T dato){        
        Nodo<T> x=new Nodo<T>(dato, cabeza.getSig());
        cabeza.setSig(x);
        this.tamanio++;
    }
    public void insertarAlFinal(T x){
        if(this.esVacia())
            this.insertarAlInicio(x);
        else {
            try {
                    Nodo<T> ult=this.getPos(this.tamanio-1);
                    ult.setSig(new Nodo<T>(x, this.cabeza));
                    this.tamanio++;
                }catch(ExceptionUFPS e){
                    System.err.println(e.getMensaje());                
                }
            }
    }
    public void insertarOrdenado(T info){
        if (this.esVacia())
            this.insertarAlInicio(info);
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
            if(x==cabeza.getSig())
                this.insertarAlInicio(info);
            else{
                y.setSig(new Nodo<T>(info, x));
                this.tamanio++;
                }
            }
     }
    public boolean esVacia(){ return(cabeza==cabeza.getSig() || this.tamanio==0); }
    @SuppressWarnings("empty-statement")
    private Nodo<T> getPos(int i)throws ExceptionUFPS{
        if(i<0||i>=this.tamanio){
            System.err.println("Error indice no valido en una Lista Circular!");
            return (null);
        }
        Nodo<T> x=cabeza.getSig();
        for( ; i-->0; x=x.getSig());
            return x;
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
    protected T getInfo(){ return this.info; }
    protected Nodo<T> getSig(){ return this.sig; }
    protected void setInfo(T nuevo){ this.info=nuevo; }
    protected void setSig(Nodo<T> nuevo){ this.sig=nuevo; }
}
class ExceptionUFPS extends Exception {
    public ExceptionUFPS(String mensaje) { super(mensaje); }
    public String getMensaje(){ return (super.getMessage()); }
}