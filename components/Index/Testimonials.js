import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from '../Common/Testimonials.module.css';

const Testimonials = () => {
  return (
    <>
      <div className={`${styles['testimonials-area']} ptb-100`}>
        <div className="container">
          <div className="section-title">
            <span className={styles['sub-title']}>Testimonials</span>
            <h2>What People Say About whatsnxt</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className={styles['testimonials-slides']}
          >
            <SwiperSlide>
              <div className={styles['single-testimonials-item']}>
                <img
                  src="/images/user1.jpg"
                  className={styles['client-img']}
                  alt="image"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <h3>John Smith</h3>
                <span>Python Developer</span>

                <div className={styles['shape-img']}>
                  <img
                    src="/images/shape4.png"
                    className={`${styles['shape-1']} shape-1`}
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className={`${styles['shape-2']} shape-2`}
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className={`${styles['shape-3']} shape-3`}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles['single-testimonials-item']}>
                <img
                  src="/images/user2.jpg"
                  className={styles['client-img']}
                  alt="image"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <h3>Sarah Taylor</h3>
                <span>PHP Developer</span>

                <div className={styles['shape-img']}>
                  <img
                    src="/images/shape4.png"
                    className={`${styles['shape-1']} shape-1`}
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className={`${styles['shape-2']} shape-2`}
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className={`${styles['shape-3']} shape-3`}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles['single-testimonials-item']}>
                <img
                  src="/images/user3.jpg"
                  className={styles['client-img']}
                  alt="image"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <h3>David Warner</h3>
                <span>QA Developer</span>

                <div className={styles['shape-img']}>
                  <img
                    src="/images/shape4.png"
                    className={`${styles['shape-1']} shape-1`}
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className={`${styles['shape-2']} shape-2`}
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className={`${styles['shape-3']} shape-3`}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
