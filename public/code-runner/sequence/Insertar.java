public class Insertar<T>
{       
    public static void main(String[] args) {
        Insertar<Integer> secuencia = new Insertar<Integer>(5);

        secuencia.insertar(1);
        secuencia.insertar(2);
        secuencia.insertar(3);
        secuencia.insertar(4);
        secuencia.insertar(5);

        System.out.println(secuencia);
    }

    private T vector[];   
    private int cant;      
    
    public Insertar(int n){        
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