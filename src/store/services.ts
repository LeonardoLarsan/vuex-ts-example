import gatoInterface from './models/Gato'

export default {
    async getGatos() {
        return [
            {
                nombre: 'Tiberiuz',
                edad: 8,
                raza: 'siames'
            },
            {
                nombre: 'Etreuz',
                edad: 6,
                raza: 'siames'
            },
            {
                nombre: 'Silvestre',
                edad: 9,
                raza: 'callejero'
            },
        ]
    }
}