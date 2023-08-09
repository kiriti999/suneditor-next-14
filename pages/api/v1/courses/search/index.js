import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware';

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
export default async (req) => {
    const query = req;
    console.log("query: ", query)

    try {
        const results = await searchIndexedPost(query);
        results && console.log(results.hits);
        return results.hits;
    } catch (error) {
        console.error(error);
    }
}

async function searchIndexedPost(title) {
    const client = algoliasearch("9SA5PPC1N4", "183f7ddb740690df8b6fe7cd82008198")
    const index = client.initIndex('courses');
    if (title.length > 3) {
        const results = await index.search(title);
        return results;
    }
}