import java.util.Iterator;
public class ArbolRojiNegro<T> extends ArbolBinarioBusqueda<T>{
    public static void main(String[] args) {
        ArbolRojiNegro<Integer> arbol = new ArbolRojiNegro<>();
        int[] elementos = {10, 20, 30, 15, 25, 5, 1};
        for (int elemento : elementos) {
            arbol.insertar(elemento);
        }
        arbol.imprime();
        arbol.eliminar(20);
        arbol.imprime();
    }
    private NodoRN<T> nulo;
    public ArbolRojiNegro() {
        super();
        nulo = new NodoRN<T>();
        nulo.setInfo(null);
        nulo.setPadre(nulo);
        nulo.setIzq(nulo);
        nulo.setDer(nulo);
        nulo.setColor(1);
     }
    public ArbolRojiNegro(T r) {
         super.setRaiz(new NodoRN<T>(r));
    }
    @Override
    public boolean insertar(T dato){    
        
         //Insertarlo como en ABB y con color 0.
         NodoRN<T> z = new NodoRN<T>(dato, nulo, nulo, nulo);
         //codigo del PDF
            NodoRN<T> y = nulo;
            NodoRN<T> x = (NodoRN<T>) super.getRaiz();
            while (x!=null && x.getInfo()!=null) {
                y = x;
                int compara=((Comparable)z.getInfo()).compareTo(x.getInfo());
                if (compara<0)
                    x = x.getIzq();
                else
                    x = x.getDer();
            }
            z.setPadre(y);
            if (y.getInfo() == null)
                super.setRaiz(z);
            else{
                int compara=((Comparable)z.getInfo()).compareTo(y.getInfo());
                if (compara<0)
                        y.setIzq(z);
                    else
                        y.setDer(z);
            }       
            z.setIzq(nulo);
            z.setDer(nulo);            
            z.setColor(0);
            corregirInsercion(z);         
         return (true);
    }
    private void corregirInsercion(NodoRN<T> z) {
        NodoRN<T> y;
        while (z.getPadre().getColor() == 0){
            if (z.getPadre() == z.getPadre().getPadre().getIzq()) {
                 y = z.getPadre().getPadre().getDer();
                if (y.getColor()==0) {
                    z.getPadre().setColor(1);
                    y.setColor(1);
                    z.getPadre().getPadre().setColor(0);
                    z = z.getPadre().getPadre();
                } 
                else {
                    if (z == z.getPadre().getDer()) {
                        z = z.getPadre();
                        rotarIzq(z);
                    }
                    z.getPadre().setColor(1);
                    z.getPadre().getPadre().setColor(0);
                    rotarDer(z.getPadre().getPadre());
                }
            } 
            else {
                y = z.getPadre().getPadre().getIzq();
                if (y.getColor()==0) {
                    z.getPadre().setColor(1);
                    y.setColor(1);
                    z.getPadre().getPadre().setColor(0);
                    z = z.getPadre().getPadre();
                } 
                else {
                    if (z == z.getPadre().getIzq()) {
                        z = z.getPadre();
                        rotarDer(z);
                    }
                    z.getPadre().setColor(1);
                    z.getPadre().getPadre().setColor(0);
                    rotarIzq(z.getPadre().getPadre());
                    }
            }
        }
        ((NodoRN<T>)super.getRaiz()).setColor(1);
    }
    public void  rotarDer(NodoRN<T> t) {
        NodoRN<T> t2 = t.getIzq();
        t.setIzq(t2.getDer());
        t2.getDer().setPadre(t);
        t2.setPadre(t.getPadre());
        if (t.getPadre().getInfo()==null){
            super.setRaiz(t2);
            t2.setPadre(nulo);
        }
        else{
            if (t==t.getPadre().getIzq())
                t.getPadre().setIzq(t2);
            else
                t.getPadre().setDer(t2);
        }
        t2.setDer(t);
        t.setPadre(t2);
    }
    public void rotarIzq(NodoRN<T> t) {
        NodoRN<T> t2= t.getDer();
        t.setDer(t2.getIzq());
        t2.getIzq().setPadre(t);
        t2.setPadre(t.getPadre());
        if (t.getPadre().getInfo()==null){
            super.setRaiz(t2);
            t2.setPadre(nulo);
        }
        else{
            if (t==t.getPadre().getIzq())
                t.getPadre().setIzq(t2);
            else
                t.getPadre().setDer(t2);
        }
        t2.setIzq(t);
        t.setPadre(t2);
    }
    private NodoRN<T> buscarRN(NodoRN<T> r, T info){
        if(r==null || r.getInfo()==null)
            return (nulo);
        if(r.getInfo().equals(info))
            return r;
        else
        {
            NodoRN<T> aux = ((r.getIzq().getInfo()==null)) ? nulo : buscarRN(r.getIzq(),info);
            if(aux!=nulo && aux.getInfo()!=null)
                return (aux);
            else
                return ((r.getDer().getInfo()==null)) ? nulo : buscarRN(r.getDer(),info);
        }
    }
    @Override
    public boolean eliminar(T x){
         NodoRN<T> n = buscarRN((NodoRN<T>)super.getRaiz(),x);   
         if(n==nulo || n.getInfo()==null)
             return (false); //No encontrado
         eliminarRN(n);
         return (true);
    }
    public NodoRN<T> eliminarRN(NodoRN<T> z){
        NodoRN<T> x,y;
        if (z.getIzq().getInfo()!=null && z.getDer().getInfo()!=null)
            y=getMayor(z.getIzq());//también sirve buscarMin(z.getDer())
        else
            y=z;
        if (y.getIzq().getInfo()!=null)
            x = y.getIzq();
        else
            x = y.getDer();
        x.setPadre(y.getPadre());
        if (y.getPadre().getInfo()==null)
            super.setRaiz(x);
        else{
                if (y == y.getPadre().getIzq())
                    y.getPadre().setIzq(x);
                else
                    y.getPadre().setDer(x);
        }
        if (y.getInfo()!=z.getInfo())
            z.setInfo(y.getInfo()); //copiar datos adicionales si aplica
        if (y.getColor()==1)
            corregirBorrado(x);
        return (y);
    }
    private void corregirBorrado(NodoRN<T> x) {
        NodoRN<T> w;
        NodoRN<T> padre;
        while (x!=((NodoRN<T>)super.getRaiz()) && x.getColor()==1){
            if (x == x.getPadre().getIzq()) {
                w = x.getPadre().getDer();
                if (w.getColor() == 0) {
                    w.setColor(1);
                    x.getPadre().setColor(0);
                    this.rotarIzq(x.getPadre());
                    w = x.getPadre().getDer();
                }
                if (w.getIzq().getColor()==1 && w.getDer().getColor()==1) {
                    w.setColor(0);
                    x = x.getPadre();
                }
                else {
                    padre = x.getPadre();
                    if (w.getDer().getColor()==1) {
                        w.getIzq().setColor(1);
                        w.setColor(0);
                        this.rotarDer(w);
                        w = padre.getDer();
                    }
                    w.setColor(padre.getColor());
                    padre.setColor(1);
                    w.getDer().setColor(1);                    
                    this.rotarIzq(padre);
                    x = ((NodoRN<T>) super.getRaiz());
                }
            } 
            else {
            //lo mismo, pero intercambiando izq y der
                w = x.getPadre().getIzq();
                if (w.getColor() == 0) {
                    w.setColor(1);
                    x.getPadre().setColor(0);
                    this.rotarDer(x.getPadre());
                    w = x.getPadre().getIzq();
                }
                if (w.getDer().getColor() == 1 && w.getIzq().getColor() == 1) {
                    w.setColor(0);
                    x = x.getPadre();
                } else {
                    padre = x.getPadre();
                    if (w.getIzq().getColor() == 1) {
                        w.getDer().setColor(1);
                        w.setColor(0);
                        this.rotarIzq(w);
                        w = padre.getIzq();
                    }
                    w.setColor(padre.getColor());
                    padre.setColor(1);
                    w.getIzq().setColor(1);
                    this.rotarDer(padre);
                    x = ((NodoRN<T>) super.getRaiz());
            }
            }            
        }
        x.setColor(1);
    }
    @Override
    public void imprime(){
        this.imprimeRN((NodoRN<T>) getRaiz());
    }
    public void imprimeRN(NodoRN<T> n) {
        int l = -1;
        int r = -1;
        int p = -1;
        if(n.getIzq()!=nulo) {
            l = Integer.parseInt(n.getIzq().getInfo().toString());
        }
        if(n.getDer()!=nulo) {
            r = Integer.parseInt(n.getDer().getInfo().toString());
        }
        if(n.getPadre()!=nulo) {
            p = Integer.parseInt(n.getPadre().getInfo().toString());
        }        
        System.out.println("Izquierdo: "+l+" Info: "+n.getInfo()+" Derecha: "+r+" Padre: "+p+" Color: "+n.getColor()+"\n");
        if(n.getIzq()!=nulo) {
            imprimeRN(n.getIzq());
        }
        if(n.getDer()!=nulo) {
            imprimeRN(n.getDer());
        }
    }

}
class NodoRN<T> extends NodoBin<T>{
    private NodoRN<T> padre;
    private int color;
    public NodoRN() {
        super();
        this.padre=null;
        this.color=0;
    }
    public NodoRN(T x, NodoRN<T> i, NodoRN<T> d, NodoRN<T> p) {
        super(x,i,d);
        this.padre=p;
        this.color=0;
    }
    public NodoRN(T x) {
        super(x);
        this.padre=null;
        this.color=0;
    }
    @Override
    public T getInfo() {
        return ((T)super.getInfo());
    }
    public NodoRN<T> getPadre() {
        return this.padre;
    }
    @Override
    public NodoRN<T> getIzq() {
        return ((NodoRN<T>)super.getIzq());
    }
    @Override
    public NodoRN<T> getDer() {
          return ((NodoRN<T>)super.getDer());
    }
    public int getColor() {
        return color;
    }
    @Override
    public void setInfo(T info) {
       super.setInfo(info);
    }
    public void setPadre(NodoRN<T> p) {
        this.padre=p;
    }
    public void setIzq(NodoRN<T> i) {
       super.setIzq(i);
    }
    public void setDer(NodoRN<T> d) {
        super.setDer(d);
    }
    public void setColor(int color){
        this.color = color;
    }
    @Override
    public String toString() {
        return "info"+super.getInfo()+ " padre=" + padre + ", color=" + color + '}';
    }
}
class ArbolBinarioBusqueda<T extends Comparable<T>> extends ArbolBinario<T> {
    public ArbolBinarioBusqueda() { super(); }
    public ArbolBinarioBusqueda(T raiz) { super(raiz); }
    @Override public NodoBin<T> getRaiz() { return super.getRaiz(); }

