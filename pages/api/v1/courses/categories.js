import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import {
    courses as Course,
} from '@/models/index';
const Sequelize = require('sequelize');

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

    try {
        const categories = await Course.findAll({
            attributes: [
                'category',
                [Sequelize.fn('COUNT', Sequelize.col('category')), 'count'],
            ],
            group: ['Course.category']
        })
        res.send({ categories })
    } catch (error) {
        console.log(error)
    }
}