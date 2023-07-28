/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useTranslation from "next-translate/useTranslation";
import MainBanner from "@/components/Index/MainBanner";
import Features from "@/components/Index/Features";
import TopCourses from "@/components/Index/TopCourses";
import About from "@/components/Index/About";
import Testimonials from "@/components/Index/Testimonials";
import Instance from "@/components/Index/Instance";
import Partner from "@/components/Index/Partner";
import Ad from "@/components/Index/Ad";
import Funfacts from "@/components/Index/Funfacts";
import Blog from "@/components/Index/Blog";
import axios from "axios";
import { axiosApi } from "@/utils/baseUrl";
import SEO from "@/components/SEO";

const index = ({ courses }) => {
	const { t } = useTranslation("distance-learning");
	return (
		<>
			<SEO title={t("pagetitle")} description={t("bannersubtitle")} />
			<MainBanner />
			<TopCourses courses={courses} />
			<About />
			{/* <Testimonials /> */}
			{/* <Instance /> */}
			{/* <Partner /> */}
			{/* <Ad /> */}
			{/* <Funfacts /> */}
			{/* <Blog /> */}
		</>
	);
};

index.getInitialProps = async () => {
	console.log('axiosApi ', axiosApi);
	const url = `${axiosApi.baseUrl}/api/v1/courses/course`;
	const response = await axios.get(url);
	console.log('pages/index.js:: homepage-courses ', response.data)
	return response.data;
};

export default index;
