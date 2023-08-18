import { useState, useEffect } from "react"

const usePerson = (personId) => {

    const [person, setPerson] = useState(null);

    const fetchPerson = async () => {
        // let personUrl = `${url}/${personId}`
        let personUrl = `http://localhost:5000/people/${personId}`
        let response = await fetch(personUrl)
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    useEffect(() => {
        const getPersonFromServer = async () => {
            let personFromServer = await fetchPerson();
            setPerson(personFromServer)
        }
        getPersonFromServer()


    }, [personId])

  return person
}

export default usePerson