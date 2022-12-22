import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";

function RandomReceipe() {
    const [randomReceipe, setRandomReceipe] = useState(null);
    function getData() {
        axios({
          method: "GET",
          url:"/randomreceipe",
        })
        .then((response) => {
          const res =response.data
          setRandomReceipe(({
            receipe_name: res.name,
            ingredients: res.ingredients,
            description: res.description,
            instruction: res.steps}))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}

        useEffect(() => {
        getData()   
        },[]);

    return (
        <div className="container">
        <header className="App-header">
            {randomReceipe && <div>
                <div className="section">Today's random recipe is:</div>
                <hr/>
                <div className="section">Recipe name: <b>{randomReceipe.receipe_name}</b></div>
                <hr/>
                <div className="section">Ingredients: {randomReceipe.ingredients}</div>
                <hr/>
                <div className="section">Description: <article>{randomReceipe.description}</article></div>
                <hr/>
                <div className="section">Steps: <br></br>{randomReceipe.instruction}</div>
            </div>
            }
        </header>
      </div>
    )
}
export default RandomReceipe;