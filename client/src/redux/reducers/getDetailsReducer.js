import { GET_DATA_SUCCCESS,GET_DATA_FAIL } from "../constants/constant";

const getDetailsReducer=(state={information:[]},action)=>{
    switch(action.type){
        case GET_DATA_SUCCCESS:
            return {information: action.payload}

        case GET_DATA_FAIL:
            return {error:action.payload}

        default:
            return state
    }
}
export default getDetailsReducer;