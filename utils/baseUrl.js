const version = 'api/v1/'
const baseUrl = process.env.NODE_ENV === "production"
? 'https://skillaro.in'
: `http://localhost:3000/${version}`;

export default baseUrl;