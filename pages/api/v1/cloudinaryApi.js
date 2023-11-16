import api from "@/axios/axiosConfig";

export const CloudinaryAPI = {
    upload: async function (formData) {
        const response = await api.request({
            url: '/cloudinary/upload',
            method: 'POST',
            data: formData,
            withCredentials: false
        });
        console.log('CloudinaryAPI:: upload:: response: ', response?.data);
        return response?.data || [];
    },

    // Implement AWS lambda to delete from cloudinary
    delete: async function (id) {
        const response = await api.request({
            url: `/cloudinary?deleteID=${id}`,
            method: 'DELETE',
            withCredentials: false
        });
        console.log('CloudinaryAPI:: delete:: response: ', response?.data);
        return response?.data || [];
    },
}