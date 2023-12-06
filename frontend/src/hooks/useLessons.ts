import { useQuery } from '@tanstack/react-query'
import type ILesson from 'models/ILesson'
import LessonService from 'services/LessonService'
import type { AxiosResponse } from 'axios'

/**
 * @description
 * Это хук для получения всех конспектов, доступных пользователю
 * @returns
 * Все конспекты
 */
export default function useLessons(): ILesson[]

/**
 * @description
 * Это хук для получения всех конспектов, доступных пользователю
 * @param id
 * Идентификатор конспекта
 * @returns
 * Все конспекты
 */
export default function useLessons(id: null): undefined

/**
 * @description
 * Это хук для получения всех конспектов, доступных пользователю
 * @param id
 * Идентификатор конспекта
 * @returns
 * Конкретный конспект с указанным id
 */
export default function useLessons(id: string): ILesson

export default function useLessons(
	id?: string | null
): ILesson[] | ILesson | undefined {
	const { data } = useQuery({
		queryKey: id ? ['get lesson'] : ['get lessons'],
		queryFn: (): Promise<AxiosResponse<ILesson[] | ILesson>> => {
			if (id) {
				return LessonService.fetchLessons(id)
			}
			return LessonService.fetchLessons()
		},
		select: ({ data }) => data
	})
	return id !== null ? data || [] : undefined
}
