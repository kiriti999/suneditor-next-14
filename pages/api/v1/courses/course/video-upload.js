/* eslint-disable import/no-anonymous-default-export */
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware';
import api from "@/axios/axiosConfig";

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

export default async (req, res) => {
    const {order, name, description, courseId, videoUrl}  = req.body;
    await cors(req, res)
    try {
        const response = await api.request({
            url: `/courses/course/video-upload`,
            method: 'POST',
            data: {order, name, description, courseId, videoUrl} 
        });
        console.log('video-upload.js:: response: ', response?.data);
        res.status(200).json(response?.data);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}