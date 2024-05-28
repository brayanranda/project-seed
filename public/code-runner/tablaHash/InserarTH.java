public class InserarTH<Clave, T > {
    public static void main(String[] args) {
        InserarTH<Integer> insertarTh = new InserarTH<Integer>();

        // insertarTh.insertar(2);

        System.out.println(insertarTh);
    }

    private int numeroDatos;
    private int numeroSlots;
    private ListaCD<InformacionDeEntrada <Clave,T>> [ ] informacionEntrada;

    public InserarTH() {
        this.numeroDatos = 0;
        this.numeroSlots = 11;
        this.informacionEntrada = new ListaCD [this.numeroSlots ];
        this.inicializarListas( );
    }
    
    public T insertar( Clave clave, T objeto ) {
        int indice=0;
        InformacionDeEntrada<Clave,T> objetoAnterior=null;
        if(clave==null){
            throw new RuntimeException("La Clave de Objeto no puede ser vacia!!!");
        }
        else{
            indice =index(clave);
            objetoAnterior = this.registrarEntrada(indice, clave );
            if( objetoAnterior== null ){
                InformacionDeEntrada<Clave,T> nuevoObjeto = new InformacionDeEntrada( clave, objeto );
                this.informacionEntrada[ indice ].insertarAlFinal(nuevoObjeto);
                this.numeroDatos+=1;
                return nuevoObjeto.getObjeto();
            }
            else
                 objetoAnterior.setObjeto( objeto);
        }
            return (T)objetoAnterior.getObjeto();
    }

    private InformacionDeEntrada registrarEntrada( int indice, Clave clave ){
        InformacionDeEntrada<Clave,T> objeto = new InformacionDeEntrada( clave );
        ListaCD<InformacionDeEntrada<Clave,T>> listaEntradas = this.informacionEntrada[ indice ];
        int i=listaEntradas.getIndice(objeto);
        if(i==-1)
            objeto=null;
        else
            objeto = listaEntradas.get(i);
        return objeto;
    }

}
