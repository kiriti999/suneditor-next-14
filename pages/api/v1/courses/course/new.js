/* eslint-disable import/no-anonymous-default-export */
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'

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

    const {
        title,
        overview,
        price,
        published,
        duration,
        lessons,
        category,
        profile,
        cover,
        preview,
        course_preview_video
    } = req.body

    try {
        const response = await api.request({
            url: `/courses/course/new`,
            method: 'POST',
            data: {
                title,
                overview,
                price,
                published,
                duration,
                lessons,
                category,
                profile,
                cover,
                preview,
                course_preview_video
            }
        });
        console.log('new.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}
