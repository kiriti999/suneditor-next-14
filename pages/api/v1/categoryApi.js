import api from "@/axios/axiosBlogApiConfig";

export const CategoryAPI = {
    getCategories: async function () {
        const response = await api.request({
            url: `/categories`,
            method: 'GET'
        });

        // returning the data returned by the API
        console.log('CategoryAPI:: getCategories:: response: ', response?.data);
        return response?.data || []
    },
    getArticleCountByCategory: async function () {
        const response = await api.request({
            url: `/articleCountByCategory`,
            method: 'GET'
        });

        // returning the data returned by the API
        console.log('CategoryAPI:: articleCountByCategory:: response: ', response?.data);
        return response?.data || []
    },
}