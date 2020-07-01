import React from 'react'
import './Pattern.css'

const pattern = (props) => {
    return(
        <div>
        <div className="Container" >
      
            <div className="Pattern">
                <h2> {props.titleBook}</h2>
                <h3> {props.volume}</h3>
                <h3> {props.published}</h3>
                <p> {props.item}</p>
            </div>



            </div>
        </div>
    ) 
    }
export default pattern;