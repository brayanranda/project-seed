import java.util.Iterator;
public class ArbolSplay<T> extends ArbolBinarioBusqueda <T> {
    public static void main(String[] args) {
        ArbolSplay<Integer> arbol = new ArbolSplay<>();
        int[] elementos = {10, 20, 15, 25, 5, 1};
        for (int elemento : elementos) {
            arbol.insertar(elemento);
        }
        arbol.imprime();
        System.out.printLn(arbol.buscarASC(15));
    }
    public ArbolSplay() {
         super();
    }
    public ArbolSplay(T raiz) {
         super(raiz);
    }
    @Override
    public boolean insertar(T dato){
         //Si el arbol se encuentra vacio
         if (esVacio()) {
             super.setRaiz(new NodoBin<T>(dato));
             return (true);
         }        
         super.setRaiz(buscarAS(dato));
         int cmp = ((Comparable)dato).compareTo(super.getRaiz().getInfo());        
         // Si el dato es menor a la raiz
         if (cmp < 0) {
             NodoBin<T> n = new NodoBin<T>(dato);
             n.setIzq(super.getRaiz().getIzq());
             n.setDer(super.getRaiz());
             super.getRaiz().setIzq(null);
             super.setRaiz(n);
             return (true);
         }
         // Si el dato es mayor a la raiz
         else if (cmp > 0) {
             NodoBin<T> n = new NodoBin<T>(dato);
             n.setDer(super.getRaiz().getDer());
             n.setIzq(super.getRaiz());
             super.getRaiz().setDer(null);
             super.setRaiz(n);
             return (true);
         }
         return (false);
    }
    private NodoBin<T> buscarAS(T dato){
        if(esVacio())
            return (null);
        return (biselar(super.getRaiz(), dato));
    }
    private NodoBin<T> biselar(NodoBin<T> r, T dato) {
        if (r == null) 
            return (null);
        int cmp1 = ((Comparable)dato).compareTo(r.getInfo());
        //Si el dato es menor a la raiz
        if (cmp1<0){
            if (r.getIzq() == null) {
                return (r);
            }
            int cmp2 = ((Comparable)dato).compareTo(r.getIzq().getInfo());
            //Si es dato es menor que el hijo
            if (cmp2<0){
                r.getIzq().setIzq(biselar(r.getIzq().getIzq(),dato));
                r = rDerecha(r);
            }
            //Si el dato es mayor que el hijo
            else if (cmp2>0) {
                r.getIzq().setDer(biselar(r.getIzq().getDer(), dato));
                if (r.getIzq().getDer()!= null)
                    r.setIzq(rIzquierda(r.getIzq()));
            }            
            if (r.getIzq()== null) 
                return (r);
            else
                return (rDerecha(r));
        }
        //El dato es menor a la raiz
        else if (cmp1>0) { 
            // dato not in tree, so we're done
            if (r.getDer() == null) {
                return (r);
            }
            int cmp2 = ((Comparable)dato).compareTo(r.getDer().getInfo());
            //Si el dato es menor que el hijo
            if (cmp2<0){
                r.getDer().setIzq(biselar(r.getDer().getIzq(), dato));
                if (r.getDer().getIzq() != null)
                    r.setDer(rDerecha(r.getDer()));
            }
            //Si el dato es mayor que el hijo
            else if (cmp2>0) {
                r.getDer().setDer(biselar(r.getDer().getDer(), dato));
                r = rIzquierda(r);
            }
            if (r.getDer()==null) 
                return (r);
            else  
                return (rIzquierda(r));
        }
        else return (r);
    }
    private NodoBin<T> rDerecha(NodoBin<T> r) {
        NodoBin<T> x = r.getIzq();
        r.setIzq(x.getDer());
        x.setDer(r);
        return x;
    }
    private NodoBin<T> rIzquierda(NodoBin<T> r) {
        NodoBin<T> x = r.getDer();
        r.setDer(x.getIzq());
        x.setIzq(r);
        return x;
    }
    @Override
    public void imprime(){
        System.out.println(" ----- Arbol Splay ----- ");
        imprimeAS(super.getRaiz());
    }
    public void imprimeAS(NodoBin<T> n) {
        int l = 0;
        int r = 0;
        if(n==null)
            return;
        if(n.getIzq()!=null) {
         l = Integer.parseInt(n.getIzq().getInfo().toString());
        }
        if(n.getDer()!=null) {
         r = Integer.parseInt(n.getDer().getInfo().toString());
        }       
        System.out.println("NodoIzq: "+l+"\t Info: "+n.getInfo()+"\t NodoDer: "+r);
        if(n.getIzq()!=null) {
         imprimeAS(n.getIzq());
        }
        if(n.getDer()!=null) {
         imprimeAS(n.getDer());
        }
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
    public ArbolBinario() { this.raiz = null; }
    public ArbolBinario(T raiz) { this.raiz = new NodoBin<>(raiz); }
    public NodoBin<T> getRaiz() { return raiz; }
    public void setRaiz(NodoBin<T> raiz) { this.raiz = raiz; }
    public boolean esVacio() { return raiz == null; }
}

class NodoBin<T> {
    private T info;private NodoBin<T> izq, der;
    public NodoBin() { this.info = null; this.der = null; this.izq = null; }
    public NodoBin(T x, NodoBin<T> i, NodoBin<T> d) { this.info = x; this.izq = i; this.der = d; }
    public NodoBin(T x) { this.info = x; this.izq = this.der = null; }
    public T getInfo() { return this.info; }
    public NodoBin<T> getIzq() { return this.izq; }
    public NodoBin<T> getDer() { return this.der; }
    public void setInfo(T info) { this.info = info; }
    public void setIzq(NodoBin<T> i) { this.izq = i; }
    public void setDer(NodoBin<T> d) { this.der = d; }
}