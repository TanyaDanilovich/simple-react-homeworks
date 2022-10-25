import React from 'react';

export type DeleteButtonPropsType = {
    deleteAffairCallback: (id: number) => void
    id: number
    title: string
}

function DeleteButton(props: DeleteButtonPropsType) {
    const onClickDeleteButtonHandler = () => {
        props.deleteAffairCallback(props.id)
    }

    return (
        <button onClick={onClickDeleteButtonHandler}>{props.title}</button>
    );
}

export default DeleteButton;