import React from 'react';
import './answer.css';

function Answer({id, isSelected, clickHandler}: { id: number, isSelected: boolean, clickHandler: any }) {
    return (
        <li className={`answer ${isSelected && 'answer_selected'}`} onClick={() => {
            clickHandler(id)
        }}>
            <div className={`answer__toggle toggle ${isSelected && 'toggle_selected'}`}>
                {isSelected && <div className='toggle__dot'/>}
            </div>
            <p className='answer__text'>{`Вопрос ${id}`}</p>
        </li>
    );
}

export default Answer;