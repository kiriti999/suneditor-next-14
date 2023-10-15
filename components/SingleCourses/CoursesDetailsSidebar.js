import React, { useState, useEffect } from "react";
import { parseCookies } from 'nookies';
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));
import axios from "axios";
import { axiosApi } from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { kConverter } from '../../utils/cart/currencyHelper';

const CoursesDetailsSidebar = ({
	_id,
	title,
	video_course_price,
	live_training_price,
	userId,
	profilePhoto,
	duration,
	lessons,
	loggedInUser,
	courseData,
}) => {
	const { token } = parseCookies();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [display, setDisplay] = useState(false);
	const dispatch = useDispatch();
	const [add, setAdd] = useState(false);
	const [alreadyBuy, setAlreadyBuy] = useState(false);
	const [totalCost, setTotalCost] = useState(0);
	const [displayVideoPrice, setDisplayVideoPrice] = useState(false);
	const [displayLivePrice, setDisplayLivePrice] = useState(false);

	const purchaseInitData = [
		{ id: '1', name: 'liveType', purchaseType: 'liveType', label: 'Live training', checked: false },
		{ id: '2', name: 'courseType', purchaseType: 'courseType', label: 'Course videos', checked: false }
	];

	const [selectedItems, setSelectedItem] = useState([]);
	const [purchaseData, setPurchaseData] = useState(purchaseInitData);
	const [purchaseTypeError, setPurchaseTypeError] = useState(false);

	const addToCart = (id, title, live_training_price, video_course_price, total_cost, lessons, duration, image) => {

		console.log('existing cartItems: ', cartItems);

		let courseObj = {
			id, title, live_training_price, video_course_price, total_cost, lessons, duration, image
		};

		courseObj['quantity'] = 1;

		const filtered = purchaseInitData.filter((item, i) => selectedItems.includes(item.id));

		if (filtered.length) {
			courseObj['selected'] = filtered.length === 2 ? 'both' : filtered[0].purchaseType

			dispatch({
				type: "ADD_TO_CART",
				data: courseObj,
			});
		} else {
			setPurchaseTypeError(true);
		}
	};

	useEffect(() => {
		let timeout = setTimeout(() => {
			setPurchaseTypeError(false);
		}, 3000)
		return (() => {
			clearTimeout(timeout)
		})
	}, [purchaseTypeError])

	useEffect(() => {
		console.log('cartItems ', cartItems);
		const courseExist = cartItems.find((cart) => {
			console.log('cart ', cart);
			return _id === cart.id.split('_')[1];
		});
		courseExist && setAdd(true);

		if (token && _id) {
			const payload = { params: { courseId: _id }, headers: { Authorization: token } };
			const url = `${axiosApi.baseUrl}/api/v1/courses/enrolled/exist`;
			axios.get(url, payload).then((result) => {
				console.log('is course purchased:: result:', result);
				setAlreadyBuy(result.data === true);
			});
		}

	}, [cartItems, _id]);

	useEffect(() => {
		setDisplay(true);
	}, []);

	const { enrolled_courses } = loggedInUser ? loggedInUser : "";
	const router = useRouter();
	// Popup Video
	const [enrolled, setEnrolled] = React.useState(0);
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const countEnrolled = async () => {
			const url = `${axiosApi.baseUrl}/api/v1/courses/enrolled/${_id}`;
			const response = await axios.get(url, {
				headers: { Authorization: token }
			});
			setEnrolled(response.data?.count || 0);
		};
		countEnrolled();
	}, []);

	useEffect(() => {
		console.log('selectedItems ', selectedItems);
		setAdd(false)
	}, [selectedItems])

	const checkBoughtAlready = () => {
		return (
			enrolled_courses.filter(function (val) {
				return val.courseId === id;
			}).length > 0
		);
	};

	const getTotalCost = async (checked, id) => {
		if (checked) {
			setPurchaseTypeError(false);
			if (id == 1) {
				if (courseData.live_training_price) {
					setDisplayLivePrice(true)
					setTotalCost((total) => (total + parseInt(courseData.live_training_price)));
					setSelectedItem((prev) => [...prev, id]);
				}
			}
			if (id == 2) {
				setDisplayVideoPrice(true)
				setTotalCost((total) => (total + parseInt(courseData.video_course_price)));
				setSelectedItem((prev) => [...prev, id]);
			}
		} else {
			if (id == 1) {
				setDisplayLivePrice(false)
				if (courseData.live_training_price) {
					setTotalCost((total) => total - parseInt(courseData.live_training_price));
				}
				await handleRemove(`live_${courseData.id}`)
			}
			if (id == 2) {
				setDisplayVideoPrice(false)
				setTotalCost((total) => total - parseInt(courseData.video_course_price));
				await handleRemove(`course_${courseData.id}`)
			}
			setSelectedItem((prev) => prev.filter((eid) => eid !== id))
		}
	}

	const handleRemove = async (cartId) => {
		dispatch({
			type: "REMOVE_CART",
			id: cartId,
		});
	};


	const handleOnChange = (e, i) => {
		const { checked, id } = e.target;
		console.log(`checked: ${checked}, id: ${id}`);
		getTotalCost(checked, id)
	}

	return (
		<>
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

			<div className="courses-details-info">
				{/* <div className="image">
					<img src={profilePhoto} alt={title} />

					<div
						onClick={(e) => {
							e.preventDefault();
							openModal();
						}}
						className="link-btn popup-youtube"
					></div>

					<div className="content">
						<i className="flaticon-play"></i>
						<span>Course Preview</span>
					</div>
				</div> */}

				<ul className={purchaseTypeError ? 'cart-highlight-border info' : 'info'}>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> Instructor
							</span>
							{userId?.name}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Duration
							</span>
							{duration}
						</div>
					</li>
					<li>
						<span className="mb-4" style={{ fontWeight: 'bold' }}><i className="flaticon-agenda"></i> Select purchase type</span>
					</li>
					<div className='mt-2 d-flex'>
						<div className='d-flex flex-direction-col col-12'>

							<div className="mb-2">
								<div className='row'>
									{live_training_price && <div className='col-9'>
										<input type="checkbox" id={purchaseData[0].id} name={purchaseData[0].name} onChange={(e) => handleOnChange(e)} />
										<label htmlFor={`${purchaseData[0].id}`} style={{ marginLeft: '15px' }}>{purchaseData[0].label}</label>
									</div>}
									{displayLivePrice && <div className='mb-2 col-3' style={{ color: 'red' }}>{live_training_price}</div>}
								</div>
							</div>

							<div className="mb-2">
								<div className='row'>
									<div className='col-9'>
										<input type="checkbox" id={purchaseData[1].id} name={purchaseData[1].name} onChange={(e) => handleOnChange(e)} />
										<label htmlFor={`${purchaseData[1].id}`} style={{ marginLeft: '15px' }}>{purchaseData[1].label}</label>
									</div>
									{displayVideoPrice && <div className='col-3' style={{ color: 'red' }}>{video_course_price}</div>}
								</div>
							</div>
							{purchaseTypeError === true && <h6 style={{ color: 'red', marginTop: '10px' }}>Please select purchase type</h6>}
						</div>
					</div>
					<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Price
							</span>
							{/*&#8377;{kConverter(video_course_price)}*/}
							&#8377;{(totalCost)}
						</div>
					</li>
					{/* <li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
								Lessons
							</span>
							{parseInt(lessons)}
						</div>
					</li> */}
					{/* <li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Enrolled
							</span>
							{enrolled} students
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Access
							</span>
							Lifetime
						</div>
					</li> */}
				</ul>

				<div className="btn-box">
					{alreadyBuy ? (
						<button
							onClick={() => router.push("/my-courses")}
							className="default-btn"
						>
							<i className="flaticon-shopping-cart"></i> View My
							Courses
							<span></span>
						</button>
					) : (
						<>
							{add ? (
								<button
									className="default-btn"
									onClick={() => router.push("/cart")}
								>
									<i className="flaticon-tag"></i> View Cart{" "}
									<span></span>
								</button>
							) : (
								<button
									className="default-btn"
									onClick={() =>
										addToCart(
											_id,
											title,
											live_training_price,
											video_course_price,
											totalCost,
											lessons,
											duration,
											profilePhoto
										)
									}
								>
									<i className="flaticon-tag"></i> Add to cart{" "}
									<span></span>
								</button>
							)}
						</>
					)}
				</div>

				<div className="courses-share">
					<div className="share-info">
						<span>
							Share This Course <i className="flaticon-share"></i>
						</span>

						<ul className="social-link">
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsSidebar;
