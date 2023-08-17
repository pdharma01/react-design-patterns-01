import { useRef } from "react"


const UserForm = ({ person, nameRef, ageRef, handleSubmit, handleReset }) => {

    const { name, age } = person || {};

    // let nameRef = useRef()
    // let ageRef = useRef()

    return (
        <>
            <h5>User Form</h5>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={name}
                    ref={nameRef}
                ></input>
                <input
                    type="number"
                    placeholder={age}
                    ref={ageRef}
                ></input>

                <button type="submit"
                >Submit</button>

            </form>
                <button type="submit" onClick={()=>handleReset()}
                >Reset</button>
        </>
    )
}

export default UserForm