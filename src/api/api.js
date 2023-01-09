import ENV from '../../env'

export const API = {
    async getAberturas() {
        const response = await fetch(ENV.API.GET_ABERTURAS)
        const data = response.json()
        return data
    },

    async getTerminaciones() {
        const response = await fetch(ENV.API.GET_TERMINACIONES)
        const data = response.json()
        return data
    },

    async getEquipamiento() {
        const response = await fetch(ENV.API.GET_EQUIPAMIENTO)
        const data = response.json()
        return data
    }
}