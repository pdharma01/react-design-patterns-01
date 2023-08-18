import { useState, useEffect } from "react"

const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState()

    useEffect(() => {
        name.length < 2 ? 
            setNameInputError("Name must be more than 1 characters")
            :
            setNameInputError("OK")
    }, [name])

    return (
        <div className="section">
            <h3>Controlled Form</h3>
            <form>
                <p>{nameInputError}</p>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <input
                    name="age"
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ControlledForm