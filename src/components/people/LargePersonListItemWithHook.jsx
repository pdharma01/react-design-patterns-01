import usePerson from "../usePerson";
import useResource from "../useResource";


const LargePersonListItemWithHook = ({ personId }) => {

  // const person = usePerson(personId)
  const person = useResource(`/people/${personId}`)
  const { name, age, hobbies } = person || {};

  return (

    person ? (
      <div className="container">
        <h3>{name}</h3>
        <p>Age: {age} </p>
        <ul>
          {hobbies.map((hobby, index) => <li key={index + hobby}>{hobby}</li>)}
        </ul>
      </div>
    ) : null

  )
}

export default LargePersonListItemWithHook