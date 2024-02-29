import Secuencia_4 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_4.jpg'
import Secuencia_5 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_5.jpg'
import Secuencia_6 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_6.jpg'
import Secuencia_7 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_7.jpg'
import Secuencia_8 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_8.jpg'
import Secuencia_9 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_9.jpg'
import { faPlus, faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'

export const operations = [
    {
        icon: faPlus,
        title: "Insertar",
        description: "Para esta operación solo basta con indicar el dato que se desea almacenar en la estructura y esta lo almacena consecutivamente en la posición acorde a la cantidad datos que posee la estrutura, teniendo en cuenta que no se desborde la capacidad de la Secuencia.",

        ejemplo: [
            {
                text: "Tenemos la Secuencia:",
                image: Secuencia_4,

            },
            {
                text: "Se desea insertar el número 25 a la secuencia.",
                image: Secuencia_5,

            },
            {
                text: "Simplemente se agrega el índice (número en la posición elementos almacenados menos uno).",
                image: Secuencia_6,

            }
        ]
    },
    {
        icon: faEdit,
        title: "Editar",
        description: "En esta operación solo basta con indicar el dato que se desea almacenar en la estructura e indicar la posición que se desea editar de la estructura, esta recorre la cantidad de datos almacenados hasta encontrar la posición de la estructura que se desea modificar y cambia el valor de la posición por el nuevo dato, teniendo en cuenta que la posicion exista y posea un dato almacenado en Secuencia."
    },
    {
        icon: faSearch,
        title: "Consultar Dato",
        description: "Se indica el dato que se desea consultar de la estructura, esta recorre la cantidad de datos almacenados hasta encontrar el dato que se está consultando, teniendo en cuenta que el dato se encuentre almacenado en la Secuencia."
    },
    {
        icon: faTrash,
        title: "Eliminar",
        description: "Se debe indicar el dato que se desea eliminar de la estructura, esta lo borra y consecutivamente de ser necesario reajusta las posiciones de los datos siguientes al dato eliminado, teniendo en cuenta que el dato se encuentre almacenado en la Secuencia.",

        ejemplo: [
            {
                text: "Tenemos la Secuencia y se desea eliminar el número 02 de la Secuencia:",
                image: Secuencia_7,

            },
            {
                text: "Al eliminarse el número 02 de la Secuencia automáticamente al poseer elementos posteriores al eliminado hace un corrimiento hacia la izquierda evitando dejar posiciones vacías entre los elementos que almacena la estructura.",
                image: Secuencia_8,

            },
            {
                text: "Manteniendo las propiedades de la Secuencia, la estructura queda de la siguiente manera:",
                image: Secuencia_9,

            }
        ]
    },
]