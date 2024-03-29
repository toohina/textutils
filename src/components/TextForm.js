import React, {useState} from 'react'

export default function(){
        
    const handleOnClick=()=>{
        setText(text.toUpperCase())    
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("Enter your text here")

    return (
        <div className="container mt-5">
            <h3>Enter Text Below</h3>
            <div className="mb-3">
                <textarea className="form-control" id="textarea-main" rows="3" onChange={handleOnChange} value={text}></textarea>
            </div> 
            <button className="btn btn-primary" onClick={handleOnClick}>Convert text to uppercase</button>    
        </div>
      
    );
}