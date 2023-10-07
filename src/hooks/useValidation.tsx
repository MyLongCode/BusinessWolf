import {useEffect, useState} from 'react';

export interface IValidation {
    isEmpty: boolean
    minLength: number
}

export interface IValidationError {
    emptyError: string
    minLengthError: string
}

function useValidation(value: string, validations: IValidation, validationErrors: IValidationError) {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [isValid, setValid] = useState(false)
    const errorMessage = isEmpty ? validationErrors.emptyError : minLengthError ? validationErrors.minLengthError : ''

    useEffect(() => {
        if (validations.isEmpty) {
            if (value) {
                setIsEmpty(false)
            } else {
                setIsEmpty(true)
            }
        }

        if (validations.minLength) {
            if (value.length < validations.minLength) {
                setMinLengthError(true)
            } else {
                setMinLengthError(false)
            }
        }
    }, [value, validations.isEmpty, validations.minLength]);

    useEffect(() => {
        setValid(errorMessage === '')
    }, [errorMessage]);

    return {isEmpty, minLengthError, isValid, errorMessage}
}

export default useValidation;