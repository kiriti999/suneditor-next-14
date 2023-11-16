import { CloudinaryAPI } from '../pages/api/v1/cloudinaryApi';

export async function getBase64(file, cb) {
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => cb(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file)
    })
}

export const getImageAsData = (file) => new Promise((resolve, reject) => {
    getBase64(file, (base64Image) => {
        resolve(base64Image);
        reject('image-upload:: getImageAsData:: promise reject: unable to return image data');
    })
});

export async function uploadToCloudinary(image) {
    const formData = new FormData();
    formData.set('file', image);
    return await CloudinaryAPI.upload(formData);
}


export const deleteCloudinaryImage = async (payload) => {
    const deleteResult = await CloudinaryAPI.delete(payload.public_id);
    console.log('image-upload.js:: deleteCloudinaryImage:: deleteResult:', deleteResult);
    return deleteResult;
}