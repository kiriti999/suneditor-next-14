import React, { useState, useEffect } from "react";
import Link from "@/utils/ActiveLink";
import { signOut } from 'next-auth/react';
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../utils/auth";
import SearchForm from "./SearchForm";
import styles from './Navbar.module.css';

const Navbar = ({ user }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const { userObject } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [menu, setMenu] = useState(true);

	user = userObject !== null ? userObject : user;

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add(styles["is-sticky"]);
			} else {
				elementId.classList.remove(styles["is-sticky"]);
			}
		});
	});

	const isAdmin = user && user.role === "admin";
	const isTeacher = user && user.role === "teacher";

	const classOne = `collapse navbar-collapse ${styles['navbar-collapse']}` + (menu ? '' : ' show');
	const classTwo = `navbar-toggler ${styles['navbar-toggler']} navbar-toggler-right` +
		(menu ? ` collapsed ${styles['collapsed']}` : '');

	return (
		<>
			<div id="navbar" className={styles['navbar-area']}>
				<div className={styles['whatsnxt-nav']}>
					<div className={`container-fluid ${styles['container-fluid']}`}>
						<div className={`navbar navbar-expand-lg navbar-light ${styles['navbar']}`}>
							<Link href="/">
								<a
									onClick={toggleNavbar}
									className={`navbar-brand ${styles['navbar-brand']}`}
								>
									<img src="/images/logo.png" alt="logo" style={{ width: '200px', height: '100px' }} />
								</a>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
								data-toggle="collapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className={`${styles['icon-bar']} ${styles['top-bar']}`}></span>
								<span className={`${styles['icon-bar']} ${styles['middle-bar']}`}></span>
								<span className={`${styles['icon-bar']} ${styles['bottom-bar']}`}></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm />

								<ul className={`navbar-nav ${styles['navbar-nav']}`}>
									<li className={`nav-item ${styles['nav-item']}`}>
										<Link href="/" activeClassName={`active ${styles['active']}`}>
											<a
												className="nav-link"
											>
												Home{" "}
											</a>
										</Link>

									</li>

									<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
										<Link href="/courses">
											<a
												className="nav-link"
											>
												Courses{" "}
											</a>
										</Link>

									</li>

									{/* <li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
										<Link
											href="/products-list-2"
											activeClassName={`active ${styles['active']}`}
										>
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												Shop
											</a>
										</Link>
									</li> */}

									<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
										<Link href="/blog">
											<a
												className="nav-link"
											>
												Blog{" "}
											</a>
										</Link>

									</li>

									{(user && !isTeacher && !isAdmin) && (
										<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
											<Link href="/become-a-teacher">
												<a
													className="nav-link"
													onClick={toggleNavbar}>
													Become A Teacher
												</a>
											</Link>
										</li>
									)}

									{((user && isTeacher) ||
										(user && isAdmin)) && (
											<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
												<Link href="/teacher/dashboard">
													<a
														className="nav-link"
														onClick={toggleNavbar}
													>
														Teacher Dashboard
													</a>
												</Link>
											</li>
										)}
									{user && isAdmin && (
										<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
											<Link href="/admin/pending-requests">
												<a className="nav-link"
													onClick={toggleNavbar}>
													Dashboard
												</a>
											</Link>
										</li>
									)}
								</ul>

								<div className={`${styles['others-option']} d-flex align-items-center`}>
									<div className={styles['option-item']}>
										<div className={styles['cart-btn']}>
											<Link href="/cart">
												<a>
													<i className="flaticon-shopping-cart"></i>{" "}
													<span>
														{cartItems.length}
													</span>
												</a>
											</Link>
										</div>
									</div>

									<div className={styles['option-item']}>
										{user ? (
											<div className={styles['user-dropdown']}>
												<Link href="/">
													<a
														onClick={(e) => e.preventDefault()}
														className={`default-btn ${styles['default-btn']}`}>
														<i className="flaticon-user"></i>{" "}
														{user.name}{" "}
														<span></span>
													</a>
												</Link>

												<ul className={`dropdown-menu ${styles['dropdown-menu']}`}>
													<li className={`nav-item ${styles['nav-item']}`}>
														<Link legacyBehavior
															href="/my-courses"
															activeClassName={`active ${styles['active']}`}>
															<a onClick={toggleNavbar}
																className="nav-link">
																My Courses
															</a>
														</Link>
													</li>

													<li className={`nav-item ${styles['nav-item']}`}>
														<Link
															href="/user/my-profile"
															activeClassName={`active ${styles['active']}`}>
															<a
																onClick={toggleNavbar}
																className="nav-link">
																My Profile
															</a>
														</Link>
													</li>

													<li className={`nav-item ${styles['nav-item']}`}>
														<Link
															href="/user/edit-profile"
															activeClassName={`active ${styles['active']}`}>
															<a
																onClick={toggleNavbar}
																className="nav-link">
																Edit Profile
															</a>
														</Link>
													</li>

													<li className={`nav-item ${styles['nav-item']}`}>
														<Link
															href="/user/edit-password"
															activeClassName={`active ${styles['active']}`}>
															<a
																onClick={toggleNavbar}
																className="nav-link">
																Edit Password
															</a>
														</Link>
													</li>

													<li className={`nav-item ${styles['nav-item']}`}>
														<Link href="/">
															<a
																className="nav-link"
																onClick={(e) => {
																	e.preventDefault();
																	dispatch({
																		type: 'UPDATE_USEROBJ',
																		data: null
																	});
																	dispatch({
																		type: 'UPDATE_CART',
																		data: { cartItems: [], discount: 0 }
																	});
																	localStorage.removeItem('cart');
																	signOut();
																	handleLogout();
																}}>
																Logout
															</a>
														</Link>
													</li>
												</ul>
											</div>
										) : (
											<Link href="/authentication">
												<a className={`default-btn ${styles['default-btn']}`}>
													<i className="flaticon-user"></i>{" "}
													Login/Register <span></span>
												</a>
											</Link>
										)}
									</div>


									{/* <div className={styles['option-item']}>
										<Link href="/contact">
											<a className="default-btn">
												<i className="flaticon-user"></i>{" "}
												Contact us <span></span>
											</a>
										</Link>
									</div> */}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
