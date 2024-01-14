import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { kConverter } from '../../utils/cart/currencyHelper';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { useQuery } from '@tanstack/react-query';
import styles from '../Blog/Widget.module.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CoursesSidebar = ({ setSidebarFilter }) => {
	const [courses, setCourses] = useState([]);
	const [categories, setCategories] = useState([]);

	const { isFetching: coursesFetching, data: coursesData } = useQuery({
		queryKey: ['courses-sidebar-courses'],
		queryFn: async () => {
			const url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=3`;
			const response = await axios.get(url);
			console.log('CoursesSidebar.js:: useEffect: courses:', response.data.courses);
			return response.data?.courses || [];
		}
	});

	const { isFetching: categoriesFetching, data: categoriesData } = useQuery({
		queryKey: ['courses-sidebar-categories'],
		queryFn: async () => {
			const url = `${axiosApi.baseUrl}/api/v1/courses/categories/categoryByCount`;
			const response = await axios.get(url);
			console.log('CoursesSidebar.js:: useEffect: categories:', response.data.categories);
			return response.data?.categories || [];
		}
	});

	useEffect(() => {
		if (!coursesFetching) setCourses(coursesData);
	}, [coursesFetching, coursesData]);

	useEffect(() => {
		if (!categoriesFetching) setCategories(categoriesData);
	}, [categoriesFetching, categoriesData]);

	const getCoursesByTagName = async (tagName) => {
		let url = `${axiosApi.baseUrl}/api/v1/courses/course?tagName=${tagName}`;
		const response = await axios.get(url);
		console.log('CoursesSidebar.js:: getCoursesByTagName:: response: ', response.data.courses);
		setSidebarFilter(response.data.courses);
	}

	return (
		<div className={styles['widget-area']}>
			<div className={`${styles['widget']} ${styles['widget_recent_courses']}`}>
				<h3 className={styles['widget-title']}>New Courses</h3>

				{courses ? courses.length && courses.map((course, i) => (
					<div className={styles['item']} key={i}>
						<Link legacyBehavior href="/courses/[id]" as={`/courses/${course.slug}`}>
							<a className={styles['thumb']}>
								<span className={`${styles['fullimage']} cover bg1"`} role="img"></span>
							</a>
						</Link>
						<div className={styles['info']}>
							<span>&#8377;{kConverter(course.live_training_price)}</span>
							<h4 className={`${styles['title']} title usmall`}>
								<Link legacyBehavior href="/courses/[id]" as={`/courses/${course.slug}`}>
									<a>{course.title}</a>
								</Link>
							</h4>
						</div>
						<div className={styles['clear']}></div>
					</div>
				)) : (
					<Skeleton count={10} />
				)}
			</div>

			<div className={`${styles['widget']} ${styles['widget_tag_cloud']}`}>
				<h3 className={styles['widget-title']}>Popular Tags</h3>
				<div className={styles['tagcloud']}>
					{categories?.length > 0 ? categories.map((item, i) => (
						<Link legacyBehavior href="" key={i}>
							<a onClick={(e) => {
								getCoursesByTagName(item.categoryName);
							}}>{item.categoryName}
								<span className="tag-link-count"> ({item.count})</span>
							</a>
						</Link>
					)) : (
						<Skeleton count={10} />
					)}
				</div>
			</div>
		</div>
	);
};

CoursesSidebar.getInitialProps = async () => { };

export default CoursesSidebar;
