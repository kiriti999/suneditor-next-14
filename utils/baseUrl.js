const version = 'api/v1/'
const baseUrl = process.env.NODE_ENV === "production"
? 'https://api.whatsnxt.in'
// ? 'http://13.127.90.41:3000'
: `http://localhost:3001`;

export default baseUrl;