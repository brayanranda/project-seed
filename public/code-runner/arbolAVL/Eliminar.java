import java.util.Iterator;
import java.lang.Comparable;

public class ArbolAVL<T extends Comparable<T>> extends ArbolBinarioBusqueda<T> {
    public static void main(String[] args) {
        ArbolAVL<Integer> arbol = new ArbolAVL<>();
        arbol.insertar(5);
        arbol.insertar(3);
        arbol.insertar(7);
        arbol.eliminar(3);
    }

    public ArbolAVL() { super(); }

    public ArbolAVL(T r) { super.setRaiz(new NodoAVL<>(r)); }

    private int getAlturaNodo(NodoAVL<T> r) {
        if (r == null) return -1;
        return r.getAltura();
    }

    private void setBalance(NodoAVL<T> r) {
        if (r != null) r.setBal(getAlturaNodo(r.getDer()) - getAlturaNodo(r.getIzq()));
    }

    @Override
    public boolean eliminar(T dato) {
        if(this.esVacio() || !this.esta(dato))
            return (false);
        return(eliminarAVL((NodoAVL<T>)super.getRaiz(),dato));
    }
    private boolean eliminarAVL(NodoAVL<T> p, T q) {
        int comp = ((Comparable)p.getInfo()).compareTo(q);
        if(comp==0)
            return(eliminaAVL(p));
        if(comp>0)
            return (eliminarAVL(p.getIzq(),q));
        else 
            return (eliminarAVL(p.getDer(),q));
    }
    private boolean eliminaAVL(NodoAVL<T> q){
        NodoAVL<T> s;
        //Si el Nodo es una hoja
        if(q.getIzq()==null || q.getDer()==null){        
            //Si el Nodo es la raiz
            if(q.getPadre()==null){
                if(q.getIzq()!=null){
                    q.getIzq().setPadre(null);
                    this.setRaiz(q.getIzq());
                }else{
                    if(q.getDer()!=null){
                        q.getDer().setPadre(null);
                        this.setRaiz(q.getDer());
                    }else
                        setRaiz(null);
                }
                return (true);
            }
            s = q;
        }
        else{
            // Se recupera el hijo sucesor al Nodo
            s = getSucesor(q);
            q.setInfo(s.getInfo());
        }
        NodoAVL<T> p;
        if(s.getIzq()!=null){
            p = s.getIzq();
        } 
        else{
            p = s.getDer();
        }
        if(p!=null){
            p.setPadre(s.getPadre());
        }
        if(s.getPadre()==null){
            this.setRaiz(p);
        }else{
            if(s==s.getPadre().getIzq()){
                s.getPadre().setIzq(p);
            }
            else{
                s.getPadre().setDer(p);
            }
            // Se realiza el balanceo del Arbol
            balancear(s.getPadre());        
        }
        s = null;
        return (true);
    }
    private NodoAVL<T> getSucesor(NodoAVL<T> q) {
        if(q.getDer()!=null){
            NodoAVL<T> r = q.getDer();
            while(r.getIzq()!=null){
                r = r.getIzq();
            }
            return r;
        } 
        else{
            NodoAVL<T> p = q.getPadre();
            while(p!=null && q==p.getDer()){
                q = p;
                p = q.getPadre();
            }
            return p;
        }
    }
    private void balancear(NodoAVL<T> r) {
        setBalance(r);
        int balance = r.getBal();
        if (balance == -2) {
            if (getAlturaNodo(r.getIzq().getIzq()) >= getAlturaNodo(r.getIzq().getDer())) {
                r = rotacionDerecha(r);
            } else {
                r = dobleRotacionIzqDer(r);
            }
        } else if (balance == 2) {
            if (getAlturaNodo(r.getDer().getDer()) >= getAlturaNodo(r.getDer().getIzq())) {
                r = rotacionIzquierda(r);
            } else {
                r = dobleRotacionDerIzq(r);
            }
        }
        if (r.getPadre() != null) {
            balancear(r.getPadre());
        } else {
            this.setRaiz(r);
        }
    }

    @Override
    public boolean insertar(T nuevo) {
        NodoAVL<T> n = new NodoAVL<>(nuevo);
        return insertaAVL((NodoAVL<T>) super.getRaiz(), n);
    }

    private boolean insertaAVL(NodoAVL<T> p, NodoAVL<T> q) {
        if (this.esVacio()) {
            setRaiz(q);
            return true;
        }
        int comp = q.getInfo().compareTo(p.getInfo());
        if (comp == 0) return false;
        if (comp < 0) {
            if (p.getIzq() == null) {
                p.setIzq(q);
                q.setPadre(p);
                balancear(p);
                return true;
            } else {
                return insertaAVL(p.getIzq(), q);
            }
        } else {
            if (p.getDer() == null) {
                p.setDer(q);
                q.setPadre(p);
                balancear(p);
                return true;
            } else {
                return insertaAVL(p.getDer(), q);
            }
        }
    }

    private NodoAVL<T> rotacionDerecha(NodoAVL<T> r) {
        NodoAVL<T> izq = r.getIzq();
        r.setIzq(izq.getDer());
        if (izq.getDer() != null) izq.getDer().setPadre(r);
        izq.setDer(r);
        izq.setPadre(r.getPadre());
        r.setPadre(izq);
        if (izq.getPadre() != null) {
            if (izq.getPadre().getIzq() == r) {
                izq.getPadre().setIzq(izq);
            } else {
                izq.getPadre().setDer(izq);
            }
        }
        setBalance(r);
        setBalance(izq);
        return izq;
    }

    private NodoAVL<T> rotacionIzquierda(NodoAVL<T> r) {
        NodoAVL<T> der = r.getDer();
        r.setDer(der.getIzq());
        if (der.getIzq() != null) der.getIzq().setPadre(r);
        der.setIzq(r);
        der.setPadre(r.getPadre());
        r.setPadre(der);
        if (der.getPadre() != null) {
            if (der.getPadre().getIzq() == r) {
                der.getPadre().setIzq(der);
            } else {
                der.getPadre().setDer(der);
            }
        }
        setBalance(r);
        setBalance(der);
        return der;
    }

    private NodoAVL<T> dobleRotacionIzqDer(NodoAVL<T> r) {
        r.setIzq(rotacionIzquierda(r.getIzq()));
        return rotacionDerecha(r);
    }

    private NodoAVL<T> dobleRotacionDerIzq(NodoAVL<T> r) {
        r.setDer(rotacionDerecha(r.getDer()));
        return rotacionIzquierda(r);
    }
}

class NodoAVL<T> extends NodoBin<T> {
    private int altura;
    private int balance;
    private NodoAVL<T> padre;

    public NodoAVL(T info) {
        super(info);
        this.altura = 0;
        this.balance = 0;
    }

    public int getAltura() { return altura; }
    public void setAltura(int altura) { this.altura = altura; }
    public int getBal() { return balance; }
    public void setBal(int balance) { this.balance = balance; }
    public NodoAVL<T> getPadre() { return padre; }
    public void setPadre(NodoAVL<T> padre) { this.padre = padre; }
    @Override public NodoAVL<T> getIzq() { return (NodoAVL<T>) super.getIzq(); }
    @Override public NodoAVL<T> getDer() { return (NodoAVL<T>) super.getDer(); }
    public void setIzq(NodoAVL<T> izq) { super.setIzq(izq); }
    public void setDer(NodoAVL<T> der) { super.setDer(der); }
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
    private T info;
    private NodoBin<T> izq, der;

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
