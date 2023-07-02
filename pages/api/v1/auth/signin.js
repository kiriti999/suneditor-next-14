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
    const { email, password } = req.body;
    try {
        const response = await api.request({
            url: `/login`,
            method: 'POST',
            data: { email, password }
        });
        console.log('signin.js:: response: ', response?.data);
        res.status(200).json(response?.data.user);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "Invalid token" });
    }
}