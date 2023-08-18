import React from 'react'
import Head from "next/head"
import Router from 'next/router'
import GoTop from './GoTop'
import Navbar from './Navbar'
import Footer from './Footer'
import Preloader from './Preloader'
import CookieConsent from "react-cookie-consent";
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, user }) => {
    const [loader, setLoader] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    Router.events.on('routeChangeStart', () => {
        setLoader(true)
    })
    Router.events.on('routeChangeComplete', () => {
        setLoader(false)
    })
    Router.events.on('routeChangeError', () => {
        setLoader(false)
    })

    const isStudent = user && user.role === 'student'
    const isAdmin = user && user.role === 'admin'
    const isTeacher = user && user.role === 'teacher'


    return (
        <>
            <Head>
                <title>whatsnxt edu - Online skill development and learning provider</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="whatsnxt edu - Online skill development and learning provider" />
                <meta name="og:title" property="og:title" content="whatsnxt edu - Online skill development and learning provider"></meta>
                <meta name="twitter:card" content="whatsnxt edu - Online skill development and learning provider"></meta>
                <link rel="canonical" href="https://whatsnxt-react.envytheme.com/"></link>
            </Head>

            {loader && <Preloader />}

            
            <Navbar user={user} />

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <Footer />

            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* TO-DO: Add Hindi and Telugu language and add videos in languages accordingly */}
            {/* <RtlSidebar /> */}
            
            <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
        </>
    );
}

export default Layout;
