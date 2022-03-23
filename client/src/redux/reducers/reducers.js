import {SIGNIN,SIGNUP} from '../constantes/action-types';


const initialState ={
    user: {},
}


const UserReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SIGNIN:
         return{
            ...state,
            user:action.payload
        }
        case SIGNUP:
         return{
            ...state,
            user:action.payload
        }
        default: return state
    }

}


export default UserReducer