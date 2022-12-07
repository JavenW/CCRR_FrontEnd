import React, {useState} from "react";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
//client_id = '348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com'
//client_secret = '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'

function SignIn() {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size:"large"}
    );
  },[]);

  return (
    <div>
      <div id = "signInDiv"></div>
      <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
      {
        user &&
        <div>
          <img src = {user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );

    /*return (
    <div>
      <div id = "signInDiv"></div>
      <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
      {
        user &&
            <div>
              <img>src = {user.picture}</img>
              <h4>{user.name}</h4>
            </div>
      }
    </div>


    <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
      {
        user &&
        <div>
          <img src = {user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }

  );*/

}

export default SignIn;
