import React from 'react'
import { getPosts } from '../../store/slices/blogSlice';
import { useDispatch } from 'react-redux';


export function Pagination(props) {

    const dispatch = useDispatch();

    const { nPages, currentPage, setCurrentPage } = props;

    const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            dispatch(getPosts({ start: currentPage - 1, limit: 10 }))
        }
    }

    const nextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
            dispatch(getPosts({ start: currentPage + 1, limit: 10 }))
        }
    }

    return (
        <div className="widget-area">
            <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers" onClick={prevPage}>
                    <i className='bx bx-chevrons-left'></i>
                </a>
                {pageNumbers.map((pageNumber, index) => {
                    return (
                        <span key={index}>
                            <a href="#" onClick={() => setCurrentPage(pageNumber)} className={`page-numbers ${currentPage == pageNumber ? 'current' : ''}`}>{pageNumber}</a>
                        </span>
                    )
                })}
                <a href="#" className="next page-numbers" onClick={nextPage}>
                    <i className='bx bx-chevrons-right'></i>
                </a>
            </div>
        </div>
    );
}

export default Pagination;