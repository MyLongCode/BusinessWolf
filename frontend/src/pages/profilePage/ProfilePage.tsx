import MainLayout from 'components/layouts/mainLayout/MainLayout'
import ChangeAvatarModal from 'components/profilePage/changeAvatarModal/ChangeAvatarModal'
import ProfileDataForm from 'components/profilePage/profileDataForm/ProfileDataForm'
import ReturnButton from 'components/returnButton/ReturnButton'
import React, { useState } from 'react'
import useUserData from 'hooks/useUserData'
import ProfileCourseProgress from '../../components/profilePage/profileCourseProgress/ProfileCourseProgress'
import useCourses from '../../hooks/useCourses'
import './profilePage.css'

function ProfilePage() {
	const { address, grade, email, fullName, phone, avatar } = useUserData()
	const [isAvatarModalVisible, setIsModalVisible] = useState(false)
	const courses = useCourses()

	const changeAvatarClickHandler = () => {
		setIsModalVisible(true)
	}

	return (
		<MainLayout pageTitle={'Профиль'}>
			{isAvatarModalVisible && <ChangeAvatarModal setIsModalVisible={setIsModalVisible} />}

			<div className='profile'>
				<ReturnButton text={'Вернуться'} />
				<section className='profile__user user'>
					<img
						src={avatar?.image}
						alt=''
						className='user__avatar user-avatar'
						onClick={() => changeAvatarClickHandler()}
					/>
					<div className='user__info info'>
						<p className='info__name'>{fullName || 'Фамилия Имя'}</p>
						<p className='info__grade'>{`${grade || 0} класс`}</p>
					</div>
				</section>
				<section className='profile__courses courses'>
					{courses.map(course => {
						return <ProfileCourseProgress courseID={course?.course_id} />
					})}
				</section>
				<section className='profile__data data'>
					<h2 className='data__heading'>Ваши данные:</h2>

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
