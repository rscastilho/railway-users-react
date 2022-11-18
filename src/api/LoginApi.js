import webApi from "./webApi"

const LoginApi = async (dataLogin) => {
    try {
        const result = await webApi.post('/login', dataLogin)
        return result.data
    } catch (error) {
        return error.response.data
    }
}

export default LoginApi