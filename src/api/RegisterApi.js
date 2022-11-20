import webApi from './webApi';


const RegisterApi = async (data) => {
    try {
        const result = await webApi.post('/users', data)
        return result
    } catch (error) {
        return error
    }
}

export default RegisterApi