import React, { startTransition, useContext, useState } from 'react'
import { Context } from 'context/filterStore'
import { useRouter } from 'next/router';
import search from 'pages/api/v1/courses/search';

const SearchForm = ({ }) => {

    const [state, setState] = useContext(Context);
    const router = useRouter();


    const handleSearch = async (e) => {
        let hits = await search(state.searchParam);
        setState({
            ...state,
            filteredCourses: hits
        })
        router.push(`/algolia_search?q=${state.searchParam}`);
    };


    return (
        <form className="search-box" onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className="input-search"
                placeholder="Search for anything"
                name='search'
                value={state.searchParam}
                onChange={(e) => {
                    setState({ ...state, searchParam: e.target.value });
                }}
                // onKeyDown={(e) => handleSearch(e)}
            />
            <button type="submit" onClick={handleSearch}>
                <i className="flaticon-search"></i>
            </button>
        </form>
    )
}

export default SearchForm
