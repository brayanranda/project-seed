public class Editar<T>
{       

    public static void main(String[] args) {
        Editar<Integer> secuencia = new Editar<Integer>(5);
        
        secuencia.insertar(1);
        secuencia.insertar(2);

        secuencia.set(0, 8);
        secuencia.set(1, 7);
        System.out.println(secuencia);
    }

    private T vector[];   

    private int cant;      
    
    public Editar(int n){        
        if (n<=0){
            System.err.println("Tamaño de secuencia no valido!");
            return;
        }    
        Object r[]=new Object[n];
        cant=0;
        this.vector=(T[])r;
    }

    public void insertar(T elem){        
        if(this.cant>=this.vector.length)
            System.err.println("No hay más espacio!");
        else
        this.vector[this.cant++]=elem;
    }

    public void set(int i, T nuevo){        
        if (i<0 || i>this.cant){
            System.err.println("Indíce fuera de rango!");
            return;
        }
        if(nuevo==null){
            System.err.println("No se pueden ingresar datos nulos!");
            return;
        }
        this.vector[i]=nuevo;
    }

    
    public boolean esVacia(){
        return(this.cant==0);
    }

    @Override
    public String toString(){
        if(this.esVacia())
            return "Secuencia vacia!";
        String msg="Secuencia -> | ";
        for(int i=0;i<this.cant;i++)
            msg+=this.vector[i].toString()+" | ";
        return (msg);
    }

}