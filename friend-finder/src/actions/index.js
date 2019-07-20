import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
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

export const fetchMembers = () => dispatch => {
    dispatch({type: FETCH_MEMBERS});
    axios.get('https://friendfinder-bw19.herokuapp.com/user')
    .then(res => setTimeout(()=>{dispatch({type: FETCH_MEMBERS_SUCCESS, payload: res.data})},2000))
    .catch(err => dispatch({type:FETCH_MEMBERS_FAILURE, payload: err}))
}   

export const fetchInterests = () => dispatch => {
    dispatch({type: FETCH_INTERESTS})
    axios.get('https://friendfinder-bw19.herokuapp.com/interests/')
    .then(res => dispatch({type:FETCH_INTERESTS_SUCCESS, payload:res.data}))
    .catch(err => dispatch({type:FETCH_INTERESTS_FAILURE, payload: err}))
}


export const fetchUserInterests = (id) =>  dispatch => {
    dispatch({type: FETCH_USER_INTERESTS})
    axios.get(`https://friendfinder-bw19.herokuapp.com/interests/user/${id}`)
    .then(res => dispatch({type: FETCH_USER_INTERESTS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_USER_INTERESTS_FAILURE, payload: err}))
}


export const addToFriends = member =>{ 
    console.log('Member in action',member)
        return({
            type: ADD_TO_FRIENDS,
            payload: member
        })
}
