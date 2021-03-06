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
    ADD_TO_FRIENDS,
    FETCH_MEMBERS,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_FAILURE,
    FETCH_INTERESTS,
    FETCH_INTERESTS_SUCCESS,
    FETCH_INTERESTS_FAILURE,
    FETCH_USER_INTERESTS,
    FETCH_USER_INTERESTS_SUCCESS,
    FETCH_USER_INTERESTS_FAILURE,
    ADD_USER_INTEREST_START,
    ADD_USER_INTEREST_SUCCESS,
    ADD_USER_INTEREST_FAILURE,
    DELETE_USER_INTEREST_START,
    DELETE_USER_INTEREST_SUCCESS,
    DELETE_USER_INTEREST_FAILURE,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,

} from '../actions';


const initialState = {
    isLoggedIn: false,
    addingNewUser: false,
    sendingCode: false,
    error: '',
    code: '',
    isFetchingMembers: false,
    isFetchingUserInterests: false,
    members: [
        /* {
             id:1,
             firstName: "John",
             lastName:"Smith",
             age:35,
             emailAddress:"email@email.com",
             gender:"male",
             phone:"555-555-5555",
             profileimage:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
             catchPhrase:"Be all you can be",
             address:"123 New York st",
             city: "New York",
             state:"New York",
             zip:"77777",
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
             address:"555 Magnolia Dr",
             city: "Boston",
             state:"Massachusetts",
             zip:"71234",
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
             address:"7810 Old Town Rd",
             city: "San Fansico",
             state:"California",
             zip:"45451",
             interestArray:["Food", "Movies", "Dancing", "Sports", "Music"] 
             
         } */
    ],
    friends: [
        /* {
             id:3,
             firstName: "Mark",
             lastName:"White",
             age:21,
             emailAddress:"email@email.com",
             gender:"Male",
             phone:"555-555-7556",
             profileimage:'https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-600w-388588540.jpg',
             catchPhrase:"Shoot for the moon",
             address:"7810 Old Town Rd",
             city: "San Fansico",
             state:"California",
             zip:"45451",
             interestArray:["Food", "Movies", "Dancing", "Sports", "Music"]  
         } */
    ],
    user: {
        id: 0,
        firstName: "",
        lastName: "",
        age: 0,
        emailAddress: "",
        gender: "",
        phone: "",
        profileimage: '',
        catchPhrase: "",
        address: "",
        city: "",
        state: "",
        zip: "", 
        interests:[]
    },

    userInterests: [/*Network call */],
    interests: [/*"Food", "Movies", "Dancing"*/]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
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
                addingNewUser: false,
                error: action.payload
            };

        case ADD_TO_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }

        case FETCH_MEMBERS:
            return {
                ...state,
                isFetchingMembers: true,
                error: action.payload
            }

        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                isFetchingMembers: false,
                error: '',
                members: action.payload
            }


        case FETCH_MEMBERS_FAILURE:
            return{
                ...state,
                isFetchingMembers: false,
                error: action.payload
            }

        case FETCH_INTERESTS:
            return {
                ...state,
                error: ''
            }

        case FETCH_INTERESTS_SUCCESS:
            return {
                ...state,
                interests: action.payload,
                error: ''
            }

        case FETCH_INTERESTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case FETCH_USER_INTERESTS:
            return {
                ...state,
                isFetchingUserInterests: true,
                error: ''
            }

        case FETCH_USER_INTERESTS_SUCCESS:
            return {
                ...state,
                isFetchingUserInterests: false,
                userInterests: action.payload,
                error: ''
            }

        case FETCH_USER_INTERESTS_FAILURE:
            return {
                ...state,
                isFetchingUserInterests: false,
                error: action.payload
            }

        case ADD_USER_INTEREST_START:
            return {
                ...state,
                error: ''
            }

        case ADD_USER_INTEREST_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: ''
            }

        case ADD_USER_INTEREST_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_USER_INTEREST_START:
            return {
                ...state,
                error: ''
            }

        case DELETE_USER_INTEREST_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: ''
            }


        case DELETE_USER_INTEREST_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case FETCH_USER_START:    
            return{
                ...state,
                error:''
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                error:'',
                user: action.payload
                
            }
         
        case FETCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }    

        default:
            return state;
    };
};

export default rootReducer;