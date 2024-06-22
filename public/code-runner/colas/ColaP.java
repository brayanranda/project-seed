public class ColaP<T> extends Cola<T> {
    public static void main(String[] args) {
        ColaP<Integer> colaP = new ColaP<Integer>();
        colaP.enColar(2, 3);
        System.out.println(colaP);
    }
    public ColaP(){super();super.setInicio(new NodoP<T>(null,null,null,0));NodoP<T> x = (NodoP<T>)super.getInicio();x.setSig(x);x.setAnt(x);}
    public void enColar(T info, int p){NodoP<T> nuevo=new NodoP<T>(info,null,null,p);
        if(this.esVacia()){
            NodoP<T> x = new NodoP<T>(info,(NodoP<T>)super.getInicio(),(NodoP<T>)super.getInicio().getAnt(),p);
            ((NodoP<T>)super.getInicio()).getAnt().setSig(x);((NodoP<T>)super.getInicio()).setAnt(x);
            this.aumentarTamanio();
        }
        else{
            if(((NodoP<T>)super.getInicio().getSig()).getPrioridad()<nuevo.getPrioridad()){
                nuevo.setSig(((NodoP<T>)super.getInicio()).getSig());
                ((NodoP<T>)super.getInicio()).getSig().setAnt(nuevo);((NodoP<T>)super.getInicio()).setSig(nuevo);
                nuevo.setAnt(((NodoP<T>)super.getInicio()));
                super.aumentarTamanio();
            }else{
                NodoP<T> c = ((NodoP<T>)super.getInicio()).getSig();
                boolean ins = false;
                while(c!=((NodoP<T>)super.getInicio()) && !ins){
                    if(c.getSig()!=((NodoP<T>)super.getInicio()) && c.getSig().getPrioridad()<nuevo.getPrioridad()){
                        nuevo.setSig(c.getSig());
                        c.getSig().setAnt(nuevo);c.setSig(nuevo);
                        nuevo.setAnt(c);super.aumentarTamanio();
                        ins = true;
                    }else{c = c.getSig();}
                }
                if(c == ((NodoP<T>)super.getInicio())){
                    NodoP<T> x = new NodoP<T>(info,(NodoP<T>)super.getInicio(),(NodoP<T>)super.getInicio().getAnt(),p);
                    ((NodoP<T>)super.getInicio()).getAnt().setSig(x);((NodoP<T>)super.getInicio()).setAnt(x);
                    this.aumentarTamanio();
                }
            }
        }
    }
    public boolean esVacia(){return(super.esVacia());}
}
class Cola<T> {
    private NodoD<T> inicio; private int tamanio;
    protected NodoD<T> getInicio(){ return this.inicio; }
    protected void aumentarTamanio() { this.tamanio++; }
    public int getTamanio(){ return(this.tamanio); }
    protected void setInicio(NodoD<T> ini){ this.inicio =  ini; }
    public boolean esVacia(){ return(this.getTamanio()==0); }
}
class NodoP<T> extends NodoD<T> {
    private int pri;
    public NodoP(){super();this.pri=0;}
    public NodoP(T info, NodoP<T> sig, NodoP<T> ant, int p){super(info,sig, ant);this.pri=p;}
    @Override public T getInfo(){return super.getInfo();}
    @Override public NodoP<T> getSig(){return ((NodoP<T>)super.getSig());}
    public void setSig(NodoP<T> nuevo){super.setSig(nuevo);}public int getPrioridad(){return (this.pri);}
    @Override public String toString(){return (this.getInfo()+"_"+this.getPrioridad());}
}
