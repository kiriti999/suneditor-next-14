import axios from 'axios';
import { axiosApi } from '../utils/baseUrl'

// initializing the axios instance with custom configs
export const api = axios.create({
    // withCredentials: true,
    baseURL: axiosApi.baseUrl,
});


// defining a custom error handler for all APIs
const errorHandler = async (error) => {
    const statusCodes = [400, 401, 409, 406, 500];
    const statusCode = error.response?.status
    try {
        // logging only errors that are not 401
        if (statusCode && statusCode !== 401) {
            // console.error(`axiosConfig.ts:: errorHandler:: message: ${JSON.stringify(error.response?.data?.message)} code: ${statusCode}`);
        }

        if (statusCode === 401 || statusCode === 404) {
            // console.error(`axiosConfig.ts:: 401-404-errorHandler:: message: ${error.response.statusText} code: ${statusCode}`);
            throw new Error('unauthorized');
        }

        if (statusCodes.includes(statusCode)) {
            console.log(JSON.stringify(error.response?.data?.message))
        }

        return Promise.reject(error)
    } catch (error) {
        // console.log(`axiosConfig.ts:: errorHandler:: message: ${error}`);
    }

}

// registering the custom error handler to the "api" axios instance
api.interceptors.response.use(undefined, (error) => errorHandler(error))


export default api;