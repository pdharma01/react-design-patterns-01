const isObject = (x) => typeof x === "object" && x !== null


let keyCount = 0

const RecursiveComponent = ({ data }) => {

  // bottom base case is value will not be a more nested object, 
  // so return non-object value as li 
  if (!isObject(data)) {
    return (
      <li>{data}</li>
    )
  }

  const keyValuePairs = Object.entries(data)


  return (
    <div>
      {keyValuePairs.map(([key, value]) => {
        keyCount += 1
       return (
          <li key={keyCount}>{key}:
            <ul>
              <RecursiveComponent data={value}/>
            </ul>
          </li>)
      }
      
      )}

    </div>
  )
}

export default RecursiveComponent