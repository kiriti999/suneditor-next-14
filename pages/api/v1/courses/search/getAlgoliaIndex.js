const algoliasearch = require('algoliasearch');

export const getAlgoliaIndex = () => {
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY);
    if (process.env.NODE_ENV === 'production') {
        return client.initIndex('courses');
    } else {
        return client.initIndex('courses-local');
    }
}
