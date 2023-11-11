import React, {useState} from 'react';
import './answer.css';

function Answer(props: {id: number, clickHandler: any }) {
    const [isSelected, setSelected] = useState(false);

    return (
        <li className={`answer ${isSelected && 'answer_selected'}`} onClick={() => {
            props.clickHandler(props.id)
            setSelected(!isSelected)
        }}>
            <div className={`answer__toggle toggle ${isSelected && 'toggle_selected'}`}>
                {isSelected && <div className='toggle__dot'/>}
            </div>
            Ответ 1
        </li>
    );
}

export default Answer;