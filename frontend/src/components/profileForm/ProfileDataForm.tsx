import React from 'react';
import {useForm} from "react-hook-form";
import './profileDataForm.css'

interface IFormInputs {
    name: string,
    phone: string,
    email: string,
    address: string,
    grade: string
}

function ProfileDataForm({name, phone, email, address, grade}: IFormInputs) {
    const {
        register,
        formState: {
            errors
        }
    } = useForm<IFormInputs>({
        mode: "onChange"
    })

    return (
        <form className='data__form form'>
            <label className='form__label label'>
                <p className='label__title'>Почта</p>
                <input
                    disabled={true}
                    // className={'label__input' + (dirtyFields?.name ? ' filled' : ' unfilled') +
                    // (errors?.name ? ' invalid' : '')}
                    className={'label__input unfilled'}
                    {...register('email')}
                    value={email || ''}
                    autoComplete='email'
                />
            </label>
            <label className='form__label label'>
                <p className='label__title'>Адрес для подарочков от бизнес-волчонка</p>
                <input
                    disabled={true}
                    className={'label__input unfilled'}
                    {...register('address')}
                    value={address || ''}
                    autoComplete='off'
                />
            </label>
            <label className='form__label label'>
                <p className='label__title'>Телефон</p>
                <input
                    disabled={true}
                    className={'label__input unfilled'}
                    {...register('phone')}
                    value={phone || ''}
                    autoComplete='off'
                />
            </label>
            {errors?.name && <p className="form__error-text error-text">{errors?.name?.message || "Ошибка!"}</p>}
        </form>
    );
}

export default ProfileDataForm;