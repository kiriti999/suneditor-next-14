/* eslint-disable import/no-anonymous-default-export */
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

export default async (req, res) => {
    await cors(req, res)
    let { as_teacher_apply, as_teacher_req_desc, number } = req.body;
    try {
        const response = await api.request({
            url: `/user`,
            method: 'POST',
            data: { as_teacher_apply, as_teacher_req_desc, number }
        });
        console.log('signup.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "Invalid token" });
    }

}