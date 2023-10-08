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
        <div className="input_container">
            <p className="input_title">{props.title}</p>
            <input
                onBlur={() => props.validation.onBlur()}
                onChange={e => props.validation.onChange(e)}
                value={props.validation.value}
                type={props.isPassword ? (passwordShown ? "text" : "password") : props.type}
                name="login"
                id="login"
                autoComplete="login"
                maxLength={16}
                className={(props.validation ? "filled" : "unfilled") + (props.validation.errorMessage ? " input_error" : "")}
            />
            {(props.validation.isDirty && props.validation.errorMessage) &&
                <p className="error_text">{props.validation.errorMessage}</p>}
            {props.isPassword && props.validation.isDirty &&
                    <img
                        src={eye}
                        alt="Показать пароль"
                        className="password_show"
                        onClick={() => setPasswordShown(!passwordShown)}
                    />}
        </div>
    );
}

export default CustomInput;