import jwt from 'jsonwebtoken'
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { enrolled_courses as Enrolled_courses } from '@/models/index'

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
    if(!("authorization" in req.headers)){
        return res.status(401).json({message: "No authorization token"});
    }
    const { paymentData } = req.body
    // console.log(req.body)

    try {
        const {userId} = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        await Enrolled_courses.create({
            payment_email: paymentData.email,
            cost: paymentData.stripeTotal,
            userId: userId,
            courseId: paymentData.courseId
        })
        res.send("Enrolled successful!")
    } catch (error) {
        console.error(error)
        res.send("Error processing charge")
    }
}