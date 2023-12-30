import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from '../Common/Partner.module.css';

const Partner = () => {
	return (
		<>
			<div className={`${styles['partner-area']} pt-100 pb-70 border-bottom`}>
				<div className="container">
					<Swiper
						spaceBetween={10}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							567: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 5,
							},
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Autoplay]}
						className={styles['partner-slides']}
					>
						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner1.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner2.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner3.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner4.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner5.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner6.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className={styles['single-partner-item']}>
								<img
									src="/images/partner/partner4.png"
									alt="image"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Partner;
