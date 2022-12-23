import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function DetailedItem() {
    const [detailedData, setDetailedDate] = useState(null);
    const [queryParameters] = useSearchParams();
    const [show, setShow] = useState(false);
    const target = useRef(null);
    let itemname = queryParameters.get('item')
    const parse = require('html-react-parser')
    function getData() {
        axios({
          method: "GET",
          url:"http://ec2-3-144-120-147.us-east-2.compute.amazonaws.com/detaileddata/" + itemname,
        })
        .then((response) => {
          const res =response.data
          setDetailedDate(({
            receipe_name: res.title,
            receipe_time: res.readyInMinutes,
            receipe_image: res.image,
            receipe_summary: parse(res.summary),
            receipe_instruction: res.instructions}))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="container">
        <header className="App-header">
  
          {/* new line start*/}
            {detailedData && <div>
                <div className="section"><img src={detailedData.receipe_image} alt="receipeimg" /></div>
                <div className='section'><Button ref={target} onClick={() => setShow(!show)}>
                Click to send recipe info to your email
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                    Sent!
                    </Tooltip>
                  )}
                </Overlay></div>
                <div className="section">Receipe name: <b>{detailedData.receipe_name}</b></div>
                <hr/>
                <div className="section">Prepare time: {detailedData.receipe_time} min</div>
                <hr/>
                <div className="section">Instructions: <br></br>{detailedData.receipe_instruction}</div>
                <hr/>
                <div className="section">Summary: <article>{detailedData.receipe_summary}</article></div>
                <hr/>
            </div>
            }
           {/* end of new line */}
        </header>
      </div>
    )
}
export default DetailedItem;