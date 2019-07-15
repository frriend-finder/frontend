import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post()
        .then(res => localStorage.setItem('token', 'faketoken123'))
        .catch(err => {})
    // return axios
    //     .post('' /* endpoint for login */, creds)
    //     .then(res => {} /* save token to localStorage from res */)
    //     .catch(err => {} /* handle login error */);
}


export const addToFriends = member =>{ 
    
        return({
            type: ADD_TO_FRIENDS,
            payload: member
        })
}