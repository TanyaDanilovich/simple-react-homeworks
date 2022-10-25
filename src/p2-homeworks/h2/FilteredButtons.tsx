import React from 'react';
import {FilterType} from './HW2';

export type FilteredButtonPropsType = {
    setFilter: (filter: FilterType) => void
}

function FilteredButtons(props: FilteredButtonPropsType) {
    const setFilterAll = () => {
        props.setFilter('all')
    }

    const setFilterHigh = () => {
        props.setFilter('high')
    }
    const setFilterMiddle = () => {
        props.setFilter('middle')
    }
    const setFilterLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            <button onClick={setFilterAll}>all</button>
            <button onClick={setFilterLow}>low</button>
            <button onClick={setFilterMiddle}>middle</button>
            <button onClick={setFilterHigh}>hight</button>
        </div>
    );
}

export default FilteredButtons;