import java.util.Iterator;
public class ArbolBMas <T> extends ArbolB{
    private Pagina<T> vsam;
    public ArbolBMas(){
         super();
         this.vsam=super.getRaiz();
    }
    public ArbolBMas(int n){
         super(n);
         this.vsam=super.getRaiz();
    }
    public Pagina<T> getVsam() {
        return vsam;
    }
    private Pagina crearPagina(int n,T x){
        Pagina p= new Pagina(n);
        inicializar(p);
        p.setCont(1);
        p.getInfo()[0]=(x);
        return p;
    }
    private void inicializar(Pagina p){
        int i =0;
        p.setCont(0);
        while(i < super.getM1())
            p.getApuntadores()[i++] = null;
    }
    public boolean insertarBMas(T x){
        Pila pila= new Pila();
        T []subir= (T[]) new Object[1];
        T []subir1= (T[]) new Object[1];
        int posicion=0, i=0, terminar, separar;
        Pagina p = null, nuevo=null, nuevo1=null;
        if(super.getRaiz()==null){ 
            super.setRaiz(this.crearPagina(super.getN(),x));
            vsam=super.getRaiz();
            return (true);
        }               
        else{
            posicion= buscar(super.getRaiz(),x, pila);
            if(posicion==-1)
                return (false);
            else{
                terminar=separar=0;
                while((!pila.esVacia())&&(terminar==0)){
                    p= (Pagina)pila.desapilar();
                    if(p.getCont()==super.getM()){
                        if(separar==0){
                            nuevo=romper(p,null,x,subir,separar);
                            separar=1;
                        }
                    else{
                        nuevo1=romper(p,nuevo,subir[0],subir1,separar);
                        subir[0]=subir1[0];
                        nuevo=nuevo1;
                    }
                  }
                    else{
                        if(separar==1){
                            separar=0;
                            i=donde(p,subir[0]);
                            i=insertar(p, subir[0],i);
                            super.cderechaApunt(p,i+1);
                            p.getApuntadores()[i+1]= nuevo;

                        }
                        else   
                            posicion=insertar(p,x,posicion);
                        terminar=1;
                    }
                }
                if((separar==1)&&(terminar==0)){
                    this.setRaiz(this.crearPagina(super.getN(),subir[0]));
                    super.getRaiz().getApuntadores()[0]=p;
                    super.getRaiz().getApuntadores()[1]=nuevo;
                }
            }
        }
        return true;
    }
    private int insertar(Pagina p, T x, int i){
        int j ;
        if(p.getCont()!=0){
        int compara=((Comparable)p.getInfo()[i]).compareTo(x);
        if(compara<0){
            i++;
        }
        else{
            j=p.getCont()-1;
            while(j>=i){
                        p.getInfo()[j+1]=p.getInfo()[j];
                        j=j-1;
            }
        }                
        }
        p.getInfo()[i]= x;
        p.setCont(p.getCont()+1);
        return i;
    }
    private Pagina romper(Pagina p, Pagina t, T x, T[] subir, int separar){
        T[] a= (T[]) new Object[super.getM1()];
        int i = 0;
        boolean s= false;
        Pagina []b= new Pagina[super.getM1()+1];
        Pagina temp=null;
        
        if(separar==0){
            temp=p.getApuntadores()[super.getM()];
            p.getApuntadores()[super.getM()]=null;
        }
        
        while((i<super.getM())&&(!s)){
            int compara=((Comparable)p.getInfo()[i]).compareTo(x);
            if(compara<0){ //<-- X es mayor que el dato del arbol
                a[i]= (T) p.getInfo()[i];
                b[i]=p.getApuntadores()[i];
                p.getApuntadores()[i++]=null;
            }
            else
                s=true;
        }
        a[i]=x;
        b[i]=p.getApuntadores()[i];
        p.getApuntadores()[i]=null;
        b[++i]=t;
        
        while((i <= super.getM())){
            a[i]=(T)( p.getInfo()[i-1]);
            b[i+1]=p.getApuntadores()[i];
            p.getApuntadores()[i++]=null;
        }
        
        Pagina q= new Pagina(super.getN());
        inicializar(q);
        i=0;
        if(separar==0){
            p.setCont(super.getN());
            q.setCont(super.getN()+1);
            q.getInfo()[0]=a[super.getN()];
            
            while(i<super.getN()){
                p.getInfo()[i]=a[i];
                p.getApuntadores()[i]=b[i];
                q.getInfo()[i+1]=a[i+super.getN()+1];
                q.getApuntadores()[i]=b[i+super.getN()+1];
                i++;
            }
            q.getApuntadores()[super.getM()]=temp;
            p.getApuntadores()[super.getM()]=q;
        }
        else{
            p.setCont(super.getN());q.setCont(super.getN());
            
            while(i < super.getN()){
                p.getInfo()[i]= a[i];
                p.getApuntadores()[i]=b[i];
                q.getInfo()[i]=a[i+super.getN()+1];
                q.getApuntadores()[i]=b[i+super.getN()+1];
                i++;
            }
        }
        p.getApuntadores()[super.getN()]=b[super.getN()];
        q.getApuntadores()[super.getN()]=b[super.getM1()];
        subir[0]= a[super.getN()];
        return q;
    }

}
class ArbolB <T>{
    private int n; 
    private int m; 
    private int m1;
    private Pagina raiz;
    public ArbolB(){this.raiz = null;this.n=2;this.m=n*2;this.m1= (this.m)+1;}
    public ArbolB(int n){
        if (n<=0){System.err.println("Tamano del orden del arbol no es válido");return;}
        this.raiz = null;this.n=n;this.m=n*2;this.m1= (this.m)+1;
    }
    private Pagina crearPagina(T x){
        Pagina p= new Pagina(n);
        inicializar(p);
        p.setCont(1);
        p.getInfo()[0]= x;
        return (p);
    }
    private void inicializar(Pagina p){
        int i =0;
        p.setCont(0);
        while(i < this.m1)
            p.getApuntadores()[i++] = null;
    }
    public boolean insertar(T x){
        Pila<Pagina> pila= new Pila<Pagina>();
        T []subir= (T[]) new Object[1];
        T []subir1= (T[]) new Object[1];
        int posicion=0, i=0, terminar, separar;
        Pagina p = null, nuevo=null, nuevo1;
        if(this.raiz==null){ 
            this.raiz=this.crearPagina(x);
        }
        else{
            posicion= buscar(this.raiz,x, pila);
            if(posicion==-1)
                return (false);
            else{
                terminar=separar=0;
                while((!pila.esVacia()) && (terminar==0)){
                    p= pila.desapilar();
                    if(p.getCont()==this.m){
                        if(separar==0){
                            nuevo=romper(p,null,x,subir);
                            separar=1;
                        }
                    else{
                        nuevo1=romper(p,nuevo,subir[0],subir1);
                        subir[0]=subir1[0];
                        nuevo=nuevo1;
                    }
                  }
                    else{
                        if(separar==1){
                            separar=0;
                            i=donde(p,subir[0]);
                            i=insertar(p, subir[0],i);
                            cderechaApunt(p,i+1);
                            p.getApuntadores()[i+1]= nuevo;

                        }
                        else{   
                            posicion=insertar(p,x,posicion);
                        }
                        terminar=1;
                    }
                }
                if((separar==1)&&(terminar==0)){
                    this.setRaiz(this.crearPagina(subir[0]));
                    this.raiz.getApuntadores()[0]=p;
                    this.raiz.getApuntadores()[1]=nuevo;
                }
            }
        }
        return (true);
    }
    private int insertar(Pagina p, T x, int i){
        int j ;
        if(p.getCont()!=0){
        int compara=((Comparable)p.getInfo()[i]).compareTo(x);
        if(compara<0)
            i++;
        else{
            j=p.getCont()-1;
            while(j>=i){
                    p.getInfo()[j+1] = p.getInfo()[j];
                    j=j-1;
            }
        }
        }
        p.setCont(p.getCont()+1);
        p.getInfo()[i]= x;          
        return (i);
    }
    private int buscar(Pagina p,T x, Pila pila){
        int i=-1,posicion;
        boolean encontro= false;
        posicion=-1;
        while((p!=null)&&!(encontro)){
            pila.apilar(p);
            i=0;
            int compara=((Comparable)p.getInfo()[i]).compareTo(x);
            while((compara<0)&&(i<(p.getCont()-1))){
                i++;
                compara=((Comparable)p.getInfo()[i]).compareTo(x);
            }
            if((compara>0))
                p=p.getApuntadores()[i];
            else{
                if(compara<0)
                    p=p.getApuntadores()[i+1];
                else
                    encontro=true;
            }
        }
        if(!encontro)
            posicion=i;
        return (posicion);
    }

}
class Pila<T> {
    private Nodo<T> tope; 
    private int tamanio;  
    public Pila(){this.tope = null;this.tamanio = 0;}
    public boolean esVacia() {return(this.tope==null||this.tamanio==0);}
    public T desapilar(){
        if(this.esVacia())
            return (null);
        Nodo<T> x=this.tope;
        this.tope = tope.getSig();     
        this.tamanio--;
        if(tamanio==0)
            this.tope=null;
        return(x.getInfo());
    }
}
class Nodo<T>{
    private T info;
    private Nodo<T> sig;
    public Nodo(){this.info=null;this.sig=null;}
    public Nodo(T info, Nodo<T> sig){this.info=info;this.sig=sig;}
    protected T getInfo(){return this.info;}
    protected Nodo<T> getSig(){return this.sig;}
    protected void setInfo(T nuevo){this.info=nuevo;}
    protected void setSig(Nodo<T> nuevo){this.sig=nuevo;}
}
public class Pagina <T>{
    private int n;
    private int m;
    private int m1;
    private int cont;
    private T[] info;
    private Pagina[] apuntadores;
    public Pagina(int n){
        this.n = n;
        this.m = n*2;
        this.m1 = this.m+1;
        this.info= (T[]) new Object[m];
        for(int i=0; i<info.length;i++)
            info[i]=null;
        this.apuntadores = new Pagina[this.m1];
        for(int i=0; i<apuntadores.length;i++)
            apuntadores[i]=null;
    }
    public int getN() {
        return n;
    }
    public int getCont() {
        return cont;
    }
    public T[] getInfo() {
        return info;
    }
    public int getM() {
        return m;
    }
    public int getM1() {
        return m1;
    }
    public Pagina[] getApuntadores() {
        return apuntadores;
    }
    public void setN(int n) {
        this.n = n;
    }
    public void setCont(int cont) {
        this.cont = cont;
    }
    public void setApuntadores(Pagina[] apuntadores) {
        this.apuntadores = apuntadores;
    }
    public void setInfo(T[] info) {
        this.info = info;
    }
}