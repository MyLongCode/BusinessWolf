import {useState} from 'react';
import useValidation, {IValidation, IValidationError} from "./useValidation";

function useInput(initValue: string, validations: IValidation, validationErrors: IValidationError) {
    const [value, setValue] = useState(initValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations, validationErrors)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {value, onChange, onBlur, isDirty, ...valid}
}

export default useInput;