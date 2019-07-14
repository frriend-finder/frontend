// import variable names from actions
import {
    LOGIN_START
} from '../actions';
import { memberExpression } from '@babel/types';

const initialState = {
    loggingIn: false,
    error: '',
    members: [
        {
            firstName: "John",
            lastName:"Smith",
            age:35,
            emailAddress:"email@email.com",
            gender:"male",
            phone:"555-555-5555",
            profileimage:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            catchPhrase:"Be all you can be",
            location:"New York",
            interestArray:["Sports", "Movies", "Dancing"] 

            
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        default:
            return state;
    };
};

export default rootReducer;