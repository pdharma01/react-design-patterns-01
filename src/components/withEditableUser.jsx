import { useState, useEffect, useRef } from "react"

const withEditableUser = (Component, userId) => {
    const [user, setUser] = useState(null);
    let nameRef = useRef()
    let ageRef = useRef()

    let url = "http://localhost:5000/people"

    const fetchUser = async () => {
        let userUrl = `${url}/${userId}`

        let response = await fetch(userUrl);
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    useEffect(() => {
        let getUserFromServer = async () => {
            let userFromServer = await fetchUser();
            setUser(userFromServer);
        }
        getUserFromServer();
    }, [])

    useEffect(() => {
        console.log(user);
    }, [user])

    const handleSubmit = (event) => {
        event.preventDefault()

        
        let changes = {};
        if (nameRef.current.value) changes["name"] = nameRef.current.value;
        if (ageRef.current.value) changes["age"] = ageRef.current.value;
        Object.keys(changes).length != 0 ? setUser({...user,...changes}) : null;

    }

    const WithEditableUserWrapper = (props) => {
        return (
            <>
                <h5>With Editable Use Wrapper</h5>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder = {user ? user.name : "loading"}
                        ref={nameRef}
                    ></input>
                    <input
                        type="number"
                        placeholder = {user ? user.age : "loading"}
                        ref={ageRef}
                    ></input>
                    
                    <button type="submit"
                    >Submit</button>
                </form>
                <Component {...props} person={user} />
            </>

        )
    }
    return (WithEditableUserWrapper)
}

export default withEditableUser