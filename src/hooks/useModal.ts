import { useState } from "react"

const useModal = () => {
    const [isModalLogin, setIsModalLogin] = useState<boolean>(false)
    const [isModalResetPassword, setIsModalResetPassword] = useState<boolean>(false)
    return {isModalLogin, setIsModalLogin, isModalResetPassword, setIsModalResetPassword}
}

export default useModal