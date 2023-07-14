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

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    await cors(req, res)
    const {
        id,
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
            url: `/courses/course/update`,
            method: 'POST',
            data: {
                id,
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
        console.log('update.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}