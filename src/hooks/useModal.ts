import { useState } from "react"

const useModal = () => {
    const [isModalLogin, setIsModalLogin] = useState(false)
    return {isModalLogin, setIsModalLogin}
}

export default useModal