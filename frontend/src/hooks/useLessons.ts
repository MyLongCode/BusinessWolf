import ILesson from "../models/ILesson";
import LessonService from "../services/LessonService";
import {useQuery} from "@tanstack/react-query";
import {AxiosResponse} from "axios";

export default function useLessons(): ILesson[]
export default function useLessons(id: null): undefined
export default function useLessons(id: string): ILesson

export default function useLessons(id?: string | null): ILesson[] | ILesson | undefined {
    const {data} = useQuery({
        queryKey: id ? ['get lesson'] : ['get lessons'],
        queryFn: (): Promise<AxiosResponse<ILesson[] | ILesson>> => {
            if (id) {
                return LessonService.fetchLessons(id)
            }
            return LessonService.fetchLessons()
        },
        select: ({data}) => data
    })
    return id !== null ? data || [] : undefined
}
