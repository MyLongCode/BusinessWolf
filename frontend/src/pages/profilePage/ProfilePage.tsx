import './profilePage.css'
import avatar from '../../assets/images/Avatar.jpg'
import React from 'react'
import ProfileDataForm from '../../components/profileForm/ProfileDataForm'
import ProfileCourse from '../../components/profileCourse/ProfileCourse'
import MainLayout from '../../components/layouts/mainLayout/MainLayout'
import ReturnButton from '../../components/returnButton/ReturnButton'
import useUserData from '../../hooks/useUserData'

function ProfilePage() {
	const { address, grade, email, fullName, phone } = useUserData()

	return (
		<MainLayout pageTitle={'Профиль'}>
			<div className='profile'>
				<ReturnButton text={'Вернуться'} />
				<section className='profile__user user'>
					<img
						src={avatar}
						alt='Аватар пользователя'
						className='user__avatar user-avatar'
					/>
					<div className='user__info info'>
						<p className='info__name'>{fullName || 'Фамилия Имя'}</p>
						<p className='info__grade'>{`${grade} класс`}</p>
					</div>
				</section>
				<section className='profile__courses courses'>
					<ProfileCourse />
				</section>
				<section className='profile__data data'>
					<h2 className='data__heading'>Ваши данные:</h2>
					<p className='data__desc'>
						Заполните данные и получите <b>5 волчих коинов</b>
					</p>
					<ProfileDataForm
						name={fullName}
						phone={phone}
						email={email}
						address={address}
						grade={grade}
					/>
				</section>
			</div>
		</MainLayout>
	)
}

export default ProfilePage
