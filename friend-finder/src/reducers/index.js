// import variable names from actions
import {
    LOGIN_START ,
    ADD_TO_FRIENDS
} from '../actions';


const initialState = {
    loggingIn: false,
    error: '',
    members: [
        {
            id:1,
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
            
        },
        {
            id:2,
            firstName: "Maria",
            lastName:"Valentine",
            age:27,
            emailAddress:"email@email.com",
            gender:"Female",
            phone:"555-555-5556",
            profileimage:'https://image.shutterstock.com/image-photo/face-blonde-happy-bride-before-260nw-546759481.jpg',
            catchPhrase:"Make a wish and dive in",
            location:"Boston",
            interestArray:["Food", "Movies", "Dancing"] 
            
        },{
            id:3,
            firstName: "Mark",
            lastName:"White",
            age:21,
            emailAddress:"email@email.com",
            gender:"Male",
            phone:"555-555-7556",
            profileimage:'https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-600w-388588540.jpg',
            catchPhrase:"Shoot for the moon",
            location:"San Fransico",
            interestArray:["Food", "Movies", "Dancing", "Sports", "Music"] 
            
        }
    ], 
    friends: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };

         case ADD_TO_FRIENDS:
             return({
                 ...state,
                 friends: [...state.friends, action.payload]
             })  

        default:
            return state;
    };
};

export default rootReducer;