import React from 'react';
import {AffairType} from './HW2';
import DeleteButton from './DeleteButton';

export type MyAffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

const MyAffair = (props: MyAffairPropsType) => {
        return (
            <li>
                {props.affair.name}
                <DeleteButton deleteAffairCallback={props.deleteAffairCallback} id={props.affair._id} title="delete"/>
            </li>
        );
    }
;

export default MyAffair;