/* eslint-disable import/no-anonymous-default-export */
const algoliasearch = require('algoliasearch');

export async function indexPost(post) {
    try {
        console.log('addToAlgolia.js:: indexPost:: post:', post);

        // Connect and authenticate with your Algolia app
        const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY)

        // Create a new index and add a record
        const index = client.initIndex('courses')

        const record = {
            "objectID": post._id,
            "title": post.title,
            "overview": post.overview,
            "price": post.price,
            "free": null,
            "published": true,
            "profilePhoto": post.profilePhoto,
            "coverPhoto": post.coverPhoto,
            "course_preview_img": null,
            "course_preview_video": "",
            "duration": post.duration,
            "lessons": post.lessons,
            "access": null,
            "category":post.category,
            "userId": post.userId,
            "createdAt": post.createdAt,
            "updatedAt": post.updatedAt
        };

        const algoliaResponse = await index.saveObject(record);
        console.log('addToAlgolia.js:: algoliaResponse: ', algoliaResponse)
    } catch (error) {
        console.log('addToAlgolia.js:: error: ', error);
    }

}

