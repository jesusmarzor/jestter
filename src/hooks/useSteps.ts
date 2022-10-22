import { useState } from "react"

interface props {
    maxStep: number
}

const useSteps = ({maxStep}: props) => {
    const [step, setStep] = useState(0)

    const nextStep = () => {
        if (step < maxStep - 1) {
            setStep( step+1 )
        }
    }

    const backStep = () => {
        if (step >= 1) {
            setStep( step-1 )
        }
    }
    return {step, nextStep, backStep}
}

export default useSteps