import axios from "axios";

 import {
 GET_USERS,
GET_USERS_SUCCES,
GET_USERS_FAIL,
GET_USERS_BY_ID

} from "../action/UserAction.js"


export const getUserByID=(id)=> (dispatch)=>{dispatch({
    type:GET_USERS_BY_ID,
    payload:id,
    
});
};