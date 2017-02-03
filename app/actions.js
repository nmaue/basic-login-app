const userLogin = (username,password) => {
    return {
        type: 'USER_FETCH_REQUESTED',
        username: username,
        password: password
    }
}

export default userLogin;

