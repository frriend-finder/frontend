import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const ADD_NEW_USER_START = "ADD_NEW_USER_START";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAILURE = "ADD_NEW_USER_FAILURE";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post()
        .then(res => localStorage.setItem('token', 'faketoken123'))
        .catch(err => console.log(err));
}

export const addNewUser = (user) => dispatch => {
    dispatch({ type: ADD_NEW_USER_START })
    return axios
        .post('https://friendfinder-bw19.herokuapp.com/user/', user)
        .then(res => dispatch({ type: ADD_NEW_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_NEW_USER_FAILURE, payload: err.data }));
}

export const addToFriends = member =>{ 
    console.log('Member in action',member)
        return({
            type: ADD_TO_FRIENDS,
            payload: member
        })
}