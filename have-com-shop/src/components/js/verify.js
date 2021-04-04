import axios from "axios";

 function checklogin(){
    let token = localStorage.getItem("token");
    
    if (token) {
      let data = { token: token };
      let apiURL = "http://localhost:3000/user/verify-token";
      const res =  axios.post(apiURL, data).then((res) => res.data)
      return res
        
    } 
    return {username:"",login:false}



}



export {checklogin}