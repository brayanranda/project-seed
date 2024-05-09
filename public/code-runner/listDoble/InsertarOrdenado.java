import java.util.Iterator;
public class InsertarOrdenado<T> implements Iterable<T>{
    public static void main(String[] args) {
        InsertarOrdenado<Integer> listaD = new InsertarOrdenado<Integer>();
        listaD.insertarAlInicio(1);
        listaD.insertarAlFinal(5);
        listaD.insertarOrdenado(1);
        System.out.println(listaD);
    }
    private NodoD<T> cabeza;
    private int tamanio;
    @Override
    public Iterator<T> iterator(){
        return(new IteratorLD<T>(this.cabeza));
    }
    public InsertarOrdenado(){
        this.cabeza=null;
        this.tamanio=0;
    }
    public void insertarAlInicio(T x){
        if (this.cabeza==null)
            this.cabeza=new NodoD<T>(x,null,null);
        else{
            this.cabeza=new NodoD<T>(x, this.cabeza, null);
            this.cabeza.getSig().setAnt(this.cabeza);
        }
        this.tamanio++;			
    }
    public void insertarAlFinal(T x){
        if(this.cabeza==null)
            this.insertarAlInicio(x);
        else{
            NodoD<T> ult;
            try {
                ult = this.getPos(this.tamanio - 1);
                if(ult==null)
                    return;
                ult.setSig(new NodoD<T>(x, null, ult));
                this.tamanio++;
            } catch (ExceptionUFPS ex) {
               System.err.println(ex.getMessage());
            }
        }
    }
    public boolean esVacia(){ return(this.cabeza==null); }
    private NodoD<T> getPos(int i)throws ExceptionUFPS{
        if(this.esVacia() || i>this.tamanio  || i<0){ throw new ExceptionUFPS("El índice solicitado no existe en la Lista Doble"); }
        NodoD<T> t=this.cabeza;
        while(i>0){
            t=t.getSig();
            i--;
        }
        return(t);
    }
    public void insertarOrdenado(T info){
        Comparable x=(Comparable)(info);
        if(this.esVacia()|| x.compareTo(this.cabeza.getInfo())<=0){
            this.insertarAlInicio(info);
            return;
        }
        NodoD<T> nuevo=new NodoD<T>(info, null, null);
        NodoD<T> p=this.cabeza;
        for(;(p!=null && x.compareTo(p.getInfo())>=0); p=p.getSig()){}
        if(p==null)
            this.insertarAlFinal(info);
        else{
            nuevo.setAnt(p.getAnt());
            nuevo.setSig(p);
            p.setAnt(nuevo);
            nuevo.getAnt().setSig(nuevo);
            this.tamanio++;
        }
    }
}
class NodoD<T> implements java.io.Serializable {
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
    protected T getInfo(){ return(this.info); }
    protected NodoD<T> getAnt(){ return (this.ant); }
    protected NodoD<T> getSig(){ return (this.sig); }
    protected void setInfo(T info){ this.info = info; }
    protected void setAnt(NodoD<T> ant){ this.ant=ant; }
    protected void setSig(NodoD<T> sig){ this.sig=sig; }
}
class ExceptionUFPS extends Exception {
    public ExceptionUFPS(String mensaje) { super(mensaje); }
    public String getMensaje(){ return (super.getMessage()); }
}
class IteratorLD<T> implements Iterator<T>{
    private NodoD<T> posicion;  
    IteratorLD(NodoD<T> posicion){            
        this.posicion=posicion;	            
    }
    @Override
    public boolean hasNext(){return (posicion!=null);}
    @Override
    public T next(){            
        if(!this.hasNext()){                
            System.err.println("Error no hay mas elementos");
        return null;                
        }            
        NodoD<T> actual=posicion;
        posicion=posicion.getSig();            
        return(actual.getInfo());
    }
    @Override
    public void remove(){}
}
