import { useState, useEffect } from 'react';
import { parseCookies, destroyCookie } from "nookies";
import { Provider } from "react-redux";
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import Layout from "../components/_App/Layout";
import { redirectUser, fetchUser } from "../utils/auth";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import 'react-18-image-lightbox/style.css';
import "swiper/css";
import "swiper/css/bundle";
import 'react-toastify/dist/ReactToastify.css';
import { wrapper } from '../store/store';

// Global Styles
import "../styles/style.css";
// Global Responsive Styles
import "../styles/responsive.scss";
// Global RTL Styles
import '../styles/rtl.css'
import FilterStore from "context/filterStore";

const MyApp = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	const router = useRouter();
    const [routeHistory, setRouteHistory] = useState([router.asPath]);

    useEffect(() => {
        const handleRouteChange = (url) => {
            const history = [...routeHistory, url];
            if (history.length >= 3) {
                const isRedirected = history[history.length - 2] === '/authentication';
                const next = history[history.length - 3];
                if (isRedirected) router.push(next);
            }

            setRouteHistory(history);
        }

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router, routeHistory]);

	// const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<SessionProvider session={pageProps.session}>
				<FilterStore>
					<Layout {...pageProps}>
						<Component {...pageProps} />
					</Layout>
				</FilterStore>
			</SessionProvider>
		</Provider>
	);
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
	const { token } = parseCookies(ctx);
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	if (!token && ctx.pathname === '/checkout') {
		redirectUser(ctx, '/checkout/public')
	}

	if (!token) {
		// if a user not logged in then user can't access those pages
		const isProtectedRoute =
			ctx.pathname === "/become-a-teacher" ||
			ctx.pathname === "/my-courses" ||
			ctx.pathname === "/teacher/courses" ||
			ctx.pathname === "/teacher/dashboard" ||
			ctx.pathname === "/teacher/courses/course-edit" ||
			ctx.pathname === "/teacher/course/upload-course-video";

		if (isProtectedRoute) {
			redirectUser(ctx, "/authentication");
		}
	} else {
		// if a user logged in then user can't access those pages
		const ifLoggedIn =
			ctx.pathname === "/authentication" ||
			ctx.pathname === "/reset-password";
		if (ifLoggedIn) {
			redirectUser(ctx, "/");
		}
		try {
			const user = await fetchUser(token);
			console.log('user ', user)

			// If user status disabled then user automatically logged out
			if (!user || !user.active) {
				destroyCookie(ctx, "token");
			}

			pageProps.user = user;
		} catch (error) {
			// console.error("Error getting current user", error);
			//invalid token
			destroyCookie(ctx, "token");
		}
	}

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		pageProps,
	};
};

// export default CustomApp;
export default wrapper.withRedux(MyApp);
