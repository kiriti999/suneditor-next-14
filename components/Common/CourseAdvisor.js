import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from './CourseAdvisor.module.css';

const CourseAdvisor = () => {
	return (
		<>
			<div className="advisor-area bg-f9f9f9 ptb-100">
				<div className="container">
					<div className="section-title">
						<span className={styles['sub-title']}>Instructor</span>
						<h2>Course Advisor</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
					</div>

					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							992: {
								slidesPerView: 2,
							},
						}}
						modules={[Pagination, Autoplay]}
						className={`advisor-slides ${styles['advisor-slides']}`}
					> 
						<SwiperSlide>
							<div className={styles['single-advisor-box']}>
								<div className={`${styles['row']} row align-items-center`}>
									<div className={`${styles['col-lg-4']} col-lg-4 col-md-4`}>
										<div className={styles['advisor-image']}>
											<img
												src="/images/advisor/advisor1.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className={`${styles['col-lg-8']} col-lg-8 col-md-8`}>
										<div className={styles['advisor-content']}>
											<h3>
												<a href="profile.html">
													William James
												</a>
											</h3>
											<span className={styles['sub-title']}>
												Project Management Expert
											</span>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dol aliqua.
											</p>

											<ul className={styles['social-link']}>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
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
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-advisor-box']}>
								<div className={`${styles['row']} row align-items-center`}>
									<div className={`${styles['col-lg-4']} col-lg-4 col-md-4`}>
										<div className={styles['advisor-image']}>
											<img
												src="/images/advisor/advisor2.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className={`${styles['col-lg-8']} col-lg-8 col-md-8`}>
										<div className={styles['advisor-content']}>
											<h3>
												<a href="profile.html">
													Sarah Taylor
												</a>
											</h3>
											<span className={styles['sub-title']}>
												Agile Project Expert
											</span>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dol aliqua.
											</p>
											<ul className={styles['social-link']}>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
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
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-advisor-box']}>
								<div className={`${styles['row']} row align-items-center`}>
									<div className={`${styles['col-lg-4']} col-lg-4 col-md-4`}>
										<div className={styles['advisor-image']}>
											<img
												src="/images/advisor/advisor3.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className={`${styles['col-lg-8']} col-lg-8 col-md-8`}>
										<div className={styles['advisor-content']}>
											<h3>
												<a href="profile.html">
													James Andy
												</a>
											</h3>
											<span className={styles['sub-title']}>
												QA Project Expert
											</span>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dol aliqua.
											</p>
											<ul className={styles['social-link']}>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
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
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default CourseAdvisor;
