import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode]=useState("light")
  
  const handleModeToggle=()=>{
        if(mode==="light")setMode("dark")
        else setMode("light")
  }

  const lightModeStyle={
    color:"black",
    backgroundColor:"white"
  }

  const darkModeStyle={
    color:"white",
    backgroundColor:"rgb(36, 36, 50)"
  }

  return (
    <div className='main-div' style={mode==="light"?lightModeStyle:darkModeStyle}>
      <Navbar mode={mode} handleSwitchOnChange={handleModeToggle}/>
      <Alert/>
      <TextForm mode={mode}/>
    </div>
  );
}

export default App;
