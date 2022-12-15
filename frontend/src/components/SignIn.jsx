import React, {useState} from "react";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
import NavDropdown from 'react-bootstrap/NavDropdown';
//client_id = '348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com'
//client_secret = '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'

function SignIn() {
  let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
  const [user, setUser] = useState();
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    sessionStorage.setItem("userObject", JSON.stringify(userObject));
    window.location.reload(false);
  }

  function handleSignOut(event){
    setUser();
    sessionStorage.removeItem('userObject');
    window.location.reload(false);
  }

  useEffect(() => {
    if (!sessionStorage.getItem('userObject') || Object.keys(sessionStorage.getItem('userObject')).length == 0){
      /* global google */
      google.accounts.id.initialize({
        client_id: "348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size:"small"}
      );
    }
    console.log(user)
  },[user]);

  useEffect(() => {
    let userSession = sessionStorage.getItem('userObject');
    if (flag) {
      console.log("SessionLogIn")
      setUser(JSON.parse(userSession));
    }
  },[]);


  return (
    <div>
      {
        flag
        ? <div onClick={(e) => handleSignOut(e)}> Sign Out</div>
        : <div id = "signInDiv"></div>
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
