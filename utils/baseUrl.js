const baseUrl = process.env.NODE_ENV === "production"
? 'https://skillaro.in'
: 'http://localhost:3000';

export default baseUrl;