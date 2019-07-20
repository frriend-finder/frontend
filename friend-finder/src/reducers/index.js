// import variable names from actions
import {
    LOGIN_START ,
    ADD_TO_FRIENDS, 
    FETCH_MEMBERS,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_FAILURE,
    FETCH_INTERESTS, 
    FETCH_INTERESTS_SUCCESS, 
    FETCH_INTERESTS_FAILURE,
    FETCH_USER_INTERESTS, 
    FETCH_USER_INTERESTS_SUCCESS, 
    FETCH_USER_INTERESTS_FAILURE
} from '../actions';


const initialState = {
    loggingIn: false,
    isFetchingMembers: false,
    isFetchingUserInterests: false,
    error: '',
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
        id:1,
        firstName: "Jack",
        lastName:"Black",
        age:46,
        emailAddress:"jack@email.com",
        gender:"Male",
        phone:"559-559-1256",
        profileimage:'https://image.shutterstock.com/image-photo/portrait-mixed-race-man-600w-1216778014.jpg',
        catchPhrase:"Autobots roll out",
        address:"4875 Jupiter Rd",
        city: "Dallas ",
        state:"Texas",
        zip:"12547",
        
    }, 
    userInterests:[/*Network call */],
    interests:[/*"Food", "Movies", "Dancing"*/] 
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
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
                error:'',
                members: action.payload
            } 

            //add the FETCH_MEMBERS_FAILURE


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
                    err: action.payload
                }    

            case FETCH_USER_INTERESTS:
                return {
                    ...state,
                    isFetchingUserInterests: true,
                    err: ''
                }

            case FETCH_USER_INTERESTS_SUCCESS:
                return {
                    ...state,
                    isFetchingUserInterests: false,
                    userInterests: action.payload,
                    err: ''
                }
              
            case FETCH_USER_INTERESTS_FAILURE:
                return {
                    ...state,
                    isFetchingUserInterests:false,
                    err: action.payload
                }    

        default:
            return state;
    };
};

export default rootReducer;