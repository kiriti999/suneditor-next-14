import React, { useEffect, useState } from 'react';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { axiosApi } from "../../utils/baseUrl";
import { parseCookies } from 'nookies'
import Pagination from '../../components/pagination/pagination';

const overviewStyle = {
	display: '-webkit-box',
	// maxWidth: '200px',
	'margin-top': '10px',
	WebkitLineClamp: '4',
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden'
}

const TopCourses = ({ courses: initialCourses, total }) => {
	const { token } = parseCookies();
	const { t } = useTranslation("distance-learning");

	const [courses, setCourse] = useState(initialCourses);
	const [offset, setOffset] = useState(courses?.length || []);
	const [recordsPerPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = courses.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(total / recordsPerPage);

	useEffect(() => {
		if ((currentPage % 3 == 2 && currentPage < nPages - 1) || !courses[indexOfFirstRecord]) fetchCourses();
	}, [currentPage]);

	const fetchCourses = async () => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=30&offset=${offset}`
		const response = await axios.get(url);
		const coursesRes = response.data.courses;
		const copy = [...courses];
		for (let i = 0; i < coursesRes.length; i++) {
			const course = coursesRes[i];
			copy[offset + i] = course;
		}

		setCourse(copy);
		setOffset(indexOfFirstRecord);
	}

	return (
		<div className="courses-area pt-50 pb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">{t("course-top-text")}</span>
					<h2>{t("course-heading")}</h2>
					<p>{t("course-description")}</p>
				</div>

				<div className="row justify-content-center">
					{currentRecords ? (
						currentRecords.map((course) => (
							<div className="col-lg-3 col-md-6" key={course._id}>
								<div className="single-courses-box course-box-border">
									<div className="courses-image">
										<Link
											href="/courses/[id]"
											as={`/courses/${course.slug}`}>
											<a className="d-block image">
												<img src={course.profilePhoto} alt={course.title} />
											</a>
										</Link>

										{/* <Link href="#">
											<a className="fav">
												<i className="flaticon-heart"></i>
											</a>
										</Link> */}

										{/* <div className="price shadow">
											${course.price}
										</div> */}
									</div>

									<div className="courses-content pt-20 mb-2 ml-5">
										<b title={course.title}>
											<Link
												href="/courses/[id]"
												as={`/courses/${course.slug}`}>
												<a>
													{course.title.slice(0, 47)}
													...
												</a>
											</Link>
										</b>

										<br></br>
										<small style={{ color: 'grey' }}>Led by experts</small>


										<ul className="courses-box-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-fi-sr-indian-rupee-sign"></i>{" "}
												{/* {parseInt(course.lessons)}{" "} */}
												<b>₹ {course.live_training_price}</b>
												{/* 
												<Link
													href="/courses/[id]" as={`/courses/${course._id}`}>
													<a>More details</a>
												</Link>
												*/}
											</li>

											{course?.purchaseCount > 0 && <li>
												<span className="badge  text-dark bg-yellow-badge" >Best Seller</span>

											</li>}
											{/* <li>
												<i className="flaticon-people"></i>{" "}
												{course.enrolled_courses.length}{" "}
												Students
											</li> */}
										</ul>

										<ReactStars
											key={course._id}
											count={5}
											size={24}
											edit={false}
											emptyIcon={<i className="far fa-star"></i>}
											halfIcon={<i className="fa fa-star-half-alt"></i>}
											fullIcon={<i className="fa fa-star"></i>}
											activeColor="#ffd700"
											value={course.rating}
										/>
									</div>
								</div>
							</div>
						))
					) : (
						<h6>Empty</h6>
					)}

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<p>
								{t("course-description2")}{" "}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-12 col-md-12">
				<Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</div>

		</div>
	);
};

export default TopCourses;
