import { useState } from "react"


const Modal = ({children}) => {

    const [shouldShow, setshouldShow] = useState(false)
    
    const ModalBackground =()=> (<div>Modal Background</div>)
    const ModalBody =()=> (<div>Modal Body</div>)

  return (
    <>
    <button onClick={()=> setshouldShow(true)}>Show Modal</button>
    {shouldShow && (<ModalBackground>
        <ModalBody>
            {children}
        </ModalBody>
    </ModalBackground>)}
    </>
  )
}

export default Modal