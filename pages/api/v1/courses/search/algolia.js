/* eslint-disable import/no-anonymous-default-export */
const algoliasearch = require('algoliasearch');

export async function indexPost(post) {
    try {
        console.log('algolia.js:: indexPost:: post:', post);

        // Connect and authenticate with your Algolia app
        const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY)

        // Create a new index and add a record
        const index = client.initIndex('courses')

        const record = {
            "objectID": post._id,
            "title": post.title,
            "overview": post.overview,
            "topics": post.topics,
            "video_course_price": post.video_course_price,
            "live_training_price": post.live_training_price,
            "purchaseCount": post.purchaseCount,
            "free": null,
            "rating": post.rating,
            "published": true,
            "profilePhoto": post.profilePhoto,
            "coverPhoto": post.coverPhoto,
            "course_preview_img": null,
            "course_preview_video": "",
            "duration": post.duration,
            "lessons": post.lessons,
            "access": null,
            "categoryName": post.categoryName,
            "userId": post.userId,
            "createdAt": post.createdAt,
            "updatedAt": post.updatedAt
        };

        const algoliaResponse = await index.saveObject(record);
        console.log('algolia.js:: algoliaResponse: ', algoliaResponse)
    } catch (error) {
        console.log('algolia.js:: error: ', error);
    }

}

export async function deleteIndex(id) {
    try {
        console.log('algolia.js:: deleteIndex:: id:', id);

        // Connect and authenticate with your Algolia app
        const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY)

        // Create a new index and add a record
        const index = client.initIndex('courses');

        const algoliaResponse = await index.deleteObject(id);
        console.log('algolia.js:: deleteIndex:: algoliaResponse: ', algoliaResponse)
    } catch (error) {
        console.log('algolia.js:: error: ', error);
    }
}


