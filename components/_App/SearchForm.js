import React, { startTransition, useContext, useState } from 'react'
import { Context } from 'context/filterStore'
import { useRouter } from 'next/router';

const SearchForm = ({ }) => {

    const [state, setState] = useContext(Context);
    const router = useRouter();


    const handleSearch = (e) => {
        router.push(`/courses/search?q=${state.searchParam}`);
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
                    // handleSearch(e);
                }}
            />
            <button type="submit" onClick={handleSearch}>
                <i className="flaticon-search"></i>
            </button>
        </form>
    )
}

export default SearchForm
