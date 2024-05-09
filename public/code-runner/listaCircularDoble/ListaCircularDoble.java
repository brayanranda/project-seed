public class ListaCircularDoble<T> {
    public static void main(String[] args) {
        ListaCircularDoble<Integer> listaCircular = new ListaCircularDoble<Integer>();
        listaCircular.insertarAlInicio(7);
        listaCircular.insertarAlInicio(3);
        listaCircular.insertarOrdenado(1);
        System.out.println(listaCircular);
    }
    private NodoD<T> cabeza;
    private int tamanio=0;
    public ListaCircularDoble() {
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
    public void insertarAlFinal(T dato){
        NodoD<T>x=new NodoD<T>(dato, cabeza, cabeza.getAnt());
        cabeza.getAnt().setSig(x);
        cabeza.setAnt(x);
        this.tamanio++;
    }
    public void insertarOrdenado(T info){
        if (this.esVacia())
            this.insertarAlInicio(info);
        else{
            NodoD<T> x=this.cabeza;
            NodoD<T> y=x;
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
                y.setSig(new NodoD<T>(info, x, y));
                x.setAnt(y.getSig());
                this.tamanio++;
                }
            }
    }
    public boolean esVacia(){ return(cabeza==cabeza.getSig() || this.getTamanio()==0); }
    public int getTamanio(){ return (this.tamanio); }
}
class NodoD<T> {
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
