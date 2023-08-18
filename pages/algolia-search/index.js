import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import CoursesSidebar from '@/components/Courses/CoursesSidebar';
import { Context } from 'context/filterStore';
import { kConverter } from '@/utils/cart/currencyHelper';
import axios from 'axios';
import { axiosApi } from '@/utils/baseUrl';
import { algoliaSearchByKeyword } from '@/lib/algolia';

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

const AlgoliaSearch = ({ data }) => {
	const [state, setState] = useContext(Context);
	const { push, query } = useRouter();

	const courses = state?.filteredCourses ?? [];

	useEffect(() => {
		setState({
			...state,
			courses: data,
			filteredCourses: data,
			searchParam: query.q || ''
		});
	}, [data]);

	/**
	 * @desc This function is used to update url sort param
	 * @param {*} type
	 */
	const sortCourses = (type) => {
		push({ query: { ...query, sort: type } });
	};

	return (
		<div>
			<PageBanner
				pageTitle="Algolia Search"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Search"
			/>

			<div className="courses-area pt-40 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="whatsnxt-grid-sorting row align-items-center">
								<div className="col-lg-8 col-md-6 result-count">
									<p>
										We found{' '}
										<span className="count">
											{courses.length ? courses.length : 0}
										</span>{' '}
										courses available for you
									</p>
								</div>

								<div className="col-lg-4 col-md-6 ordering">
									<div className="select-box">
										<select
											onChange={(e) => sortCourses(e.target.value)}
											className="form-control"
										>
											<option>Sort By</option>
											{sortOption.map(({ value, text }) => (
												<option
													key={value}
													value={value}
													defaultValue={value === query.sort}
												>
													{text}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>

							<div className="row">
								{courses?.length === 0 ? (
									<h6>Empty</h6>
								) : (
									courses?.map((course) => (
										<div className="col-lg-6 col-md-6" key={course.title}>
											<div className="single-courses-box">
												<div className="courses-image">
													<Link href="/courses/[id]" as={`/courses/${course._id}`}>
														<a className="d-block image">
															<img src={course?.profilePhoto || '/images/courses/courses1.jpg'}
																alt={course.title} />
														</a>
													</Link>
													<div className="price shadow">
														&#8377;{kConverter(course.price)}
													</div>
												</div>
												<div className="courses-content">
													<div className="course-author d-flex align-items-center mt-2">
														<img src="/images/user1.svg" className="rounded-circle" alt="image" />
														<span><small>Led by experts</small></span>
													</div>

													<b title={course.title}>
														<Link
															href="/courses/[id]"
															as={`/courses/${course._id}`}>
															<a>{course.title.slice(0, 20)}...</a>
														</Link>
													</b>

													<ul className="courses-box-footer d-flex justify-content-between align-items-center">
														<li className='mb-3'>
															<Link
																href="/courses/[id]"
																as={`/courses/${course._id}`}
															>
																<a>More details</a>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									))
								)}
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesSidebar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ query }) => {
	try {
		let filteredCourses = [];
		const searchQuery = query.q || '';
		const sortQuery = query.sort || '';

		// algolia search
		const { hits: searchResult } = await algoliaSearchByKeyword(
			'courses',
			searchQuery
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
				switch (sortQuery) {
					case 'popularity':
						let aCount = parseInt(a.popularity);
						let bCount = parseInt(b.popularity);
						return bCount - aCount;
					case 'latest':
						return a.createdAt - b.createdAt;
					case 'low-high':
						return a.price - b.price;
					case 'high-low':
						return b.price - a.price;
				}
			});
		} else {
			filteredCourses = courses;
		}

		return { props: { data: filteredCourses } };
	} catch (error) {
		return { props: { data: [] } };
	}
};

export default AlgoliaSearch;
