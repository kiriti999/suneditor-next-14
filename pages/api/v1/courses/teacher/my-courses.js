/* eslint-disable import/no-anonymous-default-export */
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import api from "../../@/axios/axiosConfig";

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

async (req, res) => {
    await cors(req, res)
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    try {
        const response = await api.request({
            url: `/courses/teacher/my-courses`,
            method: 'POST',
            data: { userId }
        });
        console.log('id.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}