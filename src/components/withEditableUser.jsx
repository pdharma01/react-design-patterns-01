import { useState, useEffect } from "react"

const withEditableUser = (Component, userId) => {
    let url = `http://localhost:5000/users/${userId}`

    const fetchUser = async (url, request) => {
        let response = await fetch(url, request)

        if (!response.ok) {
            console.log("response not OK!");
            let data = []
            return data
        }

        let data = await response.json()
        return data
    }


    const WrappedEditableComponent = (props) => {
        let [originalUser, setOriginalUser] = useState(null)
        let [user, setUser] = useState(null);

        useEffect(() => {
            const getUser = async () => {
                let userFromServer = await fetchUser(url);
                setUser(userFromServer)
                setOriginalUser(userFromServer)
            }
            getUser()
        }, [])

        const onChangeUser = (changes) => {
            setUser({ ...user, ...changes });
        }

        const onSaveUser = async () => {
            let putRequest = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            }
            let response = await fetchUser(url, putRequest);
            console.log(response);

        }

        const onResetUser = () => {
            setUser(originalUser)

        }

        return <Component
            {...props}
            person={user}
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser} />

    }

    return WrappedEditableComponent;
}

export default withEditableUser