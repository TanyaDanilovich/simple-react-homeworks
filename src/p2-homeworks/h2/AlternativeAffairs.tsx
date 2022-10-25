import React from 'react'
import {AffairType, FilterType} from './HW2';
import MyAffair from './MyAffair';
import FilteredButtons from './FilteredButtons';

export type AlternativeAffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    filter: FilterType
    deleteAffairCallback: (id: number) => void
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {
    return (<>
            <span>{props.data.length} affairs with "{props.filter}" priority in my affairs list</span>
            <ol>
                {props.data.map(affair => <MyAffair affair={affair} key={affair._id}
                                                    deleteAffairCallback={props.deleteAffairCallback}/>)}
            </ol>

            <FilteredButtons setFilter={props.setFilter}/>
        </>

    )
}

export default AlternativeAffairs
