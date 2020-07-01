import React from 'react'

const welcome = (props) => {
    return(
        <div >
            <h1>Welcome {props.name}</h1>
            <input type="text" onChange={props.loginName} value={props.name}/>

        </div>
    ) 
    }
export default welcome;