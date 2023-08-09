export const axiosApi = {
    baseUrl: process.env.NODE_ENV != "production" ? 'https://api.whatsnxt.in' : `http://localhost:3001`,
    blogApiBaseUrl: process.env.NODE_ENV != "production" ? 'https://blogapi.whatsnxt.in' : `http://localhost:3333/api/blog`
}