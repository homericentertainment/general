import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    'https://api.example.com/'
    : 'http://localhost:3030/'


var axios = Axios.create({
    withCredentials: true
})

export const server = {
    get(endpoint, data, signal = null) {
        return serverCall(endpoint, 'GET', data, signal)
    },
    post(endpoint, data, signal = null) {
        return serverCall(endpoint, 'POST', data, signal)
    },
    put(endpoint, data, signal = null) {
        return serverCall(endpoint, 'PUT', data, signal)
    },
    delete(endpoint, data, signal = null) {
        return serverCall(endpoint, 'DELETE', data, signal)
    },
}

async function serverCall(endpoint, method = 'GET', data = null, signal = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data: method === 'GET' ? data : null,
            params: method === 'GET' ? data : null,
            signal
        })
        return res.data
    }
    catch (err) {
        throw err
    }
}
