public class ListaS<T>
{     
    public static void main(String[] args) {
        ListaS<Integer> listaS = new ListaS<Integer>();

        listaS.insertarAlInicio(1);
        listaS.insertarOrdenado(2);
        
        System.out.println(listaS);
    }

    private Nodo<T> cabeza;   

    private int tamanio;      
    
    public ListaS(){        
        this.cabeza=null;
        this.tamanio=0;    
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