public class Secuencia<T>
{
    public static void main(String[] args) {
        Secuencia<Integer> secuencia = new Secuencia<Integer>(5);

        secuencia.insertar(1);
        secuencia.insertar(8);

        secuencia.get(1);
        secuencia.esta(8);
        secuencia.getTamanio();
        secuencia.getCapacidad();

        System.out.println(secuencia);
    }

    private T vector[];   

    private int cant;      
    
    public Secuencia(int n){        
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

    public T get(int i){        
        if (i<0 || i>this.cant){
            System.err.println("Indíce fuera de rango!");
            return (null);
        }
        else
        return (this.vector[i]);
    }

    public boolean esta(T elem){        
        for(int i=0;i<this.cant;i++)
            if(this.vector[i].equals(elem))
                return true;
            return false;
    }


    public int getTamanio(){
        return this.cant;
    }
    
    public boolean esVacia(){
        return(this.cant==0);
    }

    public int getCapacidad(){
        return (this.vector.length);
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
