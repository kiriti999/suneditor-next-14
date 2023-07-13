/* eslint-disable import/no-anonymous-default-export */
import api from '../../../../axiosConfigs'
import Cors from 'cors'
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
    if (!("authorization" in req.headers)) {
        return res.status(401).json({ message: "No authorization token" });
    }
    switch (req.method) {
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}

const handlePostRequest = async (req, res) => {
    const { currentPassword, newPassword, newConfirmPassword } = req.body
    try {
        const response = await api.request({
            url: `/account/new`,
            method: 'POST',
            data: { currentPassword, newPassword, newConfirmPassword }
        });
        console.log('handlePostRequest:: response: ', response?.data);
        res.status(200).json({ "message": "Successfully posted the profile!" })
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "Invalid token" });
    }
}

const handlePutRequest = async (req, res) => {
    const { name, designation, location, description } = req.body;
    try {
        const response = await api.request({
            url: `/account/new`,
            method: 'PUT',
            data: { name, designation, location, description }
        });
        console.log('handlePutRequest:: response: ', response?.data);
        res.status(200).json({ "message": "Successfully updated the profile!" })
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "Invalid token" });
    }
}

const handleGetRequest = async (req, res) => {
    try {
        const response = await api.request({
            url: `/account`,
            method: 'GET'
        });
        console.log('handleGetRequest:: response: ', response?.data);
        res.status(200).json(response?.data.user);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "Invalid token" });
    }
}