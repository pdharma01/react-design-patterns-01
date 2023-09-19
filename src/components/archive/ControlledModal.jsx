// import { useState } from "react"

const ControlledModal = ({shouldShow, onRequestClose, children}) => {


  const ModalBackground = ({children}) => {
      return (<div onClick={onRequestClose} className="modal-bg">Modal Background {children}</div>)
  }
  const ModalBody = ({children}) => {
      return (<div className="modal-body">{children}</div>)
  }
  return shouldShow ? (

          <ModalBackground>
              <ModalBody>
                <h3>Controlled Modal</h3>
                  <button onClick={onRequestClose}>Hide Modal</button>
                  {children}
              </ModalBody>
          </ModalBackground>
  ) : null
}

export default ControlledModal