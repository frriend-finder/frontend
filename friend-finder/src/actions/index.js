import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_START = "LOGOUT_START";
export const ADD_NEW_USER_START = "ADD_NEW_USER_START";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAILURE = "ADD_NEW_USER_FAILURE";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";
export const SEND_CODE_START = "SEND_CODE_START";
export const SEND_CODE_SUCCESS = "SEND_CODE_SUCCESS";
export const SEND_CODE_FAILURE = "SEND_CODE_FAILURE";

export const login = (email, code) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://friendfinder-bw19.herokuapp.com/auth/verify', { email, code })
        .then(res => localStorage.setItem('token', res.data.token))
        .then(dispatch({ type: LOGIN_SUCCESS }))
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.message }));
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_START })
}

export const sendCode = email => dispatch => {
    dispatch({ type: SEND_CODE_START });
    return axios
        .post('https://friendfinder-bw19.herokuapp.com/auth/send', { email })
        .then(res => dispatch({ type: SEND_CODE_SUCCESS }))
        .catch(err => dispatch({ type: SEND_CODE_FAILURE, payload: err.message }));
}

export const addNewUser = (user) => dispatch => {
    dispatch({ type: ADD_NEW_USER_START })
    return axios
        .post('https://friendfinder-bw19.herokuapp.com/user', user)
        .then(res => dispatch({ type: ADD_NEW_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_NEW_USER_FAILURE, payload: err.message }));
}

export const addToFriends = member =>{ 
    console.log('Member in action',member)
        return({
            type: ADD_TO_FRIENDS,
            payload: member
        })
}