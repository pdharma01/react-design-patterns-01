
const UserForm = ({ person, nameRef, ageRef, handleSubmit, handleReset }) => {

    const { name, age } = person || {};

    return person ? (
        <div className="section">
            <h5>User Form</h5>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={name}
                    ref={nameRef}
                ></input>
                <input
                    type="number"
                    placeholder={age}
                    ref={ageRef}
                ></input>

                <button type="submit"
                >Submit</button>

            </form>
                <button type="submit" onClick={()=>handleReset()}
                >Reset</button>
        </div>
    ) : (<p>Loading</p>)
}

export default UserForm