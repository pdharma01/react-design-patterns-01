import { useState, useEffect } from "react"

const withUser = (Component, userId) => {

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


  const WrappedComponent = (props) => {
    let [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = async () => {
        let userFromServer = await fetchUser(`http://localhost:5000/people/${userId}`);
        setUser(userFromServer)
      }
      getUser()
    }, [])
    
    return <Component {...props} person={user} />

  }

  return WrappedComponent;
}

export default withUser