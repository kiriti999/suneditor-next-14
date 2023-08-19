import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { kConverter } from '../../utils/cart/currencyHelper';
import { algoliaGetCategoryList, algoliaGetRecentEntries } from '@/lib/algolia';

const CoursesSidebar = () => {
	const [courses, setCourses] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		(async () => {
			const { hits } = await algoliaGetRecentEntries('courses', 3);
			setCourses(hits);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const result = await algoliaGetCategoryList('courses');
			setCategories(result);
		})();
	}, []);

	return (
		<div className="widget-area">
			<div className="widget widget_recent_courses">
				<h3 className="widget-title">Recent Courses</h3>

				{courses?.length === 0 ? (
					<h6>Empty</h6>
				) : (
					courses.map((course, i) => (
						<div className="item" key={i}>
							<Link href="/courses/[id]" as={`/courses/${course._id}`}>
								<a className="thumb">
									<span className="fullimage cover bg1" role="img"></span>
								</a>
							</Link>
							<div className="info">
								<span>&#8377;{kConverter(course.price)}</span>
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
					{categories?.length === 0 ? (
						<h6>Empty</h6>
					) : (
						categories.map(({ name, count }) => (
							<Link key={name}
								href="/algolia-search?q=[id]"
								as={`/algolia-search?q=${name}`}>
								<a>
									{name} <span className="tag-link-count">({count})</span>
								</a>
							</Link>
						))
					)}
				</div>
			</div>
		</div>
	);
};

CoursesSidebar.getInitialProps = async () => { };

export default CoursesSidebar;
