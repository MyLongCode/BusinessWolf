import TestService from "../services/TestService";
import {AxiosError} from "axios";
import ITest from "../models/ITest";
import {useEffect, useState} from "react";

const useTests = (): { tests: ITest[] } => {
    const [tests, setTests] = useState<ITest[]>([])

    useEffect(() => {
        TestService.fetchTests()
            .then(response => {
                setTests(response.data)
            })
            .catch(e => {
                console.error(e as AxiosError)
            })
    }, []);

    return {tests}
}

export default useTests