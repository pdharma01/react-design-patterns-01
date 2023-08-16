import { useState, useEffect } from "react"

const withEditableUser = (Component, userId) => {

    const WithEditableUserWrapper = (props)=>{
        return (
            <>
            <h5>With Editable Use Wrapper</h5>
            <Component {...props}/>
            </>

        )
    }
  return (WithEditableUserWrapper)
}

export default withEditableUser