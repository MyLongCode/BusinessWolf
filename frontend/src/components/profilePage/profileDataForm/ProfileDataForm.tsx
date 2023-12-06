import { clsx } from 'clsx'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import IUserPatch from '../../../models/IUserPatch'
import './profileDataForm.css'

interface IFormInputs {
	name: string
	phone: string
	email: string
	address: string
	grade: string
}

function ProfileDataForm({ name, phone, email, address, grade }: IFormInputs) {
	const [emailValue, setEmailValue] = useState('')
	const [phoneValue, setPhoneValue] = useState('')
	const [addressValue, setAddressValue] = useState('')
	const { patchUser } = useActions()
	const { user } = useTypedSelector(state => state.auth)

	const {
		register,
		formState: { errors, touchedFields, dirtyFields },
		handleSubmit
	} = useForm<IFormInputs>({
		mode: 'onChange'
	})

	const submitHandler = () => {
		if (user) {
			const data: IUserPatch = {
				email: emailValue || email,
				phone: phoneValue || phone,
				address: addressValue || address,
				id: user.id
			}
			patchUser(data)

			setEmailValue('')
			setAddressValue('')
			setPhoneValue('')
		}
	}

	return (
		<form className='data__form form' onSubmit={handleSubmit(submitHandler)}>
			<div className='form__profile-inputs'>
				<label className='form__label label'>
					<p className='label__title'>Почта</p>
					<input
						className={clsx(
							'label__input',
							{
								unfilled: !touchedFields.email || !emailValue,
								filled: touchedFields.email && emailValue
							},
							{
								invalid: errors.email
							}
						)}
						{...register('email', {
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message:
									'Неверный формат. Пример электронной почты ivanov@mail.ru'
							}
						})}
						value={emailValue}
						onChange={e => setEmailValue(e.target.value)}
						placeholder={email}
						autoComplete='email'
					/>
					{errors?.email && (
						<p className='error-text'>{errors.email.message}</p>
					)}
				</label>
				<label className='form__label label'>
					<p className='label__title'>
						Адрес для подарочков от бизнес-волчонка
					</p>
					<input
						className={clsx(
							'label__input',
							{
								unfilled: !touchedFields.address || !addressValue,
								filled: touchedFields.address && addressValue
							},
							{
								invalid: errors.address
							}
						)}
						{...register('address')}
						value={addressValue}
						onChange={e => setAddressValue(e.target.value)}
						placeholder={address}
						autoComplete='off'
					/>
					{errors?.address && (
						<p className='error-text'>{errors.address.message}</p>
					)}
				</label>
				<label className='form__label label'>
					<p className='label__title'>Телефон</p>
					<input
						className={clsx(
							'label__input',
							{
								unfilled: !touchedFields.phone || !phoneValue,
								filled: touchedFields.phone && phoneValue
							},
							{
								invalid: errors.phone
							}
						)}
						{...register('phone', {
							pattern: {
								value: /[(+7)8]\d{10}/,
								message:
									'Неверный формат.' +
									' Номер телефона должен состоять из 11 цифр' +
									' (например +79999999999 или 89999999999)'
							}
						})}
						value={phoneValue}
						onChange={e => setPhoneValue(e.target.value)}
						placeholder={phone}
						autoComplete='off'
					/>
					{errors?.phone && (
						<p className='error-text'>{errors.phone.message}</p>
					)}
				</label>
			</div>

			<button type={'submit'} className={'form__submit-btn btn'}>
				Сохранить изменения
			</button>
		</form>
	)
}

export default ProfileDataForm
