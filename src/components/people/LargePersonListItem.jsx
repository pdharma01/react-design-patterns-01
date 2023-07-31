const LargePersonListItem = ({person}) => {
    const {name, age, hobbies} = person;

  return (
    <div>
        <h3>{name}</h3>
        <p>Age: {age} </p>
        <ul>
            {hobbies.map((hobby, index)=> <li key={index + hobby}>{hobby}</li>) }
        </ul>


    </div>

  )
}

export default LargePersonListItem