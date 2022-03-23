import {GET_MEMBER, GET_MEMBERLIST, TOGGLE_FALSE, TOGGLE_TRUE} from '../constantes/action-types';

const initalstate={
    memberList:[],
    member:{},
    edit:false
    }

    const memberReducer = (state=initalstate,action)=>{

        switch (action.type) {
            case GET_MEMBERLIST:
                return {...state, memberList:action.payload}
            case GET_MEMBER:
                return {...state, member:action.payload}
            case TOGGLE_TRUE:
                return {...state, edit:true}
            case TOGGLE_FALSE:
                return {...state, edit:false}
            default:
               return state
        }
      }


      export default memberReducer