import webApi from "./webApi"

const LoginApi = async (dataLogin) => {
    try {
        const result = await webApi.post('/login', dataLogin)
        console.log('resultado api',result)
        return result
    } catch (error) {
        return error.response
    }
}

export default LoginApi