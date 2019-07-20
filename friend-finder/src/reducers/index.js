// import variable names from actions
import {
    SEND_CODE_START,
    SEND_CODE_SUCCESS,
    SEND_CODE_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    ADD_NEW_USER_START,
    ADD_NEW_USER_SUCCESS,
    ADD_NEW_USER_FAILURE,
    ADD_TO_FRIENDS
} from '../actions';

const initialState = {
    isLoggedIn: false,
    loggingIn: false,
    addingNewUser: false,
    sendingCode: false,
    error: '',
    members: [], 
    friends: [],
    user: {},
    code: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_CODE_START:
            return {
                ...state,
                sendingCode: true,
                error: ''
            }

        case SEND_CODE_SUCCESS:
            return {
                ...state,
                sendingCode: false,
                code: action.payload
            }

        case SEND_CODE_FAILURE:
            return {
                ...state,
                sendingCode: false,
                error: action.payload
            }

        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                isLoggedIn: false,
                error: ''
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: false,
                error: action.payload
            }

        case LOGOUT_START:
            return {
                ...state,
                isLoggedIn: false,
            }

        case ADD_NEW_USER_START:
            return {
                ...state,
                addingNewUser: true,
                error: '',
            };
        
        case ADD_NEW_USER_SUCCESS:
            return {
                ...state,
                addingNewUser: false,
                error: ''
            };

        case ADD_NEW_USER_FAILURE:
            return {
                ...state,
                addingNewUser: false,
                error: action.payload
            };
        
        case ADD_TO_FRIENDS:
            console.log('FRIENDS STATE', state.friends)
            return({
                ...state,
                friends: [...state.friends, action.payload]
            })  

        default:
            return state;
    };
};

export default rootReducer;