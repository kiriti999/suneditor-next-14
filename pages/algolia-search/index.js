/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import { Context } from 'context/filterStore';
import axios from 'axios';
import { axiosApi } from '@/utils/baseUrl';
import { algoliaSearchByKeyword } from '@/lib/algolia';
import QueryPagination from '@/components/QueryPagination/QueryPagination';
import courseStyles from '../../components/Courses/Course.module.css';
import styles from './index.module.css';

const overviewStyle = {
	display: '-webkit-box',
	// maxWidth: '200px',
	'fontSize': '15px',
	WebkitLineClamp: '4',
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden'
}

const sortOption = [
	{
		value: 'popularity',
		text: 'Popularity'
	},
	{
		value: 'latest',
		text: 'Latest'
	},
	{
		value: 'low-high',
		text: 'Price: low to high'
	},
	{
		value: 'high-low',
		text: 'Price: high to low'
	}
];

const AlgoliaSearch = ({ data, pages }) => {
	const [state, setState] = useContext(Context);
	const { push, query } = useRouter();
	const [sidebarFilter, setSidebarFilter] = useState([]);

	const [newCourses, setNewCourses] = useState([]);

	useEffect(() => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=3`;
		(async () => {
			const response = await axios.get(url)
			console.log('CoursesSidebar.js:: useEffect: courses:', response.data.courses);
			setNewCourses(response.data?.courses);
		})()
	}, [])

	// initial courses value is empty array
	const [courses, setCourse] = useState(data)

	useEffect(() => {
		console.log('courses ', courses);
	}, [courses])

	useEffect(() => {
		if (query.q !== undefined) {
			setState({
				...state,
				courses: data,
				filteredCourses: data,
				searchParam: query.q || ''
			});
			setCourse(data)
		}
	}, [data]);

	/**
	 * @desc This function is used to update url sort param
	 * @param {*} type
	 */
	const sortCourses = (type) => {
		push({ query: { ...query, sort: type } });
	};

	const handlePagination = (pageNumber) => {
		push({ query: { ...query, page: pageNumber } });
	};

	const createCourseCards = (course, live = true) => (
		<div className="col-lg-3 col-md-6" key={course.title + (live ? 'live' : 'video')}>
			<div className={courseStyles['single-courses-box']}>
				<div className={courseStyles['courses-image']}>
					<Link href="/courses/[id]" as={`/courses/${course.slug}`}>
						<a className={`d-block image ${courseStyles['image']}`}>
							<img src={course.profilePhoto} alt={course.title} />
						</a>
					</Link>
				</div>
				<div className={courseStyles['courses-content']}>

					<b title={course.title}>
						<Link href="/courses/[id]" as={`/courses/${course.slug}`}>
							<a><h5>{course.title.slice(0, 45)}...</h5></a>
						</Link>
					</b>

					<div className={`${courseStyles['course-author']} d-flex align-items-center mt-2`}>
						<img src="/images/user1.svg" className="rounded-circle" alt="image" />
						<span><small>Led by experts</small></span>
					</div>

					<div style={overviewStyle} dangerouslySetInnerHTML={{ __html: course?.overview?.slice(0, 100) }} ></div>

					<ul className={`${courseStyles['courses-box-footer']} d-flex justify-content-between align-items-center pb-10`}>
						<li>
							<i className="flaticon-fi-sr-indian-rupee-sign"></i>{" "}
							<b>₹ {(live ? course.live_training_price : course.video_course_price)}</b>
						</li>
					</ul>

					<p>{live ? 'Live training' : 'Course videos'}</p>
				</div>
			</div>
		</div>
	)

	return (
		<>
			<div>
				<PageBanner
					pageTitle="Courses"
					homePageUrl="/"
					homePageText="Home"
					activePageText="Courses"
				/>

				<div className={`${courseStyles['courses-area']} pt-40 pb-70`}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className={`${styles['whatsnxt-grid-sorting']} row align-items-center`}>
									<div className={`col-lg-8 col-md-6 ${styles['result-count']}`}>
										<p>We found <span className={styles['count']}>{courses.length ? courses.length : 0}</span> courses available for you</p>
									</div>

									<div className={`col-lg-4 col-md-6 ${styles['ordering']}`}>
										<div className="select-box">
											<select onChange={(e) => sortCourses(e.target.value)} className="form-control">
												<option>Sort By</option>
												{sortOption.length && sortOption.map(({ value, text }) => (
													<option key={value} value={value} defaultValue={value === query.sort}>
														{text}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>

								<div className="row">
									{courses && courses.length ? courses.map(course => (
										<>
											{course.live_training_price && createCourseCards(course)}
											{course.video_course_price && createCourseCards(course, false)}
										</>

									)) : (
										<h6>Empty</h6>
									)}

								</div>

								<div className="row">
									<QueryPagination
										totalPage={pages}
										currentPage={query.page}
										previousPageClickHandler={handlePagination}
										nextPageClickHandler={handlePagination}
										pageNumberClickHandler={handlePagination}
									/>
								</div>

								<>
									<h3 className="pt-10">New courses</h3>
									<div className="col-lg-12 col-md-12">
										<div className="row">
											{newCourses.length && newCourses.map(course => (
												createCourseCards(course)
											))}
										</div>
									</div>
								</>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async ({ query }) => {
	try {
		let filteredCourses = [];
		const searchQuery = query.q || '';
		const sortQuery = query.sort || '';
		let page = query?.page || 1;

		// algolia search
		const { hits: searchResult, nbPages } = await algoliaSearchByKeyword(
			'courses',
			searchQuery,
			page - 1,
			20
		);

		// get data for courses popularity
		const url = `${axiosApi.baseUrl}/api/v1/courses/popularity`;
		const popularResponse = await axios.get(url);
		const coursesPopularity = popularResponse.data.enrolled || [];

		// add popularity to courses
		const courses = searchResult.map((course) => {
			const popularity = coursesPopularity.find(
				(popular) => popular.courseId === course.objectID
			);
			course.popularity = popularity ? popularity.count : 0;
			return course;
		});

		// sort course data or pass the same data
		if (sortQuery) {
			filteredCourses = courses.sort((a, b) => {
				const totalPriceA = (a.video_course_price || 0) + (a.live_training_price || 0);
				const totalPriceB = (b.video_course_price || 0) + (b.live_training_price || 0);

				switch (sortQuery) {
					case 'popularity':
						let aCount = parseInt(a.popularity);
						let bCount = parseInt(b.popularity);
						return bCount - aCount;
					case 'latest':
						return a.createdAt - b.createdAt;
					case 'low-high':
						return totalPriceA - totalPriceB;
					case 'high-low':
						return totalPriceB - totalPriceA;
				}
			});
		} else {
			filteredCourses = courses;
		}

		return { props: { data: filteredCourses, pages: nbPages } };
	} catch (error) {
		return { props: { data: [], pages: 0 } };
	}
};

export default AlgoliaSearch;
