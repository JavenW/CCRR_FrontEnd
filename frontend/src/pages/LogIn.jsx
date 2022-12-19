
import React, {useState} from "react";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import parse from 'html-react-parser';
//client_id = '348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com'
//client_secret = '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'

function LogIn() {
    let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
    const [sign, setSign] = useState("");
    const parse = require('html-react-parser');
    useEffect(() => {
        axios({
            'method':'POST',
            'url':'https://127.0.0.1:5000/login',
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
            }
        }).then((response)=>{
            console.log(response['data']);
            setSign(response['data']);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
            console.log(error['response']['data']);
            setSign(error['response']['data'].replace('<!doctype html>','').replace('<html lang=en>',''));
        })
    },[]);
    

  return (
    <div>
        {parse(sign)}
    </div>
  );
}

export default LogIn;
