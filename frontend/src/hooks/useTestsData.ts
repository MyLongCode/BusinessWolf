import IAnswer from "../models/IAnswer";
import {useEffect, useMemo, useState} from "react";
import useAnswers from "./useAnswers";
import {useQuestions} from "./useQuestions";
import IQuestion from "../models/IQuestion";

export const useTestsData = (testID: number): {questions: IQuestion[], answers: Map<number, IAnswer[]>} => {
    const answersData = useAnswers()
    const questionsData = useQuestions()

    const answers = useMemo(() => new Map<number, IAnswer[]>(), [])
    const [questions, setQuestions] = useState<IQuestion[]>([]);

    useEffect(() => {
        const shuffle = <T>(array: T[]): T[] => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        }

        if(questionsData.length > 0 && answersData.length > 0 && answers.size === 0) {
            for (const question of questionsData) {
                answers.set(
                    question.question_id,
                    shuffle(answersData).filter(answer => answer.question === question.question_id)
                )
            }
            setQuestions(questionsData)
        }
    }, [questionsData, answersData, answers]);


    return {questions, answers}
}
