import axios from 'axios'
onmessage = async function (data) {
    const workerData = data?.data;
    console.log('worker.js:: onmessage:: workerData:', workerData);
    const formData = new FormData();
    for (const key in workerData) {
        if (workerData.hasOwnProperty(key)) {
            formData.append(key, workerData[key]);
        }
    }
    const response = await axios.post(process.env.CLOUDINARY_VIDEO_URL, formData);
    const cloudinaryData = response.data;
    return cloudinaryData;
};

