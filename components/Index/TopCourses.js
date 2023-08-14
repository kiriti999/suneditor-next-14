import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const overviewStyle = {
	display: '-webkit-box',
	maxWidth: '200px',
	WebkitLineClamp: '4',
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden'
}

const TopCourses = ({ courses }) => {
	const { t } = useTranslation("distance-learning");
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
							<div className="col-lg-4 col-md-6" key={course._id}>
								<div className="single-courses-box">
									<div className="courses-image">
										<Link
											href="/courses/[id]"
											as={`/courses/${course._id}`}
										>
											<a className="d-block image">
												{/* <img src={course.profilePhoto}
													alt={course.title}
												/> */}
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

									<div className="courses-content">
										<b title={course.title}>
											<Link
												href="/courses/[id]"
												as={`/courses/${course._id}`}>
												<a>
													{course.title.slice(0, 50)}
													...
												</a>
											</Link>
										</b>

										<div style={overviewStyle} dangerouslySetInnerHTML={{ __html: course.overview }}>
											{/* {course.overview.slice(0, 100)}... */}
										</div>
										<br></br>
										<small style={{color: 'grey'}}>Led by experts</small>
										

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
											{/* <li>
												<i className="flaticon-people"></i>{" "}
												{course.enrolled_courses.length}{" "}
												Students
											</li> */}
										</ul>
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
