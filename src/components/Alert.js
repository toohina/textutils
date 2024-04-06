import React from "react";

export default function Alert(props){

    const CapitalizeFirstLetter=(word)=>{
        const capital=word.charAt(0).toUpperCase()
        const convertedStr=capital+word.substr(1,word.length+1);
        return convertedStr
    }
    
    return (
        <> 
        {props.alert.msg && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
            <strong>{CapitalizeFirstLetter(props.alert.type)}</strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> }
        </>
    )
}