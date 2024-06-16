public class NodoP<T> extends NodoD<T> {
    private int pri;
    public NodoP(){
        super();
        this.pri=0;
    }
    public NodoP(T info, NodoP<T> sig, NodoP<T> ant, int p){
        super(info,sig, ant);
        this.pri=p;
    }
    @Override
    public T getInfo(){ return super.getInfo(); }
    @Override
    public NodoP<T> getSig(){ return ((NodoP<T>)super.getSig()); }
    public void setSig(NodoP<T> nuevo){ super.setSig(nuevo); }
    public int getPrioridad(){ return (this.pri); }
    @Override
    public String toString(){ return (this.getInfo()+"_"+this.getPrioridad()); }
}