    private boolean esta(NodoBin<T> r, T x) {
        if (r == null || r.getInfo() == null) return false;
        int compara = r.getInfo().compareTo(x);
        if (compara > 0) return esta(r.getIzq(), x);
        else if (compara < 0) return esta(r.getDer(), x);
        else return true;
    }

    public boolean esta(T x) { return esta(getRaiz(), x); }

    public boolean insertar(T dato) {
        NodoBin<T> rr = this.esta(dato) ? null : insertar(this.getRaiz(), dato);
        if (rr != null) this.setRaiz(rr);
        return (rr != null);
    }

    private NodoBin<T> insertar(NodoBin<T> r, T dato) {
        if (r == null || r.getInfo() == null) return new NodoBin<>(dato, null, null);
        int compara = r.getInfo().compareTo(dato);
        if (compara > 0) r.setIzq(insertar(r.getIzq(), dato));
        else if (compara < 0) r.setDer(insertar(r.getDer(), dato));
        else System.err.println("Error dato duplicado: " + dato.toString());
        return r;
    }
}
class ArbolBinario<T> {
    private NodoBin<T> raiz;
    public ArbolBinario(){this.raiz=null;}
    public ArbolBinario(T raiz) {this.raiz = new NodoBin(raiz);}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
}
class NodoBin<T>{
    private T info;private NodoBin<T> izq;private NodoBin<T> der;
    public NodoBin() {this.info=null;this.der=null;this.izq=null;}
    public NodoBin(T x, NodoBin<T> i, NodoBin<T> d) {this.info=x;this.izq=i;this.der=d;}
    public NodoBin(T x){this.info=x;this.izq=this.der=null;}
    public T getInfo(){return this.info;}public NodoBin<T> getIzq() {return this.izq;}public NodoBin<T> getDer() {return this.der;}public void setInfo(T info) {this.info=info;}
    public void setIzq(NodoBin<T> i) {this.izq=i;}public void setDer(NodoBin<T> d) {this.der=d;}
}