import { useState } from "react"



const Modal = ({ children }) => {

    const [shouldShow, setshouldShow] = useState(false)

    const ModalBackground = ({children}) => {
        return (<div onClick={()=> setshouldShow(false)} className="modal-bg">Modal Background {children}</div>)
    }
    const ModalBody = ({children}) => {
        return (<div className="modal-body">{children}</div>)
    }
    return (
        <>
            <button onClick={() => setshouldShow(true)}>Show Modal</button>
            {shouldShow && 
            (<ModalBackground>
                <ModalBody>
                    <button onClick={()=>setshouldShow(false)}>Hide Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>)}
        </>
    )
}

export default Modal