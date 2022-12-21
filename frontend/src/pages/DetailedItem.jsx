import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

function DetailedItem() {
    const [detailedData, setDetailedDate] = useState(null);
    const parse = require('html-react-parser')
    function getData() {
        axios({
          method: "GET",
          url:"/detaileddata",
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
                <hr/>
                <div className="section">Receipe name: <b>{detailedData.receipe_name}</b></div>
                <hr/>
                <div className="section">Prepare time: {detailedData.receipe_time} min</div>
                <hr/>
                <div className="section">Summary: <article>{detailedData.receipe_summary}</article></div>
                <hr/>
                <div className="section">Instructions: <br></br>{detailedData.receipe_instruction}</div>
            </div>
            }
           {/* end of new line */}
        </header>
      </div>
    )
}
export default DetailedItem;