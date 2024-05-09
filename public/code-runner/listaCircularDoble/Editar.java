public class ListaCD<T> {
    public static void main(String[] args) {
        ListaCD<Integer> listaCD = new ListaCD<Integer>();

        listaCD.insertarAlInicio(1);
        listaCD.set(0, 7);
        System.out.println(listaCD);
    }

    private NodoD<T> cabeza;  

    private int tamanio=0; 

    public ListaCD() {
        this.cabeza=new NodoD<T> (null,null,null);
        this.cabeza.setSig(cabeza);
        cabeza.setAnt(cabeza);        
    }

    public void insertarAlInicio(T dato){
        NodoD<T> x=new NodoD<T> (dato, cabeza.getSig(), cabeza);
        cabeza.setSig(x);
        x.getSig().setAnt(x);
        this.tamanio++;
    }

    private NodoD<T> getPos(int i)throws ExceptionUFPS{
        if(i<0||i>=this.tamanio){
            throw new ExceptionUFPS("El índice solicitado no existe en la Lista Doble");
        }
        else
        {
            NodoD<T> t=this.cabeza.getSig();        
            while(i>0){            
                t=t.getSig();
                i--;            
            }        
            return(t);   
        }
     
    }


    public void set(int i, T dato){
        try{
            NodoD<T> t=this.getPos(i);        
            t.setInfo(dato);
        }catch(ExceptionUFPS e){
            System.err.println(e.getMessage());
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