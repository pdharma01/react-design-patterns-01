import { useEffect } from "react";
import { useState } from "react"

const withUser = (Component, userId) => {

    const [user, setUser] = useState(null);
    const url = "http://localhost:5000/people"

    const fetchUser = async () => {
        let userUrl = `${url}/${userId}`
        console.log(userUrl);
        let response = await fetch(userUrl)
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    useEffect(() => {
        const getUserFromServer = async () => {
            let userFromServer = await fetchUser(userId);
            setUser(userFromServer)
        }
        getUserFromServer()


    }, [])

    const ComponentWithUser = (props) => {


        return (
            <>
                <h5>LargeListItemComponent in withUser Wrapper</h5>
                <Component {...props} person={user} />
            </>

        )
    }

    return (ComponentWithUser)
}

export default withUser