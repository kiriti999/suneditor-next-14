import React, { useState, useEffect } from "react";
import CoursesDetailsSidebar from "@/components/SingleCourses/CoursesDetailsSidebar";
import axios from "axios";
import { parseCookies } from 'nookies'
import { axiosApi } from "@/utils/baseUrl";
import CoursesCurriculum from "@/components/Courses/CoursesCurriculum";
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs'

const Details = () => {
	const { token } = parseCookies();
	const [course, setCourse] = useState([]);
	const [price, setPrice] = useState([]);

	const getCourseById = async (id) => {
		const url = `${axiosApi.baseUrl}/api/v1/courses/course/${id}`;
		const response = await axios.get(url, {
			headers: { Authorization: token }
		});
		return response.data;
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			const courseId = window.location.pathname.split('/')[2];
			(async () => {
				const course = await getCourseById(courseId);
				console.log('pages/courses/[id].js:: useEffect:: course: ', course);
				setCourse(course?.course);
			})()
		}
	}, []);

	return (
		<div>
			<div className="courses-details-area pb-100">

				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-desc">
								<Tabs>
									<TabList>
										<Tab>Overview</Tab>
										<Tab>Curriculum</Tab>
										<Tab>Instructor</Tab>
										<Tab>Reviews</Tab>
									</TabList>

									<TabPanel>
										<div className="courses-overview">
											<h3>{course.title}</h3>
											<div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: course.overview }} />
										</div>
									</TabPanel>

									<TabPanel>
										<CoursesCurriculum videos={course?.videos} />
									</TabPanel>

									<TabPanel>
										<div className="courses-instructor">
											<div className="single-advisor-box">
												<div className="row align-items-center">
													<div className="col-lg-4 col-md-4">
														<div className="advisor-image">
															<img
																src={`${course?.userId?.profilePhoto ?
																	course?.userId?.profilePhoto : "/images/advisor/advisor6.jpg"}`}
																alt={course?.userId?.name}
															/>
														</div>
													</div>

													<div className="col-lg-8 col-md-8">
														<div className="advisor-content">
															{/*<h3> {course?.userId?.name} </h3>*/}
															<h3> Arjun </h3>
															<span className="sub-title">
																{course?.userId?.designation || "Technical Lead and Certified AWS Architect"}
															</span>
															<p>
																{course?.userId?.about || "Expert trainer on full stack applications and software programming languages"}
															</p>

															<ul className="social-link">
																<li>
																	<a
																		href={course?.userId?.fb_url || "#"}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-facebook"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={course?.userId?.tw_url || "#"}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-twitter"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={course?.userId?.insta_url || "#"}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-instagram"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={course?.userId?.in_url || "#"}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-linkedin"></i>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="courses-reviews">
											<h3>Course Rating</h3>
											<div className="rating">
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star"></span>
											</div>
											<div className="rating-count">
												<span>
													4.1 average based on 4
													reviews.
												</span>
											</div>
											<div className="row">
												<div className="side">
													<div>5 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-5"></div>
													</div>
												</div>
												<div className="side right">
													<div>02</div>
												</div>
												<div className="side">
													<div>4 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-4"></div>
													</div>
												</div>
												<div className="side right">
													<div>03</div>
												</div>
												<div className="side">
													<div>3 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-3"></div>
													</div>
												</div>
												<div className="side right">
													<div>04</div>
												</div>
												<div className="side">
													<div>2 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-2"></div>
													</div>
												</div>
												<div className="side right">
													<div>05</div>
												</div>
												<div className="side">
													<div>1 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-1"></div>
													</div>
												</div>
												<div className="side right">
													<div>00</div>
												</div>
											</div>
										</div>

										{ /* 
										<div className="courses-review-comments">
											<h3>3 Reviews</h3>
											<div className="user-review">
												<img
													src="/images/user1.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
													</div>

													<span className="d-inline-block">
														James Anderson
													</span>
												</div>

												<span className="d-block sub-comment">
													Excellent
												</span>
												<p>
													Very well built theme,
													couldn't be happier with it.
													Can't wait for future
													updates to see what else
													they add in.
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user2.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star"></i>
														<i className="bx bxs-star"></i>
													</div>

													<span className="d-inline-block">
														Sarah Taylor
													</span>
												</div>

												<span className="d-block sub-comment">
													Video Quality!
												</span>
												<p>
													Was really easy to implement
													and they quickly answer my
													additional questions!
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user3.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
													</div>

													<span className="d-inline-block">
														David Warner
													</span>
												</div>

												<span className="d-block sub-comment">
													Perfect Coding!
												</span>
												<p>
													Stunning design, very
													dedicated crew who welcome
													new ideas suggested by
													customers, nice support.
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user4.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star"></i>
													</div>

													<span className="d-inline-block">
														King Kong
													</span>
												</div>

												<span className="d-block sub-comment">
													Perfect Video!
												</span>
												<p>
													Stunning design, very
													dedicated crew who welcome
													new ideas suggested by
													customers, nice support.
												</p>
											</div>
	</div> */ }
									</TabPanel>
								</Tabs>
							</div>
						</div>

						{course?.userId &&
							<div className="col-lg-4 col-md-12">
								<CoursesDetailsSidebar
									{...course}
									courseData={course}
									loggedInUser={course.userId}
								/>
							</div>
						}

					</div>
				</div>
			</div>

			{/* <YouMightLikeTheCourses /> */}
		</div>
	);
};

// Details.getInitialProps = async (ctx) => {
// 	console.log('ctx:: getInitialProps:: ctx: ', ctx.query);
// 	const {id} = ctx.query;
// 	console.log('Pages:: Details:: getInitialProps:: courses/[id].js:: id: ', id);
// 	const url = `${axiosApi.baseUrl}/api/v1/courses/course/${id}`;
// 	const response = await axios.get(url);
// 	return response.data;
// };

export default Details;
