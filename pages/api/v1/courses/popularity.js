import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import {
    courses as Course, enroled_courses as Enroled_courses,
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
        // const enrolled = await Course.findAll({
        //     include: [{
        //         model: Enroled_courses,
        //         as: 'enroled_courses',
        //         attributes: [
        //             'courseId',
        //             [Sequelize.fn('COUNT', Sequelize.col('courseId')), 'count'],
        //         ],
        //     }],
        //     group: ['Enroled_courses.courseId'],
        //     limit: req.query.limit || 10
        // })
        // res.send({ enrolled })

        // const enrolled = await Course.findAll({
        //     include: [{
        //         model: Enroled_courses,
        //         as: 'enroled_courses',
        //     }],
        //     limit: req.query.limit || 10
        // })
        // res.send({ enrolled })

    const enrolled = await Enroled_courses.findAll({
        attributes: [
            'courseId',
            [Sequelize.fn('COUNT', Sequelize.col('courseId')), 'count'],
        ],
        group: ['Enroled_courses.courseId'],
        order: [[Sequelize.col("count"), "DESC"]],
        limit: req.query.limit || 10,
    })
    res.send({ enrolled })
    } catch (error) {
        console.log(error)
    }
}