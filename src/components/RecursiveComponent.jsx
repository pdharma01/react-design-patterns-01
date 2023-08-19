import { object } from "prop-types";
import { nestedObject } from "./data"

const isObject = (x) => typeof x === "object" && x !== null


// data = nestedObject
const RecursiveComponent = ({ data }) => {

  // Bottom Base Case 
  if (!isObject(data)) {
    return (
      <li>{data}</li>
    )
  }

  const keyValuePairs = Object.entries(data)
  console.log(keyValuePairs);




  return (
    <div>
      {keyValuePairs.map(([key, value]) => (
       (
          <li>{key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>)
      ))}

    </div>
  )
}

export default RecursiveComponent