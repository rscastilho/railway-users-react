import axios from 'axios'

const webApi = axios.create({
    //baseURL: 'https://user-auth-api.up.railway.app/api/'
    baseURL: 'https://railwayusers-production.up.railway.app/api/'

    //https://railwayusers-production.up.railway.app/
})

export default webApi