const defaultState = {user:null,message:null,loggedIn:false};

const loginApp = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            return {
                user: action.user,
                loggedIn: true
            };
        case 'USER_FETCH_FAILED':
            return {
                message: action.message,
                loggedIn: false
            };
        default:
            return state;

    }
};

export default loginApp;