public class InsertarInicio<T> {
    public static void main(String[] args) {
        InsertarInicio<Integer> listaD = new InsertarInicio<Integer>();

        listaD.insertarAlInicio(1);
        listaD.insertarAlInicio(2);

        System.out.println(listaD);
    }
    private NodoD<T> cabeza;
    private int tamanio;

    public InsertarInicio(){
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
