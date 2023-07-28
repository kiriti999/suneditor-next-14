import api from "../v1/axiosBlogApiConfig";

export const BlogAPI = {
    getPosts: async function (start, limit) {
        const response = await api.request({
            url: `/posts?start=${start}&limit=${limit}`,
            method: 'GET'
        });
        console.log('BlogAPI:: getPosts:: response: ', response?.data);
        return response?.data || []
    },
    getPostsById: async function (id) {
        const response = await api.request({
            url: `/post/${id}`,
            method: 'GET'
        });
        console.log('BlogAPI:: getPostsById:: response: ', response?.data);
        return response?.data || []
    },
    getPostsByCategory: async function (id) {
        const response = await api.request({
            url: `/posts/category/${id}`,
            method: 'GET'
        });
        console.log('BlogAPI:: getPostsByCategory:: response: ', response?.data);
        return response?.data || []
    }
}