import { createContext, useContext } from "react";
import useModal from "../hooks/useModal";


interface props {
    children: JSX.Element
}

const modalContext = createContext<any>(null);

export const ModalProvider: React.FC<props> = ({children}) => {
    const modal = useModal()
    return <modalContext.Provider value={modal}>{children}</modalContext.Provider>
}

export const ModalConsumer = () => {
    const context: any = useContext(modalContext)
    return context
}