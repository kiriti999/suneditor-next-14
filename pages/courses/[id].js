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
import { NextSeo } from 'next-seo';
import { useQuery } from '@tanstack/react-query';
import styles from '../../components/Courses/Course.module.css';
import advStyles from '../../components/Common/CourseAdvisor.module.css';

export async function getServerSideProps(context) {
	const { id } = context.params;
	return {
		props: { slug: id }
	};
}

const Details = ({ slug }) => {
	const { token } = parseCookies();
	const [course, setCourse] = useState([]);
	const [loading, setLoading] = useState([]);
	const [courseReviews, setCourseReviews] = useState([]);
	const [isRatingProvided, setIsRatingProvided] = useState(false);
	const [isReviewProvided, setIsReviewProvided] = useState(false);
	const [rating, setRating] = useState(0);
	const [displayLength, setDisplayLength] = useState(5);
	const [commentIndex, setCommentIndex] = useState(-1);

	const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm(
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
		review: {},
	};

	const { isPending, data } = useQuery({
		queryKey: [`course-${slug}`],
		queryFn: async () => {
			const courseUrl = `${axiosApi.baseUrl}/api/v1/courses/course/slug/${slug}`;
			const courseRes = await axios.get(courseUrl, {
				headers: { Authorization: token }
			});

			const id = courseRes.data?.course._id;
			const reviewsUrl = `${axiosApi.baseUrl}/api/v1/courses/course/reviews?courseId=${id}`;
			const reviewsRes = await axios.get(reviewsUrl, {
				headers: { Authorization: token }
			});

			return { course: courseRes.data, reviews: reviewsRes.data };
		}
	});

	useEffect(() => {
		setLoading(isPending);
	}, [isPending]);

	useEffect(() => {
		if (!data) return;

		setCourse(data.course?.course);
		setCourseReviews(data.reviews);

		if (!token) return;

		const parts = token.split('.');
		const tokenPayload = JSON.parse(atob(parts[1]));
		const { userId } = tokenPayload;

		for (let i = 0; i < data.reviews.length; i++) {
			const review = data.reviews[i];
			if (review.userId === userId) {
				setCommentIndex(i);
				setRating(review.rating);
				setIsRatingProvided(true);
				setValue('review', review.comments);
				break;
			}
		}
	}, [token, data, setValue]);

	useEffect(() => {
		console.log('courseReviews ', courseReviews)
	}, [courseReviews])

	const ratingChanged = async (rating, courseId) => {
		try {
			if (!token) {
				Router.push('/authentication')
			}
			console.log('ratingChanged:: rating: ', rating);
			setRating(rating);
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/rating`;
			const response = await axios.post(url, { rating, courseId }, {
				headers: { Authorization: token }
			});
			console.log('response ', response);
			if(response.status === 200) {
				const copy = [...courseReviews];
				if (commentIndex > -1) {
					copy[commentIndex].rating = rating;
				} else {
					copy.push(response.data.metadata[0]);
					setCommentIndex(copy.length - 1);
				}

				setCourseReviews(copy);
				setIsRatingProvided(true);
			}

		} catch (error) {
			console.log('ratingChanged:: error: ', error);
		}
	};

	const handleCourseReview = async (review) => {
		console.log('[id].js:: handleCourseReview::  review: ', review);
		try {
			const url = `${axiosApi.baseUrl}/api/v1/courses/course/review`;
			const response = await axios.post(url, { review: review.review, courseId: course._id }, {
				headers: { Authorization: token }
			});
			if(response.status === 200){
				const copy = [...courseReviews];
				copy[commentIndex].comments = review.review;
				setCourseReviews(copy);
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

	const editRating = (event) => {
		event.preventDefault();
		setIsReviewProvided(false);
	}

	const loadMore = () => {
		setDisplayLength(length => length + 5);
	}

	const stars5Count = !Array.isArray(course) ? course.rateArray.filter(item => item === 5).length : 0;
	const stars5Ratio = courseReviews.length > 0 ? stars5Count / courseReviews.length : 0;
	const stars4Count = !Array.isArray(course) ? course.rateArray.filter(item => item === 4).length : 0;
	const stars4Ratio = courseReviews.length > 0 ? stars4Count / courseReviews.length : 0;
	const stars3Count = !Array.isArray(course) ? course.rateArray.filter(item => item === 3).length : 0;
	const stars3Ratio = courseReviews.length > 0 ? stars3Count / courseReviews.length : 0;
	const stars2Count = !Array.isArray(course) ? course.rateArray.filter(item => item === 2).length : 0;
	const stars2Ratio = courseReviews.length > 0 ? stars2Count / courseReviews.length : 0;
	const stars1Count = !Array.isArray(course) ? course.rateArray.filter(item => item === 1).length : 0;
	const stars1Ratio = courseReviews.length > 0 ? stars1Count / courseReviews.length : 0;

	return (
		<div>
	    <NextSeo
        title="`whats-next{$slug}`"
        description="`Educational site where you can upload and buy courses about {$slug}`"
        canonical="https://www.whatsnxt.in"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: course?.userId?.profilePhoto ,
              width: 800,
              height: 600,
              alt: course?.userId?.name,
              type: 'image/jpeg',
            },
            {
              url: '/images/advisor/advisor6.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image advisor',
              type: 'image/jpeg',
            },
          ],
          siteName: 'whatsnext',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
			{loading && <LoadingSpinner />}
			<div className="courses-details-area pb-100">

				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className={styles['courses-details-desc']}>
								<Tabs selectedTabClassName={`react-tabs__tab--selected ${styles['react-tabs__tab--selected']}`}>
									<TabList className={`react-tabs__tab-list ${styles['react-tabs__tab-list']}`}>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Overview</Tab>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Topics</Tab>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Videos</Tab>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Instructor</Tab>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Reviews</Tab>
										<Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>User feedback</Tab>
									</TabList>

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
										<div className={styles['courses-overview']}>
											<h3>{course.title}</h3>
											<div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: course.overview }} />
										</div>
									</TabPanel>

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
										<div className={styles['courses-overview']}>
											<div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: course.topics }} />
										</div>
									</TabPanel>

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
										<CoursesCurriculum videos={course?.videos} />
									</TabPanel>

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
										<div className={styles['courses-instructor']}>
											<div className={`${styles['single-advisor-box']} ${advStyles['single-advisor-box']}`}>
												<div className={`${styles['row']} ${advStyles['row']} row align-items-center`}>
													<div className={`${styles['col-lg-4']} ${advStyles['col-lg-4']} col-lg-4 col-md-4`}>
														<div className={`${styles['advisor-image']} ${advStyles['advisor-image']}`}>
															<img
																src={`${course?.userId?.profilePhoto ?
																	course?.userId?.profilePhoto : "/images/advisor/advisor6.jpg"}`}
																alt={course?.userId?.name}
															/>
														</div>
													</div>

													<div className={`${styles['col-lg-8']} col-lg-8 col-md-8`}>
														<div className={`${styles['advisor-content']} ${advStyles['advisor-content']}`}>
															{/*<h3> {course?.userId?.name} </h3>*/}
															<h3> Arjun </h3>
															<span className={styles['sub-title']}>
																{course?.userId?.designation || "Technical Lead and Certified AWS Architect"}
															</span>
															<p>
																{course?.userId?.about || "Expert trainer on full stack applications and software programming languages"}
															</p>

															<ul className={`${styles['social-link']} ${advStyles['social-link']}`}>
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

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
										<div className={styles['courses-reviews']}>
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
											<div className={styles['rating-count']}>
												<span>
													{parseInt(course.rating).toFixed(1)} average based on {courseReviews.length} reviews.
												</span>
											</div>
											<div className={`${styles['row']} row`}>
												<div className={styles['side']}>
													<div>5 star</div>
												</div>
												<div className={styles['middle']}>
													<div className={styles['bar-container']}>
														<div className={styles['bar-5']} style={{ width: (stars5Ratio * 100).toString() + '%' }}></div>
													</div>
												</div>
												<div className={`${styles['side']} ${styles['right']}`}>
													<div>{stars5Count}</div>
												</div>
												<div className={styles['side']}>
													<div>4 star</div>
												</div>
												<div className={styles['middle']}>
													<div className={styles['bar-container']}>
														<div className={styles['bar-4']} style={{ width: (stars4Ratio * 100).toString() + '%' }}></div>
													</div>
												</div>
												<div className={`${styles['side']} ${styles['right']}`}>
													<div>{stars4Count}</div>
												</div>
												<div className={styles['side']}>
													<div>3 star</div>
												</div>
												<div className={styles['middle']}>
													<div className={styles['bar-container']}>
														<div className={styles['bar-3']} style={{ width: (stars3Ratio * 100).toString() + '%' }}></div>
													</div>
												</div>
												<div className={`${styles['side']} ${styles['right']}`}>
													<div>{stars3Count}</div>
												</div>
												<div className={styles['side']}>
													<div>2 star</div>
												</div>
												<div className={styles['middle']}>
													<div className={styles['bar-container']}>
														<div className={styles['bar-2']} style={{ width: (stars2Ratio * 100).toString() + '%' }}></div>
													</div>
												</div>
												<div className={`${styles['side']} ${styles['right']}`}>
													<div>{stars2Count}</div>
												</div>
												<div className={styles['side']}>
													<div>1 star</div>
												</div>
												<div className={styles['middle']}>
													<div className={styles['bar-container']}>
														<div className={styles['bar-1']} style={{ width: (stars1Ratio * 100).toString() + '%' }}></div>
													</div>
												</div>
												<div className={`${styles['side']} ${styles['right']}`}>
													<div>{stars1Count}</div>
												</div>
											</div>
										</div>


										<div className={styles['courses-review-comments']}>
											<h3>{courseReviews?.length || 0} Reviews</h3>

											{courseReviews && courseReviews.map((review, i)=>{
												if (i >= displayLength) return '';
												return (
													<div className={styles['user-review']} key={i}>
													<div className={styles['review-profile']}>
														<div className={`${styles['review-avatar']} ${styles['review-avatar-circle']}`}>{review.user[0].name.charAt(0).toUpperCase()}</div>
													</div>

													<div className={styles['review-rating']}>
													<ReactStars
														key={course._id}
														count={5}
														size={24}
														edit={false}
														emptyIcon={<i className="far fa-star"></i>}
														halfIcon={<i className="fa fa-star-half-alt"></i>}
														fullIcon={<i className="fa fa-star"></i>}
														activeColor="#ffd700"
														value={review.rating}
													/>

														<span className="d-inline-block">
															{review.user[0].name}
														</span>
													</div>

														<p>
															{review.comments}
														</p>
													</div>
												)
											})}

											<button type="button" className={`${styles['default-btn']} default-btn`} onClick={loadMore}>Load More</button>
										</div>
									</TabPanel>

									<TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
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
													value={rating}
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
												<button type="submit" className={`${styles['default-btn']} default-btn mt-20`}>Save and continue</button>
											</div>
										</form>}

										{isReviewProvided && <h4>You have rated (<a href="" onClick={editRating}>Edit</a>)</h4>}
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
