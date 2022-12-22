import React, {useState} from "react";
import {useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignIn() {
  let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function handleSignOut(){
    setUser();
    sessionStorage.removeItem('userObject');
    window.location.reload(false);
  }

  useEffect(() => {
    console.log("1")
    console.log(flag)
    console.log(!flag)
    console.log(!user)
    console.log(flag&&user)
    console.log("2")
    if (user){
      console.log("check token")
      // const form = { authtoken: user.token, userid: user.userid };
      // console.log(form)
      // axios.post('https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/checklogin', form
      var bodyFormData = new FormData();
      bodyFormData.append('authtoken', user.token);
      bodyFormData.append('userid', user.userid);
      axios({
        method: "GET",
        url: "https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/checklogin",
        // headers: { "Content-Type": "multipart/form-data" },
        params: {
            authtoken: user.token,
            userid: user.userid
        }
      }).then((response)=>{
          console.log("correct")
          console.log(response);
      })
      .catch((error) => {
          console.log("error");
          console.log(error);
          handleSignOut()
      })
    }
    console.log(user)
  },[user]);

  useEffect(() => {
    let userSession = sessionStorage.getItem('userObject');
    console.log(!user)
    console.log(!flag)
    
    if (flag) {
      console.log("SessionLogIn")
      userSession = JSON.parse(userSession)
      console.log(userSession)
      console.log(userSession.userid)
      setUser(userSession);
    }
  },[]);


  return (
    <div>
      {
        flag
        ? <div onClick={(e) => handleSignOut()}> Sign Out</div>
        : <div id = "signInDiv" onClick={(e) => {navigate("/login")}}>Sign In</div>
      }
      
      {/* {
        user &&
        <div>
          <img src = {user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      } */}
    </div>
  );
}

export default SignIn;
