import IAnswer from "../models/IAnswer";
import {useEffect, useState} from "react";
import AnswerService from "../services/AnswerService";
import QuestionService from "../services/QuestionService";
import {AxiosError} from "axios";
import IQuestion from "../models/IQuestion";

export const useQuestions = (testID: number): { answers: Map<number, IAnswer[]>, questions: IQuestion[] } => {
    const [answers, setAnswers] = useState<Map<number, IAnswer[]>>(new Map());
    const [questions, setQuestions] = useState<IQuestion[]>([])

    useEffect(() => {
        const shuffle = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        }

        AnswerService.fetchAnswers()
            .then(AnswersResponse => {
                QuestionService.fetchQuestions()
                    .then(QuestionsResponse => {
                        setQuestions(QuestionsResponse.data?.filter(item => item.test === testID).map(question => {
                            setAnswers(prevState => prevState.set(
                                question.id,
                                shuffle(AnswersResponse.data)?.filter(answer => answer.question === question.id)
                            ))
                            return question
                        }))
                    })
                    .catch(e => {
                        console.error(e as AxiosError)
                    })
            })
            .catch(e => {
                console.error(e as AxiosError)
            })
    }, [testID,]);

    return {answers, questions}
}

export default useQuestions