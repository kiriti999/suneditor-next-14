export const axiosApi = {
    baseUrl: process.env.NODE_ENV === "production" ? 'https://api.whatsnxt.in' : `http://localhost:4444`,
    blogApiBaseUrl: process.env.NODE_ENV === "production" ? 'https://blogapi.whatsnxt.in/api/blog' : `http://localhost:3333/api/blog`
}