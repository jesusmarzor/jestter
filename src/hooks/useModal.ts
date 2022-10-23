import { useState } from "react"

const useModal = () => {
    const [isModalLogin, setIsModalLogin] = useState<boolean>(false)
    return {isModalLogin, setIsModalLogin}
}

export default useModal