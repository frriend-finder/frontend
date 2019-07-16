import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post()
        .then(res => localStorage.setItem('token', 'faketoken123'))
        .catch(err => {})
}

export const addNewUser = () => dispatch => {
    return axios
        .post()
        .then()
        .catch(err => {})
}

export const addToFriends = member =>{ 
    
        return({
            type: ADD_TO_FRIENDS,
            payload: member
        })
}