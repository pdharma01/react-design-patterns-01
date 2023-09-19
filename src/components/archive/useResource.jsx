import { useState, useEffect } from "react"

const useResource = (resourceUrl) => {
    const [resource, setResource] = useState(null);
    let url = `http://localhost:5000${resourceUrl}`

    const fetchResource = async () => {
        let response = await fetch(url)
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    useEffect(() => {
        const getResourceFromServer = async () => {
            let resourceFromServer = await fetchResource();
            setResource(resourceFromServer)
        }
        getResourceFromServer()


    }, [resourceUrl])

  return resource
}

export default useResource