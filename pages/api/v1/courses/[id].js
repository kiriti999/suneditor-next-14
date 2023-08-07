import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware';
import api from "@/axios/axiosConfig";

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    await cors(req, res)
    if (!("authorization" in req.headers)) {
        return res.status(401).json({ message: "No authorization token" });
    }

    const { id } = req.query

    try {
        const response = await api.request({
            url: `/courses/course?id=${id}`,
            method: 'GET',
        });
        console.log('search id.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}