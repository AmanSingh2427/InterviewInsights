import axios from 'axios'
import { GET_DATA_FAIL,GET_DATA_SUCCCESS } from '../constants/constant';

const URL = 'http://localhost:8000';

const detailAction=()=>async(dispatch)=>{
    try{
        const {data} =await axios.get(`${URL}/interviewdata`);

        console.log(data);

        dispatch({
            type:GET_DATA_SUCCCESS,
            payload:data
        });
    }catch(error){
        dispatch({type:GET_DATA_FAIL,payload:error.message})
    }
}
export default detailAction;