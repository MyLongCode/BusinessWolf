import React, {useState} from 'react';
import eye from '../images/Eye_invisible.svg'

export interface ICustomInput {
    title: string
    type: 'text' | 'password'
    name: string
    id: string
    autoComplete: string
    maxLength: number
    validation: any
    isPassword: boolean
}

function CustomInput(props: ICustomInput) {
    const [passwordShown, setPasswordShown] = useState(false)

    return (
        <label className="input_container">
            <span className="input_title">{props.title}</span>
            <div className={"input_field_container" + (props.validation.value ? " filled" : " unfilled") +
                ((props.validation.errorMessage && props.validation.isDirty) ? " input_error" : "")}>
                <input
                    onBlur={() => props.validation.onBlur()}
                    onChange={e => props.validation.onChange(e)}
                    value={props.validation.value}
                    type={props.isPassword ? (passwordShown ? "text" : "password") : props.type}
                    name={props.name}
                    id={props.id}
                    autoComplete={props.autoComplete}
                    maxLength={16}
                    placeholder=''
                />
                {props.isPassword && props.validation.value &&
                    <img
                        src={eye}
                        alt="Показать пароль"
                        className="password_show"
                        onClick={() => setPasswordShown(!passwordShown)}
                    />}
            </div>
            {(props.validation.isDirty && props.validation.errorMessage) &&
                <p className="error_text">{props.validation.errorMessage}</p>}
        </label>
    );
}

export default CustomInput;