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
	price,
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
	const [totalCost, setTotalCost] = useState(price);
	const [checks, setChecks] = useState(0);

	const purchaseInitData = [
		{ id: 1, name: 'liveType', purchaseType: 'liveType', label: 'purchase live training', checked: false },
		{ id: 2, name: 'courseType', purchaseType: 'courseType', label: 'purchase course videos', checked: false }];

	const [purchaseTypes, setPurchaseTypes] = useState([]);
	const [purchaseData, setPurchaseData] = useState(purchaseInitData);
	const [purchaseTypeError, setPurchaseTypeError] = useState(false);

	const addToCart = (courseId, title, cost, lessons, duration, image) => {
		let courseObj = {};
		courseObj["id"] = courseId;
		courseObj["title"] = title;
		courseObj["price"] = cost;
		courseObj["lessons"] = lessons;
		courseObj["duration"] = duration;
		courseObj["image"] = image;
		courseObj["quantity"] = 1;
		if (purchaseTypes.length > 0) {
			dispatch({
				type: "ADD_TO_CART",
				data: courseObj,
			});
		} else {
			setPurchaseTypeError(true)
		}
	};

	useEffect(() => {
		let timeout = setTimeout(() => {
			setPurchaseTypeError(false);
		}, 3000)
		return (() => {
			clearTimeout(timeout)
		})
	})

	useEffect(() => {
		const courseExist = cartItems.find((cart) => {
			return _id === cart.id;
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

	const checkBoughtAlready = () => {
		return (
			enrolled_courses.filter(function (val) {
				return val.courseId === id;
			}).length > 0
		);
	};

	const handleOnChange = (e, i) => {
		const { checked, id } = e.target;
		let count;
		if (checked) {
			count = checks + 1;
			setChecks(count);
			if (count === purchaseData.length) {
				setTotalCost((total) => (total + parseInt(courseData.price)));
				setPurchaseTypes([...purchaseTypes, purchaseData[i]]);
			}
		} else {
			setChecks(checks - 1);
			if (checks === purchaseData.length) {
				setTotalCost((total) => total - parseInt(courseData.price));
				setPurchaseTypes((prev) => prev.filter((item) => item.id !== parseInt(id)));
			}
		}
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
					<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Price
							</span>
							{/*&#8377;{kConverter(price)}*/}
							&#8377;{(totalCost)}
						</div>
					</li>
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
						<div className='mt-2' >
							<h6 className="mb-4" style={{ fontWeight: 'bold' }}>Select purchase type</h6>
							<div className='d-flex flex-direction-col'>
								{purchaseData.map((item, index) => {
									return (
										<div className="items-center mb-2" key={index}>
											<input type="checkbox" id={item.id} name={item.name} onChange={(e) => handleOnChange(e, index)} />
											<label htmlFor={`custom-checkbox-${index}`} style={{ marginLeft: '15px' }}>{item.label}</label>
										</div>
									)
								})}
							</div>
							{purchaseTypeError && <h6 style={{ color: 'red', marginTop: '10px' }}>Please select purchase type</h6>}
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
