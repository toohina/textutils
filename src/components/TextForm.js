import React, {useState} from 'react'

export default function(){

    const getSelectedText=()=>{
        if(window.getSelection().toString().length){
            let exactText = window.getSelection().toString();
            return exactText;      
        }else{
            return "";
        }
    }
        
    const handleOnClick=()=>{
        if (getSelectedText()===""){
            setText(text.toUpperCase())
        }else{
            const substr=getSelectedText()
            const startpos=text.indexOf(substr)
            const endpos=startpos+substr.length-1
            const finalstr=text.substring(0,startpos)+text.substring(startpos,endpos+1).toUpperCase()+text.substring(endpos+1,text.length+1);
            setText(finalstr)
        }
        
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