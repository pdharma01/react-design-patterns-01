import { useState, useEffect, useRef } from "react"

const withEditableUser = (Component, userId) => {
    const [originalUser, setOriginalUser] = useState(null)
    const [user, setUser] = useState(null);
    let nameRef = useRef()
    let ageRef = useRef()

    let userUrl = `http://localhost:5000/people/${userId}`

    useEffect(() => {
        let getUserFromServer = async () => {
            let userFromServer = await fetchUser();
            setOriginalUser(userFromServer)
            setUser(userFromServer);
        }
        getUserFromServer();
    }, []);

    const fetchUser = async () => {
        let response = await fetch(userUrl);
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    const editUser = async (editedUser) => {
        let response = await fetch(userUrl, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editedUser)
        })

        if (!response.ok) return console.log("fetch not ok!");
        // let postedItem = await response.json()
        let data = await response.json()
        return data
    }

    const handleReset= async ()=>{
            let userFromServer = await editUser(originalUser)
            setUser(userFromServer)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let changes = {};
        if (nameRef.current.value) changes["name"] = nameRef.current.value;
        if (ageRef.current.value) changes["age"] = ageRef.current.value;
        if (Object.keys(changes).length != 0) {

            let editedUser = { ...user, ...changes }
            let userFromServer = await editUser(editedUser)
            setUser(userFromServer)
        }
    }

    const WithEditableUserWrapper = (props) => {
        return (
            <>
                <h5>With Editable Use Wrapper</h5>
                <Component {...props}
                    person={user}
                    nameRef={nameRef}
                    ageRef={ageRef}
                    handleSubmit={handleSubmit}
                    handleReset={handleReset} />
            </>

        )
    }
    return (WithEditableUserWrapper)
}

export default withEditableUser