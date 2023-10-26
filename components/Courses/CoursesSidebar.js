import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { kConverter } from '../../utils/cart/currencyHelper';
import { algoliaGetCategoryList, algoliaGetRecentEntries } from '@/lib/algolia';

import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";;

const CoursesSidebar = ({ setSidebarFilter }) => {
	const [courses, setCourses] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=3`;
		(async () => {
			const response = await axios.get(url)
			console.log('CoursesSidebar.js:: useEffect: courses:', response.data.courses);
			setCourses(response.data?.courses);
		})()
	}, [])

	useEffect(() => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/categories/categoryByCount`;
		(async () => {
			const response = await axios.get(url)
			console.log('CoursesSidebar.js:: useEffect: categories:', response.data.categories);
			setCategories(response.data?.categories);
		})()
	}, [])

	const getCoursesByTagName = async (tagName) => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course?tagName=${tagName}`;
		const response = await axios.get(url);
		console.log('CoursesSidebar.js:: getCoursesByTagName:: response: ', response.data.courses);
		setSidebarFilter(response.data.courses);
	}


	// const CoursesSidebar = () => {
	// 	const [courses, setCourses] = useState([]);
	// 	const [categories, setCategories] = useState([]);

	// 	useEffect(() => {
	// 		(async () => {
	// 			const { hits } = await algoliaGetRecentEntries('courses', 3);
	// 			setCourses(hits);
	// 		})();
	// 	}, []);

	// 	useEffect(() => {
	// 		(async () => {
	// 			const result = await algoliaGetCategoryList('courses');
	// 			setCategories(result);
	// 		})();
	// 	}, []);

	// 	console.log('categories ', categories)

	return (
		<div className="widget-area">
			<div className="widget widget_recent_courses">
				<h3 className="widget-title">New Courses</h3>

				{courses?.length === 0 ? (
					<h6>Empty</h6>
				) : (
					courses.map((course, i) => (
						<div className="item" key={i}>
							<Link href="/courses/[id]" as={`/courses/${course.objectID}`}>
								<a className="thumb">
									<span className="fullimage cover bg1" role="img"></span>
								</a>
							</Link>
							<div className="info">
								<span>&#8377;{kConverter(course.live_training_price)}</span>
								<h4 className="title usmall">
									<Link href="/courses/[id]" as={`/courses/${course._id}`}>
										<a>{course.title}</a>
									</Link>
								</h4>
							</div>
							<div className="clear"></div>
						</div>
					))
				)}
			</div>

			<div className="widget widget_tag_cloud">
				<h3 className="widget-title">Popular Tags</h3>
				<div className="tagcloud">
					{categories?.length > 0 ? categories.map((item, i) => (
						<Link href="" legacyBehavior key={i}>
							<a onClick={(e) => getCoursesByTagName(item.categoryName)}>{item.categoryName}
								<span className="tag-link-count"> ({item.count})</span>
							</a>
						</Link>
					)) : (
						<h6>Empty</h6>
					)}
				</div>
			</div>
		</div>
	);
};

CoursesSidebar.getInitialProps = async () => { };

export default CoursesSidebar;
