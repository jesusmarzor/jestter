import React, { useEffect, useRef, useState } from "react"

interface props {
    writing: boolean
}

const useInputLogin = ({writing}: props) => {

    const refInput = useRef<HTMLInputElement>(null)
    const [isFocus, setIsFocus] = useState(false)

    useEffect( () => {
        writing ? refInput.current?.focus() : refInput.current?.blur() 
    }, [writing])

    return {refInput, isFocus, setIsFocus}
}

export default useInputLogin