public class ArbolBinarioBusqueda<T extends Comparable<T>> extends ArbolBinario<T> {
    public static void main(String[] args) {
        ArbolBinarioBusqueda<Integer> arbol = new ArbolBinarioBusqueda<>(null);
        arbol.insertar(5);
        arbol.insertar(3);
        arbol.eliminar(5);
        System.out.println(arbol.esta(5)); // false
    }
    public ArbolBinarioBusqueda() {super();}
    public ArbolBinarioBusqueda(T raiz) {super(raiz);}
    @Override public NodoBin<T> getRaiz() {return super.getRaiz();}
    private boolean esta(NodoBin<T> r, T x) {
        if (r == null || r.getInfo() == null) return false;
        int compara = r.getInfo().compareTo(x);
        if (compara > 0) return esta(r.getIzq(), x);
        else if (compara < 0) return esta(r.getDer(), x);
        else return true;
    }
    public boolean esta(T x) {return esta(getRaiz(), x);}
    public boolean insertar(T dato) {
        if (esta(dato)) return false;
        setRaiz(insertar(getRaiz(), dato));
        return true;
    }
    private NodoBin<T> insertar(NodoBin<T> r, T dato) {
        if (r == null || r.getInfo() == null) return new NodoBin<>(dato);
        int compara = r.getInfo().compareTo(dato);
        if (compara > 0) r.setIzq(insertar(r.getIzq(), dato));
        else if (compara < 0) r.setDer(insertar(r.getDer(), dato));
        else System.err.println("Error: dato duplicado: " + dato);
        return r;
    }
    public boolean eliminar(T x) {
        if (!esta(x)) return false;
        setRaiz(eliminarABB(getRaiz(), x));
        return true;
    }
    private NodoBin<T> eliminarABB(NodoBin<T> r, T x) {
        if (r == null) return null;
        int compara = r.getInfo().compareTo(x);
        if (compara > 0) r.setIzq(eliminarABB(r.getIzq(), x));
        else if (compara < 0) r.setDer(eliminarABB(r.getDer(), x));
        else {
            if (r.getIzq() != null && r.getDer() != null) {
                NodoBin<T> sucesor = masIzquierda(r.getDer());
                r.setInfo(sucesor.getInfo());
                r.setDer(eliminarABB(r.getDer(), sucesor.getInfo()));
            } else r = (r.getIzq() != null) ? r.getIzq() : r.getDer();
        }
        return r;
    }
    private NodoBin<T> masIzquierda(NodoBin<T> r) {
        while (r != null && r.getIzq() != null) r = r.getIzq();
        return r;
    }
}
class ArbolBinario<T> {
    private NodoBin<T> raiz;
    public ArbolBinario() {this.raiz = null;}
    public ArbolBinario(T raiz) {this.raiz = new NodoBin<>(raiz);}
    public NodoBin<T> getRaiz() {return raiz;}
    public void setRaiz(NodoBin<T> raiz) {this.raiz = raiz;}
}
class NodoBin<T> {
    private T info;
    private NodoBin<T> izq, der;
    public NodoBin(T info) {this.info = info; this.izq = this.der = null;}
    public T getInfo() {return info;}public void setInfo(T info) {this.info=info;}
    public NodoBin<T> getIzq() {return izq;}
    public void setIzq(NodoBin<T> izq) {this.izq = izq;}
    public NodoBin<T> getDer() {return der;}
    public void setDer(NodoBin<T> der) {this.der = der;}
}
