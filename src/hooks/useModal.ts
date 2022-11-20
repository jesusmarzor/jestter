import { useState } from "react"

const useModal = () => {
    const [isModalLogin, setIsModalLogin] = useState<boolean>(false)
    const [isModalResetPassword, setIsModalResetPassword] = useState<boolean>(false)
    const [isModalRegister, setIsModalRegister] = useState<boolean>(false)
    return {isModalLogin, setIsModalLogin, isModalResetPassword, setIsModalResetPassword, isModalRegister, setIsModalRegister}
}

export default useModal