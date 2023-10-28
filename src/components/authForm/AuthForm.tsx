import React, {useState} from 'react';
import eye from "../../assets/images/Eye_invisible.svg";
import {useForm} from "react-hook-form";
import IAuthInputs from "../../models/IAuthInputs";

interface IAuthForm {
    onSubmit: any,

}

function AuthForm({onSubmit}: IAuthForm) {
    const {
        register,
        formState: {
            errors,
            isValid,
            touchedFields,
            dirtyFields
        },
        handleSubmit
    } = useForm<IAuthInputs>({
        mode: "onChange"
    })
    const [passwordShown, setPasswordShown] = useState(false)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
            <div className="auth__input-wrapper">
                <label className='auth__label label'>
                    <p className='label__title'>Логин</p>
                    <input
                        autoComplete='username'
                        className={'label__input' + (dirtyFields?.username ? ' filled' : ' unfilled') +
                            (errors?.username ? ' invalid' : '')}
                        {...register('username', {
                            required: "Поле не должно быть пустым",
                            minLength: {
                                value: 3,
                                message: "Длина логина должна быть не меньше 3 символов"
                            }
                        })}
                    />
                </label>
                {errors?.username && <p className="error-text">{errors?.username?.message || "Ошибка!"}</p>}
            </div>
            <div className="auth__input-wrapper">
                <label className='auth__label label'>
                    <p className='label__title'>Пароль</p>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className={'label__input' + (dirtyFields?.password ? ' filled' : ' unfilled') +
                            (errors?.password ? ' invalid' : '')}
                        {...register('password', {
                            required: "Поле не должно быть пустым",
                            minLength: {
                                value: 6,
                                message: "Длина пароля должна быть не меньше 6 символов"
                            }
                        })}
                    />
                    {touchedFields.password && <img
                        src={eye}
                        alt="Показать пароль"
                        className="password-show"
                        onClick={() => setPasswordShown(!passwordShown)}
                    />}
                </label>
                {errors?.password && <p className="error-text">{errors?.password?.message || "Ошибка!"}</p>}
            </div>
            <button disabled={!isValid} className='auth__submit-btn' type="submit">Начать</button>
            <p className="restore-password">
                Забыли пароль? <a rel="noreferrer" href="https://telegram.org" target="_blank">Напишите боту</a>
            </p>
        </form>
    );
}

export default AuthForm;