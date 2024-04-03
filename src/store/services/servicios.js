import SEED from "../routes/routes";

/*----------------------------------------------------- Estructuras Lineales ------------------------------------------------------------------- */
//Obtiene el analisis de las secuencias
export const getAnalisis_SEC = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.SECUENCIAS)).text();
}

//Obtiene el analisis de las listas simples
export const getAnalisis_LS = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.LISTAS_SIMPLES)).text();
}

//Obtiene el analisis de las listas dobles
export const getAnalisis_LD = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.LISTAS_DOBLES)).text();
}

//Obtiene el analisis de las listas circulares simples
export const getAnalisis_LCS = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.LISTA_CIRCULARES_SIMPLES)).text();
}

//Obtiene el analisis de las listas circulares dobles
export const getAnalisis_LCD = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.LISTA_CIRCULARES_DOBLES)).text();
}

//Obtiene el analisis de las pilas
export const getAnalisis_PILAS = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.PILAS)).text();
}

//Obtiene el analisis de las colas
export const getAnalisis_COLAS = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.COLAS)).text();
}

//Obtiene el analisis de las colas prioritarias
export const getAnalisis_COLASP = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.COLAS_PRIORITARIAS)).text();
}

//Obtiene el analisis de los hash
export const getAnalisis_HASH = async () => {
    return await (await fetch(SEED.ESTRUCTURAS_LINEALES.HASH)).text();
}
/*----------------------------------------------------- Estructuras Lineales ------------------------------------------------------------------- */



/*----------------------------------------------------- Arboles Binarios ------------------------------------------------------------------- */
//Obtiene el analisis de los arboles binarios
export const getAnalisis_AB = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_BINARIO)).text();
}

//Obtiene el analisis de los arboles binarios de busqueda
export const getAnalisis_ABB = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_BINARIO_BUSQUEDA)).text();
}

//Obtiene el analisis de los arboles avl
export const getAnalisis_AVL = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_AVL)).text();
}

//Obtiene el analisis de los arboles rojo y negro
export const getAnalisis_ARN = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_ROJO_NEGRO)).text();
}

//Obtiene el analisis de los arboles splay
export const getAnalisis_ASPLAY = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_SPLAY)).text();
}

//Obtiene el analisis de los arboles splay
export const getAnalisis_AHEAP = async () => {
    return await (await fetch(SEED.ARBOLES_BINARIOS.ARBOL_HEAP)).text();
}
/*----------------------------------------------------- Arboles Binarios ------------------------------------------------------------------- */



/*----------------------------------------------------- Arboles Enearios ------------------------------------------------------------------- */
//Obtiene el analisis de los arboles enearios
export const getAnalisis_AE = async () => {
    return await (await fetch(SEED.ARBOLES_ENEARIOS.ARBOL_ENEARIO)).text();
}

//Obtiene el analisis de los digrafos
export const getAnalisis_DIGRAFO = async () => {
    return await (await fetch(SEED.ARBOLES_ENEARIOS.DIGRAFO)).text();
}

//Obtiene el analisis de los grafos (dirigido y no dirigido)
export const getAnalisis_G_D_ND = async () => {
    return await (await fetch(SEED.ARBOLES_ENEARIOS.GRAFO_D_ND)).text();
}
/*----------------------------------------------------- Arboles Enearios ------------------------------------------------------------------- */