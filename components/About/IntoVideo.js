import React from "react";
import dynamic from "next/dynamic";
import styles from './Video.module.css';
const ModalVideo = dynamic(import("react-modal-video"));

const IntoVideo = () => {
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
			<div className={styles['video-box']}>
				<div className={styles['image']}>
					<img
						src="/images/video-img1.jpg"
						className="shadow"
						alt="image"
					/>
				</div>

				<div
					onClick={()=> openModal()}
					className={`${styles['video-btn']} popup-youtube`}
				>
					<i className="flaticon-play"></i>
				</div>
				
				<div className="shape10">
					<img src="/images/shape9.png" alt="image" />
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

export default IntoVideo;
