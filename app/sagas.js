import { call, put, takeEvery } from 'redux-saga/effects';
import requestify from 'requestify';

function* fetchUser(action) {
    try {
        const user = yield call(requestify.request,'API ENPOINT',{
            method: 'POST',
            body: {
                username: action.username,
                password: action.password,
            }
        }
        );
        yield put({type: "USER_FETCH_SUCCEEDED", user: JSON.parse(user.body)});
    } catch (err) {
        if (typeof err == "string") {
            yield put({type: "USER_FETCH_FAILED", message: JSON.parse(err.body)});
        } else {
            yield put({type: "USER_FETCH_FAILED", message: err});
        }
    }
}

function* saga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default saga;