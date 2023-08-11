import algoliasearch from "algoliasearch/lite";

/**
 * @desc This function is used to add algolia search to SearchForm component.
 * @param {*} req
 */
export default async (req) => {
    const query = req;

    try {
        const results = await searchIndexedPost(query);
        results && console.log(results.hits);
        return results.hits;
    } catch (error) {
        console.error(error);
    }
}

/**
 * @desc This function is used to send request to Algolia API and get response...
 * @param {*} title 
 * @returns 
 */
async function searchIndexedPost(title) {
    const client = algoliasearch("9SA5PPC1N4", "183f7ddb740690df8b6fe7cd82008198")
    const index = client.initIndex('courses');
    const results = await index.search(title);
    return results;
}