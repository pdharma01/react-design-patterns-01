import withEditableUser from "./withEditableUser"

const UserInfoForm = withEditableUser(({ person, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age } = person || {};

    return person ? (
        <>
            <label>
                Name:
                <input
                    value={name}
                    type="text"
                    onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                Age:
                <input
                    value={age}
                    type="number"
                    onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>

        </>
    ) : <p>...Loading</p>






}, 2 )

export default UserInfoForm