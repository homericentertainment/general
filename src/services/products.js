import { server } from './http'
const route = 'products/'

export const productService = {
    getProducts,
}

async function getProducts(params, signal) {
    const products = await server.get(route + 'catalogue', params, signal)
    return products
}