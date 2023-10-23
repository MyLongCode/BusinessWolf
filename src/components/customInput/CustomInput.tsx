import React, {useState} from 'react';
import eye from '../../assets/images/Eye_invisible.svg'
import './customInput.css'

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
        <label className="input-container">
            <span className="input__title">{props.title}</span>
            <div className={"input__field-container" + (props.validation.value ? " filled" : " unfilled") +
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
                        className="password-show"
                        onClick={() => setPasswordShown(!passwordShown)}
                    />}
            </div>
            {(props.validation.isDirty && props.validation.errorMessage) &&
                <p className="error-text">{props.validation.errorMessage}</p>}
        </label>
    );
}

export default CustomInput;