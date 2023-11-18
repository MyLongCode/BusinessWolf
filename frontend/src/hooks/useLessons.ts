import ILesson from "../models/ILesson";
import LessonService from "../services/LessonService";
import {AxiosError} from "axios";
import {useEffect, useState} from "react";

const useLessons = (): { lessons: ILesson[] } => {
    const [lessons, setLessons] = useState<ILesson[]>([])

    useEffect(() => {
        LessonService.fetchLessons()
            .then(response => {
                setLessons(response.data)
            })
            .catch(e => {
                console.error(e as AxiosError)
            })
    }, []);

    return {lessons}
}

export default useLessons