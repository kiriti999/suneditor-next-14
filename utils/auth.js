import cookie from 'js-cookie'
import Router from 'next/router'
import { axiosApi } from "../utils/baseUrl";
import axios from 'axios'

export const handleLogin = (token) => {
    setLoginCookie(token)
}

export const setLoginCookie = (token) => {
    cookie.set('token', token, { sameSite: 'strict' });
}

export const redirectUser = (ctx, location) => {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end()
    } else {
        Router.push(location) // you there?
    }
}

export const handleLogout = () => {
    console.log('logout called')
    cookie.remove('token')
    Router.push('/')
}

export const fetchUser = async (token) => {
    try {
        const payload = { headers: { Authorization: token } };
        const url = `${axiosApi.baseUrl}/api/v1/account`;
        const response = await axios.get(url, payload);
        return response.data;
    } catch (error) {
        console.log('auth.js:: fetchUser:: error: ', error);
    }

}
