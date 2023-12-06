import type IReview from 'models/IReview'
import ModulesList from 'components/coursePage/modules/ModulesList'
import ReviewsList from 'components/coursePage/reviews/ReviewsList'
import MainLayout from 'components/layouts/mainLayout/MainLayout'
import ReturnButton from 'components/returnButton/ReturnButton'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useModules from 'hooks/useModules'
import Links from '../../config/links.config'
import './coursePage.css'
import type { CourseParams } from './coursePage.types'

const reviews: IReview[] = [
	{
		id: 1,
		author: 'Автор 1',
		text: 'Очень крутой курс!'
	},
	{
		id: 2,
		author: 'Автор 2',
		text: 'Благодаря этому курсу, я начала зарабатывать реальные деньги!'
	},
	{
		id: 3,
		author: 'Автор 3',
		text: 'Один из лучших курсов по бизнесу!'
	}
]

function CoursePage() {
	const navigate = useNavigate()
	const { id } = useParams<CourseParams>()
	const modules = useModules()

	if (id && Number.isNaN(Number(id))) {
		navigate(Links.main)
	}

	return (
		<MainLayout pageTitle={`Курс ${id}`}>
			<div className='course-page'>
				<ReturnButton text={'На главную'} />
				<section className='course-page__modules modules'>
					<ModulesList
						modules={modules.filter(module => module.course === Number(id))}
					/>
				</section>
				<section className='course-page__about about'>
					<h2 className='about__heading section-heading'>Об этом курсе</h2>
					<p className='about__text'>
						Learn the basics of the language: make new friends, plan a family
						dinner, go shopping and much more!Learn the basics of the language:
						make new friends, plan a family dinner, go shopping and much
						more!мLearn the basics of the lang
					</p>
				</section>
				<section className='course-page__about about'>
					<h2 className='about__heading section-heading'>
						Почему этот курс для тебя
					</h2>
					<p className='about__text'>
						Learn the basics of the language: make new friends, plan a family
						dinner, go shopping and much more!Learn the basics of the language:
						make new friends, plan a family dinner, go shopping and much
						more!мLearn the basics of the langLearn the basics of the language:
						make new friends, plan a family dinner, go shopping and much
						more!Learn the basics of the language: make new friends, plan a
						family dinner, go shopping and much more!мLearn the basics of the
						langLearn the basics of the language: make new friends, plan a
						family dinner, go shopping and much more!Learn the basics of the
						language: make new friends, plan a family dinner, go shopping and
						much more!мLearn the basics of the lang
					</p>
				</section>
				<section className='course-page__reviews reviews-section'>
					<h2 className='reviews-section__heading section-heading'>Отзывы</h2>
					<ReviewsList reviews={reviews} />
				</section>
			</div>
		</MainLayout>
	)
}

export default CoursePage
