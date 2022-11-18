import axios from 'axios'

const webApi = axios.create({
    baseURL: 'https://user-auth-api.up.railway.app/api/'
})

export default webApi