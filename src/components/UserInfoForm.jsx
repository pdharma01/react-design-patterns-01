const UserInfoForm =({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { screen_name, level } = user || {};

    return user ? (
        <div>
            <h3>UserInfoForm with Editable Resource</h3>
            <label>
                Screen Name:
                <input
                    value={screen_name}
                    type="text"
                    onChange={e => onChangeUser({ screen_name: e.target.value })} />
            </label>
            <label>
                Level:
                <input
                    value={level}
                    type="number"
                    onChange={e => onChangeUser({ level: Number(e.target.value) })} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>

        </div>
    ) : <p>...Loading</p>






}

export default UserInfoForm