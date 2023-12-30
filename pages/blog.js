import React from 'react';
import Sidebar from '../pages/sidebar/sidebar';
import BlogClient from '../components/Blog/blog-client';
import PageBanner from '../components/Common/PageBanner';
import styles from '../components/About/Blog.module.css';

export function Blog(props) {

    return (
        <div>
            <PageBanner
                pageTitle="Blog Page"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Page"
            />
            <div className={`${styles['blog-area']} pt-25 pb-100`}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 col-md-12">
                            <BlogClient></BlogClient>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Sidebar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Blog;
