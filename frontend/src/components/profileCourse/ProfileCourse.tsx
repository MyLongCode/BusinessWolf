import React, { useState } from 'react'
import './profileCourse.css'

function ProfileCourse() {
	const [progress, setProgress] = useState(33)

	return (
		<div className='profile-course'>
			<div className='profile-course__top-container top-container'>
				<h2 className='top-container__title'>Название курса</h2>
				<p className='top-container__modules-count'>{`${1}/${3} модулей`}</p>
			</div>
			<div className='profile-course__progress-bar progress-bar'>
				<label htmlFor='course-progress' className='progress-bar__percents'>
					{progress + '%'}
				</label>
				<progress
					id='course-progress'
					className='progress-bar__progress'
					max={100}
					value={progress}
				/>
			</div>
		</div>
	)
}

export default React.memo(ProfileCourse)
