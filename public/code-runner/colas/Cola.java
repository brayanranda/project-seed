public class Cola<T> {
    public static void main(String[] args) {
        Cola<Integer> cola = new Cola<Integer>();
        
        cola.enColar(2);
        cola.enColar(3);
        cola.enColar(5);
        cola.getInicio();
        cola.deColar();
        cola.vaciar();
        cola.getInfoInicio();
        cola.aumentarTamanio();
        cola.getTamanio();

        System.out.println(cola);
    }

    private NodoD<T> inicio;
    private int tamanio;  
    
    public Cola(){
        this.inicio=new NodoD<T> (null,null,null);
        this.inicio.setSig(inicio);
        inicio.setAnt(inicio); 
        this.tamanio=0;
    }

    public void enColar(T info){
        NodoD<T>x=new NodoD<T>(info,inicio,inicio.getAnt());
        inicio.getAnt().setSig(x);
        inicio.setAnt(x);
        this.aumentarTamanio();
    }

    public T deColar(){ 
        if(this.esVacia())
            return (null);
        NodoD<T> x=this.inicio.getSig();	   
        this.inicio.setSig(x.getSig());
        x.getSig().setAnt(inicio);
        x.setSig(null);
        x.setAnt(null);
        this.tamanio--;
        return(x.getInfo());     
    }

    public void vaciar(){
        this.inicio.setSig(this.inicio);
        this.inicio.setAnt(this.inicio); 
        this.tamanio=0;
    }

    protected NodoD<T> getInicio(){
        return this.inicio;
    }

    public T getInfoInicio(){
        return this.inicio.getSig().getInfo();
    }

    protected void aumentarTamanio() {
        this.tamanio++;
    }

    public int getTamanio(){
        return(this.tamanio);
    }

    public boolean esVacia(){
        return(this.getTamanio()==0);           
   }

   @Override
    public String toString( )
    {
        String msj ="";
        NodoD<T> c = this.inicio.getSig();
        while(c != inicio){
            msj += c.getInfo().toString()+"->";
            c = c.getSig();
        }
        return msj;
    }
}

class NodoD<T> implements java.io.Serializable
{
    private T info;      
    private NodoD<T> ant;   
    private NodoD<T> sig;   

    public NodoD() {
        this.info=null;
        this.ant=null;
        this.sig=null; 
    }

    public NodoD(T info, NodoD<T> sig, NodoD<T> ant){        
        this.info=info;
        this.sig=sig;
        this.ant=ant;        
    }
    
    protected T getInfo(){        
        return(this.info);        
    }

    protected NodoD<T> getAnt(){        
        return (this.ant);        
    }

    protected NodoD<T> getSig(){        
        return (this.sig);        
    }

    protected void setInfo(T info){        
        this.info = info;            
    }

    protected void setAnt(NodoD<T> ant){        
        this.ant=ant;        
    }

    protected void setSig(NodoD<T> sig){        
        this.sig=sig;	        
    }
}

