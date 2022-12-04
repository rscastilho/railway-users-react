import webApi from './webApi';

export const getAllUsers = async (itensPerPage, page) => {
    try {
        const result = await webApi.get(`users?itensPerPage=${itensPerPage}&page=${page}`);
        return result.data;
    } catch (error) {
        return error;
    }
};
