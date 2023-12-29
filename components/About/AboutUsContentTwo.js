import React from "react";
import dynamic from "next/dynamic";
import styles from './AboutUs.module.css';
const ModalVideo = dynamic(import("react-modal-video"));

const AboutUsContentTwo = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`${styles['about-area-two']} ptb-100`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className={styles['about-content-box']}>
                <span className={styles['sub-title']}>Distance Learning</span>
                <h2>Build Your Project Management Skills Online, Anytime</h2>
                <p>
                  Want to learn and earn PDUs or CEUs on your schedule —
                  anytime, anywhere? Or, pick up a new skill quickly like,
                  project team leadership or agile? Browse our most popular
                  online courses.
                </p>
                <p>
                  <strong>
                    Grow your knowledge and your opportunities with thought
                    leadership, training and tools.
                  </strong>
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className={styles['about-video-box']}>
                <div className={styles['image']}>
                  <img src="/images/about-img5.jpg" alt="image" />
                </div>

                <div
                  onClick={() => openModal()}
                  className={`${styles['video-btn']} popup-youtube`}
                >
                  <i className="flaticon-play"></i>
                </div>

                <div className={`${styles['shape10']} shape10`}>
                  <img src="/images/shape9.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['shape3']} shape3`}>
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className={`${styles['shape4']} shape4`}>
          <img src="/images/shape4.png" alt="image" />
        </div>
        <div className={`${styles['shape2']} shape2`}>
          <img src="/images/shape2.png" alt="image" />
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      {display ? (
        <ModalVideo
          channel="youtube"
          isOpen={!isOpen}
          videoId="bk7McNUjWgw"
          onClose={() => setIsOpen(!isOpen)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AboutUsContentTwo;
