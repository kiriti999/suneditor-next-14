/* eslint-disable import/no-anonymous-default-export */
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { 
    enroled_courses as Enroled_courses
} from '@/models/index'

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
    const { id } = req.query

    try {
        const response = await api.request({
            url: `/course/video-upload`,
            method: 'POST',
            data: {id} 
        });
        console.log('enrolled id.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}