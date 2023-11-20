import {useEffect, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";

interface IUserData {
    address: string,
    coins: number,
    grade: string,
    email: string,
    fullName: string,
    phone: string
}

const useUserData = (): IUserData => {
    const {user, isAuth} = useTypedSelector(state => state.auth)

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [grade, setGrade] = useState('')
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        if (user && isAuth) {
            setFullName(user.full_name);
            setPhone(user.phone);
            setEmail(user.email);
            setAddress(user.address);
            setGrade(user.education_class);
            setCoins(user.coins)
        }
    }, [isAuth, user]);

    return {
        address: address,
        coins: coins,
        grade: grade,
        email: email,
        fullName: fullName,
        phone: phone
    }
}

export default useUserData