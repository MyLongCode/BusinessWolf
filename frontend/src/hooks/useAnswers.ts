import {useQuery} from "@tanstack/react-query";
import AnswerService from "../services/AnswerService";
import IAnswer from "../models/IAnswer";

const useAnswers = (): IAnswer[] => {
    const {data} = useQuery({
        queryKey: ['get answers'],
        queryFn: () => AnswerService.fetchAnswers(),
        select: ({data}) => data
    })

    return data || [] as IAnswer[]
}

export default useAnswers