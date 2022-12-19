import React from "react";
import {useEffect} from "react";
import { useSearchParams,useNavigate } from "react-router-dom";

function LoginComplete() {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();
    useEffect(() => {
        console.log(queryParameters.get('name'))
        let userid = queryParameters.get('userid')
        let name = queryParameters.get('name')
        let email = queryParameters.get('email')
        let pict = queryParameters.get('pict')
        let authtoken = queryParameters.get('authtoken')
        sessionStorage.setItem("userObject", JSON.stringify({userid:userid, token:authtoken, name:name, email:email, pict: pict}));
        window.location.reload(false);
        navigate("/");
    },[]);
  return (
    <>Redirecting...</>
  );
}

export default LoginComplete;