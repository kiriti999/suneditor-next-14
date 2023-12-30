import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/slices/blogSlice';
import Pagination from '../../components/pagination/pagination';
import styles from './blog-client.module.css';

const Blog = () => {
    const blog = useSelector((store) => store.blog);
    const dispatch = useDispatch();
    const [recordsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = blog.articles.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(blog.articles.length / recordsPerPage);

    useEffect(() => {
        dispatch(getPosts({ start: 1, limit: 10 }))
    }, [])

    console.log('blog ', blog)

    return (
        <>
            <div className='row'>
                {blog.loading && <div>Loading...</div>}
                {!blog.loading && blog.error === '' && blog.articles.length === 0 && <div>No data in this category...</div>}
                {!blog.loading && blog.error ? <div>Error: {blog.error}</div> : null}
                {!blog.loading && blog.error === '' && blog.articles.length > 0 ? (
                    <>
                        {currentRecords.length && currentRecords.map((item) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={item._id}>
                                    <div className={styles['single-blog-post-box']}>
                                        <div className={styles['post-image']}>
                                            <Link legacyBehavior href={`/blog/${item._id}`}>
                                                <a className="d-block">
                                                    <img src={item.categoryImage} alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles['post-content']}>
                                            <Link legacyBehavior href="#">
                                                <a className={styles['category']}>{item.categoryName}</a>
                                            </Link>
                                            <h3>
                                                <Link legacyBehavior href={`/blog/${item._id}`}>
                                                    <a>{item.title}</a>
                                                </Link>
                                            </h3>
                                            <ul className={`${styles['post-content-footer']} d-flex justify-content-between align-items-center`}>
                                                {item.updatedAt && <li>
                                                    <i className='bx bx-calendar'></i> {item.updatedAt}
                                                </li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : null}
            </div>

            <div className="col-lg-12 col-md-12">
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
}

export default Blog;