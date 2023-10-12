import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { axiosApi } from "../../utils/baseUrl";
import { parseCookies } from 'nookies'

const overviewStyle = {
	display: '-webkit-box',
	// maxWidth: '200px',
	'margin-top': '10px',
	WebkitLineClamp: '4',
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden'
}

const TopCourses = ({ courses }) => {
	const { token } = parseCookies();
	const { t } = useTranslation("distance-learning");
	const getRating = courseMeta => {
		var count = 0
		var sum = 0;
		console.log("TopCourses.js:: courseMeta:", courseMeta);
		courseMeta.forEach((a, index) => {
			if (a.fieldName == 'rating') {
				count += 1;
				sum += parseInt(a.fieldValue);
				console.log("sum", sum, count);

			}
		})
		console.log("total rating", parseFloat(sum / count).toFixed(2));
		return parseFloat(sum / count).toFixed(2);

	}

	const ratingChanged = async (rating, courseId) => {
		try {
			console.log('ratingChanged:: rating: ', rating);
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/rating`;
			const response = await axios.post(url, { rating, courseId }, {
				headers: { Authorization: token }
			});
			console.log('response ', response);
		} catch (error) {
			console.log('ratingChanged:: error: ', error);
		}
	};

	return (
		<div className="courses-area pt-50 pb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">{t("course-top-text")}</span>
					<h2>{t("course-heading")}</h2>
					<p>{t("course-description")}</p>
				</div>

				<div className="row justify-content-center">
					{courses ? (
						courses.map((course) => (
							<div className="col-lg-3 col-md-6" key={course._id}>
								<div className="single-courses-box course-box-border">
									<div className="courses-image">
										<Link
											href="/courses/[id]"
											as={`/courses/${course._id}`}>
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
												as={`/courses/${course._id}`}>
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
												<b>₹ {course.price}</b>
												{/* 
												<Link
													href="/courses/[id]" as={`/courses/${course._id}`}>
													<a>More details</a>
												</Link>
												*/}
											</li>

											{course?.purchaseCount > 2 && <li>
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
											activeColor="#ffd700"
											value={getRating(course?.course_meta_data)}
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
		</div>
	);
};

export default TopCourses;
