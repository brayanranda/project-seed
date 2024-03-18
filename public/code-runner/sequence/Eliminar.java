public class Secuencia<T>
{       

    public static void main(String[] args) {
        Secuencia<Integer> secuencia = new Secuencia<Integer>(5);

        secuencia.insertar(1);
        secuencia.insertar(2);

        secuencia.eliminar(0);
        secuencia.eliminar(1);

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

    public void eliminar(T elem){     
        boolean e = false;
        for( int i=0, j=0; i<this.cant; i++){
            if(!this.vector[i].equals(elem)){
                this.vector[j]=vector[i];
                j++;
            }else{
                e=true;
                this.vector[j]=null;
            }
        }
        if(e)
        this.cant--;
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