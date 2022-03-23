import { combineReducers } from "redux";

import  UserReducer  from "./reducers";
import  memberReducer  from "./member.reducer";

const rootReducer=combineReducers({UserReducer , memberReducer})
export default rootReducer