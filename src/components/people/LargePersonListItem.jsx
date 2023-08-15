const LargePersonListItem = ({person}) => {
    const {name, age, hobbies} = person || {};

  return (

    person ? (
    <div>
        <h3>{name}</h3>
        <p>Age: {age} </p>
        <ul>
            {hobbies.map((hobby, index)=> <li key={index + hobby}>{hobby}</li>) }
        </ul>
    </div>
    ) : null

  )
}

export default LargePersonListItem