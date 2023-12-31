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

const index = ({ courses, total }) => {
	const { t } = useTranslation("distance-learning");
	return (
		<div>
			<SEO title={t("pagetitle")} description={t("bannersubtitle")} />
			<MainBanner />
			<TopCourses courses={courses || []} total={total} />
			<About />
			{/* <Testimonials /> */}
			{/* <Instance /> */}
			{/* <Partner /> */}
			{/* <Ad /> */}
			{/* <Funfacts /> */}
			{/* <Blog /> */}
		</div>
	);
};

index.getInitialProps = async () => {
	try {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=30&offset=0`;
		const response = await axios.get(url);
		return response?.data;
	} catch (error) {
		console.log('pages/index.js:: getInitialProps:: error: ', error);
	}

};

export default index;
