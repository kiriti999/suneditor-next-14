import cookie from 'js-cookie'
import Router from 'next/router'

export const handleLogin = (token) => {
    console.log('login called');
    cookie.set('token', token, {sameSite: 'None'});
    Router.push('/');
}

export const redirectUser = (ctx, location) => {
    if(ctx.req){
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end()
    } else {
        Router.push(location)
    }
}

export const handleLogout = () => {
    console.log('logout called')
    cookie.remove('token')
    Router.push('/')
}