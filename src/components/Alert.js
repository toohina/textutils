import React from "react";

export default function Alert(props){
    
    return (
        <> 
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong>Mode Activated
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> 
        </>
    )
}