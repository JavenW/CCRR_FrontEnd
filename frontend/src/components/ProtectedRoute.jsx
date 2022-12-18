import { Navigate } from "react-router-dom";
import axios from 'axios';
import React, {useState} from "react";

const ProtectedRoute = ({ children }) => {
    let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
    const [load, setLoad] = useState();
    
    if (!flag) {
        // user is not authenticated
        return <Navigate to="/unauth" />;
    }
    let user = flag ? JSON.parse(sessionStorage.getItem('userObject')) : null
    console.log("check token")
    var bodyFormData = new FormData();
    bodyFormData.append('authtoken', user.token);
    bodyFormData.append('userid', user.userid);
    axios({
    method: "post",
    url: "https://127.0.0.1:5000/checklogin",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
    }).then((response)=>{
        console.log("correct")
    })
    .catch((error) => {
        console.log("error");
        console.log(error);
        sessionStorage.removeItem('userObject');
        window.location.reload(false);
        return <Navigate to="/unauth" />;
    })
    // while (load == -1) {
    //     console.log("wait")
    // }
    return children
};

export default ProtectedRoute;