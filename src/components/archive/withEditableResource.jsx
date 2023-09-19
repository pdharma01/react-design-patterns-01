import { useState, useEffect } from "react"


const capitalize =(string)=> string.charAt(0).toUpperCase() + string.slice(1);

const withEditableResource = (Component, resourcePath, resourceName, itemId) => {
    let url = `http://localhost:5000/${resourcePath}/${itemId}`

    const fetchData = async (url, request) => {
        let response = await fetch(url, request)

        if (!response.ok) {
            console.log("response not OK!");
            let data = []
            return data
        }

        let data = await response.json()
        return data
    }
    

    const WithEditableResourceComponent = (props) => {
        let [originalData, setOriginalData] = useState(null)
        let [data, setData] = useState(null);

        useEffect(() => {
            const getData = async () => {
                let dataFromServer = await fetchData(url);
                setData(dataFromServer)
                setOriginalData(dataFromServer)
            }
            getData()
        }, [])

        const onChange = (changes) => {
            setData({ ...data, ...changes });
        }

        const onSave = async () => {
            let putRequest = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }
            let response = await fetchData(url, putRequest);
            console.log(response);

        }

        const onReset = () => {
            setData(originalData)

        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`] : onChange,
            [`onSave${capitalize(resourceName)}`] : onSave,
            [`onReset${capitalize(resourceName)}`] : onReset,
        }

        return <Component
            {...props} 
            {...resourceProps} />

    }

    return WithEditableResourceComponent;
}

export default withEditableResource