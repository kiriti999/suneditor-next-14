/* eslint-disable import/no-anonymous-default-export */
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
const algoliasearch = require('algoliasearch')


// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['POST', 'GET'],
    })
)

export default async (req, res) => {
    await cors(req, res)

    // Connect and authenticate with your Algolia app
    const client = algoliasearch('TL06Y8XHFY', process.env.ALGOLIA_ADMIN_KEY)

    // Create a new index and add a record
    const index = client.initIndex('courses')

    const record = {
        "objectID": "9839b20b-d45c-4c93-ba52-81d53839feb2",
        "title": "The Python Mega Course: Build 10 Real World Applications",
        "overview": "Go from a total beginner to a confident Python programmer\nCreate 10 real-world Python programs (no toy programs)\nStrengthen your skills with bonus practice activities throughout the course\nCreate an English Thesaurus app that returns definitions of English words\nCreate a personal website entirely in Python\nCreate a mobile app that improves your mood",
        "price": 15,
        "free": null,
        "published": true,
        "profilePhoto": "https://res.cloudinary.com/dev-empty/image/upload/v1611676955/c4rde6bgusmnuwoymfve.jpg",
        "coverPhoto": "https://res.cloudinary.com/dev-empty/image/upload/v1611676956/d4qbneh0yodvzbwl2fo1.jpg",
        "course_preview_img": null,
        "course_preview_video": "https://www.youtube.com/watch?v=N3AkSS5hXMA",
        "duration": "15 Hours",
        "lessons": "15",
        "access": null,
        "category": "Python",
        "userId": "135e5f26-7c1f-45fe-bca9-5e650be02a46",
        "createdAt": "2021-01-26T16:02:39.510Z",
        "updatedAt": "2021-01-26T16:02:39.510Z",
        "user": {
            "name": "SkillaroTheme",
            "profilePhoto": null
        },
        "enrolled_courses": [
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            },
            {
                "courseId": "9839b20b-d45c-4c93-ba52-81d53839feb2"
            }
        ]
    }

    index.saveObject(record).wait()

    // Search the index and print the results
    index
        .search('The Complete Digital Marketing')
        .then(({ hits }) => console.log(hits[0]))

    res.send('success')


}