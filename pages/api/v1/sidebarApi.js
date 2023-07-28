import api from "./axiosBlogApiConfig";


export const SidebarAPI = {
    getPopular: async function () {
        const response = await api.request({
            url: `/popular`,
            method: 'GET'
        });

        // returning the data returned by the API
        console.log('SidebarAPI:: getPopular:: response: ', response?.data);
        return response?.data || []
    },
}