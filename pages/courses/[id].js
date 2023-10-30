import React, { useState, useEffect } from "react";
import CoursesDetailsSidebar from "@/components/SingleCourses/CoursesDetailsSidebar";
import axios from "axios";
import { parseCookies } from 'nookies'
import { axiosApi } from "@/utils/baseUrl";
import CoursesCurriculum from "@/components/Courses/CoursesCurriculum";
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import ReactStars from "react-rating-stars-component";
import Router from 'next/router'
import LoadingSpinner from "@/utils/LoadingSpinner";
import { useForm } from 'react-hook-form';

const Details = () => {
	const { token } = parseCookies();
	const [course, setCourse] = useState([]);
	const [loading, setLoading] = useState([]);
	const [courseReviews, setCourseReviews] = useState([]);
	const [isRatingProvided, setIsRatingProvided] = useState(false);
	const [isReviewProvided, setIsReviewProvided] = useState(false);

	const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
		{
			mode: "onBlur",
			defaultValues: {
				review: '',
			},
			resetOptions: {
				keepDirtyValues: true, // user-interacted input will be retained
				keepErrors: true, // input errors will be retained with value update
			}
		});

	const validationOptions = {
		review: { },
	};


	const getCourseById = async (id) => {
		try {
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/${id}`;
			const response = await axios.get(url, {
				headers: { Authorization: token }
			});
			setLoading(true);
			return response.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			setLoading(false)
		}
	}

	const getCourseReviews = async (id) => {
		try {
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/reviews?courseId=${id}`;
			const response = await axios.get(url, {
				headers: { Authorization: token }
			});
			setLoading(true);
			return response.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			setLoading(false)
		}
	}


	useEffect(() => {
		if (typeof window !== "undefined") {
			console.log('window.location ', window.location);
			const courseId = window.location.pathname.split('/')[2];
			(async () => {
				const course = await getCourseById(courseId);
				console.log('pages/courses/[id].js:: useEffect:: course: ', course);
				setCourse(course?.course);
				const courseReviews = await getCourseReviews(courseId);
				setCourseReviews(courseReviews);
			})()
		}
	}, []);

	useEffect(()=>{
		console.log('courseReviews ', courseReviews)
	},[courseReviews])

	const ratingChanged = async (rating, courseId) => {
		try {
			if (!token) {
				Router.push('/authentication')
			}
			console.log('ratingChanged:: rating: ', rating);
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/rating`;
			const response = await axios.post(url, { rating, courseId }, {
				headers: { Authorization: token }
			});
			console.log('response ', response);
			if(response.status === 200) {
				setIsRatingProvided(true);
			}

		} catch (error) {
			console.log('ratingChanged:: error: ', error);
		}
	};

	const handleCourseReview = async(review)=>{
		console.log('[id].js:: handleCourseReview::  review: ', review);
		try {
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/review`;
			const response = await axios.post(url, {review: review.review, courseId: course._id}, {
				headers: { Authorization: token }
			});
			if(response.status === 200){
				setIsReviewProvided(true);
			}
			setLoading(true);
			return response.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{loading && <LoadingSpinner />}
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
										<Tab>User feedback</Tab>
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
											{/* <h3>Course Rating</h3> */}
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


										<div className="courses-review-comments">
											<h3>{courseReviews?.comments?.length || 0} Reviews</h3>

											{courseReviews?.comments && courseReviews.comments.map((comment, i)=>{
												return (
													<div className="user-review" key={i}>
													<img
														src="/images/user2.jpg"
														alt="image"
													/>

													<div className="review-rating">
													<ReactStars
														key={course._id}
														count={5}
														size={24}
														edit={false}
														emptyIcon={<i className="far fa-star"></i>}
														halfIcon={<i className="fa fa-star-half-alt"></i>}
														fullIcon={<i className="fa fa-star"></i>}
														activeColor="#ffd700"
														value={courseReviews.rating}
													/>

														<span className="d-inline-block">
															Sarah Taylor
														</span>
													</div>

													<p>
														{comment}
													</p>
												</div> 
												)
											})}
										</div>
									</TabPanel>

									<TabPanel>
											{!isReviewProvided &&
											<>
												<h3>How would you rate this course?</h3>
												<div className="mt-30 mb-0"><h5>Select rating</h5></div>
												<ReactStars
													key={course._id}
													onChange={(e) => ratingChanged(e, course._id)}
													count={5}
													size={34}
													isHalf={true}
													activeColor="#ffd700"
													emptyIcon={<i className="far fa-star"></i>}
													halfIcon={<i className="fa fa-star-half-alt"></i>}
													fullIcon={<i className="fa fa-star"></i>}
												/>
												<br></br>
											</>
											}
											{(isRatingProvided && !isReviewProvided) && <form onSubmit={handleSubmit(handleCourseReview)}>
												<div className="mb-3">
													<label className="form-label"><h3>Why did you leave this rating?</h3></label>
													<textarea className="form-control" {...register('review', validationOptions.review)}
													placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
													rows="5"></textarea>
													<button type="submit" className="default-btn mt-20">Save and continue</button>
												</div>
											</form>}
											
										{isReviewProvided && <h3>Thank you!</h3>}
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
