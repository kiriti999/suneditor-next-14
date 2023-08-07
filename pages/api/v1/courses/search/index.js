import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware';
import api from "@/axios/axiosConfig";
const algoliasearch = require('algoliasearch');

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
    const { q } = req.query;

    try {
        const hits = await searchIndexedPost(q);
        console.log('hits ', hits[0]);
        res.status(200).json(hits[0]);
    } catch (error) {
        console.error(error)
        res.status(403).json({ message: "error" });
    }
}

async function searchIndexedPost(title) {
    console.log('pages/courses/search:: searchIndexedPost:: title: ', title);
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY)
    const index = client.initIndex('courses');
    if (title.length > 3) {
        // Search the index and print the results
        const hits = await index.search(title);
        return hits;
    }
}