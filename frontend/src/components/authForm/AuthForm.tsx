import React, { useEffect, useState } from 'react'
import eye from 'assets/images/Eye.svg'
import eyeSlash from 'assets/images/Eye-slash.svg'
import { useForm } from 'react-hook-form'
import type IAuthInputs from 'models/IAuthInputs'
import { useTypedSelector } from 'hooks/useTypedSelector'
import type { IAuthForm } from './authForm.interface'

function AuthForm({ onSubmit }: IAuthForm) {
	const [errorMessage, setErrorMessage] = useState('')
	const [passwordShown, setPasswordShown] = useState(false)
	const { error: submitError } = useTypedSelector(state => state.auth)
	const {
		register,
		formState: { errors, isValid, dirtyFields },
		handleSubmit
	} = useForm<IAuthInputs>({
		mode: 'onChange'
	})

	const showPasswordIcon = passwordShown ? eyeSlash : eye

	useEffect(() => {
		if (submitError === '401') {
			setErrorMessage('Неверный логин или пароль. Попробуйте снова.')
		}
	}, [submitError])

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				onChange={() => setErrorMessage('')}
				className='auth__form'
			>
				<div className='auth__input-wrapper'>
					<label className='auth__label label'>
						<p className='label__title'>Логин</p>
						<input
							autoComplete='username'
							className={
								'label__input' +
								(dirtyFields?.username ? ' filled' : ' unfilled') +
								(errors?.username || errorMessage ? ' invalid' : '')
							}
							{...register('username', {
								required: 'Поле не должно быть пустым',
								minLength: {
									value: 3,
									message: 'Длина логина должна быть не меньше 3 символов'
								}
							})}
						/>
					</label>
					{errors?.username && (
						<p className='error-text'>
							{errors?.username?.message || 'Ошибка!'}
						</p>
					)}
				</div>
				<div className='auth__input-wrapper'>
					<label className='auth__label label'>
						<p className='label__title'>Пароль</p>
						<div className='auth__password-wrapper'>
							<input
								type={passwordShown ? 'text' : 'password'}
								className={
									'label__input' +
									(dirtyFields?.password ? ' filled' : ' unfilled') +
									(errors?.password || errorMessage ? ' invalid' : '')
								}
								{...register('password', {
									required: 'Поле не должно быть пустым',
									minLength: {
										value: 6,
										message: 'Длина пароля должна быть не меньше 6 символов'
									}
								})}
							/>
							{dirtyFields.password && (
								<img
									src={showPasswordIcon}
									alt='Показать пароль'
									className='password-show'
									onClick={() => setPasswordShown(!passwordShown)}
								/>
							)}
						</div>
					</label>
					{errors?.password && (
						<p className='error-text'>
							{errors?.password?.message || 'Ошибка!'}
						</p>
					)}
				</div>
				{errorMessage && (
					<div className='auth__error'>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button
					disabled={!isValid}
					className='auth__submit-btn btn'
					type='submit'
				>
					Начать
				</button>
			</form>
			<p className='restore-password'>
				Забыли пароль?{' '}
				<a rel='noreferrer' href='https://telegram.org' target='_blank'>
					Напишите боту
				</a>
			</p>
		</>
	)
}

export default AuthForm
