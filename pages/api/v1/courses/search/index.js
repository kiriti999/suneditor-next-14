/* eslint-disable import/no-anonymous-default-export */
import { getAlgoliaIndex } from './getAlgoliaIndex';
const index = getAlgoliaIndex();

/**
 * @desc This function is used to add algolia search to SearchForm component.
 * @param {*} req
 */
export default async (req) => {
    const query = req;
    try {
        const results = await searchIndexedPost(query);
        results && console.log(results?.hits);
        return results?.hits;
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
    console.log('')
    const results = await index.search(title);
    return results;
}