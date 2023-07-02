/* eslint-disable import/no-anonymous-default-export */
import api from '../configs/axiosConfigs';
import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';


// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)


export default async (req, res) => {
    await cors(req, res)
    const { userId } = req.body
    try {
        const response = await api.request({
            url: `/apply/pending`,
            method: 'POST',
        });
        console.log('pending-requests.js:: response: ', response?.data);
        return response?.data || [];
    } catch (error) {
        console.log(error)
        res.send("Error! Try again")
    }
}