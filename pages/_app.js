import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { Provider } from "react-redux";
import { useStore } from "../store";
import Layout from "../components/_App/Layout";
import { redirectUser } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
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

// Global Styles
import "../styles/style.css";
// Global Responsive Styles
import "../styles/responsive.css";
// Global RTL Styles
import '../styles/rtl.css'
import FilterStore from "context/filterStore";

const MyApp = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<FilterStore >
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</FilterStore>
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
			ctx.pathname === "/teacher/courses";

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
			const payload = { headers: { Authorization: token } };
			const url = `${axiosApi.baseUrl}/api/v1/account`;
			const response = await axios.get(url, payload);
			const user = response.data;
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

export default MyApp;
