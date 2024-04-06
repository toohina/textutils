import React, {useState} from 'react'

export default function TextForm(props){

    const getWordCount=()=>{
        let count=0;
        const textarr=text.split(/\s+/)
        textarr.forEach(element => {
            if(element!=="")count++;
        });
        return count;
    }

    const getSelectedText=()=>{
        if(window.getSelection().toString().length){
            let exactText = window.getSelection().toString();
            return exactText;      
        }else{
            return "";
        }
    }
        
    const handleOnClickForUpperCase=()=>{
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

    const handleOnClickForLowerCase=()=>{
        if (getSelectedText()===""){
            setText(text.toLowerCase())
        }else{
            const substr=getSelectedText()
            const startpos=text.indexOf(substr)
            const endpos=startpos+substr.length-1
            const finalstr=text.substring(0,startpos)+text.substring(startpos,endpos+1).toLowerCase()+text.substring(endpos+1,text.length+1);
            setText(finalstr)
        }      
    }

    const handleOnClickForClearText=()=>{
        if (getSelectedText()===""){
            setText("")
        }else{
            const substr=getSelectedText()
            const startpos=text.indexOf(substr)
            const endpos=startpos+substr.length-1
            const finalstr=text.substring(0,startpos)+text.substring(endpos+1,text.length+1);
            setText(finalstr)
        }     
    }

    const handleOnClickForCopyText=()=>{
        if (getSelectedText()===""){
            // Copy the text inside the text field
            navigator.clipboard.writeText(text);

        }else{
            const selectedStr=getSelectedText()
            navigator.clipboard.writeText(selectedStr);
        }     
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("")

    const lightModeStyle={
        color:"black",
        backgroundColor:"white"
      }
    
      const darkModeStyle={
        color:"white",
        backgroundColor:"rgb(36, 36, 50)"
      }

    return (
        <>
        <div className="container mt-5">
            <h3>Enter Text Below</h3>
            <div className="mb-3">
                <textarea className="form-control" id="textarea-main" rows="6" onChange={handleOnChange} value={text} style={props.mode==="light"?lightModeStyle:darkModeStyle}></textarea>
            </div> 
            <button className="btn btn-primary m-2" onClick={handleOnClickForUpperCase}>Convert text to uppercase</button> 
            <button className="btn btn-primary m-2" onClick={handleOnClickForLowerCase}>Convert text to lowercase</button>    
            <button className="btn btn-primary m-2" onClick={handleOnClickForClearText}>Clear text</button>    
            <button className="btn btn-primary m-2" onClick={handleOnClickForCopyText}>Copy text</button>       
        </div>

        <div className='container mt-5'>
            <h3>Text Summary</h3>
            <p>Words:{getWordCount()} Characters:{text.length}</p>
            
        </div>
        <div className='container mt-5'>
            <h3>Preview</h3>
            <p>{text.length===0?`Nothing to preview`:text}</p>
        </div>
        </>
    );
}