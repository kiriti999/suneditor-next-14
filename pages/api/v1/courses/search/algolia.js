import { getAlgoliaIndex } from './getAlgoliaIndex';
const index = getAlgoliaIndex();

export async function indexPost(post) {
    try {
        console.log('algolia.js:: indexPost:: post:', post);

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

        const algoliaResponse = await index.deleteObject(id);
        console.log('algolia.js:: deleteIndex:: algoliaResponse: ', algoliaResponse)
    } catch (error) {
        console.log('algolia.js:: error: ', error);
    }
}


