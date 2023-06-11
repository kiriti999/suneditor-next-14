import React, { useState, createContext } from 'react';

export const Context = createContext();

const FilterStore = ({ children }) => {

    const [state, setState] = useState({
        courses: [],
        filteredCourses: [],
        searchParam: '',
    });


    return (
        <Context.Provider
            value={[state, setState]}>
            {children}
        </Context.Provider>
    );
};

export default FilterStore;