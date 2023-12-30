import { useState } from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { axiosApi } from '@/utils/baseUrl';
import Link from '@/utils/ActiveLink';
import Modal from '@/components/Modal/Modal';
import { toast } from 'react-toastify';
import { deleteIndex } from '../../api/v1/courses/search/algolia';
import styles from '../../admin/pending-requests.module.css';

const CourseEdit = ({ courses: data }) => {
	const [courses, setCourses] = useState(data);
	const [showModal, setShowModal] = useState(false);
	const [deleteCourseIds, setDeleteCourseIds] = useState([]);

	const { token } = parseCookies();

	const deleteCourseHandler = async () => {
		try {
			const deleteRequest = deleteCourseIds.map((id) =>
				axios.delete(
					`${axiosApi.baseUrl}/api/v1/courses/course/delete?id=${id}`,
					{
						headers: { Authorization: token }
					}
				)
			);

			const result = await Promise.allSettled(deleteRequest);
			console.log('course-edit.js:: result: ', result);

			const successIds = result.map(({ status, value }) => {
				if (status === 'fulfilled' && value.status === 200) {
					deleteIndex(value.data.id)
					return value.config.url.replace(
						`${axiosApi.baseUrl}/api/v1/courses/course/delete?id=`,
						''
					);
				}
			});

			setCourses((preCourse) =>
				preCourse.filter(
					(course) =>
						!(
							deleteCourseIds.includes(course._id) &&
							successIds.includes(course._id)
						)
				)
			);

			toast.success('Successfully delete courses.');
		} catch (error) {
			console.log('error delete:', error)
			toast.error('Not able to delete courses. Please try again.');
		} finally {
			setDeleteCourseIds([]);
			setShowModal(false);
		}
	};

	const modalCloseHandler = () => {
		setShowModal(false);
		setDeleteCourseIds([]);
	};

	const deleteHandler = (id) => {
		setShowModal(true);
		setDeleteCourseIds([id]);
	};

	const deleteBulkHandler = () => {
		setShowModal(true);
	};

	const bulkSelection = (id) => {
		setDeleteCourseIds((preData) => {
			const isExist = preData.includes(id);

			if (isExist) {
				return preData.filter((courseId) => courseId !== id);
			} else {
				return [...preData, id];
			}
		});
	};

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-lg-4">
							<div className={styles['td-sidebar']}>
								<ul>
									<li>
										<Link href="/teacher/courses" activeClassName={styles['active']}>
											<a>My Courses</a>
										</Link>
									</li>
									<li>
										<Link
											href="/teacher/course/create"
											activeClassName={styles['active']}
										>
											<a>Create A Course</a>
										</Link>
									</li>
									<li>
										<Link
											href="/teacher/courses/course-edit"
											activeClassName={styles['active']}
										>
											<a>Edit My Course</a>
										</Link>
									</li>
									<li>
										<Link
											href="/teacher/course/upload-course-video"
											activeClassName={styles['active']}
										>
											<a>Upload Course Video</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-md-8 col-lg-8">
							<div className="mb-4 d-flex justify-content-end">
								<button
									className="btn btn-sm btn-danger"
									disabled={deleteCourseIds.length < 2}
									onClick={deleteBulkHandler}
								>
									Delete All
								</button>
							</div>
							<div className="table-responsive">
								<table className="table vertical-align-top">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Courses</th>
											<th scope="col" className="text-right">
												Action
											</th>
										</tr>
									</thead>

									<tbody>
										{courses.length ? (
											courses.map((course) => (
												<tr key={course._id}>
													<th scope="row">
														<input
															type="checkbox"
															className="form-check-input"
															checked={deleteCourseIds.includes(course._id)}
															onChange={() => bulkSelection(course._id)}
														/>
													</th>
													<td>{course.title}</td>
													<td className="text-right">
														<button
															type="button"
															className="btn btn-danger me-2"
															onClick={() => deleteHandler(course._id)}
														>
															<i className="bx bxs-trash"></i>
														</button>

														<Link
															href="/teacher/course/[id]"
															as={`/teacher/course/${course._id}`}
														>
															<a className="btn btn-success">
																<i className="bx bxs-edit"></i>
															</a>
														</Link>
													</td>
												</tr>
											))
										) : (
											<tr className="text-center">
												<td colSpan="3">Empty</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Modal
				title="Delete Course"
				description="Do you want to really delete the course?"
				showModal={showModal}
				buttonOneText="Close"
				buttonOneHandler={modalCloseHandler}
				buttonTwoText="Delete"
				buttonTwoType="danger"
				buttonTwoHandler={deleteCourseHandler}
				closeHandler={modalCloseHandler}
			/>
		</>
	);
};

CourseEdit.getInitialProps = async (ctx) => {
	const { token } = parseCookies(ctx);
	if (!token) {
		return { courses: [] };
	}

	const payload = {
		headers: { Authorization: token }
	};

	const url = `${axiosApi.baseUrl}/api/v1/courses/teacher/my-courses`;
	const response = await axios.get(url, payload);

	return response.data;
};

export default CourseEdit;
