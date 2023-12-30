import React from 'react';
import Link from 'next/link';
import styles from './PageBanner.module.css';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className={styles['page-title-area']}>
            <div className="container">
                <div className={styles['page-title-content']}>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li className={styles['active']}>{activePageText}</li>
                    </ul>

                    {/* <h2>{pageTitle}</h2> */}
                </div>
            </div>

        </div>
    );
}

export default PageBanner;