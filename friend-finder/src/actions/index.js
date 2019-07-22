import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_START = "LOGOUT_START";
export const ADD_NEW_USER_START = "ADD_NEW_USER_START";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAILURE = "ADD_NEW_USER_FAILURE";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";
export const FETCH_MEMBERS = "GET_MEMBERS";
export const FETCH_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
export const FETCH_MEMBERS_FAILURE = "GET_MEMBERS_FAILURE";
export const FETCH_INTERESTS = "FETCH_INTERESTS";
export const FETCH_INTERESTS_SUCCESS = "FETCH_INTERESTS_SUCCESS";
export const FETCH_INTERESTS_FAILURE = "FETCH_INTERESTS_FAILURE";
export const FETCH_USER_INTERESTS = "FETCH_USER_INTERESTS";
export const FETCH_USER_INTERESTS_SUCCESS = "FETCH_USER_INTERESTS_SUCCESS";
export const FETCH_USER_INTERESTS_FAILURE = "FETCH_USER_INTERESTS_FAILURE";
export const ADD_USER_INTEREST_START = "ADD_USER_INTEREST_START";
export const ADD_USER_INTEREST_SUCCESS = "ADD_USER_INTEREST_SUCCESS";
export const ADD_USER_INTEREST_FAILURE = "ADD_USER_INTEREST_FAILURE";
export const DELETE_USER_INTEREST_START = "DELETE_USER_INTEREST_START";
export const DELETE_USER_INTEREST_SUCCESS = "DELETE_USER_INTEREST_SUCCESS";
export const DELETE_USER_INTEREST_FAILURE = "DELETE_USER_INTEREST_FAILURE";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const SEND_CODE_START = "SEND_CODE_START";
export const SEND_CODE_SUCCESS = "SEND_CODE_SUCCESS";
export const SEND_CODE_FAILURE = "SEND_CODE_FAILURE";



export const login = (email, code) => dispatch => {
   dispatch({ type: LOGIN_START });
   return axios
        .post('https://friendfinder-bw19.herokuapp.com/auth/verify', { email, code })
        .then(function(res){return (localStorage.setItem('token', res.data.token), dispatch(fetchUser(res.data.user_id)))})
        .then( dispatch({ type: LOGIN_SUCCESS }))
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.message }))
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


export const fetchMembers = () => dispatch => {
    dispatch({ type: FETCH_MEMBERS });
    axios.get('https://friendfinder-bw19.herokuapp.com/user')
        .then(res => setTimeout(() => { dispatch({ type: FETCH_MEMBERS_SUCCESS, payload: res.data }) }, 2000))
        .catch(err => dispatch({ type: FETCH_MEMBERS_FAILURE, payload: err }))
}

export const fetchInterests = () => dispatch => {
    dispatch({ type: FETCH_INTERESTS })
    axios.get('https://friendfinder-bw19.herokuapp.com/interests/')
        .then(res => dispatch({ type: FETCH_INTERESTS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_INTERESTS_FAILURE, payload: err }))
}


export const fetchUserInterests = (id) => dispatch => {
    dispatch({ type: FETCH_USER_INTERESTS })
    axios.get(`https://friendfinder-bw19.herokuapp.com/interests/user/${id}`)
        .then(res => setTimeout(() => { dispatch({ type: FETCH_USER_INTERESTS_SUCCESS, payload: res.data }) }, 1000))
        .catch(err => dispatch({ type: FETCH_USER_INTERESTS_FAILURE, payload: err }))
}

export const addUserInterest = (user, interest) => dispatch => {
    dispatch({ type: ADD_USER_INTEREST_START })
    return axios
        .post(`https://friendfinder-bw19.herokuapp.com/interests/user`, { user, interest })
        .then(res => dispatch({ type: ADD_USER_INTEREST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_USER_INTEREST_FAILURE, payload: err }))
}

export const deleteUserInterest = (user, interest) => dispatch => {
    dispatch({ type: DELETE_USER_INTEREST_START })
   return axios
        .delete(`https://friendfinder-bw19.herokuapp.com/interests/user`, {data: {user, interest}})
        .then(res => dispatch({type: DELETE_USER_INTEREST_SUCCESS, payload: res.data.message}))
        .catch(err => dispatch({type: DELETE_USER_INTEREST_FAILURE, payload: err.response.data }))
}

export const fetchUser = (id) => dispatch => {
     dispatch({type: FETCH_USER_START})
     axios.get(`https://friendfinder-bw19.herokuapp.com/user/${id}`)
    .then(res => dispatch({type: FETCH_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_USER_FAILURE, payload: err}))
}


export const addToFriends = member => {
    return ({
        type: ADD_TO_FRIENDS,
        payload: member
    })
}
