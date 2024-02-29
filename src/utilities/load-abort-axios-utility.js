/**
 * Aborta peticiones de componentes que ya no existen o dejaron de existir
 * y el componente habia realizado una petición, para evitar el consumo de memory
 * @returns controller
 */

export const loadAbort = () => {
    const controller = new AbortController()
    return controller;
}