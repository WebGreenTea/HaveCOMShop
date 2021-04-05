import axios from "axios";
import {MainURL} from './MainUrl'
 function checklogin(){
    let token = localStorage.getItem("token");
    
    if (token) {
      let data = { token: token };
      let apiURL = MainURL+"/user/verify-token";
      const res =  axios.post(apiURL, data).then((res) => res.data)
      return res
        
    } 
    return {username:"",login:false}



}



export {checklogin}