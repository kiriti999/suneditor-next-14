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
	const [displaySearch, setDisplaySearch] = useState(false);

	user = userObject !== null ? userObject : user;

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	const toggleSearch = () => {
		setDisplaySearch(!displaySearch);
	}

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

	useEffect(() => {
		const onScroll = document.addEventListener('scroll', () => {
			if (!menu) setMenu(true);
		});

		return () => document.removeEventListener('scroll', onScroll);
	}, [menu]);

	useEffect(() => {
		const onClick = document.addEventListener('click', (event) => {
			let elem = event.target;
			while (elem.parentNode !== null) {
				if (elem.id === 'navbar') return;
				elem = elem.parentNode;
			}

			setMenu(true);
		});

		return () => document.removeEventListener('click', onClick);
	}, []);

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
						<div className={`navbar navbar-expand-lg navbar-light ${styles['navbar']} ${displaySearch ? 'd-none' : ''}`}>
							<Link legacyBehavior href="/">
								<a
									className={`navbar-brand ${styles['navbar-brand']}`}
								>
									<img src="/images/logo.png" alt="logo" />
								</a>
							</Link>

							<div className="d-flex d-lg-none align-items-center" onClick={toggleNavbar}>
								<span className="me-2">Menu</span>
								<i className={`bx ${menu ? 'bxs-up-arrow' : 'bxs-down-arrow'}`}></i>
							</div>

							<div className="d-flex d-lg-none align-items-center" onClick={toggleSearch}>
								<i className="bx bx-search"></i>
							</div>

							<div className={`${styles['others-option']} d-flex align-items-center order-lg-1`}>
								<div className={styles['option-item']}>
									<div className={styles['cart-btn']}>
										<Link legacyBehavior href="/cart">
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
											<Link legacyBehavior href="/">
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
													<Link legacyBehavior
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
													<Link legacyBehavior
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
													<Link legacyBehavior
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
													<Link legacyBehavior href="/">
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
										<Link legacyBehavior href="/authentication">
											<a className={`default-btn ${styles['default-btn']}`}>
												<i className="flaticon-user"></i>{" "}
												<div className="d-none d-lg-inline">Login/Register</div>
												<div className="d-inline-block d-lg-none">Login</div>
												<span></span>
											</a>
										</Link>
									)}
								</div>


								{/* <div className={styles['option-item']}>
									<Link legacyBehavior href="/contact">
										<a className="default-btn">
											<i className="flaticon-user"></i>{" "}
											Contact us <span></span>
										</a>
									</Link>
								</div> */}

							</div>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<div className="d-none d-md-block">
									<SearchForm />
								</div>

								<ul className={`navbar-nav ${styles['navbar-nav']}`}>
									<li className={`nav-item ${styles['nav-item']}`}>
										<Link legacyBehavior href="/" activeClassName={`active ${styles['active']}`}>
											<a
												className="nav-link"
											>
												Home{" "}
											</a>
										</Link>

									</li>

									<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
										<Link legacyBehavior href="/courses">
											<a
												className="nav-link"
											>
												Courses{" "}
											</a>
										</Link>

									</li>

									{/* <li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
										<Link legacyBehavior
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
										<Link legacyBehavior href="/blog">
											<a
												className="nav-link"
											>
												Blog{" "}
											</a>
										</Link>

									</li>

									{(user && !isTeacher && !isAdmin) && (
										<li className={`nav-item ${styles['nav-item']} ${styles['megamenu']}`}>
											<Link legacyBehavior href="/become-a-teacher">
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
												<Link legacyBehavior href="/teacher/dashboard">
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
											<Link legacyBehavior href="/admin/pending-requests">
												<a className="nav-link"
													onClick={toggleNavbar}>
													Dashboard
												</a>
											</Link>
										</li>
									)}
								</ul>
							</div>
						</div>

						<div className={`align-items-center d-lg-none ${displaySearch ? 'd-flex' : 'd-none'}`}>
							<SearchForm />
							<h2 className="ms-2 bx bx-x" onClick={toggleSearch}></h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
