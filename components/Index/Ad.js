import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));
import adStyles from './Ad.module.css';
import videoStyles from '../About/Video.module.css';

const Ad = () => {
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
			<div className={adStyles['video-area']}>
				<div className="container">
					<div className={`${videoStyles['video-box']} mt-0`}>
						<div className={videoStyles['image']}>
							<img
								src="/images/video-img2.jpg"
								className="shadow"
								alt="image"
							/>
						</div>
			 
						<div
							onClick={()=> openModal()}
							className={videoStyles['video-btn']}
						>
							<i className="flaticon-play"></i>
						</div>
					</div>
				</div>
			</div>

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

export default Ad;
