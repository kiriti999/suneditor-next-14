export const axiosApi = {
    baseUrl: process.env.NODE_ENV === "production" ? 'https://api.whatsnxt.in' : `https://api.whatsnxt.in`,
    blogApiBaseUrl: process.env.NODE_ENV === "production" ? 'https://blogapi.whatsnxt.in' : `https://blogapi.whatsnxt.in`
}